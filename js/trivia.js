/* ════════════════════════════════════════════════════════════
   NZT-CORE :: trivia.js — MÓDULO C
   Modo Enfoque: temporizador regresivo, medidor de dopamina,
   feedback analítico inmediato y persistencia de resultados.
   ════════════════════════════════════════════════════════════ */

import { $, escapar, cambiarVista, destelloSinapsis } from './ui.js';
import { AREA_POR_ID, CONFIG } from './config.js';
import { BANCO_NZT } from './questions.js';
import {
  obtenerRegistro, obtenerProgreso, guardarProgreso,
  calcularSemanaVigente, semanaDesbloqueada
} from './storage.js';

let estado = null;      // Estado vivo de la sesión de trivia
let timerId = null;     // Handle del intervalo
let atajoTeclado = null; // Oyente de teclado activo

/* ── Utilidades ────────────────────────────────────────────── */
const detenerTimer = () => { if (timerId) clearInterval(timerId); timerId = null; };

function limpiarAtajos() {
  if (atajoTeclado) document.removeEventListener('keydown', atajoTeclado);
  atajoTeclado = null;
}

function actualizarEnfoque() {
  const pct = Math.min(20 + estado.correctas * 16, 100);
  $('#focus-fill').style.width = pct + '%';
  $('#focus-text').textContent = pct + '%';
  const track = $('.focus-track');
  track.classList.remove('pulse');
  void track.offsetWidth;
  track.classList.add('pulse');
}

/* ── Render de una pregunta ────────────────────────────────── */
function renderPregunta() {
  const p = estado.preguntas[estado.indice];
  const root = $('#trivia-root');

  root.innerHTML = `
    <div class="trivia-shell">
      <div class="trivia-top">
        <div class="trivia-area">
          ${estado.area.icono} ${escapar(estado.area.nombre).toUpperCase()}
          <small>SEMANA ${estado.semana}/10 · ESCANEO COGNITIVO ACTIVO</small>
        </div>
        <div class="timer-wrap">
          <div class="timer-bar"><div id="timer-fill" class="timer-fill"></div></div>
          <span id="timer-text" class="mono">${CONFIG.SEGUNDOS_POR_PREGUNTA}s</span>
        </div>
      </div>

      <div class="focus-wrap">
        <span class="focus-label">DOPAMINA / ENFOQUE</span>
        <div class="focus-track"><div id="focus-fill" class="focus-fill"></div></div>
        <span id="focus-text" class="mono">20%</span>
      </div>

      <p class="q-counter mono">ESTÍMULO ${String(estado.indice + 1).padStart(2, '0')} / ${String(estado.preguntas.length).padStart(2, '0')}</p>

      <div class="q-panel panel">
        <p class="q-text">${escapar(p.enunciado)}</p>
        <div class="opt-list" id="opt-list">
          ${Object.entries(p.opciones).map(([k, v]) => `
            <button type="button" class="opt" data-key="${k}">
              <span class="opt-key">${k}</span>
              <span class="opt-text">${escapar(v)}</span>
            </button>`).join('')}
        </div>
        <div id="feedback-slot"></div>
      </div>
    </div>
  `;

  actualizarEnfoque();
  root.querySelectorAll('.opt').forEach(btn =>
    btn.addEventListener('click', () => responder(btn.dataset.key)));

  iniciarTimer();
}

/* ── Temporizador NZT ──────────────────────────────────────── */
function iniciarTimer() {
  detenerTimer();
  let restante = CONFIG.SEGUNDOS_POR_PREGUNTA;
  pintarTimer(restante);

  timerId = setInterval(() => {
    restante -= 1;
    pintarTimer(restante);
    if (restante <= 0) { detenerTimer(); responder(null); } // tiempo agotado
  }, 1000);
}

function pintarTimer(restante) {
  const fill = $('#timer-fill'), texto = $('#timer-text');
  if (!fill) return;
  const pct = (restante / CONFIG.SEGUNDOS_POR_PREGUNTA) * 100;
  fill.style.width = pct + '%';
  fill.classList.toggle('low', restante <= 10);
  texto.textContent = restante + 's';
  texto.style.color = restante <= 10 ? 'var(--gold)' : 'var(--cyan)';
}

