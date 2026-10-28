/* ════════════════════════════════════════════════════════════
   NZT-CORE :: app.js
   Bootstrap del sistema: enruta Login → Dashboard → Trivia
   y centraliza los eventos globales.
   ════════════════════════════════════════════════════════════ */

import { cambiarVista, toast } from './ui.js';
import { obtenerSesion, borrarSesion } from './storage.js';
import { initLogin } from './auth.js';
import { renderDashboard } from './dashboard.js';
import { iniciarTrivia, salirTrivia } from './trivia.js';

/** Redibuja el dashboard con los datos más recientes. */
function mostrarDashboard() {
  renderDashboard({
    sesion: obtenerSesion(),
    alIniciarTrivia: (areaId) => iniciarTrivia(areaId, salirDeTrivia)
  });
  cambiarVista('view-dashboard');
}

function salirDeTrivia() {
  salirTrivia();
  mostrarDashboard();
}

function iniciarSistema() {
  const sesion = obtenerSesion();

  // Módulo A: si ya hay sesión vigente, se entra directo al panel
  if (sesion) {
    mostrarDashboard();
    toast(`◉ SESIÓN RESTAURADA :: ${sesion.codename}`, 'ok');
  } else {
    cambiarVista('view-login');
  }
}

// ── Cableado global ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLogin(() => mostrarDashboard());

  document.getElementById('logout-btn').addEventListener('click', () => {
    borrarSesion();
    location.reload(); // vuelta limpia a la pantalla de inyección
  });

  // Canal de toasts emitidos por otros módulos (p. ej. trivia.js)
  window.addEventListener('nzt:toast', (e) => {
    toast(e.detail.msg, e.detail.tipo ?? 'ok');
  });

  iniciarSistema();
});