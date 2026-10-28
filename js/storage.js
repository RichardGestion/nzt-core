/* ════════════════════════════════════════════════════════════
   NZT-CORE :: storage.js
   Capa de persistencia: funciones PURAS sobre localStorage.
   Ninguna otra capa toca localStorage directamente.
   ════════════════════════════════════════════════════════════ */

const KEYS = Object.freeze({
  SESION:   'nztcore.session.v1',
  REGISTRO: 'nztcore.registry.v1',
  PROGRESO: 'nztcore.progress.v1'
});

/** Lectura defensiva: JSON corrupto nunca rompe el sistema. */
function leer(key, porDefecto = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? porDefecto : JSON.parse(raw);
  } catch {
    return porDefecto;
  }
}

function escribir(key, valor) {
  try {
    localStorage.setItem(key, JSON.stringify(valor));
    return true;
  } catch {
    return false;
  }
}

/* ── SESIÓN (Módulo A) ─────────────────────────────────────── */
export const guardarSesion = (sesion) => escribir(KEYS.SESION, sesion);
export const obtenerSesion = () => leer(KEYS.SESION, null);
export const borrarSesion  = () => localStorage.removeItem(KEYS.SESION);

/* ── REGISTRO: nacimiento del usuario en el protocolo ──────── */
export function obtenerRegistro() {
  const reg = leer(KEYS.REGISTRO, null);
  if (reg && typeof reg.creadoEn === 'number') return reg;
  // Primer arranque: se sella la fecha de inyección NZT
  const nuevo = { creadoEn: Date.now(), offsetSemanas: 0 };
  escribir(KEYS.REGISTRO, nuevo);
  return nuevo;
}
export const guardarRegistro = (reg) => escribir(KEYS.REGISTRO, reg);

/* ── PROGRESO: respuestas, puntuaciones y estado semanal ───── */
const PROGRESO_VACIO = () => ({ areas: {} });

export function obtenerProgreso() {
  const p = leer(KEYS.PROGRESO, null);
  return (p && typeof p === 'object' && p.areas) ? p : PROGRESO_VACIO();
}
export const guardarProgreso = (progreso) => escribir(KEYS.PROGRESO, progreso);

/** Limpieza total del sujeto de prueba (debug / reset). */
export function borrarTodosLosDatos() {
  Object.values(KEYS).forEach(k => localStorage.removeItem(k));
}

/* ── MOTOR DE SEMANAS ─────────────────────────────────────────
   Semana vigente = ⌊(días transcurridos desde el registro +
   offset simulado × 7) / 7⌋ + 1, acotada al rango [1, 10].
   Regla de aceleración: si el sujeto resolvió la semana N con
   ≥ 70 % de precisión, la semana N+1 se desbloquea al instante
   (emula la curva de aprendizaje bajo NZT).               ── */
export function calcularSemanaVigente(registro) {
  const DIAS_POR_SEMANA = 7;
  const dias = (Date.now() - registro.creadoEn) / 86_400_000;
  const diasEfectivos = dias + (registro.offsetSemanas || 0) * DIAS_POR_SEMANA;
  const semana = Math.floor(diasEfectivos / DIAS_POR_SEMANA) + 1;
  return Math.min(Math.max(semana, 1), 10);
}

export function semanaDesbloqueada(areaId, semana, registro, progreso) {
  const vigente = calcularSemanaVigente(registro);
  if (semana <= vigente) return true;
  if (semana === vigente + 1) {
    // Aceleración NZT: semana previa superada con ≥ 70 %
    const datos = progreso.areas[areaId];
    const puntajePrevio = datos?.puntuaciones?.[vigente];
    return typeof puntajePrevio === 'number' && puntajePrevio >= 70;
  }
  return false;
}