/* ════════════════════════════════════════════════════════════
   NZT-CORE :: questions.js — BANCO CENTRAL DE PREGUNTAS
   ─────────────────────────────────────────────────────────────
   ESTRUCTURA POR ÁREA (clave = id de config.js):
     [áreaId]: {
       [semana]: [ { id, enunciado, opciones, correcta, explicacion_nzt }, ×10 ]
     }

   ▶ PUNTO DE INYECCIÓN: cuando se solicite un bloque semanal
     (ej: "Física Semana 2"), se añade la entrada fisica[2] con
     el array de 10 preguntas del JSON generado.
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
          'Sears & Zemansky (Cap. 5, dinámica de partículas): velocidad constante ⇒ aceleración nula ⇒ fuerza neta cero. ' +
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
    // ⚠ SEMANAS 2–10 PENDIENTES DE INYECCIÓN (bloque JSON)
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
          '(predicado de una afirmativa universal), pero queda distribuido al convertir la conclusión, configurando un ' +
          'ilícito del término mayor. El medio «novelistas» sí está distribuido en la premisa mayor, descartando las otras falacias.'
      }
    ]
    // ⚠ SEMANAS 2–10 PENDIENTES DE INYECCIÓN (bloque JSON)
  },

  /* ══════════════════════════════════════════════════════════
     ÁREAS PENDIENTES DE CARGA (se activan al inyectar datos):
     quimica, biologia, medicina, astronomia, derecho_ve,
     politica_ve, filosofia, psicologia, python_basico,
     python_medio, python_avanzado, algebra, calc_dif, calc_int,
     funciones, trigonometria, geometria
     ══════════════════════════════════════════════════════════ */

  /* ────────────── SEGURIDAD OPERACIONAL AERONÁUTICA ────────────── */
  seguridad_aero: {
    /* SEMANA 1/10 — Fundamentos SMS, SHELL, mercancías peligrosas, Dirty Dozen, PRE y segregación */
    1: [
      {
        id: 'seg-s1-01',
        enunciado:
          'Durante la auditoría trimestral del SMS, el Director de Operaciones de una aerolínea ordena al Safety Manager "suavizar" los reportes de incidentes menores reportados por la tripulación, ' +
          'con la intención de que el indicador SPI de tasa de reportes voluntarios no se eleve ante la Autoridad Aeronáutica Nacional. ' +
          'El Safety Manager cuestiona la instrucción. Según el Doc 9859 (4ª ed., Cap. 3) del SMS, el principio fundamental que se viola es:',
        opciones: {
          A: 'Garantía de Seguridad (Safety Assurance) y sus SPIs cuantitativos.',
          B: 'Política de Seguridad No Punitiva y Cultura Justa (Just Culture).',
          C: 'Gestión del Cambio Organizacional según el Anexo 19.',
          D: 'Promoción de la Seguridad Operacional (Safety Promotion).'
        },
        correcta: 'B',
        explicacion_nzt:
          'Doc 9859 Cap. 3: la Política de Seguridad Operacional debe garantizar una Cultura Justa donde el personal pueda reportar incidentes, ' +
          'errores y condiciones inseguras sin temor a represalias disciplinarias por errores involuntarios. Presionar al Safety Manager para "suavizar" ' +
          'reportes es una violación estructural del SMS: suprime el flujo de información preventiva que alimenta la gestión proactiva de riesgos. ' +
          'La Cultura Justa distingue claramente entre conducta inaceptable (imprudencia deliberada) y errores humanos honestos. La opción A (Safety Assurance) ' +
          'es un componente diferente; la C y D son otros pilares del SMS que no abordan la protección del reportante.'
      },
      {
        id: 'seg-s1-02',
        enunciado:
          'Un técnico AMT comete un error al aplicar torque a pernos críticos durante una inspección C. El análisis posterior revela que la tarjeta de trabajo (Job Card) ' +
          'estaba impresa con tipografía de 8 puntos y el manual electrónico AMM tenía un bug que mostraba el valor incorrecto de torque. ' +
          'La iluminación del hangar y la capacitación del técnico eran correctas. Según el modelo SHELL del Doc 9683-AN/950, la interfaz fallida primaria es:',
        opciones: {
          A: 'Liveware - Hardware (L-H).',
          B: 'Liveware - Software (L-S).',
          C: 'Liveware - Liveware (L-L).',
          D: 'Liveware - Environment (L-E).'
        },
        correcta: 'B',
        explicacion_nzt:
          'Doc 9683-AN/950 Cap. 3: en el modelo SHELL, "Software" NO se refiere únicamente a programas informáticos, sino a TODO el soporte lógico ' +
          'que guía la operación: procedimientos, manuales (AMM, IPC), tarjetas de trabajo (Job Cards), listas de verificación, simbología, bases de datos ' +
          'y documentación regulatoria. La tipografía ilegible y el bug del manual electrónico son fallas del componente Software. Como el error ocurrió ' +
          'en la interfaz entre el técnico (Liveware central) y los procedimientos (Software), la clasificación correcta es L-S. Descartamos L-H ' +
          '(no falló la herramienta física), L-L (no hubo falla en comunicación con otro humano) y L-E (el hangar era adecuado).'
      },
      {
        id: 'seg-s1-03',
        enunciado:
          'Un expedidor declara un bulto que contiene 6 baterías de litio iónico de 120 Wh cada una, embaladas CON el equipo (UN 3481, Instrucción de Empaque PI 967), ' +
          'para transporte en avión de pasajeros. El bulto lleva la etiqueta "Baterías de litio en cumplimiento con la Sección II de PI 967". ' +
          'Según la enmienda vigente del Doc 9284-AN/905:',
        opciones: {
          A: 'Se debe reclasificar como Clase 9 plena (Sección I de PI 967), porque Sección II limita a 5 baterías o 2 equipos por bulto y además el watt-hora supera el tope de 100 Wh por celda.',
          B: 'La declaración es correcta: 6 baterías de 120 Wh entran cómodamente en los límites de Sección II.',
          C: 'Debe transportarse solo en avión de carga, pero manteniendo la declaración de Sección II.',
          D: 'Se permite en avión de pasajeros con marca "Cargo Aircraft Only" adicional sobre la etiqueta original.'
        },
        correcta: 'A',
        explicacion_nzt:
          'Doc 9284-AN/905, Instrucción PI 967 Sección II establece DOS condiciones simultáneas para baterías con equipo: (1) máximo 5 baterías de litio ' +
          'o 2 equipos por bulto, y (2) cada batería ≤100 Wh para transporte en avión de pasajeros. El bulto viola ambos criterios: tiene 6 baterías ' +
          '(excede el límite de cantidad) y cada una es de 120 Wh (excede el tope de energía para Sección II en pasajeros). Por tanto, debe reclasificarse ' +
          'como mercancía peligrosa Clase 9 plena bajo Sección I de PI 967, con todos sus requisitos: declaración de expedidor (DGD), etiqueta Clase 9, ' +
          'embalaje certificado UN y notificación al piloto (NOTOC). Esta reclasificación previene incendios en bodega que han causado pérdidas catastróficas ' +
          '(UPS Airlines Vuelo 6, Asiana Airlines Vuelo 991).'
      },
      {
        id: 'seg-s1-04',
        enunciado:
          'Tras un turno nocturno ininterrumpido de 12 horas en el hangar, un mecánico omite instalar un seguro de alambre (safety wire) en una tuerca crítica del ' +
          'tren de aterrizaje principal. Al día siguiente, durante la inspección pre-vuelo, se detecta la tuerca aflojada antes del despegue. ' +
          'Según la taxonomía de los "12 factores sucios" (Dirty Dozen) del Doc 9824-AN/450, la combinación PRIMARIA de factores humanos en este incidente es:',
        opciones: {
          A: 'Fatiga + Complacencia + Presión.',
          B: 'Complacencia + Presión + Falta de Conocimiento.',
          C: 'Falta de Trabajo en Equipo + Fatiga + Normas Confusas.',
          D: 'Normas Confusas + Falta de Recursos + Falta de Asertividad.'
        },
        correcta: 'A',
        explicacion_nzt:
          'Doc 9824-AN/450 Cap. 4: la tríada Fatiga + Complacencia + Presión es la combinación estadísticamente más frecuente en incidentes de mantenimiento ' +
          'por turnos nocturnos prolongados. (1) Fatiga: turno de 12h degrada la vigilancia sostenida y la memoria procedural. (2) Complacencia: el técnico, ' +
          'por experiencia, subestima la tarea rutinaria de asegurar alambres. (3) Presión: el contexto operacional de cumplir tiempos de devolución de ' +
          'aeronave (TAT) induce atajos. "Falta de Conocimiento" no aplica porque el técnico sabía cómo hacer la tarea. "Falta de Trabajo en Equipo" no es ' +
          'primaria porque el error fue individual durante la ejecución. "Normas Confusas" tampoco, ya que el procedimiento era claro. Esta tríada es el ' +
          'caballo de batalla de los programas FRMS (Fatigue Risk Management System) modernos.'
      },
      {
        id: 'seg-s1-05',
        enunciado:
          'Una aeronave sufre una salida de pista (runway excursion) con múltiples víctimas fatales y heridos en un aeropuerto internacional. ' +
          'El Director de Crisis de la aerolínea activa el Centro de Operaciones de Emergencia (COE) según el Plan de Respuesta ante Emergencias (PRE). ' +
          'Según las directrices del Doc 9859 Cap. 11 y el Anexo 19, la PRIMERA prioridad estratégica en la fase INMEDIATA del PRE es:',
        opciones: {
          A: 'Salvaguardar la evidencia del accidente para la investigación técnica de la Junta.',
          B: 'Salvaguardar vidas y proteger al personal de primera respuesta.',
          C: 'Coordinar con los medios de comunicación la versión oficial del siniestro.',
          D: 'Notificar al Estado de Matrícula y al Estado del Operador vía NOTAM urgente.'
        },
        correcta: 'B',
        explicacion_nzt:
          'Doc 9859 Cap. 11 y los lineamientos del PRE establecen cuatro objetivos estratégicos jerarquizados: (1) Salvar vidas, (2) Coordinación efectiva ' +
          'con SSEI (Servicio de Salvamento y Extinción de Incendios), (3) Control de información y medios, (4) Transición a la normalidad. En la fase ' +
          'INMEDIATA del PRE, la protección de víctimas sobrevivientes y del personal de primera respuesta (SSEI, médicos, paramédicos) es el objetivo ' +
          'estratégico prioritario y excluyente. La evidencia (opción A) es una prioridad secundaria que no debe interferir con las labores de rescate. ' +
          'La comunicación con medios (opción C) es prioritaria pero subordinada a la protección de vidas. La notificación a Estados (opción D) es ' +
          'obligatoria bajo el Anexo 13, pero no compite con la protección inmediata de vidas humanas.'
      },
      {
        id: 'seg-s1-06',
        enunciado:
          'El Safety Manager de una aerolínea clasifica un riesgo operacional en la matriz 5×5 del Doc 9859 con severidad "Catastrófica (5)" y probabilidad "Remota (2)", ' +
          'obteniendo un índice de riesgo 10. Según el principio ALARP (As Low As Reasonably Practicable) consagrado en el Anexo 19 y el Doc 9859, el nivel de ' +
          'tolerabilidad y la acción requerida son:',
        opciones: {
          A: 'Intolerable — requiere mitigación inmediata independientemente del análisis costo-beneficio.',
          B: 'Tolerable bajo condiciones específicas, manteniendo controles activos.',
          C: 'Aceptable sin requerir mitigación adicional.',
          D: 'Revisable trimestralmente según el ciclo de garantía de seguridad (Safety Assurance).'
        },
        correcta: 'A',
        explicacion_nzt:
          'Doc 9859 Cap. 5: la matriz de riesgo OACI define tres bandas de tolerabilidad. La severidad "Catastrófica" (pérdida de la aeronave, ' +
          'múltiples fatalidades) combinada con cualquier probabilidad ≥ Remota (2) ubica el riesgo en la zona INTOLERABLE, donde NO aplica el principio ' +
          'ALARP: el riesgo debe mitigarse obligatoriamente antes de permitir la operación, sin importar el análisis costo-beneficio. ALARP solo es ' +
          'invocable en la zona TOLERABLE, donde la mitigación se balancea con la razonabilidad práctica. Un índice 10 con severidad 5 significa ' +
          'que, aunque el evento sea remoto, la consecuencia catastrófica hace inaceptable operar sin controles adicionales (diseño redundante, ' +
          'formación específica, limitaciones operativas). Esta rigurosidad es lo que distingue a la aviación de otras industrias de riesgo.'
      },
      {
        id: 'seg-s1-07',
        enunciado:
          'Un vuelo opera con sobrepeso de 800 kg porque: (1) el software de carga calculó erróneamente el peso, (2) el agente de rampa no verificó ' +
          'físicamente el manifiesto, (3) el despachador firmó el Loadsheet sin revisar los valores, y (4) el comandante aceptó el documento sin cuestionar. ' +
          'Una auditoría interna posterior identifica el fallo sin que hubiera consecuencias operativas. Según el modelo de James Reason del Doc 9683, esta secuencia se clasifica como:',
        opciones: {
          A: 'Violación activa individual del piloto al mando.',
          B: 'Error de interfaz Liveware-Liveware entre despachador y comandante.',
          C: 'Riesgo tolerable que no requiere intervención del SMS al no haber consecuencias.',
          D: 'Falla latente organizacional con múltiples agujeros alineados en capas defensivas (modelo Swiss Cheese).'
        },
        correcta: 'D',
        explicacion_nzt:
          'Doc 9683 Cap. 2: el modelo Swiss Cheese de James Reason describe el accidente (o cuasi-accidente) como la alineación casual de "agujeros" ' +
          'en múltiples capas defensivas del sistema. En este caso hay cuatro capas fallidas: software (capa tecnológica), agente de rampa (capa operacional), ' +
          'despachador (capa de supervisión) y comandante (capa de decisión final). El hecho de que NO hubo consecuencias es suerte estadística, no mitigación ' +
          'efectiva. Reason distingue entre fallas activas (errores de operadores de primera línea) y fallas latentes (decisiones organizacionales y de diseño ' +
          'que permanecen dormidas hasta que se alinean). Este caso es típicamente latente: revela fallas en procedimientos, capacitación, cultura de ' +
          'cuestionamiento y diseño del software. El SMS exige tratar estos eventos con la misma seriedad que un accidente consumado.'
      },
      {
        id: 'seg-s1-08',
        enunciado:
          'Un mecánico experimentado libera al servicio una aeronave tras reemplazar un componente LRU (Line Replaceable Unit), pero omite asentar ' +
          'su firma en el Logbook técnico porque "lo hace después cuando haya tiempo". La práctica es conocida por el supervisor de línea y ' +
          'no se corrige. Al día siguiente, la aeronave opera sin que se detecte la omisión documental. Según la taxonomía de violaciones del Doc 9824, este caso se clasifica como:',
        opciones: {
          A: 'Violación excepcional por falta de tiempo en turno.',
          B: 'Violación rutinaria (Routine Violation) tolerada por la cultura organizacional.',
          C: 'Error de desempeño (slip) bajo presión.',
          D: 'Error basado en reglas (rule-based mistake).'
        },
        correcta: 'B',
        explicacion_nzt:
          'Doc 9824-AN/450 Cap. 5: las violaciones se clasifican en rutinarias (habituales, culturalmente aceptadas) y excepcionales (una sola vez ' +
          'bajo circunstancias muy especiales). Cuando el supervisor CONOCE la práctica y no la corrige, la organización NORMALIZA la desviación, ' +
          'convirtiéndola en violación rutinaria. Esto genera una falla latente sistémica mucho más peligrosa que un error individual: el sistema ' +
          'tolera tácitamente el atajo documental. Distinguimos de "slip" (error de ejecución no intencional): aquí la omisión es deliberada. ' +
          'Distinguimos de "rule-based mistake" (aplicar una regla incorrecta): aquí se sabe cuál es la regla pero se ignora. La cultura organizacional ' +
          'que tolera violaciones rutinarias es el caldo de cultivo de accidentes catastróficos, como demostró el accidente de Air Midwest Vuelo 5281.'
      },
      {
        id: 'seg-s1-09',
        enunciado:
          'Tras un accidente aéreo con víctimas extranjeras en el territorio de un Estado contratante, familiares de distintas nacionalidades ' +
          'solicitan información urgente sobre el paradero de sus seres queridos. Según el Anexo 9 (Facilitación) y la estructura del PRE alineado al SMS, ' +
          'la coordinación de asistencia familiar debe ser:',
        opciones: {
          A: 'Asignada exclusivamente al operador aéreo afectado, sin intervención estatal.',
          B: 'Centralizada por la aerolínea a través de su call center corporativo global.',
          C: 'Coordinada por el FRC (Family Assistance Coordinator) del Estado del Suceso, en colaboración con el Estado del Operador, el Estado de Matrícula y el Estado de Diseño, según el Anexo 9 Cap. 8.',
          D: 'Derivada completamente a las embajadas de los países de origen, sin rol del Estado del Suceso.'
        },
        correcta: 'C',
        explicacion_nzt:
          'Anexo 9 Cap. 8 (Facilitación — Asistencia a víctimas de accidentes aeronáuticos y sus familias): establece que el Estado del Suceso debe ' +
          'designar un FRC (Family Assistance Coordinator) que coordine la asistencia con el Estado del Operador, el Estado de Matrícula, el Estado ' +
          'de Diseño y el Estado de Fabricación, según corresponda. El PRE de la aerolínea complementa pero NO sustituye la responsabilidad primaria ' +
          'estatal. La coordinación multiestatal es esencial porque: (1) las víctimas pueden ser de múltiples nacionalidades, (2) la investigación ' +
          'técnica involucra varios Estados bajo el Anexo 13, y (3) la asistencia incluye aspectos legales, consulares, psicológicos y logísticos ' +
          'que exceden la capacidad unilateral de cualquier operador. Este marco surgió tras las lecciones aprendidas del accidente del Vuelo 111 ' +
          'de Swissair (1998) y se consolidó tras el Vuelo 370 de Malaysia Airlines (2014).'
      },
      {
        id: 'seg-s1-10',
        enunciado:
          'Un operador de carga aérea recibe para el mismo vuelo dos bultos: uno Clase 5.1 (oxidante, UN 1479, perclorato de potasio) y otro Clase 3 ' +
          '(líquido inflamable, UN 1263, pintura). Ambos están correctamente embalados en embalajes UN, marcados y etiquetados. ' +
          'Según la tabla de segregación del Doc 9284-AN/905, la acción obligatoria es:',
        opciones: {
          A: 'Segregación obligatoria: no pueden cargarse en el mismo ULD ni en ULDs adyacentes, manteniendo distancia mínima en bodega.',
          B: 'Se pueden cargar en el mismo ULD sin segregación al ser bultos individuales correctamente embalados.',
          C: 'Solo se requiere segregación si el avión es de pasajeros; en carguero no hay restricción.',
          D: 'Requieren al menos 1 metro de separación horizontal dentro del mismo ULD.'
        },
        correcta: 'A',
        explicacion_nzt:
          'Doc 9284-AN/905 Tabla de Segregación 7-2-1: la incompatibilidad entre Clase 5.1 (oxidante) y Clase 3 (inflamable) requiere segregación de ' +
          'máximo nivel. La mezcla de oxidantes con inflamables puede producir ignición espontánea, reacciones violentas o explosiones que han causado ' +
          'accidentes catastróficos en aviación (Vuelo 111 de ValuJet, 1996: fuego en bodega por generadores de oxígeno mal segregados). El correcto ' +
          'embalaje UN NO exime de la segregación: el embalaje previene fugas, pero no reacciones químicas entre sustancias incompatibles en caso de ' +
          'fuga simultánea. La segregación obligatoria implica: (1) no compartir ULD, (2) no ubicar en ULDs adyacentes, y (3) mantener distancia ' +
          'mínima especificada en bodega (típicamente 3 metros para esta combinación). La opción D (1 metro) es insuficiente según la tabla oficial.'
      },
      {
        id: 'seg-s1-10',
        enunciado:
          'Un operador de carga aérea recibe para el mismo vuelo dos bultos: uno Clase 5.1 (oxidante, UN 1479, perclorato de potasio) y otro Clase 3 ' +
          '(líquido inflamable, UN 1263, pintura). Ambos están correctamente embalados en embalajes UN, marcados y etiquetados. ' +
          'Según la tabla de segregación del Doc 9284-AN/905, la acción obligatoria es:',
        opciones: {
          A: 'Segregación obligatoria: no pueden cargarse en el mismo ULD ni en ULDs adyacentes, manteniendo distancia mínima en bodega.',
          B: 'Se pueden cargar en el mismo ULD sin segregación al ser bultos individuales correctamente embalados.',
          C: 'Solo se requiere segregación si el avión es de pasajeros; en carguero no hay restricción.',
          D: 'Requieren al menos 1 metro de separación horizontal dentro del mismo ULD.'
        },
        respuesta_correcta: 'A',
        explicacion_nzt:
          'Doc 9284-AN/905 Tabla de Segregación 7-2-1: la incompatibilidad entre Clase 5.1 (oxidante) y Clase 3 (inflamable) requiere segregación de ' +
          'máximo nivel. La mezcla de oxidantes con inflamables puede producir ignición espontánea, reacciones violentas o explosiones que han causado ' +
          'accidentes catastróficos en aviación (Vuelo 111 de ValuJet, 1996: fuego en bodega por generadores de oxígeno mal segregados). El correcto ' +
          'embalaje UN NO exime de la segregación: el embalaje previene fugas, pero no reacciones químicas entre sustancias incompatibles en caso de ' +
          'fuga simultánea. La segregación obligatoria implica: (1) no compartir ULD, (2) no ubicar en ULDs adyacentes, y (3) mantener distancia ' +
          'mínima especificada en bodega (típicamente 3 metros para esta combinación). La opción D (1 metro) es insuficiente según la tabla oficial.'
      }
    ],

    /* SEMANA 2/10 — SPIs/SPTs, CRM, NOTOC, MEL/CDL, liberación, PRE fase gestión */
    2: [
      {
        id: 'seg-s2-01',
        enunciado:
          'El Safety Manager de una aerolínea regional está diseñando el panel de indicadores de seguridad (SPIs) para el próximo trimestre. ' +
          'Debe seleccionar indicadores que permitan DETECTAR riesgos ANTES de que ocurran incidentes (indicadores proactivos/leading indicators). ' +
          'Según el Doc 9859 Cap. 8, cuál de los siguientes conjuntos representa MEJOR indicadores proactivos:',
        opciones: {
          A: 'Tasa de incidentes reportados, número de accidentes, severidad de eventos, costos de seguros.',
          B: 'Porcentaje de completitud de auditorías internas, tasa de reportes voluntarios de seguridad, cumplimiento de entrenamiento recurrente, resultados de inspecciones de rampa.',
          C: 'Número de quejas de pasajeros, retrasos operacionales, cancelaciones de vuelos, desviaciones meteorológicas.',
          D: 'Horas de vuelo acumuladas, utilization rate de la flota, factor de carga, ingresos por pasajero-kilómetro.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9859 Cap. 8 (Safety Performance Indicators): distingue entre indicadores reactivos (lagging) que miden resultados pasados (accidentes, incidentes) ' +
          'e indicadores proactivos (leading) que miden la salud del sistema preventivo. La opción B contiene exclusivamente indicadores proactivos: ' +
          '(1) completitud de auditorías = capacidad de detección, (2) reportes voluntarios = cultura de seguridad activa, (3) entrenamiento = competencia ' +
          'preventiva, (4) inspecciones de rampa = vigilancia operacional. La opción A es reactiva (mide fallas ya ocurridas). Las opciones C y D son ' +
          'indicadores operacionales/financieros que NO miden seguridad operacional. Un SMS maduro prioriza leading indicators para intervenir antes ' +
          'de que las fallas latentes se conviertan en accidentes.'
      },
      {
        id: 'seg-s2-02',
        enunciado:
          'Tras analizar los SPIs del último año, el Safety Manager identifica que la tasa de reportes voluntarios de seguridad (ASR) ha disminuido ' +
          'un 40% en los últimos 6 meses. El Director de Operaciones propone establecer un Safety Performance Target (SPT) de "incrementar los reportes ' +
          'en un 200% para el próximo trimestre". Según el Doc 9859 y el principio ALARP, esta meta es:',
        opciones: {
          A: 'Apropiada porque refleja ambición y compromiso con la mejora continua.',
          B: 'Inapropiada porque un incremento del 200% en 3 meses no es razonablemente practicable y puede generar reportes ficticios o de baja calidad.',
          C: 'Apropiada siempre que se acompañe de incentivos económicos por reporte.',
          D: 'Inapropiada porque los SPTs solo deben establecerse para indicadores reactivos (accidentes/incidentes).'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9859 Cap. 8 (Safety Performance Targets): los SPTs deben ser SMART (Specific, Measurable, Achievable, Relevant, Time-bound) y respetar ' +
          'el principio ALARP (As Low As Reasonably Practicable). Un incremento del 200% en 3 meses viola el criterio "Achievable": es estadísticamente ' +
          'improbable y puede generar consecuencias no deseadas: (1) reportes ficticios para cumplir la cuota, (2) reportes de baja calidad sin valor ' +
          'analítico, (3) desincentivación del personal al ver la meta como irreal. La caída del 40% sugiere un problema de cultura o confianza que ' +
          'requiere diagnóstico antes de establecer metas. Un SPT realista sería: "Identificar causa raíz de la caída en 30 días y establecer plan de ' +
          'acción correctivo con meta incremental del 20% en el siguiente trimestre". Los incentivos económicos (opción C) pueden corromper la cultura ' +
          'justa al convertir reportes en transacciones comerciales.'
      },
      {
        id: 'seg-s2-03',
        enunciado:
          'Una aerolínea adquiere una nueva flota de aeronaves turbohélice para reemplazar sus jets regionales. Este cambio organizacional implica: ' +
          'nuevos procedimientos operacionales, diferente perfil de mantenimiento, reentrenamiento de tripulaciones y técnicos, y ajustes en la ' +
          'infraestructura de tierra. Según el Doc 9859 Cap. 6 (Management of Change), la acción OBLIGATORIA antes de implementar el cambio es:',
        opciones: {
          A: 'Notificar a la Autoridad Aeronáutica Nacional y esperar aprobación formal.',
          B: 'Realizar una evaluación formal de riesgos del cambio y documentar las mitigaciones requeridas antes de la implementación.',
          C: 'Capacitar a todo el personal afectado y luego implementar gradualmente.',
          D: 'Realizar un análisis costo-beneficio financiero y obtener aprobación del consejo directivo.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9859 Cap. 6 (Management of Change): cualquier cambio organizacional que afecte la seguridad operacional (nueva flota, fusión, reestructuración, ' +
          'nuevas rutas) requiere una evaluación formal de riesgos ANTES de la implementación. Esta evaluación debe: (1) identificar nuevos peligros, ' +
          '(2) evaluar riesgos asociados, (3) definir controles y mitigaciones, (4) validar que el riesgo residual sea ALARP. La notificación a la ' +
          'autoridad (opción A) puede ser requerida regulatoriamente pero NO sustituye la evaluación interna de riesgos. La capacitación (opción C) es ' +
          'una mitigación, no un sustituto de la evaluación. El análisis financiero (opción D) es necesario para viabilidad comercial pero no aborda ' +
          'riesgos de seguridad. Casos como el accidente del Vuelo 5191 de Comair (2006) demostraron que cambios organizacionales sin evaluación de ' +
          'riesgos (cambio de terminal sin actualización de procedimientos) causan accidentes catastróficos.'
      },
      {
        id: 'seg-s2-04',
        enunciado:
          'Durante la aproximación final en condiciones de baja visibilidad, el comandante decide continuar el aterrizaje a pesar de que la velocidad ' +
          'está 20 nudos por encima de Vref y la senda de planeo está alta. El primer oficial (FO) reconoce la situación insegura pero duda en ' +
          'cuestionar al comandante. Según los principios de CRM (Crew Resource Management) del Doc 9683, la acción CORRECTA del FO es:',
        opciones: {
          A: 'Mantener silencio y confiar en la experiencia del comandante, asumiendo que tiene información no compartida.',
          B: 'Usar comunicación asertiva estructurada (modelo PACE: Probe, Alert, Challenge, Emergency Warning) para expresar preocupación y, si es necesario, tomar control de la aeronave.',
          C: 'Sugerir tímidamente que "tal vez deberíamos considerar una ida al aire" sin insistir si el comandante no responde.',
          D: 'Documentar la preocupación en el logbook de vuelo después del aterrizaje para análisis posterior.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9683 Cap. 6 (Crew Resource Management): el CRM establece que la comunicación asertiva es una responsabilidad de seguridad, no una opción. ' +
          'El modelo PACE (Probe, Alert, Challenge, Emergency Warning) proporciona una estructura escalonada: (1) Probe: "Capitán, estamos 20 nudos ' +
          'rápidos y altos en la senda", (2) Alert: "Esta aproximación no es estable, recomiendo ida al aire", (3) Challenge: "Capitán, debo insistir ' +
          'en ida al aire por seguridad", (4) Emergency Warning: si el comandante no responde, el FO DEBE tomar control de la aeronave. La opción A ' +
          '(silencio) es deferencia jerárquica que ha causado accidentes (Tenerife 1977, Korean Air 801). La opción C (sugerencia tímida) es insuficiente. ' +
          'La opción D (documentar después) es inútil si ya ocurrió el accidente. El CRM moderno elimina la jerarquía en cabina cuando la seguridad está ' +
          'en juego: el FO tiene autoridad y obligación de intervenir.'
      },
      {
        id: 'seg-s2-05',
        enunciado:
          'Un cuasi-accidente (near miss) ocurre cuando una aeronave casi colisiona con un vehículo de servicio en la pista durante operaciones de ' +
          'baja visibilidad. La investigación revela: (1) el controlador de torre no verificó visualmente la pista antes de autorizar el despegue, ' +
          '(2) el conductor del vehículo ingresó a la pista sin autorización por confusión en las frecuencias de radio, (3) el sistema de detección ' +
          'de incursiones en pista (RIM) estaba desactivado por mantenimiento, y (4) la aerolínea no había actualizado los procedimientos de ' +
          'operaciones en baja visibilidad tras un cambio regulatorio reciente. Según el modelo Swiss Cheese de Reason ampliado en el Doc 9683, ' +
          'la clasificación MÁS precisa de este evento es:',
        opciones: {
          A: 'Falla activa múltiple: error del controlador + error del conductor.',
          B: 'Falla latente organizacional con cuatro capas defensivas comprometidas: supervisión (controlador), procedimientos (conductor), tecnología (RIM), gestión del cambio (aerolínea).',
          C: 'Error humano inevitable debido a condiciones de baja visibilidad que exceden las capacidades humanas.',
          D: 'Violación de procedimientos por parte del conductor del vehículo, siendo los demás factores contribuyentes menores.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9683 Cap. 2 (Modelo de Reason ampliado): el modelo Swiss Cheese describe accidentes como alineación de agujeros en múltiples capas ' +
          'defensivas. En este caso hay CUATRO capas fallidas: (1) Capa de supervisión: controlador no verifica visualmente (falla de vigilancia activa), ' +
          '(2) Capa de procedimientos: conductor ingresa sin autorización por confusión de frecuencias (procedimiento de comunicación deficiente), ' +
          '(3) Capa tecnológica: sistema RIM desactivado (falla de barrera automatizada), (4) Capa de gestión del cambio: aerolínea no actualiza ' +
          'procedimientos tras cambio regulatorio (falla latente organizacional). Clasificar solo como "falla activa" (opción A) o "violación" (opción D) ' +
          'es reduccionista: oculta las fallas sistémicas que permitieron que errores individuales se convirtieran en cuasi-accidente. La opción C ' +
          '(error inevitable) es falsa: las cuatro capas defensivas deberían haber prevenido el evento independientemente de la visibilidad. El SMS ' +
          'exige tratar cuasi-accidentes con la misma seriedad que accidentes consumados.'
      },
      {
        id: 'seg-s2-06',
        enunciado:
          'Un avión de carga transporta 15 bultos de mercancías peligrosas Clase 8 (corrosivos, UN 1823, hidróxido de sodio sólido). El expedidor ' +
          'proporciona la Declaración de Mercancías Peligrosas (DGD) correctamente cumplimentada. El agente de carga prepara el NOTOC (Notification ' +
          'to Pilot in Command) pero omite incluir la ubicación exacta de los bultos en la bodega principal (posiciónULD). Según el Doc 9284 y ' +
          'el Anexo 18, esta omisión es:',
        opciones: {
          A: 'Un error menor que no afecta la seguridad porque el comandante ya tiene la DGD con la descripción de las mercancías.',
          B: 'Una violación crítica porque el NOTOC debe incluir la ubicación exacta para que la tripulación pueda responder adecuadamente en caso de emergencia (fuga, incendio).',
          C: 'Aceptable si el vuelo es de corta duración (menos de 2 horas) y las condiciones meteorológicas son favorables.',
          D: 'Solo requerido si las mercancías son de Clase 1 (explosivos) o Clase 7 (radiactivas); para Clase 8 es opcional.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9284-AN/905 Cap. 7 y Anexo 18: el NOTOC (Notification to Pilot in Command) es un documento CRÍTICO que debe incluir: (1) descripción ' +
          'de las mercancías peligrosas, (2) cantidad, (3) ubicación EXACTA en la aeronave (posición de bodega, número de ULD), (4) información de ' +
          'respuesta a emergencias. La ubicación exacta es esencial porque en caso de fuga, incendio o reacción química, la tripulación debe saber ' +
          'dónde está el peligro para: (a) activar sistemas de extinción específicos, (b) aislar la zona afectada, (c) ejecutar procedimientos de ' +
          'aterrizaje de emergencia considerando la ubicación del riesgo. Omitir la ubicación (opción A) es una violación crítica, no un error menor. ' +
          'La duración del vuelo (opción C) no exime del NOTOC: una fuga puede ocurrir en cualquier momento. La clase de mercancía (opción D) tampoco: ' +
          'TODAS las mercancías peligrosas requieren NOTOC completo. Accidentes como el Vuelo 111 de ValuJet (1996) demostraron que la falta de ' +
          'información precisa sobre ubicación de mercancías peligrosas impide respuesta efectiva de emergencia.'
      },
      {
        id: 'seg-s2-07',
        enunciado:
          'Un expedidor presenta una Declaración de Mercancías Peligrosas (DGD) para UN 1263 (pintura, Clase 3) con los siguientes datos: ' +
          '"UN 1263, Paint, 3, PG II, 200 L, Cargo Aircraft Only". El agente de carga revisa la DGD y detecta que falta el nombre técnico correcto ' +
          '(debería ser "UN 1263, Paint, 3, PG II, 200 L, Cargo Aircraft Only" con el nombre técnico entre paréntesis si aplica) y no incluye el ' +
          'número de teléfono de emergencia del expedidor. Según el Doc 9284, la acción CORRECTA es:',
        opciones: {
          A: 'Aceptar la DGD porque la información esencial (UN number, clase, cantidad) está presente y los errores son menores.',
          B: 'Rechazar la DGD y solicitar corrección porque el teléfono de emergencia es obligatorio para respuesta a incidentes; el nombre técnico puede omitirse si no aplica.',
          C: 'Aceptar la DGD pero añadir manualmente el teléfono de emergencia del agente de carga como sustituto.',
          D: 'Rechazar la DGD porque cualquier error, por menor que sea, invalida completamente el documento.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9284-AN/905 Cap. 5 (Requisitos de la DGD): establece qué información es OBLIGATORIA y qué errores son aceptables. El teléfono de emergencia ' +
          'del expedidor (24/7) es OBLIGATORIO porque en caso de incidente durante el transporte, los respondedores de emergencia necesitan contacto ' +
          'inmediato con alguien que conozca las propiedades de la mercancía y pueda asesorar sobre mitigación. Sin este teléfono, la respuesta a ' +
          'emergencias se retrasa o es inadecuada. El nombre técnico (entre paréntesis) solo es obligatorio para ciertas mercancías con nombres ' +
          'genéricos (ej: "UN 1993, Flammable liquid, n.o.s., (contains Xylene and Toluene)"). Para "UN 1263, Paint" el nombre técnico NO es requerido ' +
          'porque "Paint" es suficientemente específico. La opción A es incorrecta: omitir el teléfono es un error mayor, no menor. La opción C es ' +
          'incorrecta: el agente de carga NO puede sustituir el teléfono del expedidor (el agente no conoce las propiedades químicas específicas). ' +
          'La opción D es excesiva: errores menores (formato, orden) no invalidan la DGD si la información esencial está presente.'
      },
      {
        id: 'seg-s2-08',
        enunciado:
          'Una aeronave tiene una MEL (Minimum Equipment List) activa que permite operar con un generador eléctrico inoperativo bajo ciertas ' +
          'condiciones: (1) vuelo diurno VMC, (2) no operar en espacio aéreo RVSM, (3) duración máxima de vuelo 3 horas, (4) no transportar ' +
          'mercancías peligrosas que requieran sistemas de detección de humo en bodega. El despachador de vuelo programa un vuelo nocturno IFR ' +
          'de 4 horas con carga peligrosa Clase 9 (baterías de litio). Según el Doc 9824 y las regulaciones de despacho, esta operación es:',
        opciones: {
          A: 'Aceptable porque la MEL permite la operación con generador inoperativo y el despachador tiene autoridad para aprobar excepciones.',
          B: 'Inaceptable porque viola TRES condiciones de la MEL simultáneamente (nocturno, duración >3h, mercancías peligrosas); el vuelo debe cancelarse o repararse el generador.',
          C: 'Aceptable si el comandante acepta el riesgo y firma una exención de responsabilidad.',
          D: 'Aceptable si se notifica a la autoridad aeronáutica y se obtiene aprobación especial por escrito.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9824-AN/450 y regulaciones de despacho (FAR 91.213, EU-OPS): la MEL (Minimum Equipment List) es un documento REGULATORIO VINCULANTE, ' +
          'no una sugerencia. Las condiciones de la MEL son CUMULATIVAS: deben cumplirse TODAS simultáneamente. En este caso se violan TRES condiciones: ' +
          '(1) vuelo nocturno (MEL exige diurno VMC), (2) duración 4 horas (MEL limita a 3h), (3) mercancías peligrosas Clase 9 (MEL prohíbe si ' +
          'requieren detección de humo). El despachador NO tiene autoridad para aprobar excepciones (opción A): solo puede aplicar la MEL tal como ' +
          'está escrita. El comandante NO puede aceptar el riesgo (opción C): la MEL es regulatoria, no contractual. La autoridad aeronáutica NO ' +
          'aprueba excepciones operativas (opción D): la MEL ya fue aprobada por la autoridad y no puede modificarse caso por caso. Operar violando ' +
          'la MEL es una infracción regulatoria grave que invalida el seguro de la aeronave y expone a responsabilidad penal en caso de accidente. ' +
          'La única opción legal es: reparar el generador ANTES del vuelo o cancelar el vuelo.'
      },
      {
        id: 'seg-s2-09',
        enunciado:
          'Un mecánico de línea (AMT) está realizando una inspección de tránsito (transit check) en una aeronave que debe partir en 45 minutos. ' +
          'Detecta una fuga menor de fluido hidráulico en una tubería del sistema de frenos, pero la fuga está dentro de los límites permitidos ' +
          'por el AMM (Aircraft Maintenance Manual) y no requiere acción inmediata. Sin embargo, el mecánico decide NO documentar la observación ' +
          'en el logbook técnico porque "no es importante y retrasaría el vuelo". Según el Doc 9824 y los principios de cultura de seguridad, ' +
          'esta acción se clasifica como:',
        opciones: {
          A: 'Decisión técnica apropiada porque la fuga está dentro de límites y documentarla generaría retrasos innecesarios.',
          B: 'Violación de procedimiento porque TODAS las observaciones técnicas deben documentarse en el logbook, independientemente de su criticidad, para mantener trazabilidad histórica y permitir análisis de tendencias.',
          C: 'Error de juicio menor que puede corregirse en la próxima inspección programada.',
          D: 'Decisión aceptable si el mecánico informa verbalmente al siguiente turno y obtiene su acuerdo.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9824-AN/450 Cap. 5 (Documentación de mantenimiento): establece que TODAS las observaciones técnicas, independientemente de su criticidad, ' +
          'deben documentarse en el logbook técnico. Las razones son: (1) Trazabilidad histórica: permite identificar tendencias (una "fuga menor" ' +
          'repetitiva puede indicar degradación progresiva), (2) Análisis de confiabilidad: los datos del logbook alimentan programas de mantenimiento ' +
          'predictivo, (3) Responsabilidad legal: el logbook es un documento legal que demuestra que el mantenimiento se realizó conforme a norma, ' +
          '(4) Continuidad operacional: el siguiente técnico necesita el historial completo para tomar decisiones informadas. La opción A es incorrecta: ' +
          '"dentro de límites" no significa "no documentar". La opción C subestima la gravedad: omitir documentación es una violación, no un error menor. ' +
          'La opción D es incorrecta: la comunicación verbal NO sustituye la documentación formal. Esta práctica de "no documentar lo menor" es una ' +
          'violación rutinaria que erosiona la cultura de seguridad y ha contribuido a accidentes (Alaska Airlines Vuelo 261, 2000: falta de documentación ' +
          'de desgaste progresivo del estabilizador horizontal).'
      },
      {
        id: 'seg-s2-10',
        enunciado:
          'Tras un accidente aéreo con múltiples víctimas, el Centro de Operaciones de Emergencia (COE) de la aerolínea ha estado operativo durante ' +
          '72 horas coordinando: rescate de sobrevivientes, identificación de víctimas, asistencia a familiares, comunicación con medios, investigación ' +
          'técnica y coordinación con autoridades. El Director de Crisis considera desactivar el COE porque "la fase inmediata ya pasó y las operaciones ' +
          'normales deben reanudarse". Según el PRE (Plan de Respuesta ante Emergencias) y el Doc 9859, la decisión CORRECTA es:',
        opciones: {
          A: 'Desactivar el COE inmediatamente porque la fase inmediata (salvar vidas) ya terminó y mantenerlo operativo es costoso e innecesario.',
          B: 'Transicionar a la Fase de Gestión sostenida con un COE reducido pero activo, manteniendo coordinación de asistencia familiar, investigación y comunicación hasta que se complete la recuperación.',
          C: 'Desactivar el COE y transferir todas las responsabilidades al departamento de relaciones públicas para manejar la comunicación con medios.',
          D: 'Mantener el COE en modo completo indefinidamente hasta que la autoridad aeronáutica publique el informe final del accidente.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9859 Cap. 11 y estructura del PRE: establecen TRES fases secuenciales de respuesta a emergencias: (1) Fase Inmediata (0-24h): salvar ' +
          'vidas, activar COE completo, coordinar SSEI, (2) Fase de Gestión (24h-semanas): COE reducido pero activo para asistencia familiar continua, ' +
          'coordinación con investigación técnica (Anexo 13), comunicación con medios, apoyo psicológico a empleados, gestión legal, (3) Fase de ' +
          'Recuperación (semanas-meses): transición gradual a normalidad, lecciones aprendidas, revisión de procedimientos. Desactivar el COE tras ' +
          '72h (opción A) es prematuro: la asistencia familiar, investigación y comunicación requieren coordinación sostenida. Transferir a RRPP ' +
          '(opción C) es incorrecto: la comunicación técnica debe ser coordinada por el COE, no por marketing. Mantener COE completo indefinidamente ' +
          '(opción D) es ineficiente: el COE debe escalar según la fase. El PRE exige transición estructurada, no desactivación abrupta. Accidentes ' +
          'como el Vuelo 370 de Malaysia Airlines (2014) demostraron que la asistencia familiar y coordinación de investigación requieren meses de ' +
          'COE activo, no días.'
      }
    ]
  }
};