/* ── Núcleo: procesar respuesta ────────────────────────────── */
function responder(letra) {
  if (!estado || estado.bloqueado) return;
  estado.bloqueado = true;
  detenerTimer();
  limpiarAtajos();

  const p = estado.preguntas[estado.indice];
  const esCorrecta = letra === p.correcta;
  if (esCorrecta) { estado.correctas++; destelloSinapsis(); }

  // Feedback visual sobre las opciones
  document.querySelectorAll('.opt').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.key === p.correcta) btn.classList.add('is-correct');
    else if (btn.dataset.key === letra) btn.classList.add('is-wrong');
  });
  actualizarEnfoque();

  // Panel analítico de corrección
  $('#feedback-slot').innerHTML = `
    <div class="feedback ${esCorrecta ? 'ok' : 'bad'}">
      <div class="feedback-head">
        ${esCorrecta
          ? '◈ SINAPSIS EXITOSA :: PATRÓN RECONOCIDO'
          : letra === null
            ? '⚠ TIEMPO AGOTADO :: PROCESAMIENTO INSUFICIENTE'
            : '✕ ERROR DE CÁLCULO :: CORRECCIÓN ANALÍTICA'}
      </div>
      <p>${escapar(p.explicacion_nzt)}</p>
      <button type="button" class="btn btn-ghost" id="next-btn">
        ${estado.indice + 1 < estado.preguntas.length ? 'SIGUIENTE ESTÍMULO [ENTER]' : 'CONSOLIDAR RESULTADOS [ENTER]'}
      </button>
    </div>
  `;

  // Guardado seguro e inmediato (por si el sujeto abandona)
  persistirRespuesta(p.id, letra, esCorrecta);

  $('#next-btn').addEventListener('click', avanzar);
  atajoTeclado = (e) => { if (e.key === 'Enter') avanzar(); };
  document.addEventListener('keydown', atajoTeclado);
}

function avanzar() {
  limpiarAtajos();
  estado.indice += 1;
  estado.bloqueado = false;
  if (estado.indice < estado.preguntas.length) renderPregunta();
  else renderResultados();
}

/* ── Persistencia de resultados ────────────────────────────── */
function persistirRespuesta(preguntaId, letra, esCorrecta) {
  const progreso = obtenerProgreso();
  const datos = progreso.areas[estado.areaId] ??= { respuestas: {}, puntuaciones: {} };

  datos.respuestas[preguntaId] = {
    elegida: letra,            // null = tiempo agotado
    correcta: esCorrecta,
    fecha: Date.now()
  };

  // Si se completó la ronda semanal, se sella el puntaje de la semana
  if (estado.indice + 1 >= estado.preguntas.length) {
    const puntaje = Math.round((estado.correctas / estado.preguntas.length) * 100);
    datos.puntuaciones[estado.semana] = puntaje;
  }
  guardarProgreso(progreso);
}

/* ── Pantalla de resultados ────────────────────────────────── */
function renderResultados() {
  const total = estado.preguntas.length;
  const puntaje = Math.round((estado.correctas / total) * 100);
  const rank =
    puntaje === 100 ? 'NZT-48 :: PLENO ACCESO' :
    puntaje >= 80  ? 'ACCESO ELEVADO' :
    puntaje >= 60  ? 'CORTEX EN CALIBRACIÓN' :
                     'DOSIS INSUFICIENTE';

  $('#trivia-root').innerHTML = `
    <div class="result-panel panel">
      <p class="result-rank">EVALUACIÓN NEURONAL COMPLETADA · ${rank}</p>
      <div class="result-score">${puntaje}%</div>
      <p class="result-msg">
        ${escapar(estado.area.nombre)} — Semana ${estado.semana}/10
      </p>
      <div class="result-grid mono">
        <div class="stat"><b>${estado.correctas}</b><span>SINAPSIS OK</span></div>
        <div class="stat"><b>${total - estado.correctas}</b><span>FALLOS</span></div>
        <div class="stat"><b>${puntaje}%</b><span>PRECISIÓN SEMANAL</span></div>
      </div>
      <div class="result-actions">
        <button type="button" class="btn btn-ghost" id="btn-retry">⟳ REPETIR ESCANEO</button>
        <button type="button" class="btn" id="btn-exit">VOLVER AL PANEL</button>
      </div>
    </div>
  `;

  $('#btn-retry').onclick = () => iniciarTrivia(estado.areaId, estado.onSalir);
  $('#btn-exit').onclick = () => estado.onSalir();
}

/* ── Punto de entrada del Módulo C ─────────────────────────── */
export function iniciarTrivia(areaId, onSalir) {
  const registro = obtenerRegistro();
  const progreso = obtenerProgreso();
  const semana = calcularSemanaVigente(registro);
  const area = AREA_POR_ID[areaId];

  // Regla 1: la semana debe estar desbloqueada
  if (!semanaDesbloqueada(areaId, semana, registro, progreso)) {
    cambiarVista('view-dashboard');
    return;
  }

  // Regla 2: el banco debe tener datos cargados para esa semana
  const preguntas = BANCO_NZT[areaId]?.[semana];
  if (!Array.isArray(preguntas) || preguntas.length === 0) {
    onSalir(); // regresa al dashboard; el toast explica el motivo
    setTimeout(() => window.dispatchEvent(new CustomEvent('nzt:toast', {
      detail: {
        msg: `⚠ ${area.nombre} · SEMANA ${semana}: BANCO DE PREGUNTAS EN COMPILACIÓN. SOLICITA EL BLOQUE JSON.`,
        tipo: 'gold'
      }
    })), 400);
    return;
  }

  estado = {
    areaId, area, semana,
    preguntas, indice: 0, correctas: 0,
    bloqueado: false, onSalir
  };

  cambiarVista('view-trivia');
  setTimeout(renderPregunta, 220); // espera la animación de entrada
}

export function salirTrivia() {
  detenerTimer();
  limpiarAtajos();
  estado = null;
}