/* ════════════════════════════════════════════════════════════
   NZT-CORE :: config.js
   Constantes globales del sistema: áreas (lóbulos), ciclos
   semanales y temporización del Modo Enfoque.
   ════════════════════════════════════════════════════════════ */

/** Reglas del protocolo: 100 preguntas por área = 10 semanas × 10 preguntas */
export const CONFIG = Object.freeze({
  TOTAL_SEMANAS: 10,        // 100 preguntas ÷ 10 por semana
  PREGUNTAS_POR_SEMANA: 10, // Entrega estricta semanal
  SEGUNDOS_POR_PREGUNTA: 45 // Velocidad de procesamiento NZT
});

/** Paleta canónica asignada a cada red neuronal (usada por las tarjetas) */
export const AREAS = Object.freeze([
  { id: 'fisica',       icono: '⚛', nombre: 'Física',                        ref: 'Sears & Zemansky · Física Universitaria',        color: '#00f2fe' },
  { id: 'quimica',      icono: '⚗', nombre: 'Química',                       ref: 'Chang / Brown–LeMay–Bursten',                    color: '#7df9ff' },
  { id: 'biologia',     icono: '🧬', nombre: 'Biología',                      ref: 'Campbell–Reece · Biología',                      color: '#3ddc97' },
  { id: 'medicina',     icono: '✚', nombre: 'Medicina',                      ref: 'Guyton & Hall · Fisiología Médica',              color: '#ff6b81' },
  { id: 'astronomia',   icono: '✦', nombre: 'Astrología y Astronomía',       ref: 'Carroll & Ostlie · Intro a la Astrofísica',      color: '#b28dff' },
  { id: 'derecho_ve',   icono: '⚖', nombre: 'Derecho y Leyes de Venezuela',  ref: 'CRBV · Anzola · Muci-Abraham',                   color: '#f5af19' },
  { id: 'politica_ve',  icono: '◈', nombre: 'Política de Venezuela',         ref: 'Manuel Caballero · Crisis de la Venezuela Cont.', color: '#f2d16b' },
  { id: 'filosofia',    icono: '🦉', nombre: 'Filosofía',                     ref: 'Bertrand Russell · Hist. Filosofía Occidental',  color: '#e0e6ed' },
  { id: 'psicologia',   icono: 'ψ', nombre: 'Psicología',                    ref: 'Sternberg · Kandel',                             color: '#c77dff' },
  { id: 'python_basico',icono: '»', nombre: 'Python Básico',                 ref: 'Matthes · Python Crash Course',                  color: '#4cc9f0' },
  { id: 'python_medio', icono: '»»', nombre: 'Python Medio',                  ref: 'Matthes · POO / Archivos',                       color: '#48bfe3' },
  { id: 'python_avanzado',icono: '»»»',nombre:'Python Avanzado',             ref: 'Ramalho · Fluent Python',                        color: '#5390d9' },
  { id: 'algebra',      icono: '𝕄', nombre: 'Álgebra Lineal y Abstracta',    ref: 'Strang (MIT) · Álgebra Lineal',                  color: '#64dfdf' },
  { id: 'calc_dif',     icono: '∂', nombre: 'Cálculo Diferencial',           ref: 'Stewart · Trascendentes Tempranas',              color: '#80ffdb' },
  { id: 'calc_int',     icono: '∫', nombre: 'Cálculo Integral',              ref: 'Stewart · Teoremas Fundamentales',               color: '#72efdd' },
  { id: 'funciones',    icono: 'ƒ', nombre: 'Funciones y Dependencia',       ref: 'Stewart · Modelado / Inyectividad',              color: '#98f5e1' },
  { id: 'trigonometria',icono: '∿', nombre: 'Trigonometría',                 ref: 'Identidades · Fourier Elemental',                color: '#ffd166' },
  { id: 'geometria',    icono: '⬢', nombre: 'Geometría Espacial',            ref: 'Stewart · Volúmenes en ℝ³',                      color: '#f4a261' },
  { id: 'logica',       icono: '⊨', nombre: 'Lógica y Razonamiento',         ref: 'Copi · Introducción a la Lógica',                color: '#e9c46a' }
]);

/** Mapa rápido id → área */
export const AREA_POR_ID = Object.freeze(
  Object.fromEntries(AREAS.map(a => [a.id, a]))
);