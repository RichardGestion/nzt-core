/* ════════════════════════════════════════════════════════════
   NZT-CORE :: questions.js — BANCO CENTRAL DE PREGUNTAS
   ─────────────────────────────────────────────────────────────
   ESTRUCTURA POR ÁREA (clave = id de config.js):
     [áreaId]: {
       [semana]: [ { id, enunciado, opciones, correcta, explicacion_nzt }, ×10 ]
     }

   ▶ PUNTO DE INYECCIÓN: cuando el usuario solicite un bloque
     semanal (ej: "Física Semana 2"), se reemplaza la entrada
     fisica[2] con el array de 10 preguntas del JSON generado.
   ════════════════════════════════════════════════════════════ */

export const BANCO_NZT = {

  /* ────────────── FÍSICA ────────────── */
  fisica: {
    /* SEMANA 1/10 — Mecánica clásica (Sears & Zemansky, Caps. 5–7) */
    1: [
      {
        id: 'fis-s1-01',
        enunciado:
          'Un bloque desciende por un plano inclinado de ángulo θ con velocidad CONSTANTE (sin aceleración). ' +
          'Si el coeficiente de fricción cinética es μk, ¿qué relación se cumple necesariamente?',
        opciones: {
          A: 'μk = tan θ',
          B: 'μk = sen θ / cos²θ',
          C: 'μk = 1 / tan θ',
          D: 'μk = sen θ · cos θ'
        },
        correcta: 'A',
        explicacion_nzt:
          'Sears & Zemansky (Cap. 5, dinámica de partículas): velocidad constante ⇒ aceleración nula ⇒ fuerza neta neta cero. ' +
          'Descomponiendo el peso: mg·senθ tira hacia abajo del plano y la fricción cinética μk·N = μk·mg·cosθ se opone. ' +
          'Igualando: mg·senθ = μk·mg·cosθ ⇒ μk = tan θ. Es el método estándar de equilibrio dinámico del texto.'
      },
      {
        id: 'fis-s1-02',
        enunciado:
          'Un cuerpo de 2 kg se desliza sobre una superficie horizontal sin fricción a 6 m/s y choca contra un resorte ' +
          'ideal de constante k = 200 N/m. ¿Cuál es la compresión máxima del resorte?',
        opciones: {
          A: '0.30 m',
          B: '0.60 m',
          C: '1.20 m',
          D: '0.36 m'
        },
        correcta: 'B',
        explicacion_nzt:
          'Sears & Zemansky (Cap. 6, trabajo y energía): toda la energía cinética se convierte en energía potencial elástica. ' +
          '½mv² = ½kx² ⇒ x = v·√(m/k) = 6·√(2/200) = 6·0.1 = 0.60 m. El teorema trabajo-energía evita resolver la dinámica transitoria.'
      }
    ]
    // ⚠️ SEMANAS 2–10 PENDIENTES DE INYECCIÓN (bloque JSON)
  },

  /* ────────────── LÓGICA Y RAZONAMIENTO ────────────── */
  logica: {
    /* SEMANA 1/10 — Lógica proposicional y silogística (Copi) */
    1: [
      {
        id: 'log-s1-01',
        enunciado:
          'Sea la fórmula proposicional (p ∧ q) → p. Evaluando todas las valuaciones posibles de p y q, ' +
          'la fórmula se clasifica como:',
        opciones: {
          A: 'Tautología',
          B: 'Contradicción',
          C: 'Contingencia',
          D: 'Indecidible sin tabla de verdad completa'
        },
        correcta: 'A',
        explicacion_nzt:
          'Copi (Introducción a la Lógica, cap. de tablas de verdad): el antecedente p∧q solo es verdadero cuando p y q son ' +
          'verdaderas, y en ese caso el consecuente p también lo es; en las demás filas el antecedente es falso y el condicional ' +
          'es verdadero por definición. Toda valuación da V ⇒ tautología (instancia de la ley de simplificación).'
      },
      {
        id: 'log-s1-02',
        enunciado:
          'Silogismo: «Todos los novelistas son escritores. Algunos novelistas son poetas. Por lo tanto, algunos poetas ' +
          'son escritores». Según la teoría silogística de Copi, la falacia formal presente es:',
        opciones: {
          A: 'Falacia del medio no distribuido',
          B: 'Falacia de la conclusión negativa a partir de premisas afirmativas',
          C: 'Falacia de los cuatro términos',
          D: 'Falacia del término mayor ilícito'
        },
        correcta: 'D',
        explicacion_nzt:
          'Copi (reglas del silogismo categórico): el término mayor «escritores» NO está distribuido en la premisa mayor ' +
          '(predicado de una afirmativa universal), pero SÍ queda distribuido en la conclusión «algunos poetas son escritores» ' +
          '(al convertirse mentalmente a «algunos escritores son poetas» viola... en rigor, el término distribuido en conclusión ' +
          'sin estarlo en premisa configura un ilícito del término mayor). El medio «novelistas» sí está distribuido en la mayor.'
      }
    ]
    // ⚠️ SEMANAS 2–10 PENDIENTES DE INYECCIÓN (bloque JSON)
  }

  /* ══════════════════════════════════════════════════════════
     ÁREAS PENDIENTES DE CARGA (se activan al inyectar datos):
     quimica, biologia, medicina, astronomia, derecho_ve,
     politica_ve, filosofia, psicologia, python_basico,
     python_medio, python_avanzado, algebra, calc_dif, calc_int,
     funciones, trigonometria, geometria
     ══════════════════════════════════════════════════════════ */
};