/* ════════════════════════════════════════════════════════════
   NZT-CORE :: auth.js — MÓDULO A
   Pantalla de "Inyección de Código de Acceso NZT".
   Valida el formato, formatea mientras se escribe y persiste
   la sesión en localStorage.
   ════════════════════════════════════════════════════════════ */

import { $ } from './ui.js';
import { guardarSesion } from './storage.js';

const LINEAS_BOOT = [
  'INICIALIZANDO NZT-CORE v4.8.0 ...',
  'CALIBRANDO RECEPTORES DOPAMINÉRGICOS .......... OK',
  'MAPEANDO 19 LÓBULOS DE CONOCIMIENTO ........... OK',
  'COMPILANDO BANCO DE 1 900 PREGUNTAS (19×100) .. OK',
  'PROTOCOLO NZT-48 :: ACTIVO',
  'BIENVENIDO AL LÍMITE, SUJETO {NOMBRE}.'
];

/** Convierte "nzt482026core01" → "NZT4-8202-6COR-E01" */
function formatearCodigo(valor) {
  const limpio = valor.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 16);
  return limpio.match(/.{1,4}/g)?.join('-') ?? '';
}

const esCodigoValido = (codigo) => /^[A-Z0-9]{4}(-[A-Z0-9]{4}){3}$/.test(codigo);

/** Feedback de rechazo: mensaje rojo + sacudida + retorno de foco. */
function rechazar(msg) {
  const form  = $('#login-form');
  const error = $('#login-error');
  const input = $('#access-code');
  error.textContent = msg;
  form.classList.remove('shake');
  void form.offsetWidth; // reinicia la animación de sacudida
  form.classList.add('shake');
  input.focus();
}

function reproducirBoot(nombre) {
  const consola = $('#login-console');
  consola.innerHTML = '';
  LINEAS_BOOT.forEach((linea, i) => {
    setTimeout(() => {
      consola.innerHTML +=
        `<span class="${i >= 4 ? 'c-gold' : ''}">${linea.replace('{NOMBRE}', nombre)}</span>\n`;
      consola.scrollTop = consola.scrollHeight;
    }, 260 * (i + 1));
  });
}

export function initLogin(alExito) {
  const input = $('#access-code');
  const form  = $('#login-form');
  const error = $('#login-error');

  // Auto-formato en vivo
  input.addEventListener('input', () => {
    const pos = input.selectionStart;
    input.value = formatearCodigo(input.value);
    if (pos !== null) input.setSelectionRange(pos, pos);
    error.textContent = '';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const codigo = input.value.trim();

    if (codigo.length === 0) {
      rechazar('⚠ CAMPO VACÍO :: SUMINISTRA TU CÓDIGO DE ACCESO NZT');
      return;
    }
    if (!esCodigoValido(codigo)) {
      rechazar('⚠ CÓDIGO INVÁLIDO :: FORMATO REQUERIDO XXXX-XXXX-XXXX-XXXX');
      return;
    }

    const nombre = 'SUJETO-' + codigo.replace(/-/g, '').slice(0, 6);
    $('#login-btn').disabled = true;
    reproducirBoot(nombre);

    guardarSesion({ codename: nombre, codigo, loginAt: Date.now() });

    // El delay deja respirar la secuencia de arranque antes de entrar
    setTimeout(() => {
      $('#login-btn').disabled = false;
      alExito(nombre);
    }, LINEAS_BOOT.length * 260 + 500);
  });
}