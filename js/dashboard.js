/* ════════════════════════════════════════════════════════════
   NZT-CORE :: dashboard.js — MÓDULO B
   Medidor circular de capacidad cerebral + grilla de 19 lóbulos
   con progreso semanal, precisión y acceso al Modo Enfoque.
   ════════════════════════════════════════════════════════════ */

import { $, escapar, animarContador } from './ui.js';
import { AREAS, CONFIG } from './config.js';
import {
  obtenerRegistro, guardarRegistro, obtenerProgreso,
  borrarTodosLosDatos, calcularSemanaVigente, semanaDesbloqueada
} from './storage.js';

const CIRCUNFERENCIA = 2 * Math.PI * 88; // r=88 del anillo SVG

/* ── Agregaciones puras ────────────────────────────────────── */

/** Estadísticas por área: respuestas, correctas y precisión %. */
export function statsArea(areaId, progreso) {
  const datos = progreso.areas[areaId];
  const respuestas = datos?.respuestas ? Object.values(datos.respuestas) : [];
  const respondidas = respuestas.length;
  const correctas = respuestas.filter(r => r.correcta).length;
  const precision = respondidas ? Math.round((correctas / respondidas) * 100) : null;
  const semanasCompletas = Object.keys(datos?.puntuaciones ?? {}).length;
  return { respondidas, correctas, precision, semanasCompletas };
}

/** Capacidad cerebral = precisión global sobre todo lo respondido. */
function capacidadCerebral(progreso) {
  let total = 0, correctas = 0;
  AREAS.forEach(a => {
    const s = statsArea(a.id, progreso);
    total += s.respondidas;
    correctas += s.correctas;
  });
  return total ? Math.round((correctas / total) * 100) : 0;
}

/* ── Render del gauge ──────────────────────────────────────── */
function renderGauge(progreso) {
  const pct = capacidadCerebral(progreso);
  const anillo = $('.gauge-ring');
  anillo.style.strokeDasharray = CIRCUNFERENCIA;
  anillo.style.strokeDashoffset = CIRCUNFERENCIA * (1 - pct / 100);
  animarContador($('#gauge-value'), pct);

  let totalResp = 0, totalOk = 0;
  AREAS.forEach(a => {
    const s = statsArea(a.id, progreso);
    totalResp += s.respondidas; totalOk += s.correctas;
  });

  $('#gauge-stats').innerHTML = `
    <div>▸ PRECISIÓN GLOBAL ......... <b>${totalResp ? Math.round(totalOk / totalResp * 100) : 0}%</b></div>
    <div>▸ SINAPSIS DISPARADAS ...... <b>${totalOk}</b></div>
    <div>▸ ESTÍMULOS PROCESADOS ..... <b>${totalResp}</b></div>
    <div>▸ REDES ESTIMULADAS ........ <b>${AREAS.filter(a => statsArea(a.id, progreso).respondidas > 0).length}/19</b></div>
  `;
}

/* ── Render de tarjetas de lóbulo ──────────────────────────── */
function renderLobulos(registro, progreso, alIniciarTrivia) {
  const semanaVigente = calcularSemanaVigente(registro);
  const grid = $('#lobule-grid');
  grid.innerHTML = '';

  AREAS.forEach(area => {
    const stats = statsArea(area.id, progreso);
    const semanaActual = Math.min(semanaVigente, CONFIG.TOTAL_SEMANAS);
    const datosSemana = progreso.areas[area.id]?.puntuaciones?.[semanaActual];
    const completada = typeof datosSemana === 'number';
    const desbloqueada = semanaDesbloqueada(area.id, semanaActual, registro, progreso);
    const progresoPct = (stats.semanasCompletas / CONFIG.TOTAL_SEMANAS) * 100;

    const card = document.createElement('article');
    card.className = 'lobule';
    card.style.setProperty('--lobe-color', area.color);
    card.innerHTML = `
      <div class="lobule-head">
        <span class="lobe-icon">${area.icono}</span>
        <h3 class="lobe-name">${escapar(area.nombre)}</h3>
        <span class="lobe-code">${escapar(area.id.toUpperCase().replace(/_/g, '·'))}</span>
      </div>
      <p class="lobe-ref">📚 ${escapar(area.ref)}</p>
      <div class="lobe-stats mono">
        <div class="stat"><b>S${semanaActual}/10</b><span>SEMANA</span></div>
        <div class="stat"><b>${stats.precision === null ? '—' : stats.precision + '%'}</b><span>PRECISIÓN</span></div>
        <div class="stat"><b>${stats.respondidas}</b><span>RESPUESTAS</span></div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${progresoPct}%"></div></div>
      <button type="button" class="btn lobule-action ${!desbloqueada ? 'wait' : completada ? 'done' : ''}"
              data-area="${area.id}" ${!desbloqueada ? 'disabled' : ''}>
        ${!desbloqueada
          ? '🔒 BLOQUEADO :: ESPERANDO CICLO'
          : completada
            ? '✔ ESCANEO COMPLETO :: RE-EJECUTAR'
            : '▶ INICIAR ESCANEO COGNITIVO'}
      </button>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll('.lobule-action:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => alIniciarTrivia(btn.dataset.area));
  });
}

/* ── HUD superior ──────────────────────────────────────────── */
function renderHUD(registro, sesion) {
  $('#hud-user').textContent = '◉ ' + (sesion?.codename ?? 'DESCONOCIDO');
  const reloj = () => {
    $('#hud-clock').textContent =
      'T+' + new Date().toLocaleTimeString('es-VE', { hour12: false });
  };
  reloj();
  setInterval(reloj, 1000);
  $('#hud-week').textContent =
    'CICLO SEMANA ' + calcularSemanaVigente(registro) + '/10';
}

/* ── Laboratorio de simulación temporal ────────────────────── */
function renderSimPanel(registro, onRefresh) {
  $('#sim-offset').textContent = registro.offsetSemanas || 0;

  $('#sim-plus').onclick = () => {
    const reg = obtenerRegistro();
    if ((reg.offsetSemanas || 0) >= 9) return; // tope: semana 10
    reg.offsetSemanas = (reg.offsetSemanas || 0) + 1;
    guardarRegistro(reg);
    onRefresh();
  };

  $('#sim-reset').onclick = () => {
    if (!confirm('⚠ BORRAR TODO EL PROGRESO NEURONAL. ¿CONFIRMAR REINICIO TOTAL?')) return;
    borrarTodosLosDatos();
    location.reload();
  };
}

/* ── Punto de entrada del Módulo B ─────────────────────────── */
export function renderDashboard({ sesion, alIniciarTrivia }) {
  const registro = obtenerRegistro();
  const progreso = obtenerProgreso();

  renderHUD(registro, sesion);
  renderGauge(progreso);
  renderLobulos(registro, progreso, alIniciarTrivia);
  renderSimPanel(registro, () => {
    const nuevoReg = obtenerRegistro();
    renderGauge(obtenerProgreso());
    renderLobulos(nuevoReg, obtenerProgreso(), alIniciarTrivia);
    $('#sim-offset').textContent = nuevoReg.offsetSemanas || 0;
    $('#hud-week').textContent = 'CICLO SEMANA ' + calcularSemanaVigente(nuevoReg) + '/10';
  });
}