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
    ],

    /* SEMANA 3/10 — Revisión por la dirección, auditorías, FRMS, FORDEC, embalaje UN, riesgos subsidiarios, supervisión, cultura justa, simulacros */
    3: [
      {
        id: 'seg-s3-01',
        enunciado:
          'El Safety Manager de una aerolínea prepara la Revisión por la Dirección (Management Review) anual del SMS según el Doc 9859 Cap. 10. ' +
          'La alta dirección solicita un informe ejecutivo. ¿Cuál de los siguientes conjuntos representa los elementos MÍNIMOS obligatorios que debe incluir la revisión?',
        opciones: {
          A: 'Estado de los SPIs, acciones correctivas abiertas, cambios en riesgos operacionales, resultados de auditorías internas, recomendaciones de mejora y recursos necesarios.',
          B: 'Balance financiero del departamento de seguridad, comparativa con competidores, proyección de ingresos por pasajero-kilómetro.',
          C: 'Listado de incidentes del año, número de quejas de clientes, horas de vuelo acumuladas por tripulante.',
          D: 'Estado de las investigaciones de accidentes en curso, sanciones regulatorias recibidas, costos de seguros de flota.'
        },
        respuesta_correcta: 'A',
        explicacion_nzt:
          'Doc 9859 Cap. 10 (Management Review): establece que la revisión por la dirección debe incluir MÍNIMAMENTE: (1) seguimiento de acciones de revisiones anteriores, ' +
          '(2) estado de los SPIs y SPTs, (3) resultados de auditorías internas y externas, (4) cambios en riesgos operacionales y factores externos, ' +
          '(5) estado de acciones correctivas/preventivas, (6) recomendaciones de mejora, (7) recursos necesarios para el SMS. Este proceso es la ' +
          'piedra angular del componente Safety Assurance del SMS: garantiza que la alta dirección mantiene compromiso activo y asigna recursos apropiados. ' +
          'La opción B es financiera, no de seguridad. La opción C es operacional, no sistémica. La opción D es reactiva (solo incidentes), mientras ' +
          'que la revisión debe ser proactiva y holística. Sin esta revisión periódica, el SMS se convierte en un sistema documental sin respaldo ejecutivo, ' +
          'condición identificada en accidentes como el del Vuelo 5191 de Comair (2006).'
      },
      {
        id: 'seg-s3-02',
        enunciado:
          'El Safety Manager de una aerolínea programa una auditoría interna del SMS. Un miembro del equipo pregunta cuál es la diferencia entre una ' +
          'auditoría interna y una evaluación de riesgos. Según el Doc 9859, la distinción fundamental es:',
        opciones: {
          A: 'La auditoría es obligatoria y la evaluación de riesgos es opcional según el Anexo 19.',
          B: 'La auditoría evalúa el CUMPLIMIENTO del sistema SMS (procesos, documentación, procedimientos), mientras la evaluación de riesgos identifica PELIGROS y evalúa riesgos operacionales específicos.',
          C: 'La auditoría la realiza personal externo y la evaluación de riesgos la realiza el Safety Manager interno.',
          D: 'La auditoría es reactiva (analiza incidentes pasados) y la evaluación de riesgos es proactiva (analiza riesgos futuros).'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9859 Cap. 9 y Cap. 5: son procesos COMPLEMENTARIOS pero distintos. La AUDITORÍA INTERNA (Cap. 9) es un proceso sistemático, independiente ' +
          'y documentado para verificar que el SMS está implementado y mantenido conforme a los requisitos: revisa procedimientos, documentación, registros, ' +
          'competencia del personal, cumplimiento de políticas. La EVALUACIÓN DE RIESGOS (Cap. 5) identifica peligros específicos (ej: operaciones en nieve, ' +
          'nuevas rutas) y evalúa el nivel de riesgo asociado usando matrices 5×5 para determinar controles necesarios. Ambas son obligatorias (descarta A). ' +
          'La auditoría puede ser interna o externa (descarta C). La auditoría puede ser proactiva o reactiva (descarta D). La confusión entre ambos ' +
          'conceptos es una falla latente común: organizaciones que "auditan" cuando deberían "evaluar riesgos" y viceversa pierden efectividad preventiva.'
      },
      {
        id: 'seg-s3-03',
        enunciado:
          'Una aerolínea de carga ha experimentado tres incidentes relacionados con fatiga de tripulaciones en los últimos 6 meses: desviaciones de ' +
          'altura, pérdida de conciencia situacional durante aproximaciones y errores en listas de verificación. El Safety Manager recomienda implementar ' +
          'un FRMS (Fatigue Risk Management System) según el Doc 9683. ¿Cuáles son los componentes ESENCIALES que debe incluir el FRMS?',
        opciones: {
          A: 'Solo límites regulatorios de tiempo de vuelo y período de descanso según las normas nacionales.',
          B: 'Política de fatiga, educación y concienciación, sistema de reporte de fatiga, modelado científico de fatiga, investigación de incidentes relacionados con fatiga, y proceso de mejora continua.',
          C: 'Instalación de cámaras en cabina para monitorear signos de fatiga de los pilotos durante el vuelo.',
          D: 'Contratación de tripulaciones más jóvenes y reducción de la edad máxima de jubilación a 55 años.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9683 Cap. 11 (FRMS): un Fatigue Risk Management System es un enfoque basado en CIENCIA y DATOS, no solo en cumplimiento regulatorio. ' +
          'Sus componentes esenciales son: (1) Política de fatiga (compromiso organizacional), (2) Educación y concienciación (capacitación sobre ' +
          'fisiología del sueño, ritmos circadianos), (3) Sistema de reporte de fatiga (no punitivo, confidencial), (4) Modelado científico de fatiga ' +
          '(software como SAFTE, FAID que predice niveles de fatiga según horarios), (5) Investigación de incidentes relacionados con fatiga, ' +
          '(6) Proceso de mejora continua. La opción A es limitada: los límites regulatorios son el PISO, no el techo. La opción C es intrusiva y ' +
          'no aborda causas raíz. La opción D es discriminatoria y científicamente infundada (la fatiga no se resuelve con edad). El FRMS es el estándar ' +
          'moderno tras accidentes como el Vuelo 3407 de Colgan Air (2009) donde fatiga fue factor causal primario.'
      },
      {
        id: 'seg-s3-04',
        enunciado:
          'Un controlador de tránsito aéreo (ATC) está manejando 12 aeronaves simultáneamente en espacio aéreo de alta densidad. Dos aeronaves entran ' +
          'en conflicto de separación mientras una tercera reporta emergencia médica. Según los principios de CRM y manejo del estrés operacional del Doc 9683, ' +
          'la estrategia MÁS efectiva para gestionar esta sobrecarga cognitiva es:',
        opciones: {
          A: 'Mantener el control de todas las situaciones simultáneamente sin delegar, confiando en la capacidad multitarea humana.',
          B: 'Priorizar tareas según criticidad (emergencia > conflicto > tráfico normal), delegar tareas no críticas a otros controladores o asistentes, usar comunicación breve y estructurada, y reconocer límites personales solicitando ayuda cuando sea necesario.',
          C: 'Desacelerar todas las operaciones y pedir a todas las aeronaves que esperen en holding hasta que la carga de trabajo disminuya.',
          D: 'Concentrarse exclusivamente en la emergencia médica y dejar que los demás conflictos se resuelvan por sí mismos.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9683 Cap. 7 (Stress and Stress Management): el estrés operacional por sobrecarga cognitiva se gestiona mediante estrategias específicas: ' +
          '(1) PRIORIZACIÓN: jerarquizar tareas según criticidad (emergencia > conflicto > tráfico normal), (2) DELEGACIÓN: transferir tareas no críticas ' +
          'a otros controladores, supervisores o asistentes, (3) COMUNICACIÓN ESTRUCTURADA: usar fraseología estándar, breve y clara para reducir carga ' +
          'cognitiva, (4) RECONOCIMIENTO DE LÍMITES: solicitar ayuda cuando la carga excede la capacidad (no es debilidad, es profesionalismo). La opción A ' +
          'es peligrosa: la capacidad multitarea humana es limitada y el estrés degrada el desempeño. La opción C es ineficiente: detener todo el tráfico ' +
          'por una emergencia es excesivo. La opción D es negligente: ignorar conflictos activos puede causar colisiones. El accidente del Vuelo 1907 ' +
          'de Gol (2006, colisión en vuelo sobre Brasil) demostró que la sobrecarga de controladores sin estrategias de manejo adecuadas causa catástrofes.'
      },
      {
        id: 'seg-s3-05',
        enunciado:
          'Durante el despegue, una aeronave bimotor sufre falla del motor derecho a 80 nudos (antes de V1). El comandante debe decidir en segundos ' +
          'si continuar el despegue o abortar. Según el modelo FORDEC (Facts, Options, Risks, Decision, Execution, Check) del Doc 9683, la aplicación ' +
          'CORRECTA de este modelo de toma de decisiones bajo presión es:',
        opciones: {
          A: 'Facts: falla de motor a 80 kt; Options: abortar o continuar; Risks: abortar puede causar salida de pista, continuar requiere técnica de motor único; Decision: continuar (por encima de V1 no se puede abortar); Execution: aplicar procedimiento de motor único; Check: verificar configuración y performance.',
          B: 'Facts: falla de motor; Options: ninguna, solo continuar; Risks: no evaluar riesgos para no perder tiempo; Decision: instintiva; Execution: automática; Check: posterior al aterrizaje.',
          C: 'Facts: analizar todos los parámetros de motor durante 30 segundos; Options: consultar manual completo; Risks: calcular probabilidades estadísticas; Decision: votación de tripulación; Execution: esperar confirmación de torre; Check: documentación posterior.',
          D: 'Facts: ignorar la falla; Options: pretender que no pasó; Risks: asumir que no hay riesgo; Decision: continuar sin cambios; Execution: normal; Check: reportar en tierra.'
        },
        respuesta_correcta: 'A',
        explicacion_nzt:
          'Doc 9683 Cap. 8 (Decision Making): FORDEC es un modelo estructurado para toma de decisiones bajo presión en tiempo limitado. Sus fases son: ' +
          '(1) Facts: identificar hechos objetivos (falla de motor, velocidad 80 kt, antes de V1), (2) Options: generar opciones viables (abortar vs continuar), ' +
          '(3) Risks: evaluar riesgos de cada opción (abortar: posible salida de pista; continuar: requiere técnica de motor único), (4) Decision: elegir ' +
          'la opción con menor riesgo residual, (5) Execution: ejecutar la decisión con procedimientos estándar, (6) Check: verificar que la ejecución fue ' +
          'correcta y el resultado es el esperado. En este caso específico, a 80 kt (antes de V1) AMBOS opciones son viables, pero continuar es preferible ' +
          'porque abortar a alta velocidad conlleva riesgo de salida de pista. La opción B es incorrecta: FORDEC requiere evaluación de riesgos, no decisión ' +
          'instintiva. La opción C es impracticable: no hay tiempo para análisis extenso. La opción D es negligencia. FORDEC previene decisiones impulsivas ' +
          'que han causado accidentes como el Vuelo 1420 de American Airlines (1999, salida de pista por decisión de continuar aproximación inestable).'
      },
      {
        id: 'seg-s3-06',
        enunciado:
          'Un expedidor prepara un envío de 50 litros de UN 1230 (metanol, Clase 3, PG II) para transporte aéreo. Utiliza bidones plásticos estándar ' +
          'de 20 litros comprados en una ferretería local, no certificados UN. Según el Doc 9284-AN/905 Cap. 4, esta práctica es:',
        opciones: {
          A: 'Aceptable porque el metanol es una sustancia común y los bidones plásticos son resistentes a alcoholes.',
          B: 'Inaceptable porque las mercancías peligrosas Clase 3 requieren embalajes certificados UN que hayan superado pruebas de caída, apilamiento, estanqueidad y presión, con marca UN visible.',
          C: 'Aceptable si el expedidor firma una declaración asumiendo responsabilidad por cualquier incidente.',
          D: 'Aceptable solo para vuelos nacionales de corta duración; para vuelos internacionales requiere embalaje UN.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9284-AN/905 Cap. 4 (Embalajes): TODAS las mercancías peligrosas (con excepciones muy específicas de cantidades limitadas) requieren ' +
          'embalajes certificados UN que hayan superado pruebas rigurosas: (1) Prueba de caída desde 1.2m sin fuga, (2) Prueba de apilamiento (soportar ' +
          'peso equivalente a 3m de altura), (3) Prueba de estanqueidad (presión interna), (4) Prueba de presión (para líquidos). Los embalajes UN llevan ' +
          'marca visible: símbolo UN, código de tipo (ej: 1H1 para bidón plástico), grupo de embalaje (X, Y, Z según PG), año de fabricación, país de ' +
          'aprobación. Usar embalajes no certificados (opción A) es ILEGAL y peligroso: pueden fallar bajo presión de altitud (bodega no presurizada ' +
          'a 8000 ft equivale a presión reducida que expande gases y líquidos). La opción C es inválida: la responsabilidad no se transfiere por firma. ' +
          'La opción D es falsa: el transporte aéreo SIEMPRE requiere embalaje UN, nacional o internacional. Accidentes como el Vuelo 6 de UPS (2010, ' +
          'fuego en bodega por baterías de litio en embalajes inadecuados) demuestran consecuencias catastróficas de embalajes no certificados.'
      },
      {
        id: 'seg-s3-07',
        enunciado:
          'Un expedidor declara un bulto que contiene UN 2924 (líquido inflamable, tóxico, n.o.s., contiene metanol y acetona). La clasificación correcta ' +
          'es Clase 3 (inflamable) con riesgo subsidiario Clase 6.1 (tóxico). Según el Doc 9284 Cap. 5 sobre etiquetado, el bulto debe llevar:',
        opciones: {
          A: 'Solo la etiqueta de Clase 3 (inflamable) porque es el riesgo principal.',
          B: 'Solo la etiqueta de Clase 6.1 (tóxico) porque es el riesgo más peligroso para la salud humana.',
          C: 'Ambas etiquetas: Clase 3 (riesgo principal) y Clase 6.1 (riesgo subsidiario), colocadas adyacentes en el mismo lado del bulto.',
          D: 'Ninguna etiqueta si el bulto lleva la marca "Líquido inflamable tóxico" escrita en letras grandes.'
        },
        respuesta_correcta: 'C',
        explicacion_nzt:
          'Doc 9284-AN/905 Cap. 5 (Etiquetado): cuando una mercancía tiene RIESGO SUBSIDIARIO (además del riesgo principal), AMBAS etiquetas son ' +
          'obligatorias: (1) Etiqueta de riesgo principal (Clase 3, rombo rojo con llama), (2) Etiqueta de riesgo subsidiario (Clase 6.1, rombo blanco ' +
          'con calavera). Ambas deben colocarse ADYACENTES en el mismo lado del bulto para visibilidad simultánea. El riesgo subsidiario NO es opcional: ' +
          'proporciona información CRÍTICA para respuesta a emergencias. En caso de fuga o incendio, los respondedores necesitan saber AMBOS riesgos: ' +
          'inflamabilidad (requiere extintor de espuma/polvo) y toxicidad (requiere equipo de protección respiratoria, evacuación, descontaminación). ' +
          'La opción A es incorrecta: omite información de toxicidad. La opción B es incorrecta: omite información de inflamabilidad. La opción D es ' +
          'falsa: las marcas escritas NO sustituyen etiquetas normalizadas internacionalmente (pictogramas universales superan barreras de idioma). ' +
          'El accidente del Vuelo 1016 de China Airlines (1994) demostró que información incompleta sobre riesgos subsidiarios impide respuesta efectiva.'
      },
      {
        id: 'seg-s3-08',
        enunciado:
          'Un supervisor de mantenimiento de línea aprueba la liberación al servicio de una aeronave tras un reemplazo de componente crítico (actuador ' +
          'de vuelo) firmado por un mecánico junior. El supervisor NO inspeccionó físicamente el trabajo, confiando en la firma del mecánico. ' +
          'Al día siguiente, durante el vuelo, el actuador falla causando pérdida de control temporal. Según el Doc 9824 Cap. 6, la responsabilidad ' +
          'del supervisor en este caso es:',
        opciones: {
          A: 'Ninguna, porque el mecánico junior es responsable de su propio trabajo y firmó la liberación.',
          B: 'Responsabilidad directa porque el supervisor DEBE verificar físicamente trabajos críticos antes de aprobar la liberación, independientemente de quién los ejecutó.',
          C: 'Responsabilidad compartida al 50% con el mecánico junior.',
          D: 'Responsabilidad solo si el supervisor sabía que el mecánico junior no estaba calificado para esa tarea específica.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9824-AN/450 Cap. 6 (Supervisión de mantenimiento): establece que el supervisor tiene RESPONSABILIDAD DIRECTA de verificar físicamente ' +
          'trabajos críticos antes de aprobar la liberación de la aeronave. Esta verificación NO es opcional ni delegable: el supervisor debe inspeccionar ' +
          'físicamente: (1) instalación correcta del componente, (2) torque aplicado según especificación, (3) conexiones eléctricas/hidráulicas seguras, ' +
          '(4) pruebas funcionales completadas, (5) documentación correcta. Confiar únicamente en la firma del mecánico (incluso experimentado) es una ' +
          'violación de procedimiento que ha causado accidentes catastróficos. La opción A es falsa: el supervisor es responsable de supervisar, no solo ' +
          'de firmar. La opción C es incorrecta: la responsabilidad del supervisor es completa, no compartida. La opción D es limitante: el supervisor ' +
          'debe verificar SIEMPRE, independientemente de la calificación del mecánico. El accidente del Vuelo 261 de Alaska Airlines (2000, pérdida del ' +
          'estabilizador horizontal) demostró que supervisión deficiente de mantenimiento (falta de inspección física de lubricación) causa catástrofes.'
      },
      {
        id: 'seg-s3-09',
        enunciado:
          'Un técnico de mantenimiento comete un error al instalar un componente (conector invertido) durante una inspección C. Al detectar el error ' +
          'antes de la liberación, el técnico lo reporta voluntariamente al supervisor mediante el sistema de reporte de seguridad (ASR), explicando ' +
          'que fue un error honesto por fatiga tras turno de 10 horas. Según los principios de Cultura Justa (Just Culture) del Doc 9824 y Doc 9859, ' +
          'la respuesta organizacional CORRECTA es:',
        opciones: {
          A: 'Sancionar disciplinariamente al técnico por el error, independientemente de que lo reportó voluntariamente, para sentar precedente.',
          B: 'No sancionar al técnico porque fue un error honesto reportado voluntariamente; en su lugar, analizar causas raíz (fatiga, diseño del conector, procedimientos) e implementar mejoras sistémicas.',
          C: 'Sancionar al técnico pero reducir la pena porque reportó voluntariamente.',
          D: 'Ignorar el reporte porque el error no tuvo consecuencias operativas.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9824 Cap. 5 y Doc 9859 Cap. 3 (Cultura Justa): distingue claramente entre: (1) Conducta inaceptable (imprudencia deliberada, violaciones ' +
          'intencionales, negligencia grave) que SÍ merece sanción, y (2) Errores humanos honestos (slips, lapses, mistakes) que NO merecen sanción ' +
          'cuando son reportados voluntariamente. La respuesta correcta es: NO sancionar errores honestos reportados, sino analizar CAUSAS RAÍZ ' +
          '(¿por qué ocurrió? fatiga, diseño confuso, procedimiento ambiguo, iluminación deficiente) e implementar MEJORAS SISTÉMICAS (rediseño de ' +
          'conectores, límites de turno, procedimientos más claros). Sancionar errores reportados (opciones A y C) destruye la cultura de reporte: ' +
          'el personal deja de reportar por miedo a represalias, y el sistema pierde información preventiva crítica. Ignorar el reporte (opción D) ' +
          'es negligencia: cada error reportado es una oportunidad de mejora. La Cultura Justa es el pilar del SMS moderno: sin ella, los reportes ' +
          'voluntarios desaparecen y las fallas latentes se acumulan hasta causar accidentes (lecciones del Vuelo 1455 de Southwest Airlines, 2000).'
      },
      {
        id: 'seg-s3-10',
        enunciado:
          'Una aerolínea no ha realizado un simulacro de emergencia aeronáutica (full-scale emergency exercise) en los últimos 18 meses. El Safety ' +
          'Manager recomienda programar uno inmediatamente. Según el Doc 9859 Cap. 11, las directrices del PRE y el Anexo 14, la frecuencia requerida ' +
          'y los elementos esenciales del simulacro son:',
        opciones: {
          A: 'Simulacro cada 3 años es suficiente; solo debe involucrar al departamento de operaciones de vuelo.',
          B: 'Simulacro anual obligatorio que involucre TODOS los departamentos clave (operaciones, mantenimiento, SSEI, atención a familiares, comunicación, legal) y autoridades externas (bomberos, policía, hospitales), con evaluación posterior y lecciones aprendidas documentadas.',
          C: 'Simulacro solo después de cada accidente real, para no gastar recursos innecesariamente.',
          D: 'Simulacro bianual (cada 2 años) es el estándar internacional; solo debe probar la activación del COE sin ejercicios prácticos de campo.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9859 Cap. 11, directrices del PRE y Anexo 14 (Aeródromos): establecen que los simulacros de emergencia deben ser: (1) FRECUENCIA: al menos ' +
          'ANUAL (no cada 2-3 años), (2) ALCANCE: full-scale (escala completa) involucrando TODOS los departamentos clave internos (operaciones, ' +
          'mantenimiento, SSEI, atención a familias, comunicación, legal, recursos humanos) Y autoridades externas (bomberos, policía, hospitales, ' +
          'autoridad aeronáutica, protección civil), (3) EVALUACIÓN: observadores independientes evalúan desempeño, (4) LECCIONES APRENDIDAS: documentar ' +
          'fallas detectadas y actualizar el PRE en consecuencia. La opción A es insuficiente: 3 años es demasiado tiempo y solo operaciones es limitado. ' +
          'La opción C es reactiva y peligrosa: esperar un accidente real para entrenar es negligencia. La opción D es incorrecta: bianual no es el ' +
          'estándar (es anual) y solo activar COE sin ejercicios de campo no prueba capacidades reales. Simulacros deficientes contribuyeron a respuestas ' +
          'inadecuadas en accidentes como el Vuelo 1549 de US Airways (2009, "milagro del Hudson") donde la coordinación efectiva fue resultado de ' +
          'simulacros frecuentes y bien diseñados.'
      }
    ],

    /* SEMANA 4/10 — Análisis de datos, benchmarking, comunicación closed-loop, CRM multicultural, liderazgo, cantidades limitadas, prohibiciones, rotables, trazabilidad, coordinación multi-agencia */
    4: [
      {
        id: 'seg-s4-01',
        enunciado:
          'El Safety Manager de una aerolínea analiza los SPIs de los últimos 24 meses y observa que la tasa de reportes de desviaciones de altura ' +
          '(altitude deviations) ha aumentado gradualmente de 0.8 a 1.4 por cada 1000 horas de vuelo, sin que ninguna desviación haya causado un incidente. ' +
          'Según el Doc 9859 Cap. 8 sobre análisis proactivo de datos de seguridad, la acción CORRECTA es:',
        opciones: {
          A: 'Ignorar la tendencia porque ninguna desviación ha causado incidente, por lo que no hay riesgo real.',
          B: 'Aplicar análisis estadístico de tendencias con límites de control (statistical process control) para detectar que el aumento es significativo, investigar causas raíz (entrenamiento, procedimientos, espacio aéreo) e implementar acciones correctivas ANTES de que ocurra un incidente.',
          C: 'Esperar a que ocurra un incidente con consecuencias para justificar una investigación formal.',
          D: 'Reducir el umbral de reporte para que menos desviaciones sean registradas y la tendencia parezca estable.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9859 Cap. 8 (Safety Data Analysis): el análisis proactivo de datos de seguridad utiliza métodos estadísticos (statistical process control, ' +
          'SPC) con límites de control superior/inferior para detectar desviaciones significativas de la línea base ANTES de que se conviertan en ' +
          'incidentes o accidentes. Un aumento de 0.8 a 1.4 por 1000h (75% de incremento) es estadísticamente significativo y representa una señal de ' +
          'alerta temprana (early warning signal). La acción correcta es: (1) confirmar significancia estadística, (2) investigar causas raíz ' +
          '(¿entrenamiento deficiente? ¿procedimientos ambiguos? ¿cambios en espacio aéreo? ¿fatiga?), (3) implementar acciones correctivas proactivas. ' +
          'La opción A es negligencia: las desviaciones sin consecuencias son cuasi-accidentes que revelan fallas latentes. La opción C es reactiva: ' +
          'esperar un accidente es contrario al principio proactivo del SMS. La opción D es manipulación de datos: reducir el umbral de reporte oculta ' +
          'el problema en lugar de resolverlo. El análisis proactivo de tendencias es lo que distingue un SMS maduro de uno reactivo.'
      },
      {
        id: 'seg-s4-02',
        enunciado:
          'Una aerolínea regional compara sus SPIs (tasa de incidentes por 1000 horas, tasa de reportes voluntarios, completitud de auditorías) con ' +
          'datos agregados de IATA (International Air Transport Association) y estadísticas de OACI para aerolíneas de tamaño similar. El Director ' +
          'Comercial pregunta para qué sirve esta comparación. Según el Doc 9859, el propósito principal del benchmarking internacional es:',
        opciones: {
          A: 'Competir comercialmente con otras aerolíneas mostrando mejores indicadores de seguridad en campañas de marketing.',
          B: 'Cumplir un requisito regulatorio obligatorio de la autoridad aeronáutica nacional.',
          C: 'Identificar brechas de desempeño respecto a estándares internacionales, aprender mejores prácticas de la industria y establecer objetivos realistas basados en datos comparativos.',
          D: 'Justificar recortes presupuestarios en el departamento de seguridad si los indicadores son mejores que el promedio.'
        },
        respuesta_correcta: 'C',
        explicacion_nzt:
          'Doc 9859 Cap. 8 (Benchmarking): el benchmarking internacional de SPIs tiene tres propósitos principales: (1) IDENTIFICAR BRECHAS: comparar ' +
          'el desempeño propio con estándares de la industria revela áreas donde la aerolínea está por debajo del promedio (ej: tasa de reportes ' +
          'voluntarios baja sugiere cultura de seguridad débil), (2) APRENDER MEJORES PRÁCTICAS: estudiar cómo aerolíneas líderes logran mejores ' +
          'indicadores permite adoptar procedimientos probados, (3) ESTABLECER OBJETIVOS REALISTAS: los SPTs deben basarse en datos comparativos, ' +
          'no en aspiraciones arbitrarias. La opción A es incorrecta: el benchmarking es una herramienta de mejora interna, no de marketing (publicar ' +
          'SPIs comparativos puede ser contraproducente). La opción B es falsa: el benchmarking es voluntario y proactivo, no un requisito regulatorio. ' +
          'La opción D es perversa: mejores indicadores no justifican recortes; al contrario, requieren inversión sostenida. Organizaciones como IATA ' +
          '(IOSA) y OACI (USOAP) proveen datos agregados que permiten benchmarking anónimo y confidencial entre pares.'
      },
      {
        id: 'seg-s4-03',
        enunciado:
          'Durante la transferencia de turno en una torre de control, el controlador saliente informa al entrante: "Tráfico 1 en aproximación pista 27, ' +
          'tráfico 2 en espera, viento 270/10". El controlador entrante asume que entendió correctamente pero no repite la información. Cinco minutos ' +
          'después, autoriza al tráfico 2 a ingresar a la pista 27 mientras el tráfico 1 está en corta final, causando una incursión de pista. ' +
          'Según los principios de comunicación efectiva del Doc 9683, la técnica que habría prevenido este error es:',
        opciones: {
          A: 'Comunicación closed-loop con readback y hearback: el receptor repite la información recibida (readback) y el emisor verifica que la repetición es correcta (hearback), cerrando el ciclo de comprensión mutua.',
          B: 'Hablar más fuerte y más lento durante la transferencia de turno.',
          C: 'Usar terminología técnica más compleja para ser más preciso.',
          D: 'Documentar toda la información por escrito en lugar de comunicarla verbalmente.'
        },
        respuesta_correcta: 'A',
        explicacion_nzt:
          'Doc 9683 Cap. 5 (Communication): la comunicación closed-loop (circuito cerrado) con readback/hearback es la técnica fundamental para prevenir ' +
          'malentendidos en aviación. El proceso es: (1) Emisor transmite mensaje, (2) Receptor repite el mensaje con sus propias palabras o fraseología ' +
          'estándar (READBACK), (3) Emisor escucha la repetición y verifica que es correcta (HEARBACK), (4) Si hay discrepancia, se corrige inmediatamente. ' +
          'En este caso, si el controlador entrante hubiera hecho readback ("Tráfico 1 en corta final pista 27, tráfico 2 en espera, NO autorizado a ' +
          'pista"), el saliente habría detectado cualquier malentendido. La opción B es insuficiente: volumen y velocidad no garantizan comprensión. ' +
          'La opción C es contraproducente: terminología compleja aumenta carga cognitiva y riesgo de error. La opción D es impracticable en tiempo ' +
          'real: la documentación escrita complementa pero no sustituye la comunicación verbal verificada. La fraseología estándar de OACI (Anexo 10) ' +
          'y el readback obligatorio son requisitos regulatorios precisamente porque previenen incursiones de pista como la del Vuelo 1907 de Gol (2006).'
      },
      {
        id: 'seg-s4-04',
        enunciado:
          'Una aerolínea internacional opera con tripulaciones multiculturales. En un vuelo, el comandante es de una cultura de alta distancia de poder ' +
          '(high power distance, donde la jerarquía es rígida y cuestionar al superior es tabú), mientras el primer oficial es de una cultura de baja ' +
          'distancia de poder (donde el cuestionamiento constructivo es normal). Durante la aproximación, el comandante comete un error que el FO ' +
          'detecta pero no se atreve a cuestionar por respeto cultural. Según el Doc 9683 sobre CRM multicultural, el desafío principal y la solución son:',
        opciones: {
          A: 'El desafío es el idioma; la solución es exigir que todos hablen inglés nativo.',
          B: 'El desafío es la experiencia técnica; la solución es emparejar tripulaciones con niveles de experiencia similares.',
          C: 'El desafío es la edad; la solución es evitar mezclar tripulantes jóvenes con veteranos.',
          D: 'El desafío es que las diferencias culturales en distancia de poder inhiben la asertividad del FO; la solución es entrenamiento CRM específico que establezca normas explícitas de comunicación asertiva independientemente de la cultura, y que el comandante fomente activamente el cuestionamiento.'
        },
        respuesta_correcta: 'D',
        explicacion_nzt:
          'Doc 9683 Cap. 6 (CRM Multicultural): las dimensiones culturales de Hofstede (distancia de poder, individualismo/colectivismo, evitación de ' +
          'incertidumbre) afectan profundamente la comunicación en cabina. En culturas de ALTA distancia de poder (Asia Oriental, Medio Oriente, ' +
          'América Latina), cuestionar al superior es culturalmente inaceptable, lo que inhibe la asertividad del FO incluso cuando detecta errores ' +
          'críticos. La solución requiere: (1) Entrenamiento CRM específico que reconozca estas diferencias y establezca NORMAS EXPLÍCITAS: "en esta ' +
          'cabina, la seguridad supera la jerarquía cultural", (2) El comandante debe FOMENTAR ACTIVAMENTE el cuestionamiento: "FO, necesito que me ' +
          'alertes de cualquier desviación, sin excepción", (3) Briefings que definan roles y expectativas de comunicación antes de cada vuelo. ' +
          'Las opciones A, B y C identifican desafíos incorrectos: el idioma es secundario (fraseología estándar lo resuelve), la experiencia no es ' +
          'el problema, la edad es irrelevante. El accidente del Vuelo 801 de Korean Air (1997, Guam) es el caso paradigmático: el FO y el ingeniero ' +
          'de vuelo detectaron el error del comandante pero no lo cuestionaron asertivamente por distancia de poder cultural, causando 228 fatalidades.'
      },
      {
        id: 'seg-s4-05',
        enunciado:
          'Dos comandantes con estilos de liderazgo opuestos operan la misma ruta. El Comandante A es autoritario: toma todas las decisiones sin ' +
          'consultar, no acepta cuestionamientos, y la tripulación permanece pasiva. El Comandante B es facilitador: realiza briefings participativos, ' +
          'solicita activamente opiniones del FO y sobrecargo, y agradece los cuestionamientos. Según el Doc 9683 sobre liderazgo en cabina, ' +
          'cuál estilo es MÁS efectivo para la seguridad operacional y por qué:',
        opciones: {
          A: 'El Comandante A, porque la autoridad clara y sin cuestionamientos permite decisiones rápidas en emergencias.',
          B: 'El Comandante B, porque el liderazgo facilitador maximiza los recursos de la tripulación (CRM): la participación activa detecta errores tempranamente, mejora la conciencia situacional compartida y crea un clima donde el personal reporta preocupaciones sin miedo.',
          C: 'Ambos son igualmente efectivos; el estilo de liderazgo es una preferencia personal sin impacto en seguridad.',
          D: 'El Comandante A en emergencias y el Comandante B en operaciones normales; debe alternarse según la fase del vuelo.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9683 Cap. 6 (Leadership): el liderazgo facilitador (participativo) es significativamente MÁS efectivo para la seguridad operacional que ' +
          'el autoritario. Razones: (1) DETECCIÓN TEMPRANA DE ERRORES: cuando el FO y sobrecargos participan activamente, múltiples pares de ojos ' +
          'monitorean la operación, detectando errores que el comandante solo no vería, (2) CONCIENCIA SITUACIONAL COMPARTIDA: briefings participativos ' +
          'aseguran que toda la tripulación tiene el mismo modelo mental de la situación, (3) CLIMA DE REPORTE: agradecer cuestionamientos crea confianza ' +
          'para reportar preocupaciones sin miedo a represalias, (4) GESTIÓN DE CARGA DE TRABAJO: delegar y consultar distribuye carga cognitiva. ' +
          'La opción A es un mito peligroso: en emergencias, el liderazgo facilitador NO es lento; al contrario, una tripulación entrenada en participación ' +
          'responde más rápido porque ya tiene modelo mental compartido. La opción C es falsa: el estilo de liderazgo tiene impacto medible en seguridad. ' +
          'La opción D es incorrecta: alternar estilos crea inconsistencia y confusión. Estudios de CRM (Helmreich, NASA) demuestran que tripulaciones ' +
          'con liderazgo facilitador tienen tasas de error significativamente menores.'
      },
      {
        id: 'seg-s4-06',
        enunciado:
          'Un expedidor prepara un envío de 30 ml de UN 1266 (perfumery products, Clase 3, PG III) por vía aérea. Declara el envío como "cantidades ' +
          'limitadas" (limited quantities, Y344). Según el Doc 9284 Cap. 5 sobre cantidades limitadas, cuáles requisitos se EXIMEN y cuáles se MANTIENEN:',
        opciones: {
          A: 'Se eximen TODOS los requisitos: no necesita marcado, etiquetado ni documentación alguna.',
          B: 'Se mantienen TODOS los requisitos completos como si fuera mercancía peligrosa plena.',
          C: 'Se eximen la Declaración de Mercancías Peligrosas completa (DGD) y algunas etiquetas de riesgo, pero se MANTIENEN el marcado con símbolo "Y" (limited quantities), embalaje interno certificado, límites de cantidad por bulto, y notificación básica al operador.',
          D: 'Se exime solo el embalaje certificado; se mantienen DGD completa y todas las etiquetas.'
        },
        respuesta_correcta: 'C',
        explicacion_nzt:
          'Doc 9284-AN/905 Cap. 5 (Limited Quantities): las cantidades limitadas son un régimen de EXENCIÓN PARCIAL para envíos pequeños de mercancías ' +
          'peligrosas de bajo riesgo. Lo que se EXIME: (1) DGD completa (se acepta notificación simplificada), (2) algunas etiquetas de riesgo (solo ' +
          'marca "Y" de limited quantities), (3) ciertos requisitos de embalaje exterior. Lo que se MANTIENE: (1) Marcado con símbolo "Y" (rombo con ' +
          'letra Y indicando limited quantities), (2) Embalaje interno certificado y compatible con la sustancia, (3) Límites estrictos de cantidad ' +
          'por bulto interior y exterior (ej: 30 ml por recipiente interno, 1 L por bulto exterior para Y344), (4) Notificación básica al operador ' +
          'aéreo. La opción A es falsa: NO es exención total. La opción B es falsa: NO mantiene todos los requisitos (sería mercancía plena). La opción D ' +
          'es invertida: el embalaje interno certificado se MANTIENE, no se exime. El régimen de cantidades limitadas balancea seguridad con practicidad ' +
          'comercial: permite envío de pequeños volúmenes (muestras, productos de consumo) sin burocracia completa, pero mantiene controles esenciales. ' +
          'Exceder los límites de cantidad invalida la exención y convierte el envío en mercancía peligrosa plena con todos sus requisitos.'
      },
      {
        id: 'seg-s4-07',
        enunciado:
          'Un operador de carga aérea recibe una solicitud para transportar en avión de PASAJEROS: (1) explosivos División 1.1 (UN 0081, explosive, ' +
          'blasting, type B), (2) material radiactivo especial (UN 2915, radioactive material, Type B(M) package), y (3) pintura UN 1263 Clase 3. ' +
          'Según el Doc 9284 y el Anexo 18 sobre mercancías prohibidas, cuáles de estos envíos están PROHIBIDOS en avión de pasajeros:',
        opciones: {
          A: 'Los tres están prohibidos en avión de pasajeros sin excepción.',
          B: 'Ninguno está prohibido; todos pueden transportarse con embalaje adecuado y DGD completa.',
          C: 'Solo el explosivo División 1.1 está prohibido; el radiactivo y la pintura están permitidos con restricciones.',
          D: 'El explosivo División 1.1 y el material radiactivo Type B(M) están prohibidos en avión de pasajeros (salvo exenciones estatales muy específicas); la pintura Clase 3 está permitida con embalaje UN, DGD y NOTOC.'
        },
        respuesta_correcta: 'D',
        explicacion_nzt:
          'Doc 9284-AN/905 Cap. 1 y Anexo 18: establecen prohibiciones específicas por tipo de aeronave. (1) EXPLOSIVOS División 1.1 (riesgo de explosión ' +
          'masiva): PROHIBIDOS en avión de pasajeros en casi todas las circunstancias; solo某些 Divisiones 1.4 (riesgo menor) están permitidas con ' +
          'restricciones. (2) MATERIAL RADIACTIVO Type B(M) (paquetes que requieren aprobación especial multilateral): PROHIBIDOS en pasajeros salvo ' +
          'exenciones estatales específicas (ej: material médico urgente sin alternativa). (3) PINTURA UN 1263 Clase 3: PERMITIDA en pasajeros con ' +
          'embalaje UN certificado, DGD completa, etiquetas Clase 3 y NOTOC al comandante. La opción A es excesiva: la pintura está permitida. La opción B ' +
          'es peligrosa: ignora prohibiciones de explosivos 1.1 y radiactivos B(M). La opción C es incompleta: omite que el radiactivo B(M) también está ' +
          'prohibido. Las prohibiciones existen porque ciertos riesgos (explosión masiva, radiación no contenida) son inaceptables en cabinas con ' +
          'pasajeros sin capacidad de evacuación rápida. El accidente del Vuelo 111 de ValuJet (1996, fuego por generadores de oxígeno mal declarados) ' +
          'demostró consecuencias de transportar materiales prohibidos/mal clasificados en pasajeros.'
      },
      {
        id: 'seg-s4-08',
        enunciado:
          'Un componente rotable (Integrated Drive Generator, IDG) es removido de una aeronave por falla y enviado a un taller de reparación certificado ' +
          '(MRO). Tras la reparación, el MRO retorna el componente. Según el Doc 9824 y regulaciones de aeronavegabilidad (EASA Part-145 / FAA 14 CFR ' +
          '145), cuáles documentos y condiciones son OBLIGATORIOS para que el componente pueda ser reinstalado en una aeronave:',
        opciones: {
          A: 'Solo la factura comercial del MRO y el número de serie del componente.',
          B: 'Solo la firma del mecánico que reinstala, asumiendo responsabilidad personal.',
          C: 'El componente puede reinstalarse si parece estar en buenas condiciones visuales, sin documentación.',
          D: 'Certificado de liberación al servicio (EASA Form 1 o FAA 8130-3) emitido por el MRO certificado, trazabilidad completa del historial de mantenimiento del componente (work orders, pruebas realizadas, modificaciones aplicadas), y verificación de que el componente no excede límites de vida útil (life limits).'
        },
        respuesta_correcta: 'D',
        explicacion_nzt:
          'Doc 9824-AN/450 y EASA Part-145 / FAA 14 CFR 145: los componentes rotables (reparables y reutilizables: IDG, actuadores, bombas hidráulicas, ' +
          'aviónica) requieren documentación rigurosa para reinstalación: (1) CERTIFICADO DE LIBERACIÓN AL SERVICIO: EASA Form 1 (Europa) o FAA 8130-3 ' +
          '(EE.UU.), emitido por el MRO certificado, que atesta que la reparación se realizó conforme a datos aprobados y el componente es aeronavegable, ' +
          '(2) TRAZABILIDAD COMPLETA: historial de work orders, pruebas funcionales realizadas, modificaciones/service bulletins aplicados, componentes ' +
          'internos reemplazados, (3) VERIFICACIÓN DE LIFE LIMITS: muchos componentes tienen límites de vida (horas, ciclos, calendario) que NO se ' +
          'reinician con la reparación; el historial debe demostrar que no están excedidos. La opción A es insuficiente: la factura no certifica ' +
          'aeronavegabilidad. La opción B es ilegal: la firma personal no sustituye certificación del MRO. La opción C es peligrosa: la inspección ' +
          'visual no detecta fallas internas. La trazabilidad de rotables es crítica: componentes sin historial (clandestinos, robados, reparados ' +
          'ilegalmente) han causado accidentes como el Vuelo 5281 de Air Midwest (2003, actuador de elevador reparado incorrectamente).'
      },
      {
        id: 'seg-s4-09',
        enunciado:
          'Un almacén de repuestos recibe un lote de sensores de presión (P/N 123-456) de un proveedor nuevo con precio 60% menor al del distribuidor ' +
          'autorizado. Al inspeccionar, el inspector nota que los certificados de conformidad tienen formato ligeramente diferente al esperado y ' +
          'números de serie que no coinciden con el rango del fabricante. Sospecha que pueden ser componentes no aprobados (Suspected Unapproved ' +
          'Parts, SUP). Según el Doc 9824 y directrices de OACI/FAA sobre SUP, la acción CORRECTA es:',
        opciones: {
          A: 'Instalar los componentes porque el precio bajo es una oportunidad de ahorro y parecen funcionar en pruebas de banco.',
          B: 'Cuarentena inmediata del lote (no instalar), notificación a la autoridad aeronáutica nacional y al fabricante, investigación del origen del proveedor, y verificación de autenticidad mediante el fabricante antes de cualquier decisión de uso.',
          C: 'Vender el lote a otra organización para recuperar la inversión.',
          D: 'Instalar solo en aeronaves de entrenamiento, no en aeronaves de transporte comercial.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9824-AN/450 y directrices OACI/FAA sobre Suspected Unapproved Parts (SUP): los componentes no aprobados (falsificados, robados, reparados ' +
          'ilegalmente, excedidos de vida útil revendidos como nuevos) son una amenaza crítica de seguridad. El protocolo ante sospecha es: (1) CUARENTENA ' +
          'INMEDIATA: aislar el lote, NO instalar ningún componente, (2) NOTIFICACIÓN: informar a la autoridad aeronáutica nacional y al fabricante ' +
          'original (para verificar autenticidad de números de serie y certificados), (3) INVESTIGACIÓN: rastrear origen del proveedor, cadena de ' +
          'custodia, documentación, (4) VERIFICACIÓN: solo el fabricante puede confirmar autenticidad; si se confirma SUP, el lote debe destruirse o ' +
          'devolverse, NUNCA instalarse. Señales de alerta de SUP: precio anormalmente bajo, certificados con formato inconsistente, números de serie ' +
          'fuera de rango, proveedores sin certificación trazable. La opción A es negligencia criminal. La opción C es ilegal y éticamente inaceptable ' +
          '(transfiere el riesgo a otros). La opción D es falsa: los SUP están prohibidos en TODA aeronave, incluyendo entrenamiento. Componentes SUP ' +
          'causaron el accidente del Vuelo 5281 de Air Midwest (2003) y son objetivo de programas internacionales de vigilancia (FAA SUP Program, ' +
          'EASA Safety Directive).'
      },
      {
        id: 'seg-s4-10',
        enunciado:
          'Tras un accidente aéreo con múltiples víctimas en las inmediaciones de un aeropuerto internacional, el PRE activa el COE. En el sitio del ' +
          'accidente convergen: SSEI (Servicio de Salvamento y Extinción de Incendios), paramédicos y hospitales, policía, funerarias, protección ' +
          'civil y equipos de investigación. Según el Doc 9859 Cap. 11, el Anexo 14 y la estructura del PRE, la coordinación efectiva de estas ' +
          'múltiples agencias requiere:',
        opciones: {
          A: 'Que cada agencia opere independientemente sin coordinación central, para no perder tiempo en reuniones.',
          B: 'Que la aerolínea asuma el control total de todas las agencias externas incluyendo policía y hospitales.',
          C: 'Un centro de comando en sitio (on-scene command post) designado por la autoridad del aeródromo que integre SSEI, médicos, policía y protección civil bajo un sistema de comando de incidentes (ICS), con acuerdos pre-establecidos (MOU) con hospitales, funerarias y autoridades, y enlace directo con el COE de la aerolínea.',
          D: 'Que el COE de la aerolínea controle remotamente todas las operaciones de sitio sin presencia física de coordinadores.'
        },
        respuesta_correcta: 'C',
        explicacion_nzt:
          'Doc 9859 Cap. 11, Anexo 14 (Aeródromos, Cap. 9 Emergency Planning) y estructura del PRE: la coordinación multi-agencia efectiva requiere: ' +
          '(1) CENTRO DE COMANDO EN SITIO (on-scene command post): estructura física en el lugar del accidente donde un comandante de incidentes ' +
          '(designado por la autoridad del aeródromo, típicamente el jefe SSEI o autoridad aeronáutica) coordina TODAS las agencias, (2) SISTEMA DE ' +
          'COMANDO DE INCIDENTES (ICS): metodología estandarizada (origen FEMA/NIMS) que define roles, cadena de mando, span of control y comunicación ' +
          'unificada entre agencias heterogéneas, (3) ACUERDOS PRE-ESTABLECIDOS (MOU/Memorandum of Understanding): convenios firmados ANTES del accidente ' +
          'con hospitales (capacidad de trauma, triage), funerarias (manejo de restos), policía (seguridad perimetral, control de acceso), protección ' +
          'civil (evacuación, albergues), (4) ENLACE COE-SITIO: un liaison officer conecta el COE de la aerolínea (asistencia familiar, comunicación) ' +
          'con el comando en sitio (rescate, investigación). La opción A es caótica: sin coordinación central las agencias duplican esfuerzos o dejan ' +
          'vacíos. La opción B es ilegal: la aerolínea NO controla policía ni hospitales (son autoridades estatales). La opción D es impracticable: ' +
          'el control remoto sin presencia física pierde conciencia situacional. La respuesta efectiva al Vuelo 1549 de US Airways (2009, Hudson) ' +
          'demostró coordinación ICS ejemplar entre SSEI, guardacostas, hospitales y autoridades.'
      }
    ],

    /* SEMANA 5/10 — SMS entre organizaciones, contratistas, conciencia situacional, automatización, error vs diseño, ERG, FOD, control de herramientas, comunicación de crisis */
    5: [
      {
        id: 'seg-s5-01',
        enunciado:
          'Una aerolínea contrata a un agente de handling en tierra (GH) en un aeropuerto internacional para sus operaciones. El GH tiene su propio SMS, ' +
          'pero una auditoría del Safety Manager de la aerolínea detecta que los reportes voluntarios de seguridad del personal del GH no fluyen a la aerolínea, ' +
          'y los SPIs del GH son desconocidos para el operador aéreo. Según el Doc 9859 Cap. 4 sobre SMS entre organizaciones, la responsabilidad del ' +
          'operador aéreo respecto a sus contratistas es:',
        opciones: {
          A: 'Ninguna: el GH es una entidad legal independiente y su SMS es responsabilidad exclusiva del GH.',
          B: 'El operador aéreo debe asegurar que sus contratistas tengan un SMS implementado, que exista una interfaz clara de comunicación de seguridad bidireccional, y debe monitorear el desempeño de seguridad del contratista mediante auditorías y KPIs compartidos.',
          C: 'El operador aéreo solo debe exigir cumplimiento de las normas locales, sin requerir un SMS formal.',
          D: 'El operador aéreo debe asumir la operación directa de todos los servicios de tierra para eliminar la dependencia de terceros.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9859 Cap. 4 (Interface between SMS of different organizations): cuando un operador aéreo externaliza servicios críticos (handling, ' +
          'mantenimiento, catering, combustible), la responsabilidad de seguridad NO se externaliza. El operador aéreo DEBE: (1) Asegurar que el ' +
          'contratista tenga SMS implementado proporcional a su tamaño/complejidad, (2) Establecer INTERFAZ SMS documentada: canales de reporte ' +
          'bidireccional, reuniones periódicas de coordinación, intercambio de SPIs, (3) Incluir cláusulas de seguridad en contratos (derecho a ' +
          'auditar, requisitos de reporte), (4) Monitorear desempeño del contratista mediante auditorías y KPIs compartidos. La opción A es falsa: ' +
          'la responsabilidad final de seguridad sigue siendo del operador aéreo aunque el servicio sea externalizado. La opción C es insuficiente: ' +
          'cumplimiento local no sustituye SMS sistemático. La opción D es impracticable: ningún operador global opera todos sus servicios directamente. ' +
          'El accidente del Vuelo 9046 de Spanair (2008, Madrid-Barajas) demostró fallas de interfaz entre operador, handling y mantenimiento que ' +
          'contribuyeron al despegue con configuración incorrecta de flaps.'
      },
      {
        id: 'seg-s5-02',
        enunciado:
          'Dos aerolíneas forman una alianza estratégica y comparten rutas mediante acuerdos de código compartido (codeshare). La aerolínea A tiene ' +
          'un SMS maduro con certificaciones IOSA, mientras la aerolínea B tiene un SMS en desarrollo con deficiencias documentadas. La aerolínea A ' +
          'vende boletos en vuelos operados por la aerolínea B. Según el Doc 9859 y las regulaciones de códigoshare, la aerolínea A debe:',
        opciones: {
          A: 'Asumir que la responsabilidad de seguridad es exclusiva de la aerolínea B como operador real del vuelo.',
          B: 'Realizar due diligence de seguridad de la aerolínea B, auditar periódicamente su SMS, y asegurar que el nivel de seguridad del vuelo codeshare sea equivalente al estándar propio antes de continuar la asociación.',
          C: 'Limitar la venta de boletos codeshare a rutas domésticas de bajo riesgo.',
          D: 'Transferir la responsabilidad legal al pasajero mediante cláusulas en el contrato de transporte.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9859 y regulaciones EU-OPS / FAR 121 sobre codeshare: la aerolínea que comercializa un vuelo codeshare (aunque no lo opere) mantiene ' +
          'responsabilidad de seguridad hacia sus pasajeros. Debe: (1) DUE DILIGENCE: evaluar el SMS de la aerolínea operadora antes del acuerdo, ' +
          'revisando certificaciones IOSA, auditorías de autoridad, SPIs, cultura de seguridad, (2) AUDITORÍA PERIÓDICA: verificar que el nivel de ' +
          'seguridad se mantiene mediante auditorías propias o de terceros independientes, (3) EQUIVALENCIA: asegurar que el estándar de seguridad ' +
          'del codeshare sea equivalente al propio; si no, suspender el acuerdo. La opción A es una falacia legal y ética: el pasajero compró un ' +
          'boleto de A y A es responsable. La opción C es insuficiente: el riesgo no depende solo de la ruta sino de la madurez del SMS. La opción D ' +
          'es inválida: la responsabilidad de seguridad no es transferible contractualmente. El accidente del Vuelo 5966 de Chalk\'s Ocean Airways ' +
          '(2005, codeshare con operador deficiente) demostró que la due diligence es obligatoria, no opcional.'
      },
      {
        id: 'seg-s5-03',
        enunciado:
          'Un piloto experimentado vuela una aproximación ILS en condiciones meteorológicas buenas. Durante la aproximación, se enfoca tanto en el ' +
          'director de vuelo (Flight Director) y el piloto automático que deja de monitorear los instrumentos básicos de actitud, velocidad y altitud. ' +
          'La aeronave desciende por debajo de la senda de planeo sin que el piloto lo perciba hasta que suena la alerta "GLIDESLOPE". Según el modelo ' +
          'de conciencia situacional (SA) de Endsley del Doc 9683, este caso representa:',
        opciones: {
          A: 'Falla del Nivel 3 de SA (proyección futura): el piloto percibió los datos pero no pudo predecir la desviación.',
          B: 'Pérdida del Nivel 1 de SA (percepción de elementos del entorno): el piloto no percibió las señales críticas porque su atención estaba fijada en la automatización, ignorando instrumentos primarios.',
          C: 'Falla del Nivel 2 de SA (comprensión): percibió los datos pero no los comprendió correctamente.',
          D: 'Error técnico del sistema automático, no del piloto.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9683 y modelo de Endsley (1995): la Conciencia Situacional (SA) tiene TRES niveles jerárquicos: (1) Nivel 1 — PERCEPCIÓN de elementos ' +
          'relevantes del entorno (instrumentos, alertas, tráfico), (2) Nivel 2 — COMPRENSIÓN de su significado (interpretación de los datos percibidos), ' +
          '(3) Nivel 3 — PROYECCIÓN de estados futuros (anticipación de consecuencias). En este caso, el piloto perdió el Nivel 1: no percibió que la ' +
          'aeronave estaba descendiendo bajo la senda porque su atención estaba CAPTURADA por el Flight Director (fenómeno de "attention narrowing" o ' +
          '"cognitive tunneling"). La automatización puede degradar el Nivel 1 de SA cuando el piloto confía excesivamente en ella y deja de escanear ' +
          'instrumentos primarios ("cross-check"). Esto ha causado accidentes como el Vuelo 72 de Qantas (2008, pérdida de SA por automatización ' +
          'errónea) y el Vuelo 214 de Asiana (2013, enfoque excesivo en Flight Director ignorando velocidad). El CRM moderno exige "scan pattern" ' +
          'disciplinado y mantener al piloto "in the loop" incluso con automatización activada.'
      },
      {
        id: 'seg-s5-04',
        enunciado:
          'Un piloto de aerolínea con 15,000 horas de vuelo opera exclusivamente aeronaves con automatización avanzada (fly-by-wire, auto-throttle, ' +
          'auto-land). Durante un entrenamiento en simulador, se le presenta una falla simultánea del piloto automático y del auto-throttle en condiciones ' +
          'IMC (Instrument Meteorological Conditions). El piloto muestra degradación significativa en habilidades de vuelo manual: incapacidad para ' +
          'mantener trayectoria ILS, control de velocidad inestable, y tendencia a sobrecontrolar. Según el Doc 9683 sobre complacencia por automatización, ' +
          'este fenómeno se conoce como:',
        opciones: {
          A: 'Error basado en reglas (rule-based mistake): aplicó una regla incorrecta por falta de conocimiento.',
          B: 'Violación de procedimiento por exceso de confianza.',
          C: 'Degradación de habilidades por complacencia de automatización (automation complacency) y pérdida de práctica de vuelo manual, requiriendo entrenamiento recurrente específico en vuelo manual y manejo de sistemas degradados.',
          D: 'Fatiga cognitiva por exceso de horas de vuelo.'
        },
        respuesta_correcta: 'C',
        explicacion_nzt:
          'Doc 9683 Cap. 12 (Automation and Human Performance): la "automation complacency" (complacencia por automatización) es un fenómeno documentado ' +
          'donde los pilotos que operan regularmente con automatización avanzada experimentan degradación de habilidades de vuelo manual por falta de ' +
          'práctica. Consecuencias: (1) Pérdida de competencia en vuelo manual básico (raw data flying), (2) Sobrecarga cognitiva cuando la automatización ' +
          'falla, (3) Tendencia a sobrecontrolar o sub-controlar la aeronave, (4) Confusión sobre el modo de automatización activo ("mode confusion"). ' +
          'La mitigación requiere: (a) entrenamiento recurrente específico en vuelo manual, (b) práctica periódica en simulador con sistemas degradados, ' +
          '(c) política de vuelo manual en condiciones apropiadas (VFR, baja densidad de tráfico). La opción A es incorrecta: no es falta de conocimiento ' +
          'sino pérdida de competencia. La opción B es falsa: no es violación intencional. La opción D es irrelevante: el fenómeno ocurre incluso sin ' +
          'fatiga. Accidentes como el Vuelo 447 de Air France (2009, AF447 sobre Atlántico) y el Vuelo 214 de Asiana (2013, San Francisco) son casos ' +
          'paradigmáticos de degradación por automatización excesiva.'
      },
      {
        id: 'seg-s5-05',
        enunciado:
          'En una aerolínea se han detectado repetidos errores de pilotos al configurar el panel de control de vuelo (FCU/Mode Control Panel): ' +
          'confunden el botón de selección de altitud con el de velocidad vertical, introduciendo valores incorrectos que causan desviaciones. El ' +
          'Safety Manager analiza la interfaz humano-máquina y propone acciones. Según los principios de factores humanos del Doc 9683, la estrategia ' +
          'MÁS efectiva para prevenir estos errores es:',
        opciones: {
          A: 'Intensificar el entrenamiento de los pilotos con simulacros adicionales y sanciones por errores repetidos.',
          B: 'Añadir listas de verificación más extensas para forzar la verificación antes de cada entrada.',
          C: 'Rediseñar la interfaz humano-máquina aplicando principios de ergonomía cognitiva: diferenciar claramente los controles (forma, tamaño, posición, color), proporcionar feedback inmediato (visual, táctil, auditivo) y diseñar para prevenir errores en lugar de detectarlos tardíamente.',
          D: 'Reemplazar pilotos con sistemas completamente automatizados que eliminen la intervención humana.'
        },
        respuesta_correcta: 'C',
        explicacion_nzt:
          'Doc 9683 Cap. 13 (Human-Machine Interface): los principios modernos de factores humanos priorizan el REDISEÑO DE LA INTERFAZ sobre el ' +
          'entrenamiento o las sanciones. Estrategia jerárquica de control de errores (Hierarchy of Controls): (1) ELIMINAR el error mediante diseño ' +
          '(poka-yoke, a prueba de errores), (2) PREVENIR el error con feedback inmediato y diferenciación clara, (3) DETECTAR el error rápidamente, ' +
          '(4) MITIGAR las consecuencias. En este caso, la estrategia óptima es: rediseñar el FCU para que los botones de altitud y velocidad vertical ' +
          'tengan formas, tamaños y ubicaciones claramente diferenciadas (diseño a prueba de confusión), agregar feedback táctil/visual al presionar ' +
          'cada botón, y proporcionar alertas inmediatas ante entradas anómalas. La opción A (entrenamiento/sanciones) ataca al síntoma, no la causa ' +
          'raíz del diseño deficiente. La opción B (más listas) añade carga cognitiva sin resolver el problema fundamental. La opción D (eliminación ' +
          'del piloto) es irrealista y no aborda el problema del diseño actual. El accidente del Vuelo 655 de Iran Air (1988, USS Vincennes) y del ' +
          'Vuelo 965 de American Airlines (1995, Cali) demostraron que interfaces confusas causan errores catastróficos que el entrenamiento solo ' +
          'no puede prevenir.'
      },
      {
        id: 'seg-s5-06',
        enunciado:
          'Durante una fuga de líquido inflamable Clase 3 (UN 1203, gasolina) en la bodega de una aeronave en tierra, el personal de SSEI y handling ' +
          'necesita actuar rápidamente para prevenir ignición y proteger al personal. Consultan el ERG (Emergency Response Guidebook). Según el ERG ' +
          '(Guía 128 - Líquidos inflamables - No polares, no miscibles en agua), la acción INMEDIATA prioritaria es:',
        opciones: {
          A: 'Aplicar espuma formadora de película acuosa (AFFF) directamente sobre el líquido derramado antes de cualquier otra acción.',
          B: 'Aislar inmediatamente el área en todas las direcciones (distancia inicial mínima 50 metros), evacuar al personal no esencial, eliminar todas las fuentes de ignición, y ventilar el área antes de intervenir.',
          C: 'Lavar con agua abundante el derrame para diluir el producto y prevenir ignición.',
          D: 'Esperar la llegada de un experto químico antes de tomar cualquier acción.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'ERG (Emergency Response Guidebook, DOT/TC, actualizado bianualmente) Guía 128 para líquidos inflamables no polares (gasolina, tolueno, ' +
          'hexano): establece la secuencia de acciones inmediatas: (1) AISLAR el área en todas las direcciones (50 m mínimo en derrames pequeños, ' +
          'hasta 800 m en derrames grandes según cantidad), (2) EVACUAR personal no esencial fuera del perímetro, (3) ELIMINAR fuentes de ignición ' +
          '(equipos eléctricos, motores, cigarrillos, estática), (4) VENTILAR el área para dispersar vapores inflamables (la gasolina tiene límite ' +
          'inferior de explosividad 1.4%, fácilmente alcanzable en espacios cerrados). La opción A es incorrecta como PRIMERA acción: la espuma se ' +
          'aplica DESPUÉS de aislar y eliminar ignición; aplicarla primero expone al personal a vapores. La opción C es PELIGROSA: el agua NO diluye ' +
          'gasolina (no es miscible) y puede esparcir el derrame. La opción D es negligente: esperar al experto permite que la situación escale a ' +
          'incendio/explosión. El ERG es una herramienta de PRIMEROS MINUTOS que permite respuesta inmediata informada mientras llegan equipos ' +
          'especializados. Su uso sistemático en aviación previene tragedias como el incendio del Vuelo 111 de ValuJet (1996).'
      },
      {
        id: 'seg-s5-07',
        enunciado:
          'En un aeropuerto, un camión que transporta UN 1017 (cloro, gas tóxico y corrosivo, Clase 2.3 con riesgo subsidiario 8) sufre un accidente ' +
          'con fuga en la plataforma, a 300 metros de la terminal de pasajeros. El SSEI activa el PRE. Según el ERG (Guía 125 - Gases corrosivos / ' +
          'tóxicos), las distancias de aislamiento y evacuación recomendadas son:',
        opciones: {
          A: 'Aislamiento inicial de 30 metros en todas las direcciones, sin evacuación necesaria.',
          B: 'Aislamiento inicial de 150 metros en todas las direcciones en derrame pequeño, o hasta 800 metros en caso de fuga masiva o incendio, con evacuación de personas a favor del viento hacia terreno elevado.',
          C: 'Evacuación solo de la terminal de pasajeros; el área exterior no requiere aislamiento.',
          D: 'Solo se requiere protección respiratoria del personal de primera respuesta; no se necesita evacuación de terceros.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'ERG Guía 125 (Gases corrosivos/tóxicos - Cloro): el cloro (UN 1017) es un gas extremadamente tóxico (LC50 baja) y corrosivo que forma ' +
          'nubes densas que se desplazan a nivel del suelo. Distancias recomendadas: (1) AISLAMIENTO INICIAL: 150 metros en todas direcciones para ' +
          'derrame pequeño de cilindros, hasta 800 metros para fuga masiva de tanques o si hay incendio (el calor aumenta la presión y tasa de fuga), ' +
          '(2) EVACUACIÓN: en dirección CONTRARIA al viento (hacia arriba, "upwind") y hacia terreno elevado (el cloro es más denso que el aire y ' +
          'se acumula en zonas bajas), (3) PROTECCIÓN: equipo SCBA (Self-Contained Breathing Apparatus) obligatorio para respondedores, NO mascarillas ' +
          'de filtro simples. La opción A (30m) es letalmente insuficiente. La opción C es falsa: la plataforma también debe aislarse. La opción D ' +
          'es negligente: terceros a favor del viento están expuestos a concentraciones tóxicas. Incidentes históricos (Granville, Louisiana 2020, ' +
          'fuga de cloro de tren con 800+ evacuados) demuestran que estas distancias NO son exageración: el cloro puede causar edema pulmonar y ' +
          'muerte a concentraciones tan bajas como 30 ppm con exposición prolongada.'
      },
      {
        id: 'seg-s5-08',
        enunciado:
          'Durante una inspección rutinaria previa al despegue, el piloto detecta un objeto extraño (FOD - Foreign Object Debris) en la pista: un ' +
          'tornillo de 3 cm. Al reportarlo, se activa una inspección de la pista que encuentra otros 7 objetos (tapas de botella, piedras, un clip). ' +
          'El Safety Manager investiga y descubre que vehículos de mantenimiento habían estado trabajando cerca sin control de herramientas. Según ' +
          'el Doc 9824 y las prácticas de gestión de FOD, el programa preventivo MÁS efectivo debe incluir:',
        opciones: {
          A: 'Inspección visual diaria de la pista por el personal de operaciones antes del primer vuelo.',
          B: 'Programa integral que combine: (1) control estricto de herramientas (shadow boards, inventario pre/post trabajo), (2) limpieza sistemática de rampas y áreas de mantenimiento, (3) inspecciones periódicas de pistas con barredoras magnéticas y personal dedicado, (4) cultura de reporte no punitivo de FOD, y (5) análisis de tendencias para identificar fuentes.',
          C: 'Instalación de cámaras de vigilancia para identificar al personal que deja FOD y sancionarlo.',
          D: 'Dejar que el viento y el tráfico aéreo eliminen el FOD naturalmente.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9824 y Doc 9137 (Airport Services Manual) Parte 9: la gestión efectiva de FOD requiere un enfoque SISTÉMICO, no reactivo. Componentes ' +
          'esenciales: (1) CONTROL DE HERRAMIENTAS: shadow boards (tableros con siluetas de cada herramienta) e inventario obligatorio antes y después ' +
          'de cada trabajo; herramienta faltante = alerta inmediata, (2) LIMPIEZA SISTEMÁTICA: barredoras mecánicas, barredoras magnéticas, personal ' +
          'dedicado, (3) INSPECCIONES PERIÓDICAS: antes del primer vuelo, tras mantenimiento, tras eventos climáticos, (4) CULTURA DE REPORTE: todo ' +
          'el personal (pilotos, rampa, handling) reporta FOD sin miedo a sanciones, (5) ANÁLISIS DE TENDENCIAS: categorizar FOD por origen ' +
          '(mantenimiento, handling, pasajeros, ambiente) para atacar fuentes. La opción A es reactiva: solo detecta, no previene. La opción C es ' +
          'punitiva y contraproducente: destruye cultura de reporte. La opción D es negligencia. El accidente del Concorde AF4590 (2000, París-CDG) ' +
          'es el caso más famoso de FOD: una tira metálica dejada por un DC-10 de Continental Airlines en la pista perforó el tanque de combustible ' +
          'del Concorde, causando incendio y 113 fatalidades. La industria implementó programas integrales de FOD tras este accidente.'
      },
      {
        id: 'seg-s5-09',
        enunciado:
          'Un mecánico de línea termina un turno de mantenimiento nocturno y olvida una linterna dentro del compartimiento del tren de aterrizaje ' +
          'principal de una aeronave. Al día siguiente, la aeronave despega normalmente. Durante el vuelo, al bajar el tren para el aterrizaje, la ' +
          'linterna se desprende y daña cables hidráulicos, causando pérdida de presión en el sistema verde. Según las prácticas de control de ' +
          'herramientas del Doc 9824, cuál sistema habría prevenido este incidente:',
        opciones: {
          A: 'Lista de verificación firmada al final del turno indicando "todas las herramientas retiradas".',
          B: 'Shadow board con inventario obligatorio pre/post trabajo, sistema de etiquetado de herramientas personales, inspección de cierre del compartimiento por supervisor independiente (independent inspection), y procedimiento de búsqueda cuando falta una herramienta antes de liberar la aeronave.',
          C: 'Depender de la memoria del mecánico para verificar que retiró todas sus herramientas.',
          D: 'Inspección de la aeronave por el piloto antes del despegue.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9824 Cap. 7 (Tool Control): el control de herramientas es un sistema multicapa diseñado para prevenir que objetos queden olvidados ' +
          'dentro de aeronaves. Componentes críticos: (1) SHADOW BOARD: cada herramienta tiene silueta marcada; al final del trabajo se verifica ' +
          'visualmente que todas las siluetas estén cubiertas, (2) INVENTARIO OBLIGATORIO PRE/POST: lista firmada con cantidades exactas, (3) ' +
          'ETIQUETADO PERSONAL: cada herramienta tiene identificación del dueño para rastreo, (4) INSPECCIÓN INDEPENDIENTE (independent inspection): ' +
          'un supervisor diferente verifica que la aeronave esté libre de herramientas antes de liberarla al servicio, (5) PROCEDIMIENTO DE BÚSQUEDA ' +
          'OBLIGATORIO: si falta una herramienta, la aeronave NO se libera hasta encontrarla o confirmar que no está instalada. La opción A es ' +
          'insuficiente: firmar sin verificar físicamente es una violación común. La opción C es ingenua: la memoria humana falla bajo fatiga. La ' +
          'opción D es insuficiente: el piloto no inspecciona compartimientos internos. Accidentes como el Vuelo 236 de Air Transat (2001, pérdida ' +
          'de combustible por herramienta olvidada durante mantenimiento) y el Vuelo 2933 de LaMia (2016) demostraron que el tool control riguroso ' +
          'es requisito de seguridad crítica, no formalismo administrativo.'
      },
      {
        id: 'seg-s5-10',
        enunciado:
          'Minutos después de un incidente aéreo menor (salida de pista sin heridos), usuarios de redes sociales publican fotos y videos del evento, ' +
          'algunos con información errónea (número incorrecto de víctimas, teorías conspirativas, críticas infundadas a la tripulación). El departamento ' +
          'de comunicación de la aerolínea pide al Safety Manager orientación. Según las directrices modernas del PRE y la gestión de crisis en la era ' +
          'digital, la estrategia CORRECTA es:',
        opciones: {
          A: 'No responder en redes sociales; esperar a que la noticia se calme por sí sola para no darle más atención.',
          B: 'Eliminar activamente las publicaciones erróneas contactando a las plataformas (Twitter, Facebook, Instagram) para que las retiren.',
          C: 'Respuesta inmediata proactiva con información verificada y precisa: reconocimiento público del evento en los primeros 30-60 minutos, actualización periódica de hechos confirmados, corrección específica de información errónea viralizada, canalización de familiares a línea de asistencia dedicada, y coordinación con portavoces oficiales en sitio.',
          D: 'Publicar información especulativa rápidamente para ganar la narrativa antes que los medios, aunque no esté completamente verificada.'
        },
        respuesta_correcta: 'C',
        explicacion_nzt:
          'PRE moderno y guías IATA/OACI de comunicación de crisis digital: en la era de redes sociales, el "vacío informativo" se llena en MINUTOS ' +
          'con especulación, desinformación y teorías conspirativas. Estrategia de oro: (1) VELOCIDAD: reconocer el evento en los primeros 30-60 ' +
          'minutos (aunque sea con información limitada: "confirmamos incidente del vuelo X, estamos investigando, más información en breve"), ' +
          '(2) PRECISIÓN: solo comunicar hechos VERIFICADOS; si no se sabe algo, decirlo explícitamente ("aún no tenemos confirmación del número de ' +
          'pasajeros"), (3) CORRECCIÓN ACTIVA: monitorear redes 24/7 y corregir información errónea viralizada con hechos verificados, (4) CANALIZACIÓN: ' +
          'dirigir familiares a línea de asistencia (FRC) en lugar de que llamen a medios, (5) COORDINACIÓN: portavoces oficiales en sitio con ' +
          'mensajes consistentes con comunicaciones digitales. La opción A (silencio) garantiza que la narrativa la construyan terceros mal ' +
          'informados. La opción B es impracticable: las plataformas no retiran contenido rápidamente, y la solicitud genera más publicidad negativa. ' +
          'La opción D es catastrófica: publicar información incorrecta destruye la credibilidad permanentemente. Casos como el Vuelo 370 de Malaysia ' +
          'Airlines (2014) demostraron que la comunicación deficiente en la era digital multiplica el daño reputacional y el trauma de familias.'
      }
    ],

    /* SEMANA 6/10 — Business case SMS, ROI, conflictos en cabina, briefing/debriefing, TEM, ULDs, segregación interna, MSG-3, Reliability Program, BCP */
    6: [
      {
        id: 'seg-s6-01',
        enunciado:
          'El Director Financiero (CFO) de una aerolínea cuestiona el presupuesto del departamento de seguridad operacional, argumentando que el SMS ' +
          '"no genera ingresos directos" y propone recortarlo un 30% para mejorar la rentabilidad. El Safety Manager debe justificar la inversión ' +
          'usando el concepto de "Business Case for Safety" del Doc 9859. La argumentación MÁS robusta se basa en:',
        opciones: {
          A: 'La seguridad es un requisito regulatorio obligatorio; no requiere justificación económica.',
          B: 'El SMS previene costos directos e indirectos de incidentes y accidentes (daños materiales, indemnizaciones, pérdida de reputación, aumento de primas de seguro, costos legales, pérdida de ingresos por desvío de pasajeros), genera retornos tangibles mediante reducción de eventos operacionales, y constituye un diferenciador competitivo que protege el valor de marca a largo plazo.',
          C: 'La seguridad mejora la moral de los empleados, lo cual es un beneficio intangible suficiente para justificar el presupuesto.',
          D: 'Invertir en seguridad es una obligación ética que trasciende consideraciones financieras.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9859 Cap. 2 (Business Case for Safety): el SMS debe justificarse económicamente para obtener compromiso sostenido de la alta dirección. ' +
          'La argumentación robusta integra: (1) COSTOS DIRECTOS del accidente: daños a aeronave (decenas-hundreds de millones USD), indemnizaciones a ' +
          'víctimas/familias (Convención de Montreal, ~$170K por pasajero sin límite si hay culpa), costos de investigación, multas regulatorias, ' +
          'aumento de primas de seguro. (2) COSTOS INDIRECTOS (proporción 1:4 a 1:10 según OACI): pérdida de ingresos por flota inmovilizada, desvío ' +
          'de pasajeros a competidores ("voto con los pies"), costos de recuperación reputacional (campañas publicitarias masivas), despido de personal, ' +
          'pérdida de contratos corporativos. (3) RETORNOS TANGIBLES del SMS: reducción de eventos operacionales (desvíos, cancelaciones, daños en ' +
          'rampa), menor prima de seguro por mejor perfil de riesgo, acceso a mercados internacionales que exigen IOSA/SMS maduro. La opción A es ' +
          'insuficiente: cumplimiento regulatorio no genera presupuesto. Las opciones C y D son válidas pero no convencen a un CFO. Casos como el ' +
          'accidente del Concorde AF4590 (2000, $150M en costos directos + quiebra operacional) o ValuJet 111 (1996, la aerolínea desapareció) ' +
          'demuestran que UN accidente puede destruir financieramente a una aerolínea.'
      },
      {
        id: 'seg-s6-02',
        enunciado:
          'Una aerolínea implementa un programa de capacitación en CRM durante 2 años, con inversión de $500,000 USD. Al comparar los datos pre y post ' +
          'implementación, observa reducción del 35% en incidentes operacionales reportados, 40% menos desvíos por errores de tripulación, y disminución ' +
          'de la prima de seguro en 15% (ahorro anual de $300,000). Según el Doc 9859 y metodologías de ROI de seguridad, el cálculo del retorno sobre ' +
          'inversión y su interpretación correcta es:',
        opciones: {
          A: 'El ROI es negativo porque el CRM no genera ingresos directos; la inversión no se justifica financieramente.',
          B: 'El ROI debe calcularse sumando ahorros tangibles (reducción de primas, menos desvíos, menos daños en rampa) y dividiendo entre la inversión; con ahorros anuales recurrentes de $300,000+ y reducción de costos operacionales, el ROI típico de programas de seguridad maduros oscila entre 3:1 y 10:1 en horizontes de 3-5 años.',
          C: 'El ROI solo puede calcularse después de un accidente prevenido, comparando el costo del accidente con la inversión en prevención.',
          D: 'El ROI es un concepto inaplicable a seguridad operacional porque los accidentes son eventos de baja frecuencia.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9859 y metodologías IATA/ICAO de ROI en seguridad: el cálculo del ROI de programas preventivos se basa en ahorros tangibles recurrentes, ' +
          'NO en accidentes prevenidos (que son especulativos). Fórmula: ROI = (Beneficios netos / Inversión) × 100. Beneficios incluyen: (1) reducción ' +
          'de primas de seguro, (2) disminución de costos operacionales (desvíos, cancelaciones, retrasos por errores), (3) reducción de daños en rampa ' +
          'y mantenimiento no programado, (4) mejora de puntualidad y satisfacción del cliente. Estudios empíricos (FAA, EASA, IATA) muestran que ' +
          'programas de seguridad maduros generan ROI entre 3:1 y 10:1 en horizontes de 3-5 años. La opción A es falsa: los ahorros operacionales ' +
          'son ingresos indirectos tangibles. La opción C es metodológicamente incorrecta: no se puede medir prevención de eventos que no ocurrieron. ' +
          'La opción D es falsa: aunque los accidentes son raros, los incidentes y eventos operacionales son frecuentes y medibles. El ROI de seguridad ' +
          'es el argumento definitivo ante juntas directivas y comités financieros.'
      },
      {
        id: 'seg-s6-03',
        enunciado:
          'Durante un vuelo, el comandante y el primer oficial tienen un desacuerdo técnico sobre la mejor estrategia de desvío meteorológico. La ' +
          'discusión escala y el comandante dice: "Aquí se hace lo que yo digo, soy el PIC". El FO se cierra en silencio. Según los modelos de gestión ' +
          'de conflictos del Doc 9683 y el modelo DESC, la acción CORRECTA del FO y del comandante para resolver el conflicto sin comprometer la ' +
          'seguridad es:',
        opciones: {
          A: 'El FO debe acatar la decisión del comandante sin cuestionar; la jerarquía de cabina es absoluta.',
          B: 'El FO debe usar el modelo DESC (Describe, Express, Suggest, Consequences) para comunicar su preocupación de manera asertiva pero respetuosa, mientras el comandante debe reconocer su error de "rank pulling" y volver a abrir la discusión técnica basada en hechos objetivos.',
          C: 'Ambos deben posponer la discusión hasta el aterrizaje para evitar distracciones durante el vuelo.',
          D: 'El FO debe solicitar intervención del sobrecargo principal como mediador.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9683 Cap. 6 (Conflict Management): los conflictos técnicos en cabina son NORMALES y saludables cuando se gestionan apropiadamente. El ' +
          'modelo DESC proporciona una estructura asertiva para el FO: (1) DESCRIBE: "Capitán, veo que propones desviar por ruta X", (2) EXPRESS: "Estoy ' +
          'preocupado porque el radar muestra células tormentosas en esa trayectoria", (3) SUGGEST: "Sugiero considerar ruta Y que evita el sistema ' +
          'convectivo", (4) CONSEQUENCES: "Si entramos en las células, podríamos enfrentar turbulencia severa y daño estructural". Simultáneamente, ' +
          'el comandante debe reconocer el "rank pulling" (invocar autoridad jerárquica en lugar de argumentos técnicos) como un ERROR de CRM y volver ' +
          'a abrir la discusión basada en HECHOS, no en jerarquía. La opción A es peligrosa: acatamiento ciego ha causado accidentes (Tenerife 1977). ' +
          'La opción C es impracticable: decisiones críticas no pueden posponerse. La opción D es incorrecta: el sobrecargo no es mediador de ' +
          'conflictos técnicos de vuelo. El modelo DESC es estándar en entrenamiento CRM moderno y ha prevenido numerosos incidentes al permitir ' +
          'comunicación asertiva sin confrontación personal.'
      },
      {
        id: 'seg-s6-04',
        enunciado:
          'Una aerolínea implementa el programa LOSA (Line Operations Safety Audit) como parte de su garantía de seguridad (Safety Assurance). Según ' +
          'el Doc 9859 y las directrices de IATA LOSA, cuáles son las características CLAVE que distinguen LOSA de una auditoría operacional tradicional:',
        opciones: {
          A: 'LOSA es una auditoría sorpresa sin aviso previo a la tripulación, con inspectores encubiertos.',
          B: 'LOSA es una observación sistemática NO PUNITIVA y CONFIDENCIAL de operaciones de línea regulares, realizada por observadores entrenados que registran amenazas, errores y gestión de errores (TEM - Threat and Error Management) sin identificar a las tripulaciones individuales, con propósito exclusivamente de mejora sistémica.',
          C: 'LOSA evalúa el cumplimiento regulatorio y puede resultar en sanciones a tripulaciones que no cumplen procedimientos.',
          D: 'LOSA es un examen práctico para certificar a nuevos pilotos antes de volar como PIC.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9859 Cap. 9 e IATA LOSA Program: LOSA (Line Operations Safety Audit) es un programa de observación con características únicas: (1) NO ' +
          'PUNITIVO: la información recopilada NO puede usarse para acciones disciplinarias contra tripulaciones individuales, (2) CONFIDENCIAL: los ' +
          'datos se anonimizan y agregan; nunca se identifica a una tripulación específica, (3) OBSERVACIÓN NATURAL: los observadores viajan como ' +
          'pasajeros adicionales en el jump seat, sin interferir con operaciones, (4) ENFOQUE TEM: registra sistemáticamente AMENAZAS (threats - ' +
          'condiciones externas que aumentan complejidad), ERRORES (actions/inactions de la tripulación que desvían de la intención) y GESTIÓN DE ' +
          'ERRORES (cómo la tripulación detecta y mitiga errores), (5) PROPÓSITO SISTÉMICO: identificar patrones organizacionales, no evaluar ' +
          'individuos. La opción A es contraria a LOSA: requiere consentimiento informado de la tripulación. La opción C es auditoría tradicional, ' +
          'no LOSA. La opción D es incorrecta: LOSA no evalúa ni certifica. LOSA ha transformado la seguridad operacional al revelar amenazas ' +
          'sistémicas invisibles a otros métodos (ej: problemas recurrentes en aproximaciones a aeropuertos específicos).'
      },
      {
        id: 'seg-s6-05',
        enunciado:
          'Una aerolínea multinacional opera con tripulaciones donde el idioma oficial de comunicación en cabina es el inglés, pero muchos pilotos ' +
          'no son hablantes nativos. Durante un vuelo, se detecta que las comunicaciones con ATC tienen malentendidos frecuentes, y dentro de la ' +
          'cabina hay confusión sobre las llamadas estándar (callouts). Según el Doc 9683 y el Anexo 10 sobre competencia lingüística, las acciones ' +
          'CORRECTAS son:',
        opciones: {
          A: 'Exigir que todos los pilotos sean hablantes nativos de inglés mediante contratación selectiva.',
          B: 'Implementar el marco OACI de competencia lingüística (nivel mínimo 4 operativo, renovación cada 3 años), usar fraseología estándar estrictamente (evitar lenguaje coloquial), reforzar briefings con clarificación explícita de tareas, y permitir "communication clarification requests" sin estigma para asegurar comprensión mutua.',
          C: 'Permitir que cada tripulante hable en su idioma nativo dentro de la cabina para evitar estrés.',
          D: 'Sustituir las comunicaciones verbales con sistemas de texto digital entre tripulantes.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9683 Cap. 5 y Anexo 10 (Aeronautical Telecommunications, Vol. II): OACI establece el marco de competencia lingüística (Language ' +
          'Proficiency Requirements, LPR) obligatorio desde 2008: (1) NIVEL MÍNIMO: nivel 4 (Operational) en las seis habilidades (pronunciación, ' +
          'estructura, vocabulario, fluidez, comprensión, interacción), con renovación periódica (cada 3 años para nivel 4, cada 6 para nivel 5, ' +
          'permanente para nivel 6 experto), (2) FRASEOLOGÍA ESTÁNDAR: uso estricto de la fraseología del Anexo 10 y Doc 4444 (PANS-ATM), evitando ' +
          'lenguaje coloquial, jerga o modismos que pueden confundir a no-nativos, (3) BRIEFINGS REFORZADOS: clarificación explícita de tareas y ' +
          'expectativas, con preguntas de verificación, (4) CLARIFICATION REQUESTS: cultura donde preguntar "¿puedes repetir?" o "¿quieres decir X?" ' +
          'es bienvenido, no estigmatizado. La opción A es discriminación ilegal e impracticable. La opción C viola la regulación: idioma común ' +
          'obligatorio. La opción D es irrealista y elimina la redundancia de comunicación verbal. Accidentes como el de Tenerife 1977 (583 muertes) ' +
          'y Avianca 052 (1990, 73 muertes por falta de combustible) demostraron que malentendidos lingüísticos y fraseología deficiente causan ' +
          'catástrofes.'
      },
      {
        id: 'seg-s6-06',
        enunciado:
          'Un ULD (Unit Load Device - contenedor de carga) tipo LD3 contiene 3 bultos: (1) UN 1824 (hidróxido de sodio solución, Clase 8 corrosivo), ' +
          '(2) UN 1993 (líquido inflamable n.o.s., Clase 3), y (3) UN 2814 (sustancia infecciosa que afecta a humanos, Clase 6.2). Los tres bultos ' +
          'están correctamente embalados y etiquetados individualmente. Según el Doc 9284 Cap. 7 sobre segregación dentro de ULDs, esta combinación ' +
          'es:',
        opciones: {
          A: 'Aceptable porque los bultos están correctamente embalados individualmente y el ULD es una unidad cerrada.',
          B: 'Inaceptable: las tres sustancias tienen incompatibilidades críticas entre sí (corrosivo + inflamable + infeccioso) y NO pueden compartir ULD bajo ninguna circunstancia, requiriendo segregación física obligatoria en ULDs separados y posiblemente en diferentes bodegas.',
          C: 'Aceptable si el ULD tiene ventilación adecuada y se transporta solo en avión de carga.',
          D: 'Aceptable si el comandante del vuelo firma una exención especial.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9284-AN/905 Cap. 7 Tabla 7-2-1 (Segregation between packages): la combinación Clase 8 (corrosivo) + Clase 3 (inflamable) + Clase 6.2 ' +
          '(infeccioso) tiene múltiples incompatibilidades: (1) Corrosivos + inflamables: pueden reaccionar generando calor, gases inflamables o ' +
          'ignición espontánea, (2) Corrosivos + infecciosos: pueden degradar el embalaje de sustancias infecciosas liberando patógenos, (3) ' +
          'Inflamables + infecciosos: riesgo de incendio que libera patógenos al ambiente. La tabla de segregación PROHÍBE combinar estas clases en ' +
          'el MISMO ULD, incluso si los bultos individuales están correctamente embalados. Además, muchas combinaciones requieren separación en ' +
          'DIFERENTES bodegas (ej: clase 6.2 aislada de Clase 3 y Clase 8). La opción A es peligrosa: el embalaje individual no exime de segregación. ' +
          'La opción C es falsa: la ventilación no mitiga reacciones químicas entre clases incompatibles. La opción D es ilegal: el comandante NO ' +
          'puede firmar exenciones de segregación; son requisitos técnicos regulatorios. El accidente del Vuelo 111 de ValuJet (1996, 110 muertes) ' +
          'mostró consecuencias catastróficas de carga peligrosa mal segregada (generadores de oxígeno Clase 5.1 cerca de materiales combustibles).'
      },
      {
        id: 'seg-s6-07',
        enunciado:
          'Un expedidor prepara un envío de mercancías peligrosas en un ULD tipo AKE (contenedor de bodega inferior). Dentro del ULD hay 15 bultos ' +
          'con mercancías compatibles entre sí según la tabla de segregación, pero la aerolínea rechaza el ULD alegando que "la carga no está ' +
          'correctamente distribuida y asegurada dentro del contenedor". Según el Doc 9284 y las regulaciones de carga aérea, el problema técnico ' +
          'es:',
        opciones: {
          A: 'Un ULD con mercancías peligrosas debe tener solo 1 bulto por contenedor; 15 bultos excede el límite.',
          B: 'Dentro de un ULD, los bultos de mercancías peligrosas deben estar correctamente posicionados para prevenir movimiento durante el vuelo, con materiales de relleno (dunnage) apropiados, orientación específica según flechas de "This Way Up", y separación de bultos incompatibles incluso dentro del mismo contenedor.',
          C: 'Los ULDs solo pueden contener mercancías peligrosas si son Clase 9 (misceláneas); otras clases están prohibidas.',
          D: 'El rechazo es arbitrario; si los bultos son compatibles, pueden colocarse en cualquier posición dentro del ULD.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9284-AN/905 Cap. 7 (Loading and Segregation) y regulaciones IATA DGR: dentro de un ULD, los bultos de mercancías peligrosas deben ' +
          'cumplir requisitos estrictos de estiba: (1) PREVENCIÓN DE MOVIMIENTO: uso de materiales de relleno (dunnage), redes, correas y separadores ' +
          'para evitar desplazamiento durante aceleraciones del vuelo (despegue, turbulencia, aterrizaje), (2) ORIENTACIÓN CORRECTA: bultos con ' +
          'flechas "This Way Up" (este lado arriba) deben mantener la orientación específica, especialmente líquidos con cierre superior, (3) ' +
          'SEPARACIÓN INTERNA: incluso dentro del mismo ULD, mercancías incompatibles requieren separación (ej: oxidantes de inflamables, tóxicos de ' +
          'alimentos), (4) ACCESIBILIDAD: bultos que puedan requerir inspección deben ser accesibles, (5) COMPATIBILIDAD CON OTRA CARGA: mercancías ' +
          'peligrosas NO deben estibarse junto a alimentos, material vivo (AVI) o productos farmacéuticos incompatibles. La opción A es falsa: no ' +
          'hay límite de bultos por ULD, solo compatibilidad. La opción C es incorrecta: todas las clases pueden transportarse en ULDs si cumplen ' +
          'segregación. La opción D es peligrosa: estiba incorrecta causa fugas, derrames y reacciones. El accidente del Vuelo 6 de UPS (2010, ' +
          'Dubai, carga de litio) mostró consecuencias de carga mal estibada.'
      },
      {
        id: 'seg-s6-08',
        enunciado:
          'Una aerolínea opera una flota de aeronaves Boeing 737NG y está revisando su programa de mantenimiento. El Director de Mantenimiento ' +
          'propone migrar de un programa de mantenimiento basado en tiempo (intervalos fijos por horas de vuelo o ciclos) a un programa basado en ' +
          'MSG-3 (Maintenance Steering Group - 3rd Task Force). Según el Doc 9824 y las prácticas modernas de mantenimiento aeronáutico, la filosofía ' +
          'central de MSG-3 es:',
        opciones: {
          A: 'Reemplazar todos los componentes en intervalos fijos para garantizar cero fallas, independientemente de su condición real.',
          B: 'Aplicar un proceso sistemático y basado en evidencia para asignar tareas de mantenimiento según el modo de falla real de cada componente: tareas on-condition (monitoreo de condición), condition-monitoring (análisis de tendencias), hard-time (reemplazo programado solo cuando hay justificación técnica), y failure-finding (detección de fallas ocultas), optimizando seguridad y costo.',
          C: 'Realizar mantenimiento solo cuando el componente falla (run-to-failure), eliminando toda tarea preventiva.',
          D: 'Duplicar los intervalos de mantenimiento para reducir costos, asumiendo que los componentes modernos son más confiables.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9824-AN/450 y MSG-3 (Maintenance Steering Group - 3rd Task Force): MSG-3 es la metodología estándar moderna para desarrollar programas ' +
          'de mantenimiento de aeronaves. Su filosofía central es un proceso sistemático basado en EVIDENCIA para asignar tareas de mantenimiento ' +
          'específicas según el MODO DE FALLA de cada componente: (1) ON-CONDITION: componentes con degradación medible (ej: neumáticos, frenos) ' +
          'se reemplazan cuando alcanzan límite específico, no en tiempo fijo, (2) CONDITION-MONITORING: análisis continuo de tendencias (ej: aceite, ' +
          'vibraciones) para detectar degradación temprana, (3) HARD-TIME: reemplazo programado solo cuando hay justificación técnica (ej: fallas ' +
          'ocultas con consecuencia de seguridad), (4) FAILURE-FINDING: inspecciones para detectar fallas ocultas (ej: sistemas de respaldo). MSG-3 ' +
          'optimiza seguridad (mantiene confiabilidad) y costo (evita tareas innecesarias). La opción A es mantenimiento tradicional no MSG-3. La ' +
          'opción C es peligrosa: run-to-failure solo aplica a componentes sin consecuencia de seguridad. La opción D es arbitraria: duplicar ' +
          'intervalos sin evidencia degrada seguridad. MSG-3 surgió en los 1980s (Boeing 757/767) y redujo tareas de mantenimiento en 40-60% sin ' +
          'comprometer seguridad, revolucionando la industria.'
      },
      {
        id: 'seg-s6-09',
        enunciado:
          'El departamento de ingeniería de mantenimiento de una aerolínea implementa un Reliability Program (Programa de Confiabilidad) según el ' +
          'Doc 9824. El Safety Manager pregunta cómo este programa se relaciona con el SMS. La respuesta CORRECTA es:',
        opciones: {
          A: 'El Reliability Program es un sistema independiente que solo monitorea desempeño técnico de componentes, sin conexión con el SMS.',
          B: 'El Reliability Program es un componente operativo del Safety Assurance del SMS: monitorea indicadores de desempeño de mantenimiento (tasas de remoción de componentes, retrasos por mantenimiento, fallas repetitivas, desvíos), establece umbrales de alarma (alert thresholds) que disparan investigaciones proactivas cuando los indicadores exceden límites estadísticos, y genera acciones correctivas para prevenir degradación de la seguridad operacional.',
          C: 'El Reliability Program solo es obligatorio para aerolíneas con más de 50 aeronaves; aerolíneas pequeñas están exentas.',
          D: 'El Reliability Program reemplaza al SMS en organizaciones de mantenimiento.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'Doc 9824-AN/450 Cap. 8 (Reliability Program): el Reliability Program es un componente operativo crítico del Safety Assurance del SMS, no ' +
          'un sistema independiente. Funciones clave: (1) MONITOREO CONTINUO: indicadores como tasas de remoción de componentes, retrasos por ' +
          'mantenimiento (Mx delays), fallas repetitivas (repeat items), desvíos técnicos, AOG (Aircraft on Ground) events, (2) UMBRALES DE ALARMA ' +
          '(alert thresholds): límites estadísticos (típicamente 2-3 sigma sobre la media móvil) que, al ser excedidos, disparan investigación ' +
          'proactiva, (3) INVESTIGACIÓN DE TENDENCIAS: análisis de causa raíz de degradaciones, (4) ACCIONES CORRECTIVAS: ajustes al programa de ' +
          'mantenimiento, capacitación, cambios procedimentales. La opción A es falsa: el Reliability Program es INTEGRAL al SMS. La opción C es ' +
          'incorrecta: todas las organizaciones de mantenimiento certificadas (EASA Part-145, FAA 14 CFR 145) deben tenerlo, independiente del ' +
          'tamaño. La opción D es falsa: complementa, no reemplaza al SMS. El Reliability Program es el "sistema nervioso" del mantenimiento moderno: ' +
          'detecta degradaciones antes de que causen accidentes. Su ausencia fue factor causal en accidentes como el Vuelo 261 de Alaska Airlines ' +
          '(2000, falta de monitoreo de desgaste del estabilizador horizontal).'
      },
      {
        id: 'seg-s6-10',
        enunciado:
          'Seis meses después de un accidente aéreo grave, la aerolínea ha estabilizado la respuesta inmediata (asistencia familiar, investigación ' +
          'técnica), pero enfrenta una crisis de reputación, pérdida de cuota de mercado y deserción de clientes corporativos. El CEO pregunta al ' +
          'Safety Manager qué plan debe activarse. Según el PRE moderno y las guías IATA de gestión post-accidente, el plan apropiado es:',
        opciones: {
          A: 'Plan de marketing agresivo con descuentos para recuperar pasajeros.',
          B: 'Business Continuity Plan (BCP) específico post-accidente que integre: (1) estrategia de comunicación de recuperación con transparencia sobre lecciones aprendidas y cambios implementados, (2) programa de apoyo psicológico continuo a empleados y familias, (3) revisión profunda de procedimientos operacionales con validación externa, (4) iniciativas de reconstrucción de confianza con clientes clave, y (5) monitoreo continuo de indicadores reputacionales.',
          C: 'Cerrar rutas no rentables para reducir exposición financiera.',
          D: 'Esperar que el tiempo cure la reputación sin acción proactiva.'
        },
        respuesta_correcta: 'B',
        explicacion_nzt:
          'PRE moderno y guías IATA/ICAO de gestión post-accidente: la Fase de Recuperación (Recovery Phase) requiere un Business Continuity Plan ' +
          '(BCP) específico que integre múltiples dimensiones: (1) COMUNICACIÓN DE RECUPERACIÓN: transparencia sobre lecciones aprendidas de la ' +
          'investigación, cambios implementados, validación externa de mejoras (no silencio ni defensiva), (2) APOYO PSICOLÓGICO SOSTENIDO: empleados ' +
          '(tripulantes, rampa, directivos) y familias requieren apoyo a largo plazo (síndrome post-traumático puede manifestarse meses después), ' +
          '(3) REVISIÓN PROCEDIMENTAL PROFUNDA: no solo cambios cosméticos sino rediseño basado en causa raíz, con validación por terceros ' +
          'independientes, (4) RECONSTRUCCIÓN DE CONFIANZA: iniciativas específicas con clientes corporativos (briefings técnicos, visitas a centros ' +
          'de operaciones, demostración de mejoras), (5) MONITOREO REPUTACIONAL: tracking de percepción pública, sentimiento en redes, cuota de ' +
          'mercado. La opción A (marketing agresivo) puede ser contraproducente: descuentos masivos sugieren desesperación. La opción C (cerrar ' +
          'rutas) no aborda la causa reputacional. La opción D (esperar) garantiza pérdida sostenida: la reputación no se recupera sola. Casos como ' +
          'Japan Airlines tras el accidente del Vuelo 123 (1985, 520 muertes) y Qantas tras el Vuelo 32 (2010, A380 con falla de motor) demostraron ' +
          'que BCPs efectivos permiten recuperación completa de reputación y rentabilidad en 1-3 años.'
      }
    ]
  }
};