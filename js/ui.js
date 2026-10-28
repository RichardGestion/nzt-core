/* ════════════════════════════════════════════════════════════
   NZT-CORE :: ui.js
   Renderizado, transiciones con motion-blur, destellos de
   sinapsis, toasts y utilidades compartidas.
   ════════════════════════════════════════════════════════════ */

export const $ = (sel, raiz = document) => raiz.querySelector(sel);

/** Escape de HTML para inyectar enunciados con seguridad. */
export function escapar(txt) {
  return String(txt)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * Transición entre vistas con desenfoque de movimiento.
 * La vista saliente se difumina antes de revelar la entrante.
 */
export function cambiarVista(idNueva) {
  const actual = $('.view.is-active');
  const nueva = $(`#${idNueva}`);
  if (!nueva || actual === nueva) return;

  if (actual) {
    actual.classList.add('view-out');
    setTimeout(() => {
      actual.classList.remove('is-active', 'view-out');
      nueva.classList.add('is-active');
      window.scrollTo({ top: 0 });
    }, 170);
  } else {
    nueva.classList.add('is-active');
  }
}

/** Destello dorado de "Sinapsis Exitosa". */
export function destelloSinapsis() {
  const fx = $('#synapse-flash');
  fx.classList.remove('fire');
  void fx.offsetWidth; // Reinicia la animación
  fx.classList.add('fire');
}

/** Notificación flotante. tipo: 'ok' | 'gold' | 'err' */
export function toast(msg, tipo = 'ok', duracion = 3200) {
  const region = $('#toast-region');
  const el = document.createElement('div');
  el.className = `toast ${tipo === 'ok' ? '' : tipo}`;
  el.textContent = msg;
  region.appendChild(el);
  setTimeout(() => el.remove(), duracion);
}

/** Anima un contador numérico (usado por el gauge cerebral). */
export function animarContador(elemento, hasta, sufijo = '%', duracion = 1100) {
  const desde = parseFloat(elemento.dataset.valor || '0');
  const inicio = performance.now();
  function paso(t) {
    const p = Math.min((t - inicio) / duracion, 1);
    const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
    const valor = Math.round(desde + (hasta - desde) * eased);
    elemento.textContent = valor + sufijo;
    if (p < 1) requestAnimationFrame(paso);
    else elemento.dataset.valor = hasta;
  }
  requestAnimationFrame(paso);
}