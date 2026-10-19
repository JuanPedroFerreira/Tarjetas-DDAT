/* Tarjetas DDANT: 114 preguntas del listado para el parcial. Generado desde src/cards-*.js */
/* Tarjetas 1 a 37: clases 1 (introducción) y 2 (componentes) */
(window.DDANT_CARDS = window.DDANT_CARDS || []).push(

{n:1, t:'hist', src:['01'],
q:`Describa a grandes rasgos la historia y evolución de los drones aéreos y su concepto.`,
k:`Un VANT es un vehículo reutilizable que vuela sin operador a bordo, controlado a distancia o por una computadora. Evolucionó desde autómatas y cohetes antiguos al control por radio (Telekino, 1903), a los usos militares del siglo XX y hoy a la masificación comercial con IA y enjambres.`,
a:`**Concepto:** un VANT (vehículo aéreo no tripulado) vuela sin operador a bordo. Lo controla una persona a distancia o un sistema computacional, a bordo o remoto. Es reutilizable, propulsado por motor y capaz de mantener un vuelo controlado y sostenido.

### Antecedentes autopropulsados, no teledirigidos
• **Hacia el 350 a.C.:** la paloma voladora de Arquitas de Tarento, un autómata de madera, quizás a vapor, que habría volado unos 200 m. Su veracidad se discute.
• **1232:** China usa flechas de fuego volador (cohetes de pólvora) en la batalla de Kai Keng contra los mongoles.
• **Leyenda de Wan Hu:** una silla con cohetes y cometas.
• **1804:** Sir George Cayley vuela un planeador no tripulado de 18 m² de ala; en 1852 diseña un triplano.
• **1849:** Austria lanza globos incendiarios contra Venecia.

### Control remoto y guerras
• **1903:** Torres Quevedo presenta el **Telekino**, un control por radio. Con él se controló un barco en Bilbao: el primer vehículo no tripulado.
• **1916 y 1917 (1ª GM):** el Aerial Target británico de A.H. Low, un de Havilland controlado remotamente.
• **1918:** el **Kettering Bug**, torpedo aéreo de 120 km de alcance, precursor del misil de crucero.
• **1942 (2ª GM):** la **V1**, misil de crucero autónomo con pulsorreactor. La **V2** fue el primer misil balístico y el primer objeto en llegar al espacio.
• **Guerra Fría:** el soviético **La 17** (1953), para reconocimiento sin arriesgar pilotos.
• **1979:** el israelí **IAI Scout**, primer UAV táctico moderno de inteligencia en tiempo real (ISR).
• **1995:** el **MQ1 Predator** de EE.UU., con enlace satelital y luego misiles: nace el dron armado.
• **2009 en adelante:** Wing Loong chino (tipo MALE: media altitud y larga autonomía), Shahed 129 iraní (2012) y Bayraktar TB2 turco (2014).

### Actualidad
IA, **enjambres** con inteligencia distribuida y masificación de drones comerciales: rescate, carga, agro, delivery y shows de luces.`},

{n:2, t:'hist', src:['01'],
q:`Enumere los tipos de drones. Haga una pequeña descripción de cada tipo.`,
k:`Multirrotor, monorrotor (helicóptero), ala fija y VTOL híbrido. Se diferencian en cómo generan la sustentación y en cómo se controlan.`,
a:`| Tipo | Características clave |
|---|---|
| **Multirrotor** (tri, quad, hexa, octo, coaxiales) | VTOL y hover, muy maniobrable. Las hélices no tienen partes móviles: se controla solo variando la velocidad de cada motor. Los motores giran en sentidos opuestos para anular el par. Control simple y poco procesamiento. Foto, video, vigilancia y recreación. |
| **Monorrotor** (helicóptero) | Rotor principal más rotor de cola que contrarresta el par. Las RPM son casi fijas y se controla el **ángulo de ataque** de las palas (el rotor principal tiene flapping). Más potente y eficiente para cargas pesadas y distancias largas, pero con mecánica y control más complejos. |
| **Ala fija** (avión) | La sustentación sale del avance. Más alcance, velocidad, carga y estabilidad frente al viento, y menos consumo. No hace hover ni VTOL, necesita espacio para despegar y aterrizar y es más difícil de pilotar. Cartografía, topografía, inspección y agro. |
| **VTOL híbrido** | Despega vertical como multirrotor y vuela como ala fija: cuadriplanos, rotores o alas basculantes y tail sitters. Es relativamente nuevo. |

**Otras propulsiones:** turbojet, turbofan, pulsorreactor, ramjet y scramjet, cohete, propulsión iónica, ornitópteros (alas batientes), ventiladores canalizados, propulsión distribuida, autogiro, paraglider, ala delta, efecto Magnus, efecto Coandă, rotor cicloidal (Voith Schneider), shapeshifters y ekranoplano.`},

{n:3, t:'hist', src:['01'],
q:`Enumere clasificaciones (por atributos) de drones.`,
k:`Se clasifican por tamaño, capacidad de carga, peso de despegue, autonomía, función, fuente de energía y tipo de motor. Se espera que la regulación combine varios de estos atributos.`,
a:`• **Tamaño.**
• **Capacidad de carga.**
• **Peso de despegue.**
• **Autonomía.**
• **Función:** recreativa, comercial, militar, de investigación.
• **Fuente de energía:** batería, combustión, híbrida, solar.
• **Tipo de motor.**

Se espera que la regulación futura combine varios de estos atributos. Hoy la norma uruguaya clasifica sobre todo por **peso** (menores, medianos y mayores, pregunta 8) y la europea por **riesgo** (pregunta 13).`},

{n:4, t:'hist', src:['01'],
q:`¿Qué impacto tuvo el Open Source en el desarrollo de esta industria, y de los algoritmos para controladores de vuelo?`,
k:`Democratizó el desarrollo: cualquiera puede estudiar, armar y mejorar controladores de vuelo. Proyectos abiertos como PX4, ArduPilot y MAVLink, mejorados por la comunidad, son también la base sobre la que se apoya la industria comercial.`,
a:`• Democratizó el desarrollo de drones de aficionados: cualquiera puede armar, estudiar y mejorar controladores de vuelo.
• La **Dronecode Foundation** (sin fines de lucro, dentro de la Linux Foundation) gestiona **PX4** (piloto automático), **MAVLink** (protocolo de comunicación), **MAVSDK** y **QGroundControl** (estación de tierra).
• Firmwares como **ArduPilot** evolucionaron gracias a la comunidad.
• Los algoritmos de control y estimación se mejoran de forma colaborativa y se prueban en miles de aparatos.
• La industria comercial se apoya en ellos, por ejemplo **Auterion** sobre PX4.`},

{n:5, t:'hist', src:['01'],
q:`Enumere y describa brevemente complementos, o accesorios que puede llevar un dron para sus tareas.`,
k:`Cámaras (RGB, térmicas, UV, multiespectrales), LiDAR, instrumentos de medición (magnetómetro, gravímetro, gas, radiación, ultrasonido, espesor de recubrimiento) y accesorios de carga o espectáculo (ganchos, tanques de pulverización, paracaídas, luces, pantallas).`,
a:`• **Cámaras RGB:** foto y video.
• **Cámaras térmicas o infrarrojas:** búsqueda y rescate, inspección eléctrica.
• **Cámaras UV.**
• **Cámaras multiespectrales:** salud de cultivos, minería.
• **LiDAR:** escaneo 3D y topografía.
• **Magnetómetro:** mapas magnéticos.
• **Gravímetro:** mapas gravimétricos.
• **Detectores de gas y polución.**
• **Sensores de radiación.**
• **Sondas ultrasónicas** y **medidores DFT** de espesor de recubrimiento.
• **Luces para shows** y **pantallas publicitarias.**
• **Accesorios de carga:** ganchos, tanques de pulverización, paracaídas de entrega.`},

{n:6, t:'hist', src:['01'],
q:`Enumere al menos diez aplicaciones de uso de drones en diversas industrias.`,
k:`Agro, ganadería, delivery y envíos médicos, construcción, inspección de infraestructura, monitoreo ambiental, seguridad, bomberos, ejército, mapeo 3D, fauna, cine, periodismo, deportes, shows, pesca, rescate y alerta temprana.`,
a:`• **Agricultura:** pulverización y monitoreo de cultivos.
• **Ganadería.**
• **Delivery** y **envíos médicos y de emergencia.**
• **Construcción e inmobiliaria.**
• **Inspección** de torres, aerogeneradores y líneas eléctricas.
• **Monitoreo ambiental** y de contaminación.
• **Policía y seguridad pública**, **bomberos**, **guardia fronteriza** y **ejército.**
• **Lugares peligrosos:** radiación, derrumbes, explosivos.
• **Mapeo 3D y geodesia**, **estimación forestal.**
• **Fauna:** control y seguimiento de migraciones.
• **Gestión urbana y de tráfico.**
• **Cine, periodismo y deportes.**
• **Espectáculos de luces.**
• **Pesca.**
• **Búsqueda y rescate** y **alerta temprana** ante desastres.`},

{n:7, t:'hist', src:['01'],
q:`Enumere algunas empresas en Uruguay que utilizan drones y qué hacen con ellos.`,
k:`En agro, AgTex (XAG), Dragur (DJI), Drones del Norte y Agrodrone. Practia usa IA y drones para el agro. El Ministerio del Interior incorporó drones para seguridad y el Hospital de Tacuarembó opera una red sanitaria de drones.`,
a:`### Agro
• **AgTex:** distribuye drones agrícolas XAG.
• **Dragur:** drones agrícolas DJI, con academia y servicio técnico.
• **Saravia Jorge:** vende el DJI Agras T40 de pulverización.
• **Agrodrone.**
• **DJI Store Uruguay:** tienda autorizada.
• **Drones del Norte:** pulverización para agricultura, forestación y citricultura.
• **Agrofy:** marketplace de drones agrícolas.

### Tecnología
• **Practia:** IA y drones para gestión agrícola (monitoreo y optimización de insumos).
• **drone.uy:** tecnología de drones autónomos.

### Estado y salud
• **Ministerio del Interior:** la policía incorpora drones automatizados para seguridad pública (2025).
• **Hospital de Tacuarembó:** red sanitaria de drones que conecta el hospital con policlínicas del departamento. Se presentó como la ruta de drones sanitarios más larga del mundo (2025).

### Delivery
• Alianza uruguayo brasileña (Speedbird y Newlab) que proyecta miles de envíos diarios.`},

{n:8, t:'norm', src:['01'],
q:`Explique a grandes rasgos el reglamento de Ordenamiento Básico de Drones en Uruguay.`,
k:`La Resolución 291/2014 de DINACIA clasifica por peso: menores (hasta 25 kg), medianos (más de 25 kg y hasta 260 kg vacío) y mayores (más de 260 kg vacío). Los requisitos crecen con el tamaño, y todo uso remunerado es Trabajo Aéreo, con seguro y Permiso de Operador.`,
a:`### Clasificación por peso
| Categoría | Peso |
|---|---|
| **Menores** | Hasta 25 kg de peso de lanzamiento |
| **Medianos** | Más de 25 kg de lanzamiento y hasta 260 kg de peso vacío |
| **Mayores (RPAS)** | Más de 260 kg de peso vacío |

### Uso recreativo o deportivo
• **Menores:** no necesitan registro, certificado de aeronavegabilidad ni licencia. Máximo 120 m de altura, con buen tiempo y siempre con **vista directa**.
• **Medianos:** se inscriben en la Dirección de Seguridad Operacional y reciben un **número correlativo** (no matrícula), visible a los lados, arriba y abajo. No requieren certificado de aeronavegabilidad ni licencia, pero sí el **Permiso de Operador**, con examen teórico práctico ante DINACIA. Máximo 120 m y buen tiempo.
• **Mayores:** se consideran aeronaves. Requieren **licencia aeronáutica** y Permiso de Operador con examen práctico, buen tiempo y **enlace radial con el control de tránsito aéreo (ATM)**.

### Uso remunerado (cualquier tamaño)
Es **Trabajo Aéreo** según el Art. 122 del Código Aeronáutico y los Decretos 39/977 y 314/994. Exige **seguro** de responsabilidad civil o aeronáutico y **Permiso de Operador**.`},

{n:9, t:'norm', src:['01'],
q:`Explique en qué lugares está prohibido el vuelo de drones en Uruguay.`,
k:`Para todos los drones: transporte de pasajeros, operaciones internacionales, áreas prohibidas o restringidas, sobre áreas pobladas o concentraciones de personas, y en zonas de tránsito de aeropuertos y aeródromos.`,
a:`Sin importar el tamaño, está prohibido:
• El **transporte de pasajeros**.
• Las **operaciones internacionales**.
• Volar en **áreas prohibidas o restringidas** (ver el AIP y el documento de zonas de la AUD).
• Volar **sobre áreas pobladas o concentraciones de personas**.
• Volar en **zonas de tránsito de aeropuertos y aeródromos**.`},

{n:10, t:'norm', src:['01'],
q:`¿Cuáles son los lugares designados para vuelo recreativo de drones en Uruguay?`,
k:`Los fija DINACIA en la Resolución 093/2019: zonas para uso recreativo hasta 30 m sobre el terreno, con sus coordenadas GPS en un documento adjunto del sitio de DINACIA.`,
a:`• DINACIA las fija en la **Resolución 093/2019**.
• Son zonas para uso recreativo hasta **30 m sobre el terreno**.
• Sus **coordenadas GPS** están en el documento adjunto publicado en el sitio de DINACIA.
• La presentación no lista los lugares concretos. Si lo pueden preguntar, conviene bajar ese adjunto.`},

{n:11, t:'norm', src:['01'],
q:`Discuta sobre algunos de los aspectos éticos sobre el uso de drones revisados en el curso. Dé su opinión.`,
k:`Cinco ejes: privacidad y vigilancia, seguridad y responsabilidad, uso militar, equidad social y ambiental, y la necesidad de marcos éticos. El valor de los drones es enorme, pero la normativa uruguaya es escasa frente a su crecimiento.`,
a:`1. **Privacidad y vigilancia:** cámaras sobre propiedades privadas y captura de datos personales. En Uruguay, la Unidad Reguladora y de Control de Datos Personales tiene una guía específica sobre drones.
2. **Seguridad y responsabilidad:** quién responde ante un accidente, riesgo de caídas, necesidad de seguros.
3. **Uso militar:** drones armados, distancia moral del operador, autonomía letal con enjambres e IA.
4. **Equidad social y ambiental:** acceso desigual a la tecnología, desplazamiento de empleo, ruido e impacto en la fauna.
5. **Marcos éticos:** hacen falta regulación y principios claros a medida que crece el uso.

**Una opinión posible:** el valor es enorme (rescate, salud, agro), pero la normativa uruguaya es escasa frente al crecimiento exponencial. Faltan reglas sobre privacidad, identificación y autonomía.`},

{n:12, t:'norm', src:['01'],
q:`Describa consideraciones generales a la hora de volar un dron.`,
k:`Conocer leyes y zonas, mantener línea de vista, volar en áreas abiertas lejos de gente, respetar la privacidad, no volar con mal tiempo, hacer mantenimiento, cuidar las baterías y tener un plan de emergencia.`,
a:`• Conocer las **leyes y zonas** permitidas.
• Mantener siempre **línea de vista**.
• Volar en **áreas abiertas**, lejos de personas y edificios.
• Respetar la **privacidad**: no sobrevolar propiedades privadas sin permiso.
• **No volar con mal tiempo** (viento, lluvia).
• **Mantenimiento:** revisar daños y desgaste, cambiar piezas.
• **Baterías:** usar el cargador del fabricante, no cargar sin supervisión, nunca usar baterías hinchadas o dañadas.
• **Plan de emergencia:** botiquín, extintor y estar listo para aterrizar rápido.

Lista de verificaciones antes de volar: pregunta 68.`},

{n:13, t:'norm', src:['01'],
q:`Describa alguna normativa extranjera sobre drones de tamaño mediano a grande y compárela con la de Uruguay (Obligatorio 1).`,
k:`EASA (Unión Europea) clasifica por riesgo (Open, Specific, Certified) con clases C0 a C6, registro y Remote ID. La FAA (EE.UU.) aplica la Part 107 a drones de menos de 25 kg, con certificado, Remote ID y luces para vuelo nocturno. Uruguay no exige Remote ID ni luces.`,
a:`• **EASA (Unión Europea):** categorías por riesgo (**Open, Specific, Certified**) y clases de dron **C0 a C6**. Exige registro del operador, **Remote ID**, máximo 120 m y luces en ciertas clases.
• **FAA (EE.UU.):** la **Part 107** aplica a drones de menos de 25 kg de uso comercial. Exige certificado de piloto, **Remote ID** y **luces anticolisión** visibles a 3 millas para vuelo nocturno. Por encima de 25 kg hace falta una exención o certificación específica.
• **Contraste con Uruguay:** acá no se exige Remote ID ni señales luminosas o auditivas. La regla es de 2014 y se basa sobre todo en **peso y uso**.`},

{n:14, t:'comp', src:['02'],
q:`Explique qué es el Marco o Frame. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`Es la estructura central donde se monta todo. Al diseñarlo se parte del objetivo del dron y se cuidan peso, material, rigidez, modularidad, espacio, fijaciones y tamaño.`,
a:`Es la estructura central donde se monta todo.

### Qué cuidar al diseñar
• **El objetivo del dron** ante todo: no es lo mismo uno de delivery que uno de carreras. Define qué fuerzas debe soportar.
• **Lo más liviano posible:** más peso implica más empuje, más energía, más motores y menos autonomía.
• **Material:** la fibra de carbono es la más popular. Las piezas impresas en 3D son fáciles de hacer y reparar.
• **Monolítico o modular:** el modular permite cambiar y reparar partes.
• **Espacio y fijaciones** para todo lo que va a cargar.
• **Tamaño:** los chasis más grandes son, en general, más fáciles de mantener estables.

### Temas comunes con los brazos
• Soportar golpes sin vibrar, doblarse ni oscilar, algo que choca con que sean livianos.
• Estructuras que dan rigidez sin mucho peso, por ejemplo con **optimización topológica**.
• La forma afecta la aerodinámica y el flujo de la hélice.
• Fijación segura, amortiguación de vibraciones y de torsión.
• Aguantar aceleración, carga e impacto.
• **Formas típicas:** X, X estrecha, H, DeadCat, unibody, modular. También varía la cantidad de rotores.

Criterios de elección del frame: pregunta 58.`},

{n:15, t:'comp', src:['02'],
q:`Explique qué es el brazo. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`Son los soportes que unen el chasis con los motores. Separados facilitan la reparación pero suman peso de fijación; más largos dan estabilidad pero menos rigidez.`,
a:`Son los soportes que unen el chasis con los motores.
• Pueden ser parte del frame o piezas separadas.
• **Separados:** más fáciles de reparar; permiten mejorar motores y brazos sin tocar el cuerpo ni la electrónica. En algunos drones el repuesto trae motor, hélice y cables.
• **Contra:** la fijación con tornillos agrega peso.
• **Largo:** brazos más largos dan más estabilidad general pero menos rigidez.
• Hay que resolver la fijación al chasis, la gestión de cables y el montaje del ESC.
• Comparten con el frame los cuidados de rigidez, vibración y resistencia a impactos (pregunta 14).`},

{n:16, t:'comp', src:['02'],
q:`Explique qué es el tren de aterrizaje. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`Es el soporte para apoyar el dron y su función principal es proteger las hélices y la carga. Se elige por altura, peso, terreno, fijo o retráctil, patines o patas, flotadores, materiales, absorción de golpes y costo.`,
a:`Es el soporte para apoyar el dron. Su función principal es **proteger las hélices** y la carga.
• **Altura** según los obstáculos del terreno (pasto, rocas) y la carga que lleva (cajas, delivery).
• **Peso** del aparato y **estabilidad en terreno irregular**.
• **Fijo** (simple, liviano, barato, confiable) **o retráctil** (más aerodinámico, no tapa la cámara ni el gimbal).
• **Patines** (más bajos) **o patas** (más altas).
• **Flotadores** si opera sobre agua.
• **Materiales:** fibra de carbono, aluminio, plásticos o compuestos.
• **Absorción de golpes**, integración con el chasis, portabilidad, posible sistema de recarga de baterías y costo.`},

{n:17, t:'comp', src:['02'],
q:`Explique qué es el motor sin escobillas. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`Es el motor estándar de los drones (BLDC): bobinas fijas e imanes que giran, conmutado electrónicamente por el ESC con tres fases. Es eficiente, duradero, potente y preciso. Se elige por Kv, tamaño del estator, cantidad de polos y compatibilidad.`,
a:`### Funcionamiento
Las bobinas están fijas y los imanes permanentes giran. El ESC energiza las 3 fases con señales desfasadas (tipo senoidal trifásica) y genera un campo magnético giratorio que arrastra a los imanes. No hay contacto mecánico para conmutar.

**Ventajas:** mayor eficiencia, mayor duración, más potencia y torque, control preciso de la velocidad.

### Qué cuidar al elegir
• **Kv:** RPM por voltio. Más Kv da más velocidad y menos torque.
• **Tamaño del estator** (diámetro y altura): define potencia, inercia y disipación de calor. Un **2212** tiene 22 mm de diámetro y 12 mm de alto.
• **Cantidad de polos:** más polos dan más torque y mejor control a bajas RPM (cargas pesadas); menos polos, más velocidad y menos torque.
• **Imanes de tierras raras:** mucho magnetismo, pero caros.
• **Compatibilidad** con hélice, batería (S) y ESC.

Criterios de elección con tablas: pregunta 62.`},

{n:18, t:'comp', src:['02'],
q:`Explique qué es el motor con escobillas. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`Las escobillas tocan un conmutador que invierte la corriente en las bobinas del rotor para que gire. Genera más calor, fricción y ruido y se desgasta antes, por eso solo conviene en drones chicos y baratos, como los coreless.`,
a:`### Funcionamiento
Las escobillas hacen contacto con un **conmutador** que va invirtiendo la corriente en las bobinas del rotor. Así los polos se atraen y repelen sucesivamente con los imanes del estator y el rotor gira.

**Principio común (electroimán):** más voltaje da más corriente, más corriente da más campo magnético, más campo da más fuerza y más fuerza da más velocidad.

### Coreless
Variante sin núcleo de hierro: el bobinado es un cilindro hueco que gira alrededor de un imán. Tiene muy poca inercia, acelera y frena rápido, gira suave (sin cogging) y es muy liviano. Se usa en **drones chicos y baratos**.

### Qué cuidar
• Generan **más calor, fricción y ruido**.
• Las escobillas **se desgastan** más rápido y acortan la vida útil.
• Solo convienen en drones pequeños y de bajo costo.`},

{n:19, t:'comp', src:['02'],
q:`Explique qué es la hélice. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`Convierte el giro del motor en empuje. Se nombra diámetro x paso x aspas (5x4x3, en pulgadas) y su empuje crece con el cuadrado de las revoluciones: ⟦T ≈ C_T · ρ · n² · D⁴⟧.`,
a:`**Nomenclatura:** diámetro x paso x aspas, en pulgadas. Una **5x4x3** (o 5040x3) tiene 5" de diámetro, avanza 4" por vuelta en un medio incompresible y tiene 3 aspas.

### Empuje
⟦T ≈ C_T · ρ · n² · D⁴⟧
• **C_T:** coeficiente de empuje (depende de la forma y el paso).
• **ρ:** densidad del aire.
• **n:** revoluciones **por segundo**.
• **D:** diámetro.
• El empuje es **proporcional a n²**, aunque en ciertos rangos se puede aproximar como lineal.

### Qué cuidar
| Elección | Efecto |
|---|---|
| Diámetro mayor | Más empuje por vuelta, mejor para hover y carga. Pide motor de bajo Kv. Menos ágil. |
| Diámetro menor | Necesita más RPM. Más ágil y sensible. Pide motor de alto Kv (carreras). |
| Paso mayor | Mueve más aire pero exige más torque. |
| Paso menor | Más estabilidad y maniobrabilidad. |
| Más aspas | Más empuje, pero más ruido y posible pérdida de eficiencia. |

• **Combinaciones típicas:** batería de alto voltaje (6S) con bajo Kv y hélice grande; 3S o 4S con alto Kv y hélice chica de paso bajo.
• **Espacio libre** respecto a otras hélices, al cuerpo y a la carga.
• **Materiales:** plástico, fibra de vidrio, fibra de carbono o madera.
• **Montaje:** directo, autoajustable o plegable.`},

{n:20, t:'comp', src:['02'],
q:`Explique qué es el controlador de vuelo. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`Es la computadora de vuelo: lee los sensores y los comandos del receptor y calcula la velocidad de cada motor. Se elige por procesador (F4 estándar, F7, H7), firmware según el uso, cantidad de UART, sensores y protocolos.`,
a:`Lee los sensores y los comandos del receptor y calcula la velocidad de cada motor.

### Procesador (MCU)
• **F1 y F3:** antiguos, no recomendados.
• **F4:** el estándar para aficionados, buena relación rendimiento y precio.
• **F7:** más reloj y más UART, filtros más complejos, más margen a futuro.
• **H7:** el más potente, muchas veces excesivo para algo básico.
• **Arduino o Raspberry Pi** también pueden programarse como FC.

### Firmware
• **Betaflight:** carreras y freestyle. Alto rendimiento, PID avanzado, poca navegación autónoma.
• **ArduPilot** (APM o Pixhawk): misiones autónomas (waypoints, RTH, geofencing) para multirrotores, aviones, rovers y submarinos. Más complejo de configurar; ideal para mapeo e industria.
• **iNav:** intermedio, de la línea de Betaflight pero con GPS (position hold, RTH). Bueno para FPV y ala fija.
• **Cleanflight:** predecesor de Betaflight, en desuso.
• **KISS:** cerrado, simplemente funciona, buena sensación de vuelo y pocos ajustes.

### Qué cuidar
• Procesador acorde a la carga de trabajo.
• Cantidad de **UART** para periféricos (GPS, receptor, VTX).
• Sensores integrados.
• Compatibilidad con protocolos y firmware según el uso.

Criterios de elección detallados: pregunta 63.`},

{n:21, t:'comp', src:['02','04'],
q:`Explique qué es el ESC. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`El controlador electrónico de velocidad traduce las órdenes del FC en potencia para el motor: convierte la CC de la batería en CA trifásica con MOSFET. Debe soportar al menos 30% más corriente que el motor y coincidir en voltaje y protocolo (DShot es el preferido).`,
a:`### Cómo funciona
• **Convierte la CC** de la batería en **CA trifásica** pulsante para el motor BLDC, controlando frecuencia y voltaje, y con eso la velocidad.
• Adapta la corriente baja de la señal del FC a la corriente alta del motor.
• **MOSFET:** interruptores de alta velocidad que energizan los bobinados en secuencia y crean el campo giratorio (pregunta 39).
• **Microcontrolador con firmware:** BLHeli_S (8 bits, económico), BLHeli_32 (32 bits, telemetría, sensor de corriente, PWM configurable), AM32 (alternativa de 32 bits en crecimiento) y KISS (baja latencia).

### Protocolos del FC al ESC
• **PWM:** analógico, el más antiguo y lento.
• **OneShot125 y OneShot42:** analógicos más rápidos.
• **MultiShot:** analógico, más rápido todavía.
• **DShot** (150, 300, 600, 1200): **digital** y preferido. Preciso, inmune al ruido, sin calibración y con telemetría.

### Tipos
| | ESC individuales | ESC 4 en 1 |
|---|---|---|
| Ventajas | Mejor disipación (repartidos, bajo la estela de la hélice); se cambia solo el que falla; modular | Cableado limpio, menos peso y espacio, montaje simple |
| Desventajas | Más cableado y desorden | Si falla uno se cambia toda la placa; concentra el calor |
| Ideal para | Drones grandes y de carga | Carreras y freestyle |

### Qué cuidar
• **Corriente nominal al menos 30% mayor** que el consumo máximo del motor; si no, hay sobrecarga y falla.
• **Voltaje compatible** con la batería.
• **Calidad de los MOSFET:** mejores MOSFET calientan menos y duran más.
• Si trae o no **BEC integrado**.`},

{n:22, t:'comp', src:['02','06'],
q:`Explique qué es el BEC. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`Es un regulador que baja el voltaje de la batería a uno menor y estable (5 V o 12 V) para la electrónica, y evita llevar otra batería. Debe dar el voltaje y la corriente que piden los componentes, y no hace falta si la batería ya coincide.`,
a:`Regulador que baja el voltaje de la batería principal a uno **menor y estable** (por ejemplo 5 V o 12 V) para alimentar FC, receptor, cámara, VTX y LED. Se llama Battery Eliminator Circuit porque evita llevar una batería aparte para la electrónica.

### Qué cuidar
• Puede venir **integrado en el ESC, en la PDB o como módulo** independiente (habitual en construcciones grandes).
• Su **voltaje de salida** debe coincidir con el de los componentes.
• Debe dar la **corriente suficiente** para todo lo que alimenta.
• Si la batería ya coincide con el voltaje de los componentes, **no hace falta**.

### Diseño del sistema de energía (clase 6)
• Los componentes piden voltajes muy distintos: motores con voltajes altos (4S, 14,8 V), control de bajo consumo (alrededor de 3 V), sensores inerciales a 5 V y LiDAR de 9 a 12 V.
• Los **conversores DC/DC** elevadores o reductores permiten usar **una sola batería**, pero **la conversión tiene pérdidas**.
• Una **segunda batería** agrega peso pero aprovecha mejor la energía.
• Es un **problema de optimización** según los parámetros y el uso.`},

{n:23, t:'comp', src:['02','06'],
q:`Explique qué es la batería. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`En drones se usan baterías LiPo: celdas de 3,7 V nominales conectadas en serie (S). El voltaje debe coincidir con motores y ESC; la capacidad en mAh define la autonomía y el índice C la corriente máxima.`,
a:`Se usan baterías **LiPo**: celdas conectadas en serie, de **3,7 V nominales** cada una (4,2 V a carga completa).

| S | Voltaje nominal |
|---|---|
| 1S | 3,7 V |
| 2S | 7,4 V |
| 3S | 11,1 V |
| 4S | 14,8 V |
| 6S | 22,2 V |

### Qué cuidar
• El voltaje **debe coincidir con motores y ESC**. Si además coincide con el resto de los componentes, te ahorrás el BEC.
• Tiene límites de **capacidad, corriente pico, temperatura y duración** de carga.
• La **capacidad (mAh)** define la autonomía y el **C** la descarga máxima: ⟦I máx = C × capacidad (Ah)⟧.

Tipos, riesgos y clasificación completa: preguntas 47 a 49.`},

{n:24, t:'comp', src:['02','06'],
q:`Explique qué es la PDU. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`Es la placa de distribución de energía (PDU o PDB): una entrada para la batería y múltiples salidas para los ESC, el FC, la cámara, el VTX, el receptor y los LED. Debe soportar la corriente total y puede traer BEC integrado.`,
a:`Placa que **distribuye la energía** de la batería a todo el dron: **una entrada** (la batería) y **múltiples salidas** (un ESC por motor, FC, cámara, VTX, receptor, LED).

### Qué cuidar
• Que soporte la **corriente total**.
• Que tenga **BEC integrado** de 5 V o 12 V si se necesita.
• Cómo se integra con el **ESC 4 en 1** (muchas veces vienen juntos).
• La prolijidad del cableado.

Funcionamiento en detalle: pregunta 65.`},

{n:25, t:'comp', src:['02','04'],
q:`Pregunta incompleta en el listado (probablemente sobre los sensores). Explique qué son y qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`En el listado falta el nombre del componente; lo más probable es que sean los sensores. El FC depende de la IMU (giroscopio y acelerómetro), el magnetómetro, el barómetro y el GPS, que hay que montar lejos de vibraciones e interferencias y que el firmware debe soportar.`,
a:`### Sensores del dron
• **IMU:** giroscopio (velocidad de giro, estabilidad) y acelerómetro (nivel respecto a la gravedad). Pregunta 31.
• **Magnetómetro:** rumbo; va junto al GPS. Pregunta 29.
• **Barómetro:** altura relativa. Pregunta 30.
• **GPS:** posición, RTH y waypoints.
• **ToF, sonar, LiDAR y optical flow:** distancia al suelo, obstáculos, mapa 3D y hover sin GPS. Pregunta 51.

### Qué cuidar al diseñar
• **Vibraciones:** montaje con amortiguación, sobre todo para acelerómetro y giroscopio.
• **Interferencias magnéticas:** GPS y brújula elevados y lejos de los cables de potencia.
• **Barómetro protegido** con espuma del viento de las hélices.
• **Compatibilidad** con el FC, el firmware y el bus (I2C, SPI, UART).
• **Redundancia:** algunos FC traen giroscopio doble.`},

{n:26, t:'comp', src:['02'],
q:`Explique qué es Cámara y Gimbal. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`La cámara (al menos una para FPV, analógica o digital) se elige por sensor, resolución, focal, latencia, WDR y formato. El gimbal es una plataforma motorizada de 1 a 3 ejes que estabiliza la cámara aislándola de los movimientos del dron.`,
a:`### Cámara
• Puede haber varias, al menos **una para FPV**.
• **Analógica o digital.**
• **Tamaño del sensor** y **resolución**.
• **Distancia focal:** define el ángulo de visión.
• **Latencia:** crítica para responder a tiempo a los comandos.
• **WDR o HDR:** rango dinámico para luz difícil.
• **Aspect ratio:** 4:3, 16:9.

### Gimbal
Plataforma **motorizada y estabilizada** que mantiene la cámara apuntando a donde se quiere, aislándola de los movimientos del dron. Puede tener **1, 2 o 3 ejes** y no siempre hace falta (en FPV de carreras no se usa).

### Qué cuidar
Peso, latencia, compatibilidad con VTX y OSD, y el tipo de trabajo (cine, inspección, térmica).`},

{n:27, t:'comp', src:['02'],
q:`Explique qué es transmisor de video y antena. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`El VTX envía a tierra el video de la cámara. Debe ser compatible con la cámara y con el receptor o los goggles, respetar las regulaciones de frecuencia y potencia, y llevar una antena adecuada en polaridad, ganancia y conector.`,
a:`El **VTX** envía a tierra el video de la cámara.
• Primero, **compatibilidad con la cámara**.
• **Potencia de salida** de radio.
• **Regulaciones nacionales** de frecuencia y potencia.
• Un **receptor o goggles** compatibles para ver la señal.
• Tipo de **conectores**.
• Poder **cambiar la configuración en vuelo**.
• **Analógico o digital.**
• **Antena:** polaridad, ganancia y conector.

Frecuencias y tecnologías FPV: pregunta 74.`},

{n:28, t:'comp', src:['02'],
q:`Explique qué es el OSD. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`El On Screen Display es hardware y firmware que superponen telemetría (voltaje, corriente, modo de vuelo, GPS, RSSI) sobre el video antes de transmitirlo. En analógico se usa el chip MAX7456 y el FC le envía los datos.`,
a:`Hardware con su firmware que **superpone datos de telemetría** (voltaje, corriente, modo de vuelo, GPS, RSSI) como texto y gráficos sobre el video, **antes de transmitirlo** a los goggles o al monitor.

**Cómo funciona:** un chip (históricamente el **MAX7456** en sistemas analógicos) procesa el video y dibuja caracteres en líneas específicas del fotograma. El firmware del FC (Betaflight, ArduPilot, iNav) le envía los datos.

**Qué cuidar:** si está integrado en el FC o es externo, que sea compatible con el tipo de video (analógico o digital) y que el firmware lo soporte.`},

{n:29, t:'comp', src:['02'],
q:`Explique qué es el Sistema de Posicionamiento Global Satelital. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`El GPS da la posición del dron para volver al punto de partida (RTH), seguir rutas y mantener la posición. Va junto al magnetómetro, conviene montarlo elevado y lejos de interferencias, y el firmware debe soportar sus funciones.`,
a:`Da la **posición** del dron. Sirve para:
• **Volver al punto de partida (RTH)** si se pierde la comunicación.
• **Planificar rutas** (waypoints).
• **Mantener la posición** (position hold).

### Qué cuidar
• Va junto al **magnetómetro**: sin saber hacia dónde apunta el dron, el GPS no alcanza para navegar.
• Montarlo **lejos de interferencias** eléctricas; por eso suelen ser módulos externos elevados.
• Que el firmware tenga funciones GPS: ArduPilot muchas, iNav moderadas, Betaflight solo rescate.

Funcionamiento del GNSS y cómo reducir el error: pregunta 73.`},

{n:30, t:'comp', src:['02','04'],
q:`Explique qué es un altímetro. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`Es el barómetro: mide la presión atmosférica para estimar y mantener la altitud sin GPS. Es sensible al viento de las hélices, por eso se protege con espuma. Cerca del suelo se complementa con un sensor ToF.`,
a:`Es el **barómetro**: mide la presión atmosférica para mantener la altitud. Es esencial para un control de altura estable **sin GPS**.
• Toma como referencia la presión en el despegue; las caídas de presión dan la **altura relativa**, asumiendo que la presión ambiente no cambia mucho durante el vuelo.
• **Complemento:** el **ToF** (Time of Flight), un láser que mide distancia, generalmente hacia el suelo. Es más preciso cerca del piso.
• **Qué cuidar:** es sensible a corrientes de aire y al viento de las hélices; conviene protegerlo, por ejemplo con **espuma**.`},

{n:31, t:'comp', src:['02','04'],
q:`Explique qué es un acelerómetro. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`Mide la aceleración lineal y la orientación respecto de la gravedad; se usa para la autonivelación. Es parte de la IMU junto al giroscopio y es muy sensible a las vibraciones, por eso necesita buen montaje y amortiguación.`,
a:`Mide la **aceleración lineal** y determina la orientación respecto a la **gravedad**. Se usa en los modos de **autonivelación**. Es MEMS, con tres sensores ortogonales; integrando en el tiempo se estima la velocidad.

Es parte de la **IMU** junto con:
• **Giroscopio:** velocidad angular, fundamental para la estabilidad.
• **Magnetómetro:** brújula.
• **Barómetro:** altitud.

**Qué cuidar:** es muy **sensible a las vibraciones**; hacen falta buen montaje y amortiguación. Algunos FC de gama alta traen **giroscopio doble** para redundancia.`},

{n:32, t:'comp', src:['02'],
q:`Explique qué es el transceptor de radio. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`Lleva los comandos del piloto al FC. En exterior se usa un receptor en el dron apareado (bind) con el control remoto, que debe compartir frecuencia, canal y protocolo, y que puede devolver telemetría.`,
a:`Lleva los comandos del piloto al FC.
• **Interior y aparatos chicos:** Bluetooth, WiFi u otras radios.
• **Exterior:** un receptor en el dron **apareado (bind)** con el control remoto, que comparte frecuencia, canal y **protocolo**.

**Qué cuidar:** transmisor y receptor deben usar el **mismo protocolo**. Opcionalmente tiene un canal de **telemetría** de vuelta.`},

{n:33, t:'comp', src:['02'],
q:`Explique qué es el mando o control remoto. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`El piloto usa el transmisor y el dron lleva un receptor (RX) conectado al FC. Ambos deben usar el mismo protocolo y frecuencia (ELRS con ELRS, Crossfire con Crossfire). El RX suele alimentarse con 5 V del FC.`,
a:`El piloto usa el **transmisor** y el dron lleva el **receptor (RX)**, una placa chica conectada al FC.

### Qué cuidar
• **Mismo protocolo y frecuencia** en transmisor y receptor: ELRS 2,4 GHz con ELRS 2,4 GHz, TBS Crossfire 900 MHz con TBS Crossfire 900 MHz.
• **Tamaño del receptor:** nano, micro o estándar.
• **Dos antenas:** más confiabilidad de señal, o una para telemetría.
• Se alimenta normalmente con **5 V desde el FC**.

Elección del sistema: pregunta 64. Funcionamiento: pregunta 69.`},

{n:34, t:'comp', src:['02'],
q:`Explique qué es la telemetría. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`Es el envío en tiempo real de datos de vuelo desde el dron hacia tierra (voltaje, RSSI, GPS, sensores). Requiere comunicación bidireccional, protocolo compatible y alcance suficiente, y se ve en la radio, el OSD o una estación de tierra (GCS).`,
a:`Envío de datos de vuelo **desde el dron hacia tierra** en tiempo real: voltaje, RSSI (intensidad de la señal recibida), GPS, sensores. Es esencial para monitorear el estado del dron.
• ELRS y Crossfire la soportan de forma robusta.
• Se recibe en una **GCS** (Ground Control Station, estación de control terrestre), que puede ser desde una tablet hasta una sala de control.
• **Qué cuidar:** **comunicación bidireccional**, compatibilidad de protocolo y alcance suficiente.

Más detalle: pregunta 73.`},

{n:35, t:'comp', src:['02'],
q:`Explique qué son los lentes inmersivos (goggles). Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`Muestran el video FPV y deben ser compatibles con el VTX. Los analógicos tienen menos latencia y con señal débil muestran nieve; los digitales tienen mejor imagen pero más latencia y cortan de golpe. Importan FOV, IPD, dioptrías y batería.`,
a:`Muestran el video FPV. **Deben ser compatibles con el VTX.**

| | Analógicos | Digitales |
|---|---|---|
| Latencia | Baja | Mayor |
| Calidad | Poca resolución | Mejor resolución y claridad |
| Precio | Baratos | Caros |
| Señal débil | Se ve nieve pero la imagen persiste | Se pierde la imagen |

### Formatos
• **Box goggles:** una consola con cubierta. Baratos, voluminosos, normalmente analógicos.
• **Binoculares:** una pantalla por ojo; permiten **3D** si el dron tiene dos cámaras. Compactos, cómodos y caros.

### Qué cuidar
• **FOV:** amplio es más inmersivo; estrecho permite ver toda la pantalla sin mover los ojos (algunos lo prefieren para carreras).
• **IPD:** ajuste de la distancia entre ojos.
• **Dioptrías:** enfoque según cada persona.
• **Batería:** define cuánto tiempo funcionan.`},

{n:36, t:'comp', src:['02'],
q:`Explique qué es el software para FPV. Describa qué aspectos sobre este tema hay que cuidar al diseñar un drone.`,
k:`OpenHD y OpenIPC son soluciones abiertas de video digital. Las funciones FPV dependen sobre todo del firmware del FC: Betaflight para carreras, ArduPilot para misiones, iNav para crucero con GPS y KISS para sensación de vuelo.`,
a:`• **OpenHD:** código abierto; transmite video, telemetría, OSD, audio y control en **un solo canal digital** por WiFi en modo broadcast.
• **OpenIPC:** firmware abierto para cámaras propietarias; permite reutilizar cámaras sin soporte.
• Las funciones FPV dependen mucho del firmware del FC:

| | Betaflight | ArduPilot | iNav | KISS |
|---|---|---|---|---|
| Uso | Carreras, freestyle | Misiones autónomas, mapeo | Crucero, vuelo GPS | Carreras de élite |
| Prioridad | Agilidad, baja latencia | Fiabilidad, navegación | Estabilidad, navegación | Sensación de vuelo |
| GPS | Limitado (rescate) | Extenso | Moderado | Mínimo |
| Complejidad | Media | Alta | Media | Baja |
| Costo | Gratis | Gratis | Gratis | Requiere hardware propio |`},

{n:37, t:'comp', src:['02'],
q:`Describa con un diagrama la integración e interconexión entre los siguientes componentes: receptor de video, transmisor de video, On Screen Display, cámara, Flight Controller, BEC, batería, PDB, ESC, motores, receptor de control remoto y transmisor de radio.`,
k:`Potencia: batería, PDB, ESC y motores, con el BEC alimentando la electrónica. Control: transmisor de radio, receptor, FC y ESC, con telemetría de vuelta. Video: cámara, OSD (con datos del FC), VTX y receptor de video.`,
a:`[[svg:interconexion]]
### Potencia
Batería → PDB → un ESC por motor → motores. La PDB también alimenta el **BEC**, que da 5 V o 12 V estables al FC, al receptor, a la cámara y al VTX.

### Control
Transmisor de radio → (aire) → receptor RC → FC → ESC (señal DShot o PWM). El receptor devuelve **telemetría** al transmisor y el FC envía datos al OSD.

### Video
Cámara → OSD (superpone los datos del FC) → VTX → (aire) → receptor de video (goggles).

**Resumen:** la batería alimenta la PDB, que da potencia a los ESC y, mediante el BEC, a la electrónica. El piloto manda comandos al receptor, que los pasa al FC; el FC calcula y ordena a los ESC, que mueven los motores. La cámara pasa por el OSD, que le suma los datos del FC, y el VTX la envía a los goggles.`}

);

/* Tarjetas 38 a 74: electricidad, baterías, sensores, protocolos, elección de componentes y pilotaje */
(window.DDANT_CARDS = window.DDANT_CARDS || []).push(

{n:38, t:'elec', src:['04'],
q:`Explique por qué un cortocircuito puede causar la destrucción de componentes electrónicos (Ley de Ohm).`,
k:`Por la Ley de Ohm, si la resistencia tiende a cero la corriente se dispara y la potencia ⟦P = V² / R⟧ también. Esa potencia se disipa como calor y destruye las pistas y los transistores miniaturizados.`,
a:`### Ley de Ohm
⟦I = V / R⟧ y ⟦V = R · I⟧
• **I:** corriente en amperios (A), el caudal de electrones.
• **V:** diferencia de potencial en voltios (V), la presión.
• **R:** resistencia en ohmios (Ω), lo que limita el caudal.

### Potencia
⟦P = V · I = V² / R = I² · R⟧, en vatios (W). Es la rapidez con que se transfiere la energía, y en un circuito se disipa como **calor** (⟦P = Q / t⟧).

### El razonamiento
• Un cortocircuito es conectar **positivo con negativo sin nada que consuma energía** en el medio, o unir con un cable dos puntos de distinto voltaje.
• Si ⟦R → 0⟧, entonces ⟦I → ∞⟧ y ⟦P = V² / R → ∞⟧, al menos en teoría. En la práctica la corriente queda limitada por lo que pueden entregar la fuente y los cables.
• Esa potencia se convierte en **calor**: sobrecalienta pistas y transistores miniaturizados y los **destruye**. También puede derretir cables, dañar la fuente o provocar un incendio.
• Baterías de litio, condensadores electrolíticos y transistores de potencia **pueden explotar**.

**Ejemplo de clase:** dos baterías de 1 V y 2 V unidas por una resistencia de 1 Ω. La diferencia es de 1 V, circula 1 A y se disipa 1 W. Con un cable directo (⟦R = 0⟧) la potencia tiende a infinito.`},

{n:39, t:'elec', src:['04'],
q:`Explique qué es un transistor y una resistencia.`,
k:`La resistencia se opone al paso de la corriente y se usa para limitarla. El transistor varía la resistencia entre dos de sus terminales según la señal en un tercero: con poca energía controla mucha, amplifica, conmuta y permite hacer lógica.`,
a:`### Resistencia
Oposición al paso de la corriente, medida en ohmios. Todo componente tiene alguna resistencia (en los cables es muy baja). Como componente se usa para **limitar la corriente**: un LED tiene baja resistencia y funciona entre 1,2 y 3,7 V, así que sin una resistencia en serie se quema. El valor se calcula con ⟦V = I · R⟧.

### Transistor
Componente que **varía la resistencia entre dos terminales según una señal en un tercer terminal de control**. El nombre viene de transfer resistance (resistencia de transferencia).

**MOSFET** (el que usan los ESC):
• Terminales **Gate** (compuerta), **Source** (fuente) y **Drain** (drenador).
• El **voltaje del Gate controla cuántos electrones hay en el canal**: conduce, no conduce o conduce parcialmente entre Source y Drain.

**Tipos:** bipolares (NPN y PNP), FET (JFET y MOSFET de canal N o P), IGBT, Darlington, Schottky.

**Para qué sirve:**
• Con **poca energía controla mucha**: **amplifica**.
• Funciona como **interruptor**.
• Combinando transistores se hacen **operaciones lógicas y aritméticas**: de ahí sale toda la electrónica digital.

### Base física
• Los materiales se diferencian por el **band gap**, la diferencia de energía entre la banda de valencia y la de conducción: bajo, **conductor**; alto, **aislante**.
• Nada aísla del todo: por encima de cierto voltaje, conduce. Por eso las herramientas aisladas se certifican hasta cierto voltaje (norma **IEC 60900**).
• Los **semiconductores** conducen o no según las condiciones, y en eso se basa el transistor.`},

{n:40, t:'elec', src:['04'],
q:`¿Qué es la electricidad estática? ¿Por qué hay que cuidar los circuitos de la electricidad estática?`,
k:`Es un desequilibrio de cargas en la superficie de un material. Hay que cuidar los circuitos porque una descarga electrostática (ESD) llega a miles de voltios y puede quemar uniones microscópicas, con daño inmediato o fallas intermitentes posteriores.`,
a:`**Qué es:** un **desequilibrio de cargas en la superficie** de un material. Al frotarse dos materiales, uno gana electrones y queda negativo, el otro los pierde y queda positivo, y entre ellos aparece un campo eléctrico.

### Por qué cuidar los circuitos
• Una **descarga electrostática (ESD)** puede llegar a **miles de voltios**, aunque con muy poca corriente.
• Los chips tienen pistas y transistores **microscópicos**: ese voltaje puede **crear cortocircuitos o quemar las uniones** internas.
• El daño puede ser **inmediato** o aparecer **más tarde** como **fallas intermitentes**, las más difíciles de detectar.`},

{n:41, t:'elec', src:['04'],
q:`¿Cómo se acumula electricidad estática?`,
k:`Por efecto triboeléctrico: el contacto y la separación de materiales transfiere electrones, sobre todo con baja humedad. Por ejemplo al caminar en una alfombra, moverse en una silla de plástico o sacarse un buzo de lana. Se acumula cuando no hay conducción.`,
a:`Por **efecto triboeléctrico**: transferencia de electrones por **contacto y separación** de materiales.
• Pasa sobre todo con **baja humedad**: el aire seco conduce mal y las cargas se acumulan en lugar de disiparse.
• **Ejemplos:** caminar sobre una **alfombra** con suela de goma, moverse en una **silla de plástico**, sacarse un **buzo de lana**.
• La descarga ocurre al tocar algo conductor: una manija, una canilla o un circuito.
• **Clave:** la carga se acumula **cuando no hay conducción**. Unos zapatos con suela gruesa de goma aíslan, y justamente por eso dejan acumular carga.

(La tribología es la ciencia del rozamiento y la lubricación.)`},

{n:42, t:'elec', src:['04'],
q:`¿Cómo prevenimos que se acumule electricidad estática?`,
k:`Asegurando una leve conducción a tierra para que las cargas se equilibren, manteniendo la humedad por encima del 40 a 50% y usando pisos, alfombras y superficies antiestáticas.`,
a:`• Asegurar una **leve conducción a tierra**: las cargas se equilibran en lugar de acumularse.
• Mantener la **humedad ambiente por encima del 40 a 50%**.
• Usar **pisos, alfombras y superficies antiestáticas** conectados a tierra (habituales en centros de datos y de telecomunicaciones).
• Evitar materiales que se cargan por fricción (lana, plásticos) en el puesto de trabajo.`},

{n:43, t:'elec', src:['04'],
q:`¿Qué cuidados se deben tener para prevenir los problemas de electricidad estática?`,
k:`Pulsera antiestática a tierra, alfombra de trabajo antiestática, bolsas antiestáticas para guardar componentes, control de humedad y tocar un metal conectado a tierra antes de manipular.`,
a:`• **Pulsera antiestática** conectada a tierra: la medida más común y eficaz. En los centros de datos suele haber una colgada en los racks.
• **Alfombra de trabajo antiestática** conectada a tierra.
• **Bolsas o contenedores antiestáticos** para guardar y transportar componentes (las bolsitas grises metalizadas).
• **Control de humedad**, por encima del 40 a 50%.
• **Tocar un metal conectado a tierra** antes de manipular componentes. Hay que verificar que la tierra esté bien conectada, y el equipo debe seguir a tierra **aunque esté apagado**.`},

{n:44, t:'elec', src:['04'],
q:`¿Por qué es importante verificar la diferencia de potencial (voltaje relativo) entre circuitos que se interconectan? Dé un ejemplo.`,
k:`Porque el voltaje es relativo entre nodos: si se unen circuitos con potenciales distintos sin resistencia en el medio, es un cortocircuito. Hay que unir las tierras y usar interfaces que adapten los voltajes.`,
a:`**La electricidad es relativa:** el voltaje siempre es la diferencia entre dos nodos. Todo circuito tiene un cable al positivo, otro al negativo y cables con voltajes intermedios que llevan la información.

### Por qué importa
• Si se interconectan circuitos con fuentes distintas, la diferencia de potencial entre sus nodos hace circular corriente.
• Sin resistencia en el medio, eso es un **cortocircuito** (⟦R → 0⟧, ⟦P → ∞⟧).

### Ejemplos
• El de clase: baterías de 1 V y 2 V. Con una resistencia de 1 Ω se disipa 1 W; con un cable directo, se queman.
• En un dron: conectar al FC un módulo con su propia fuente **sin tierra común (GND)**. Los niveles de señal no coinciden y puede circular corriente indebida.

### Solución
Unir las tierras y, si hay señal entre circuitos de distinto voltaje, usar una **interfaz que convierta los voltajes** (conversor de nivel).`},

{n:45, t:'elec', src:['04'],
q:`¿Por qué es importante verificar el voltaje de funcionamiento de los componentes que se interconectan? Por ejemplo, un circuito que funciona a 3,3 V con uno que funciona a 5 V. Dé un ejemplo.`,
k:`Conectar un circuito de 3,3 V con uno de 5 V puede destruir uno o ambos. Ejemplo: la salida de 5 V de un Arduino conectada directo a un GPIO de 3,3 V de una Raspberry Pi lo daña para siempre.`,
a:`• **Conectar un circuito de 3,3 V a uno de 5 V puede destruir uno o ambos.**
• **Ejemplo:** la **Raspberry Pi** se alimenta con 5 V, pero sus **pines GPIO trabajan a 3,3 V**. Si le mandás la salida de 5 V de un **Arduino** directo a un GPIO, el pin **se daña de forma permanente**.
• Al revés, una señal de 3,3 V que entra a un circuito de 5 V puede no leerse como un 1 lógico.
• **Nunca** poner **12 V o más** en pines de entrada o salida. Conectar un motor o un LED directo a alta tensión, sin regulador ni resistencia, es el error más común.
• **Solución:** conversores de nivel (pasan señales de 0 a 3,3 V a 0 a 5 V y viceversa) o reguladores de voltaje.`},

{n:46, t:'elec', src:['04'],
q:`¿Qué cuidados se deben tener al interconectar circuitos con diferentes voltajes de alimentación?`,
k:`Elegir la fuente correcta con conversores de nivel o reguladores, verificar el consumo, respetar los límites de los GPIO, usar resistencias limitadoras, evitar cortocircuitos (colores, armar sin energía, revisar), respetar la polaridad y nunca conectar nada directo a la red.`,
a:`1. **Fuente correcta:** saber si el MCU va a 5 V o a 3,3 V y usar **conversores de nivel** o **reguladores de voltaje**.
2. **Consumo de corriente:** motores, emisores de luz y radios consumen mucho y pueden necesitar **fuente separada o conexión directa a la batería**. Si el robot anda raro o solo funciona enchufado al USB, le falta energía.
3. **Límites de los GPIO:** 3,3 V en la Raspberry y 5 V en el Arduino. Un GPIO de la Raspberry da **como máximo 16 mA**; para cargas mayores se usa un **transistor o MOSFET** con sus resistencias.
4. **Resistencias limitadoras** calculadas con la Ley de Ohm, sobre todo con LED, Zener y transistores, que en ciertos rangos se comportan como resistencia casi cero.
5. **Evitar cortocircuitos:**
  • **Colores de cable:** rojo para el positivo (5 V), amarillo para otros voltajes como 12 V, negro para el negativo o tierra común, y otros colores para las señales.
  • **Armar y modificar siempre sin energía**, con la batería desconectada.
  • **Revisar dos veces** antes de encender, sin cables sueltos. Ojo con las carcasas de transistores de potencia conectadas a uno de sus terminales.
  • Protoboard **ordenada**.
6. **Polaridad:** los LED y algunos condensadores tienen orientación; la pata más larga del LED es el positivo.
7. **Nunca conectar nada directo a la red eléctrica**: usar una fuente verificada.`},

{n:47, t:'bat', src:['06'],
q:`Describa los tipos de batería que utilizamos para drones.`,
k:`LiPo, la más usada por su alta tasa de descarga; Li ion, con más densidad energética y autonomía; y sistemas híbridos que suman paneles solares, pilas de hidrógeno o motores de combustión para vuelos largos.`,
a:`| Tipo | Ventaja | Uso |
|---|---|---|
| **LiPo** (polímero de litio) | **Alta tasa de descarga**: entrega corrientes altas para los picos de potencia de los motores | FPV, carreras, acrobacia; la más usada |
| **Li ion** (iones de litio) | **Mayor densidad energética** (más carga por volumen): más tiempo de vuelo | Largo alcance o crucero, cuando no hace falta tanta potencia instantánea |
| **Sistemas híbridos** | Duraciones de vuelo mucho mayores | Drones grandes o especializados: baterías más **paneles solares, pilas de hidrógeno o pequeños motores de combustión** |`},

{n:48, t:'bat', src:['06','01','05'],
q:`¿Qué riesgos tienen los tipos de batería que utilizamos para drones? ¿Qué cuidados se debe tener al manipularlas u operarlas?`,
k:`Riesgo de incendio o explosión si están hinchadas, dañadas o en cortocircuito; pierden rendimiento con frío, dan autonomía limitada y son residuos peligrosos. Hay que cargarlas supervisadas con su cargador, revisarlas antes de volar, fijarlas bien y desecharlas correctamente.`,
a:`### Riesgos
• **Incendio o explosión** si la batería está hinchada, dañada o con pérdidas, o ante un cortocircuito (pregunta 38).
• **Bajas temperaturas:** la eficiencia para mantener la carga y entregar corriente **cae mucho**.
• **Tiempo de vuelo limitado:** la mayoría da **entre 20 y 40 minutos**, así que hay que gestionar bien la energía.
• **Impacto ambiental** si se desechan mal.
• **Conectores:** son un punto de falla por **falsos contactos**.

### Cuidados
• Usar el **cargador del fabricante** y **no cargar sin supervisión**.
• **Nunca usar baterías hinchadas o dañadas**; revisarlas antes de cada vuelo.
• Cuidar la **temperatura**.
• Manipularlas con el circuito **sin energía** al armar, respetando la polaridad y sin cables sueltos.
• Montarlas **bien fijadas y arriba del frame** para que no se golpeen (pregunta 57).
• Para empezar, **no pasar de 3S**: las más grandes son más peligrosas.
• **Desecharlas** correctamente.`},

{n:49, t:'bat', src:['06','02'],
q:`¿Cómo se clasifican las baterías? Unidades S, capacidad de corriente C, carga en mAh.`,
k:`S es la cantidad de celdas en serie (3,7 V nominales y 4,2 V cargada cada una), mAh es la capacidad y C la tasa de descarga: ⟦I máx = capacidad (Ah) × C⟧. Además importan la resistencia interna (cuanto más baja, mejor) y el conector.`,
a:`### Voltaje (S, celdas en serie)
Cada celda tiene **3,7 V nominales y 4,2 V cargada**.

| S | Nominal | Cargada |
|---|---|---|
| 1S | 3,7 V | 4,2 V |
| 2S | 7,4 V | 8,4 V |
| 3S | 11,1 V | 12,6 V |
| 4S | 14,8 V | 16,8 V |
| 6S | 22,2 V | 25,2 V |

• Para cargar suelen tener **S + 1 cables** en el conector de balanceo.
• Más S significa más celdas y una batería más grande.
• Como ⟦P = V · I⟧, **más voltaje necesita menos corriente** para la misma potencia.

### Capacidad (mAh)
La energía que puede almacenar. Una batería de **1000 mAh entrega en teoría 1 A durante una hora**.

### Tasa de descarga (C)
La **corriente continua máxima** que entrega sin sobrecalentarse ni dañarse:
⟦I máx (A) = capacidad (Ah) × C⟧
• **Ejemplo:** 1500 mAh y 75C dan ⟦1,5 × 75 = 112,5 A⟧.
• A corriente máxima dura ⟦1 / C⟧ horas: ⟦3600 / 75 = 48 s⟧. La diapositiva dice 32 segundos, pero la cuenta da 48.

### Resistencia interna (IR)
**Cuanto más baja, mejor.** Una batería en buen estado tiene IR baja.

### Conectores
• **XT60:** el más común en drones de 5" o más; soporta corrientes altas.
• **XT30:** drones de 3" o menos y micros.
• **PH2.0 o JST PH:** whoops diminutos y ultramicros.
• **XT90 o AS150:** drones muy grandes o de carga pesada.
• Un conector **facilita el mantenimiento** pero puede dar falsos contactos. **Soldar directo** evita fallas y no lo afectan las vibraciones, pero complica el mantenimiento.`},

{n:50, t:'bat', src:['05','06'], g:true,
q:`¿Qué debemos buscar en una batería según nuestro dron? Acrobático, vuelo estable, carga.`,
k:`Acrobático: alto C y baja capacidad para pesar poco. Vuelo estable: capacidad media o alta priorizando autonomía, o Li ion para crucero. Carga: alta capacidad y buen C, con más celdas para bajar la corriente.`,
a:`| Tipo de dron | Qué buscar |
|---|---|
| **Acrobático o de carreras** | LiPo de **alto C** (picos de corriente), voltaje alto (4S a 6S) y **baja capacidad** para que pese poco |
| **Vuelo estable o cine** | **Capacidad media o alta** priorizando autonomía y suavidad, con C moderado. Para crucero largo, **Li ion** por su densidad energética |
| **Carga** | **Alta capacidad (mAh)** y buen C; **más celdas** para bajar la corriente a igual potencia. Va con motores de bajo Kv y hélices grandes |

• En todos los casos: voltaje compatible con motores y ESC, tamaño y peso que entren en el frame, conector adecuado y que se consiga en plaza.
• Regla de carga: el empuje total debe ser **al menos el doble del peso**, con la batería incluida (pregunta 62).`},

{n:51, t:'sens', src:['04','02'],
q:`Explique qué función cumplen los siguientes sensores y para qué se usan: acelerómetro, giroscopio, magnetómetro, barómetro, geolocalizador, Time of Flight (Rangefinder), LiDAR, Sonar, Optical Flow, etc.`,
k:`Acelerómetro: aceleración y nivel. Giroscopio: rotación y estabilidad. Magnetómetro: rumbo. Barómetro: altura relativa. GPS: posición. ToF y sonar: distancia. LiDAR: mapa 3D. Optical flow: hover estable sin GPS.`,
a:`| Sensor | Qué mide | Para qué se usa |
|---|---|---|
| **Acelerómetro** | Aceleración lineal en 3 ejes ortogonales (MEMS, estructuras tipo diapasón) | Orientación respecto de la gravedad y autonivelación; integrando se estima la velocidad |
| **Giroscopio** | Velocidad de rotación en 3 ejes (antes con un disco girando, hoy MEMS) | Estabilidad: el FC compara el movimiento esperado con el real y corrige |
| **Magnetómetro** | Campo magnético en 3 ejes (MEMS, muchos por fuerza de Lorentz; hay que compensar la temperatura) | Brújula: orientación respecto del norte magnético. Lo afectan líneas de alta tensión, motores e instalaciones industriales |
| **Barómetro** | Presión atmosférica (MEMS) | Altura relativa al despegue, asumiendo que la presión ambiente no cambia |
| **GPS (GNSS)** | Posición y hora UTC por triangulación de satélites con sincronización precisa | Posición, RTH, waypoints. Otros sistemas: GLONASS, Galileo, BeiDou, NavIC |
| **ToF o rangefinder** | El tiempo que tarda una onda en ir y volver, que da la distancia | Altura respecto al suelo, aterrizaje automático, evitar obstáculos |
| **LiDAR** | Un ToF con láser más potente que barre el terreno | Mapeo 3D, reconocimiento del ambiente, identificación de objetivos, evasión de obstáculos |
| **Sonar (ultrasónico)** | Distancia por propagación del sonido | Evitar colisiones en drones chicos |
| **Optical flow** | Una cámara de baja resolución hacia abajo sigue el movimiento del suelo, como un mouse óptico | Hover estable sin GPS (interiores); con un ToF da control preciso de altura y posición |

**Combinaciones:** acelerómetro más giroscopio forman una **IMU de 6 DOF** (por ejemplo el **MPU6050**); con magnetómetro, una **IMU de 9 DOF**.`},

{n:52, t:'sens', src:['02','04','05'], g:true,
q:`Enumere algunos de los protocolos de interconexión de componentes utilizados en drones.`,
k:`Buses para sensores y periféricos (I2C, SPI, UART, CAN), protocolos del FC al ESC (PWM, OneShot, MultiShot, DShot), del receptor al FC (SBUS, CRSF, iBUS, F.Port, SRXL2, PPM), de radio (ELRS, Crossfire, FrSky, FlySky) y de telemetría y configuración (MAVLink, MSP, SmartAudio).`,
a:`### Buses para sensores y periféricos
• **I2C:** bus de dos hilos (SDA y SCL) con direcciones; varios dispositivos en el mismo bus. Barómetro, magnetómetro, displays. En clase: MPU6050, BME280 y el display 1602 con Arduino.
• **SPI:** bus rápido de cuatro hilos (MOSI, MISO, SCK y CS). Se usa para el giroscopio de la IMU, que se lee miles de veces por segundo.
• **UART (serie):** dos hilos (TX y RX) punto a punto. GPS, receptor, VTX, telemetría. La cantidad de UART del FC limita cuántos periféricos podés conectar.
• **CAN o DroneCAN (UAVCAN):** bus robusto y diferencial para GPS, ESC y sensores en drones grandes (ArduPilot y PX4).
• **USB:** configuración y carga de firmware.

### Del FC al ESC
• **PWM**, **OneShot125**, **OneShot42** y **MultiShot:** analógicos, de más lento a más rápido.
• **DShot150, 300, 600 y 1200:** digitales, precisos, sin calibración y con telemetría. El **DShot bidireccional** devuelve las RPM.

### Del receptor al FC
• **SBUS** (Futaba y FrSky), **CRSF** (Crossfire y ELRS), **iBUS** (FlySky), **F.Port** (FrSky), **SRXL2** y **DSM** (Spektrum), **SUMD**, **PPM** (todos los canales por un cable) y PWM por canal (antiguo).

### Radio entre transmisor y receptor
• ELRS, TBS Crossfire, FrSky ACCST y ACCESS, FlySky AFHDS 2A, Spektrum DSMX (pregunta 64).

### Telemetría, configuración y video
• **MAVLink:** telemetría y comandos con la estación de tierra (ArduPilot, PX4).
• **MSP:** protocolo de Betaflight e iNav para configuración, OSD digital (MSP DisplayPort) y periféricos.
• **SmartAudio** y **Tramp:** cambiar canal y potencia del VTX desde el FC.
• **FrSky S.Port** y telemetría CRSF hacia la radio.`},

{n:53, t:'sens', src:['02','04','05'], g:true,
q:`En particular, indique los protocolos usados con los sensores, con el receptor de control remoto, con los ESC, etc.`,
k:`Sensores: SPI para la IMU, I2C para barómetro y magnetómetro, UART para el GPS y CAN en drones grandes. Receptor: SBUS, CRSF, iBUS o F.Port. ESC: PWM, OneShot, MultiShot y DShot, el preferido por ser digital. VTX: SmartAudio, Tramp o MSP.`,
a:`| Enlace | Protocolos | Comentario |
|---|---|---|
| **Sensores con FC** | SPI, I2C, UART, CAN | IMU por SPI (rápido); barómetro y magnetómetro por I2C; GPS por UART (NMEA o UBX); en drones grandes, DroneCAN |
| **Receptor con FC** | SBUS, CRSF, iBUS, F.Port, SRXL2, DSM, SUMD, PPM | Debe soportarlo el firmware (Betaflight, iNav, ArduPilot). SBUS es una señal invertida: algunos FC F4 necesitan un inversor o un pad dedicado |
| **FC con ESC** | PWM, OneShot125 y 42, MultiShot, DShot | DShot es digital, inmune al ruido y no requiere calibración. El bidireccional permite el filtro de RPM |
| **FC con VTX** | SmartAudio, Tramp, MSP | Cambiar canal y potencia desde el OSD |
| **Dron con tierra** | MAVLink, CRSF, S.Port, MSP | Telemetría hacia la radio o la estación de tierra |

**De las clases:** los ejemplos de Arduino con MPU6050, BME280 y el display 1602 usan **I2C**; los receptores se conectan por SBUS o CRSF; los ESC por DShot.`},

{n:54, t:'sens', src:['05'], g:true,
q:`¿Por qué debemos prestar atención a los protocolos usados al integrar un drone por componentes? Elección de nuestros dispositivos.`,
k:`Porque todo tiene que hablar el mismo idioma: transmisor con receptor, receptor con FC, FC con ESC y sensores. Un protocolo que no soporta el hardware o el firmware deja una pieza inutilizable, y además el protocolo define latencia, telemetría y puertos necesarios.`,
a:`• **Compatibilidad de punta a punta:** el transmisor y el receptor deben usar el mismo protocolo de radio, y el receptor y el FC el mismo protocolo serie. Si no coinciden, la pieza no sirve.
• **Soporte del firmware:** cada firmware soporta ciertos protocolos (Betaflight, iNav y ArduPilot tienen listas distintas) y el hardware del FC suma sus propias limitaciones.
• **Puertos disponibles:** cada UART admite un periférico (I2C y CAN admiten varios). Hay que contar UART para receptor, GPS, VTX y telemetría antes de comprar.
• **Niveles eléctricos:** lógica de 3,3 V o 5 V, señales invertidas como SBUS (preguntas 44 a 46).
• **Rendimiento:** el protocolo define latencia y frecuencia de actualización (DShot frente a PWM, CRSF frente a SBUS), y eso se nota en la respuesta del dron.
• **Funciones extra:** telemetría bidireccional, filtro de RPM con DShot bidireccional, control del VTX desde el OSD.
• **Elección de los dispositivos:** conviene elegir el sistema como un conjunto coherente (radio, receptor, FC, ESC y firmware) y no pieza por pieza, para no terminar con componentes que no se entienden entre sí.`},

{n:55, t:'dis', src:['05'],
q:`Explique ventajas y problemas de la elección de un dron compuesto por partes.`,
k:`Armarlo por partes da flexibilidad, ahorro, aprendizaje y reparabilidad, pero exige verificar compatibilidad de protocolos, voltajes y firmware, y lleva más tiempo de integración, testing y debugging. Las alternativas son comprarlo listo, prearmado o en kit.`,
a:`| Opción | Ventajas | Problemas |
|---|---|---|
| **Comprado listo** (DJI, HolyStone) | Marca reconocida, con service y repuestos; software muy probado y actualizado | Caro; dependés del fabricante y de su soporte; poco modificable |
| **Kit prearmado** | Componentes DIY fáciles de reponer en plaza o en el exterior; suele usar software libre bien mantenido | Componentes que pueden no ser de buena calidad |
| **Kit para armar** | Suele salir más barato que comprar todo por separado | Hay que ver qué trae, comprar aparte lo que falte (TX y RX, FPV, baterías, FC) y verificar que todo sea **compatible** |
| **A medida, pieza por pieza** | Todo lo de la pregunta 56 | Exige conocer cada componente y verificar compatibilidad, y después testing y debugging |

### Problemas típicos del armado por partes
• Incompatibilidades de **protocolo** (receptor con FC, FC con ESC).
• Incompatibilidades de **voltaje** (batería, motores, ESC).
• **Firmware** que no soporta el FC o sus periféricos.
• Calidad dispar entre componentes.
• Más tiempo de integración y ajuste.`},

{n:56, t:'dis', src:['05'],
q:`¿Por qué armarse un dron?`,
k:`Para poder modificarlo y repararlo, ajustarlo a tus necesidades, no depender del soporte del fabricante, hacerlo multipropósito, ahorrar y aprender, entendiendo sus capacidades y limitaciones.`,
a:`• Se puede **modificar, mejorar y modernizar**.
• Se **ajusta a tus posibilidades y necesidades** específicas.
• **No dependés de que el fabricante siga dando soporte.**
• Puede ser **multipropósito**, agregando componentes según la tarea.
• Es **más barato** que uno comprado con las mismas prestaciones.
• Es más divertido y **aprendés múltiples tecnologías**.
• **Entendés sus capacidades y limitaciones.**
• **Lo reparás vos mismo en el terreno**, sin depender de un técnico. En trabajo de campo es un plus.`},

{n:57, t:'dis', src:['05','06'],
q:`Explique los criterios de elección de baterías.`,
k:`Conviene empezar por la batería porque define motores y ESC. Para empezar, LiPo de no más de 3S (más de 4S cuesta conseguir en Uruguay), en un frame donde quepa bien fijada y arriba, con voltaje, C, resistencia interna y conector adecuados y repuestos disponibles.`,
a:`• **Empezar por las baterías:** definen los motores y los ESC. Otros proponen empezar por el frame (pregunta 58).
• Las baterías son **LiPo**.
• **En Uruguay es complicado conseguir más de 4S**, y las tan grandes son peligrosas: **para empezar, no más de 3S**.
• En aparatos chicos conviene un **FC con todo integrado** (PDB y ESC 4 en 1) diseñado para esa batería.
• **El tamaño de la batería define el frame** y viceversa: tiene que haber lugar para sostenerla bien fijada, muchas veces con **cintas de velcro**.
• **Posición:**
  • **Acostada** (apoyada sobre el lado más largo) por equilibrio y estabilidad. Se puede compensar por software, pero afecta la agilidad.
  • **Preferentemente arriba del frame**, para que no se golpee en un aterrizaje fuerte.
  • **Abajo puede causar efecto péndulo**, también compensable con parámetros.
  • Muchos FPV aterrizan en la mano y no tienen tren de aterrizaje.
• **Verificar que se consigan** para poder reponerlas.
• De la clase 6: voltaje que coincida con motores y ESC, C suficiente para los picos, **resistencia interna baja** y **conector** adecuado (XT30, XT60, XT90).`},

{n:58, t:'dis', src:['05'],
q:`Explique los criterios de elección de un frame.`,
k:`Se elige por wheelbase (distancia diagonal de motor a motor en mm), que define el tamaño de la hélice y el uso: chicos para agilidad y carreras, grandes para estabilidad, eficiencia, carga y largo alcance. También pesan el material, la rigidez y el espacio disponible.`,
a:`• Muchos proponen **empezar por el frame**.
• Se clasifica por **wheelbase**: la **distancia diagonal de motor a motor en mm**, que se relaciona sobre todo con el **tamaño de la hélice**.

| Wheelbase | Hélice | Uso |
|---|---|---|
| 80 a 180 mm | Chicas | Juguetes y micro acrobáticos; pocos minutos de batería, menos de US$ 200 |
| 180 a 220 mm | Hasta 5" | Freestyle y carreras: ágiles y rápidos |
| 220 a 250 mm | Hasta 6" | Equilibrio entre agilidad y resistencia; freestyle y largo alcance |
| 280 mm o más | Hasta 7" | Largo alcance y más carga, vuelos prolongados |
| 450 mm o más (F450) | 8" a 10" | Carga, recorridos largos, equipamiento científico |
| 540 mm (21") | Mayores | Hasta 7 kg de carga y 130 km/h |

### Cómo afecta el tamaño
• **Agilidad frente a estabilidad:** uno chico con hélices chicas da un control rápido y sensible; uno grande es más estable pero menos ágil.
• **Empuje y eficiencia:** uno grande permite hélices grandes, con más empuje y eficiencia: más carga o más tiempo de vuelo.
• **Velocidad y resistencia:** los chicos alcanzan más velocidad máxima; los grandes sostienen mejor la velocidad en distancias largas.
• **Vibración:** hélices grandes y frames poco rígidos vibran más, y eso afecta el video y la estabilidad.

Sumá lo de la pregunta 14: material, peso, forma, modularidad y espacio para la batería y el FC.`},

{n:59, t:'dis', src:['05'],
q:`Explique los criterios de elección de hélices.`,
k:`El tamaño lo define el frame; se eligen el paso, las aspas y la forma según el uso. Paso bajo: respuesta ágil, menos consumo y más eficiencia en hover. Paso alto: más empuje y velocidad, pero más consumo, calor y ruido.`,
a:`• **El tamaño lo define principalmente el frame.** Lo que se elige es el paso, la cantidad de aspas, la forma y el perfil.
• Hay que **analizar el empuje esperado del par motor y hélice**.
• **Paso:** la distancia que avanzaría en una vuelta en un medio sólido. Está directamente relacionado con el **ángulo de ataque**.

| | Paso bajo | Paso alto |
|---|---|---|
| Mordida del aire | Menor, con menor ángulo de ataque | Mayor, con mayor ángulo de ataque |
| Respuesta | Cambios de RPM rápidos, control ágil y preciso | Más lenta por la inercia, control menos preciso |
| Empuje y velocidad máxima | Menores | Mayores |
| Carga del motor | Menos torque y corriente: **más tiempo de vuelo** | Más torque, corriente y calor: **menos tiempo de vuelo**. Pide motores y baterías capaces de dar picos |
| Vibración y ruido | Menos vibración por turbulencia | **Más ruidosas** |
| Eficiencia | Mejor en hover y vuelo lento | Menor |
| Uso | Freestyle, cine, crucero de largo alcance | Carreras, alta velocidad |

### Ejemplo para un FPV de 220 mm
Hélices de 5" con pasos de 3,1 a 5,1:
• **5x3,1:** freestyle suave.
• **5x4:** la típica; sirve para vuelo con carga.
• **5x4,3:** equilibrio entre freestyle y carreras.
• **5x4,8 a 5x5,1:** carreras puras, máxima velocidad y gran consumo.

### Según el tipo de dron (sugerencias, hay que experimentar)
• **Cinewhoop** (filma en interiores cerca de gente, con hélices protegidas por ductos): vuelo estable, lento y eficiente, con **varias aspas y paletas anchas**.
• **Larga distancia:** **dos aspas** finas y largas, de perfil bajo y bajo ángulo de ataque.
• **FPV y carreras:** hélices **chicas, normalmente de tres aspas**.`},

{n:60, t:'dis', src:['05','03'],
q:`Explique las fuerzas que afectan a una hélice.`,
k:`Fuerza centrífuga (la dominante, hacia afuera), torsión y flexión por la resistencia del aire, flexión por el empuje y torsión aerodinámica que tiende a aumentar el ángulo de ataque. Aerodinámicamente cada pala genera empuje y un torque que se opone al motor.`,
a:`Mirando cómo se rompió una hélice se puede saber por qué falló. Sobre su estructura actúan cuatro fuerzas:
1. **Fuerza centrífuga:** la **más dominante**. Tira de las palas **hacia afuera**, alejándolas del cubo, por la alta velocidad de rotación.
2. **Torsión y flexión por la resistencia del aire:** el aire resiste el giro y tiende a **doblar las palas en sentido opuesto a la rotación**.
3. **Flexión por empuje:** al empujar el aire hacia atrás, la reacción **dobla las palas hacia adelante o hacia arriba**.
4. **Torsión aerodinámica:** el perfil genera un momento sobre su **centro de presión** que intenta **girar la pala hacia un ángulo de ataque mayor**.

### Desde la aerodinámica (clase 3)
• Cada pala es un ala en rotación: genera **sustentación** perpendicular al viento relativo, cuya componente axial es el **empuje T**, y **arrastre**, que se traduce en el **torque aerodinámico Qh** que se opone al motor.
• El giro es estable cuando ⟦Qm = Qh⟧; si la hélice no carga lo suficiente, el motor se pasa de vueltas.
• En maniobras aparecen además el **momento angular** y los **pares giroscópicos** (pregunta 86).`},

{n:61, t:'dis', src:['05','03','02'],
q:`¿Qué relación hay entre la elección de la hélice y el ruido causado por el dron?`,
k:`Más paso, más aspas, más velocidad de punta y los vórtices de punta aumentan el ruido. La forma de la pala define el costo del empuje en potencia y ruido, y existen hélices diseñadas específicamente para ser silenciosas.`,
a:`• **Paso alto:** las hélices son más ruidosas que las de paso bajo.
• **Más aspas:** más ruido (pregunta 19).
• **Mayor velocidad de punta** (⟦v = ω · r⟧): diámetro grande con RPM altas hace más ruido (pregunta 92).
• **Vórtices de punta:** generan ruido y cuestan energía (pregunta 97).
• La **forma en planta** de la pala define el costo del empuje: potencia y ruido.
• Hay **hélices diseñadas para minimizar el ruido**, por ejemplo para drones de delivery (caso de análisis en clase).`},

{n:62, t:'dis', src:['05','02'],
q:`Explique los criterios de elección de motores.`,
k:`Frame, batería y hélice ya acotan el motor. Se elige por tamaño del estator (2207 es 22 mm por 7 mm), Kv (RPM por voltio: alto para carreras, bajo para carga) y configuración de polos NP. El empuje total debe ser al menos el doble del peso.`,
a:`### Las elecciones anteriores ya acotan mucho
• El **frame** define el tamaño y la potencia del motor.
• La **batería** define el voltaje que tiene que soportar, y además es uno de los pesos más importantes.
• La **hélice** define el **eje** donde se atornilla (se puede adaptar con anillos).
• Igual conviene **ver experiencias de otros y experimentar**.

| Frame | Hélice | Motor | Kv |
|---|---|---|---|
| 150 mm o menos | 3" o menos | 1105 a 1306 | 3000 o más |
| 180 mm | 4" | 1806 | 2600 a 3000 |
| 210 mm | 5" | 2204 a 2208, 2306 | 2300 a 2600 |
| 250 mm | 6" | 2204 a 2208, 2306 | 2000 a 2300 |
| 350 mm | 7" | 2208 | 1600 |
| 450 mm | 8" a 10" o más | 2212 o mayor | 1000 o menos |

### Tamaño (4 dígitos)
Los dos primeros son el **diámetro del estator** y los dos últimos la **altura**, en mm. Un **2207** mide 22 mm por 7 mm.
• **Estator grande** (2207, 2306): más torque y empuje, más peso, para hélices más grandes. 5" de carreras y freestyle.
• **Estator chico** (1105, 1404): más eficiente, menos potente y liviano. Micros y cinewhoops.

### Kv
RPM por voltio **sin carga**. Un motor de **2400 Kv con una 4S cargada (16,8 V) da unas 40.320 RPM** teóricas.
• **Kv alto (2500 a 3000):** carreras, hélices chicas.
• **Kv medio (1700 a 2200):** freestyle de 5".
• **Kv bajo (900 a 1500):** largo alcance, carga pesada, hélices grandes; más torque.

### Configuración NP (por ejemplo 12N14P)
El número antes de la N son los **electroimanes del estator** y el de antes de la P los **imanes permanentes del rotor**.
• **Más polos:** más torque, giro más suave, menos vibración y menos cogging.
• **Menos polos:** menos conmutación eléctrica y más eficiencia a altas RPM.
• **El ESC tiene que estar configurado según la cantidad de polos.**

### Capacidad de carga
• **El empuje total tiene que ser al menos el doble del peso total** (dron más carga).
• **Ejemplo:** dron de 1,5 kg con 1 kg de carga da 2,5 kg en total: hace falta un **empuje de al menos 5 kg**.
• **MTOW** (peso máximo de despegue): dron más carga; **superarlo es peligroso**.
• Más carga obliga a motores, hélices y baterías más grandes, que a su vez pesan más: hay que equilibrar con el tiempo de vuelo.
• **El empuje se mide con un banco de empuje:** motor y hélice sobre una balanza o celda de carga (1 kg equivale a unos 9,81 N).

| Carga útil | Tipo de dron |
|---|---|
| 0 a 500 g | Aficionado: cámaras de acción, sensores chicos |
| 500 g a 2 kg | Consumidor avanzado: mejores cámaras, sensores especializados |
| 2 a 10 kg | Comercial: cine profesional, topografía, entregas chicas |
| Más de 10 kg | Industrial: inspección, paquetes voluminosos |`},

{n:63, t:'dis', src:['05','02'],
q:`Explique los criterios de elección de controlador de vuelo.`,
k:`Separación de tornillos estándar (20, 25, 30 o 40 mm), compatibilidad con el firmware según el uso, procesador (F4 es el estándar; F7 y H7 para más exigencia), cantidad y tipo de puertos, y si integra PDB, BEC y ESC.`,
a:`### Montaje
Los FC tienen **separaciones estándar de tornillos de 20, 25, 30 y 40 mm**. Los frames traen agujeros estándar o soportes adaptables; si no, se puede **imprimir un adaptador en 3D**.

### Compatibilidad con el firmware
No todo FC corre cualquier firmware: depende del procesador, los sensores y el manejo de puertos.
• **FPV y carreras:** Betaflight, KISS (propietario, para sus FC) y Emuflight.
• **Automatización y servicios:** iNav y ArduPilot.
• Algunos firmwares tienen mucho desarrollo activo y otros llevan años parados.

### Procesadores (ARM Cortex M de STMicroelectronics o GigaDevice)
| MCU | Núcleo y reloj | Potencia | Uso |
|---|---|---|---|
| STM32F1 | M3, 72 MHz | Lento, obsoleto | Cleanflight y Naze32 viejos |
| STM32F3 | M4, 72 a 100 MHz | Bajo | Betaflight antiguo, no recomendado |
| **STM32F4** | M4F con FPU, 168 a 216 MHz | Medio | **El estándar de los drones de 5" actuales** |
| STM32F7 | M7, 216 a 400 MHz | Alto | Filtros avanzados, bucles rápidos, OSD, CAN, protocolos duales |
| STM32H7 | M7, 400 a 480 MHz | Muy alto | Preparado para el futuro, IMU dual |
| GD32F4 | Clon de F411 y F405, 168 a 200 MHz | Medio | Alternativa más barata al F4 |

### Además
• La capacidad de procesamiento.
• La **cantidad y el tipo de puertos de entrada y salida**.
• Qué dispositivos soporta el software. Se pueden cargar o compilar bibliotecas alternativas, pero eso implica testing y debugging.
• Si trae **PDB, BEC y ESC 4 en 1 integrados** o en combo.`},

{n:64, t:'dis', src:['05'],
q:`Explique los criterios de elección de sistema de radiocontrol.`,
k:`Transmisor y receptor con el mismo protocolo de radio, y receptor y FC con el mismo protocolo serie soportado por el firmware. Se elige por latencia, alcance y uso: ELRS es hoy la mejor opción general y Crossfire se destaca en largo alcance.`,
a:`### Dos reglas de compatibilidad
1. **Transmisor y receptor:** el **mismo protocolo de radio** (ambos ELRS o ambos Crossfire).
2. **Receptor y FC:** el **mismo protocolo serie** (SBUS, CRSF, etc.).

| Sistema | Radio | Conexión al FC | Latencia | Alcance | Uso |
|---|---|---|---|---|---|
| **ELRS** (ExpressLRS) | LoRa | CRSF | menos de 5 ms | más de 20 km | **La mejor elección actual** (FPV y largo alcance) |
| **TBS Crossfire** | LoRa | CRSF | 5 a 12 ms | más de 50 km | Largo alcance, confiable |
| FrSky ACCST | 2,4 GHz FHSS | SBUS | 15 a 25 ms | unos 1 km | Viejo pero muy usado |
| FrSky ACCESS | FHSS mejorado | F.Port | 10 a 20 ms | 1 a 2 km | El nuevo de FrSky |
| FlySky AFHDS 2A | FHSS | iBUS | 20 a 30 ms | 0,5 a 1 km | Nivel de entrada, barato |
| Spektrum DSMX | DSSS y FHSS | SRXL2 o SBUS | 20 a 30 ms | 1 a 2 km | Aviones RC y cuadricópteros viejos |

### Protocolos de receptor por firmware
• **Betaflight:** SBUS, CRSF, iBUS, Spektrum, MSP RX. El más flexible para FPV.
• **iNav:** SBUS, CRSF, iBUS, PPM. Se usa con GPS.
• **ArduPilot y PX4:** SBUS, CRSF, SRXL2, SUMD, DSM. También sirve para CAN o UAVCAN.

### Recomendación según el dron
• **Principiante o tinywhoop de interior:** FlySky o FrSky, baratos y simples.
• **Freestyle y carreras FPV:** ELRS 2,4 GHz, rápido y barato.
• **FPV de largo alcance con GPS:** ELRS 900 MHz o Crossfire, por penetración y telemetría.
• **ArduPilot y autónomos con plan de vuelo:** Crossfire o CRSF, por telemetría y robustez.
• **Cinewhoop:** ELRS o Spektrum, por control estable.

### Ejemplos de clase
• **FlySky FS i6X:** 2,4 GHz con salto de frecuencia (FHSS), AFHDS 2A con modulación GFSK para reducir el ancho de banda, hasta 10 canales (6 por defecto) y resolución de 12 bits. Codifica en PWM o en CPPM, resistente a ecos y rebotes; la versión 2 soporta SBUS e iBUS.
• **ELRS 2,4 GHz:** open source, con LoRa y FLRC y hasta 16 canales. El receptor tiene LNA para mejor recepción, envía telemetría y se conecta por CRSF.

Después, **iterar** sobre todos estos parámetros hasta llegar a una combinación adecuada.`},

{n:65, t:'bat', src:['06','02'],
q:`Explique el funcionamiento de la unidad de distribución de energía (PDB).`,
k:`Recibe la energía de la batería por una entrada central y la distribuye por varias salidas a los ESC y a la electrónica. Puede integrar un BEC, venir dentro del FC o del chasis, y es indispensable cuando el control lo hace un Arduino o una Raspberry Pi.`,
a:`**Qué es:** una placa de circuito que **recibe la energía de la batería y la distribuye** de forma segura y eficiente a todo lo que consume.
• Tiene **una entrada central** (la batería) y **múltiples salidas**: una para cada ESC, más el FC, la cámara FPV, el VTX, el receptor, el GPS y los LED.

### Dónde va
• Puede ir **integrada al chasis**.
• En drones chicos va **integrada al FC**.
• **Hace falta una PDB aparte cuando el FC no la integra.** Un **Arduino o una Raspberry Pi no pueden entregar la corriente de los motores**, así que la potencia tiene que ir por otro circuito.

### Funciones extra
• **Reguladores de voltaje (BEC integrado):** bajan el voltaje de la batería a 5 V o 12 V estables para la lógica y los sensores.
• **Distribuir voltajes distintos** de diferentes baterías.
• **Interfaz para el OSD**, aprovechando que por ahí pasan la alimentación y la señal de video.

### Qué cuidar (clase 2)
Que soporte la corriente total, que tenga el BEC que se necesita, cómo se integra con el ESC 4 en 1 y la prolijidad del cableado.`},

{n:66, t:'bat', src:['06'],
q:`¿Qué es un smoke stopper?`,
k:`Es un interruptor de protección que corta, avisa o limita cuando detecta un consumo excesivo, con un umbral configurable. Se usa al probar en el banco, sobre todo al energizar por primera vez, para que un cortocircuito no queme componentes.`,
a:`• Es un **interruptor de protección** que **corta, avisa o limita** cuando detecta un **consumo excesivo**, con un umbral configurable.
• Se pone **entre la batería y el dron al probar en el banco**, sobre todo la primera vez que se energiza después de armar o soldar.
• **Evita que se quemen componentes** por cortocircuitos o errores de conexión, y da tranquilidad al probar.
• Hay quien lo hace **artesanalmente** y hay versiones comerciales.`},

{n:67, t:'bat', src:['06'],
q:`¿Por qué podemos precisar de un sistema de gestión de batería? ¿En qué casos puede ser importante?`,
k:`El BMS supervisa la batería: balancea las celdas, protege contra sobretensión, subtensión y temperatura, informa el estado al FC y estima el tiempo restante para planificar el regreso. Es clave con muchas celdas, vuelos largos o autónomos, cargas valiosas y temperaturas extremas.`,
a:`**Qué es:** un sistema electrónico que **supervisa el estado y la seguridad** de la batería. Puede ir **integrado en la batería** o ser **parte de la PDB o del FC**, usando su procesamiento y sus sensores de corriente y voltaje.

### Funciones
• **Balanceo de celdas:** que todas queden cargadas por igual.
• **Protección contra sobretensión y subtensión.**
• **Gestión térmica** para evitar el sobrecalentamiento.
• En las versiones inteligentes, **enviar en tiempo real** el estado de carga y la salud de la batería al FC.
• **Estimar el tiempo de uso restante** para **planificar el regreso al punto de partida**.

### Cuándo es importante
• Baterías de **muchas celdas**, donde el desbalance es más probable y más peligroso.
• **Vuelos largos o autónomos**, donde hay que decidir a tiempo cuándo volver.
• **Cargas valiosas o vuelos sobre zonas sensibles**: un corte de energía es un accidente.
• **Temperaturas extremas.**
• Para **alargar la vida útil** de la batería y evitar incendios.

### Estrategias de gestión de energía (para discutir)
• **Batería:** carga y descarga inteligente, estado de carga (SOC), salud de la batería y ajuste dinámico de la potencia.
• **Vuelo eficiente:** crucero de bajo consumo, optimización de altitud, velocidad y plan de vuelo.
• **Monitoreo del consumo** por telemetría o a bordo.
• **Regeneración y cosecha de energía:** frenado regenerativo, paneles solares, aprovechar viento y térmicas, recuperación de energía cinética (KERS).
• **IA:** machine learning para una gestión adaptativa en tiempo real.
• **Comunicaciones de bajo consumo:** LPWAN y LoRaWAN, data rate adaptativo, TDM, módulos RF eficientes (BLE, WiFi HaLow), enviar datos solo cuando hace falta y comprimirlos.
• **Navegación de bajo consumo:** GPS asistido y cambio de modo del GPS, alternativas como RFID o SLAM, IMU y control visual, rutas pensadas según la energía.
• **Fusión de sensores:** combinar fuentes para estimar un dato no disponible, como usar la IMU cuando no hay GPS.`},

{n:68, t:'vuelo', src:['06','05'],
q:`Indique una lista de verificaciones importantes a realizar antes del vuelo.`,
k:`Revisar el dron (batería, hélices, gimbal, motores, firmware, carga útil y MTOW), el ambiente (clima, zonas de exclusión, obstáculos, señal GPS) y el control y el software (batería del control, diagnósticos, calibración de brújula e IMU, límites y altura de RTH).`,
a:`### 1. El dron
• **Batería** completamente cargada y **sin hinchazón, pérdidas ni daños**: puede prender fuego.
• **Hélices** sin grietas ni muescas y **bien fijadas**; soportan tensiones muy fuertes.
• **Gimbal y cámara:** lente limpia; el gimbal se mueve libre y se nivela solo al encender.
• **Motores:** girarlos a mano para ver que giran suaves, sin resistencia ni ruidos, y sin mugre.
• **Firmware** actualizado en el FC, la batería y el control.
• **Carga útil** bien fijada y equilibrada, **sin superar el MTOW**.

### 2. Ambiente y ubicación
• **Clima:** nada de viento fuerte, lluvia ni niebla espesa.
• **Zonas de exclusión:** aeropuertos, bases militares y concentraciones de gente (preguntas 9 y 10).
• **Obstáculos:** árboles, líneas eléctricas, edificios.
• **GPS:** esperar **suficientes satélites** antes de despegar; sin eso no funciona bien el regreso al punto de partida.

### 3. Control remoto y software
• **Batería del control** cargada.
• **Diagnóstico en la app**, sin mensajes de advertencia.
• **Calibrar la brújula y la IMU** según el fabricante. La brújula se calibra en un **lugar abierto, lejos de metales**.
• **Configuración:** límites de altura y distancia, y **altura del RTH** adecuados al vuelo.

### Lo que suman otras clases
• Revisar conexiones y polaridad, sin cables sueltos; usar un smoke stopper la primera vez que se energiza.
• En drones como el E88: apoyarlo en una superficie plana, encender dron y control, calibrar con la combinación de palancas del manual y compensar la deriva con los trims (si se va a la derecha, tocar la calibración hacia la izquierda). Sacar las pilas del control antes de guardarlo porque se sulfatan.`},

{n:69, t:'vuelo', src:['05'], g:true,
q:`Explique cómo funciona un control remoto para dron.`,
k:`El transmisor lee las palancas y llaves, las convierte en valores de canal y los envía por radio; el receptor apareado los decodifica y se los pasa al FC por un protocolo serie, y el FC los interpreta como consignas para calcular la velocidad de cada motor. Puede devolver telemetría y tiene failsafe.`,
a:`1. **Entrada:** las palancas (gimbals con potenciómetros o sensores Hall) y las llaves generan un valor por canal, típicamente entre 1000 y 2000 µs. Hay cuatro canales principales (throttle, yaw, pitch y roll) y canales auxiliares para armar, cambiar modos de vuelo o activar funciones.
2. **Transmisión:** el transmisor codifica los canales y los envía por radio, en 2,4 GHz o en 868 y 915 MHz, con salto de frecuencia (FHSS) para evitar interferencias. Protocolos: ELRS, Crossfire, FrSky, FlySky, Spektrum.
3. **Recepción:** el receptor está **apareado (bind)** con ese transmisor; decodifica la señal y la pasa al FC por SBUS, CRSF, iBUS, etc.
4. **Interpretación:** el FC toma esos valores como consignas (ángulo o velocidad de giro deseados y empuje) y su lazo de control calcula la velocidad de cada motor.
5. **Telemetría:** muchos sistemas devuelven datos al transmisor (batería, RSSI, GPS).
6. **Failsafe:** si se pierde el enlace, el FC ejecuta una acción segura (aterrizar, volver al punto de partida o cortar motores).

**Modos de palancas:** en **Modo 2**, el más común, la palanca izquierda controla throttle (arriba y abajo) y yaw (izquierda y derecha), y la derecha controla pitch (adelante y atrás) y roll (izquierda y derecha). En Modo 1 se intercambian throttle y pitch.

**Ejemplo de clase (E88):** funciona con 3 pilas AA y se comunica por WiFi abierto, así que también se maneja desde una app en el celular. Tiene botones de despegue, aterrizaje, modo headless, velocidad (30, 60 y 100%), foto, vuelta de 360° y trims para compensar la deriva.`},

{n:70, t:'vuelo', src:['05','03'], g:true,
q:`Explique cómo un drone logra la sustentación (throttle y hovering), desde el punto de vista del control remoto y desde el punto de vista de la velocidad de los motores.`,
k:`Desde el control, el throttle es la palanca izquierda arriba y abajo (Modo 2). En los motores, los cuatro cambian la velocidad por igual: hay hover cuando el empuje total iguala al peso, sube si lo supera y baja si es menor, sin girar porque los pares CW y CCW siguen equilibrados.`,
a:`[[quad:throttle]]
### Desde el control remoto
• **Modo 2:** palanca izquierda, arriba y abajo.
• En modo manual (acro o angle) la posición de la palanca es el empuje total. En los modos que **mantienen la altitud**, la palanca al centro significa mantener la altura (usa el barómetro).

### Desde los motores
• Los **cuatro motores** cambian la velocidad **por igual**.
• **Hover:** ⟦T total = m · g⟧. El empuje de cada hélice crece con el cuadrado de las RPM (⟦T ∝ n²⟧), así que alcanzan pequeños cambios de velocidad.
• **Subir:** empuje total mayor que el peso. **Bajar:** menor que el peso.
• Como los pares CW y CCW cambian igual, el par de reacción sigue anulado y el dron **no gira** sobre sí mismo.
• La densidad del aire importa: con aire menos denso (altura, calor) hacen falta más RPM para el mismo empuje (pregunta 88).`},

{n:71, t:'vuelo', src:['05'], g:true,
q:`Explique cómo se hace para que un drone se mueva en una dirección determinada (pitch y roll), desde el punto de vista del control remoto y desde el punto de vista de la velocidad de los motores.`,
k:`Desde el control, pitch es la palanca derecha adelante y atrás, y roll es la misma palanca a izquierda y derecha. En los motores se acelera el par opuesto al lado hacia el que querés ir: el dron se inclina y la componente horizontal del empuje lo desplaza.`,
a:`[[quad:pitch_adelante]]
### Desde el control remoto (Modo 2)
• **Pitch:** palanca derecha, adelante y atrás.
• **Roll:** palanca derecha, a izquierda y derecha.

### Desde los motores
• **Adelante (pitch):** aceleran los **dos traseros** y frenan los **dos delanteros**. La nariz baja, el empuje se inclina hacia adelante y su componente horizontal acelera al dron hacia adelante.
• **Atrás:** al revés.
• **Derecha (roll):** aceleran los **dos izquierdos** y frenan los **dos derechos**. El dron se inclina a la derecha y se desplaza a la derecha.
• **Izquierda:** al revés (pregunta 101).
• Al inclinarse, la componente vertical del empuje es ⟦T · cos θ⟧, menor que T. Para no perder altura el FC sube un poco el empuje total.
• Se cambian pares del mismo lado, que tienen un motor CW y uno CCW, así el par de yaw sigue equilibrado.`},

{n:72, t:'vuelo', src:['05','03'], g:true,
q:`Explique cómo se hace para que un drone rote sobre sí mismo (yaw), desde el punto de vista del control remoto y desde el punto de vista de la velocidad de los motores.`,
k:`Desde el control, yaw es la palanca izquierda a izquierda y derecha (Modo 2). En los motores se acelera el par diagonal que gira en sentido contrario al giro deseado y se frena el otro, manteniendo el empuje total para no cambiar la altura.`,
a:`[[quad:yaw_derecha]]
### Desde el control remoto
• **Modo 2:** palanca izquierda, a izquierda y derecha.

### Desde los motores
• Los motores diagonales giran en el **mismo sentido**: un par CW (horario) y un par CCW (antihorario).
• Cada hélice genera un **par de reacción** sobre el cuerpo en sentido **contrario** a su giro. En hover los dos pares se anulan.
• **Girar a la derecha (horario visto desde arriba):** se **aceleran los motores que giran en sentido antihorario** y se frenan los horarios. Sobra par de reacción horario y el cuerpo gira a la derecha.
• **Girar a la izquierda:** al revés.
• La suma de empujes se mantiene constante, así que el dron **no sube ni baja**.
• El par de reacción es más débil que las diferencias de empuje, por eso el yaw suele ser el giro más lento de un cuadricóptero.`},

{n:73, t:'vuelo', src:['04','02'], g:true,
q:`¿Qué es la telemetría en drones? Explique el funcionamiento de un Sistema de Navegación Global por Satélite. Explique cómo podemos disminuir el error de navegación.`,
k:`La telemetría envía en tiempo real datos del dron a tierra. Un GNSS calcula la posición midiendo el tiempo de viaje de las señales de al menos cuatro satélites. El error se reduce con más constelaciones y frecuencias, correcciones diferenciales (DGPS, RTK, SBAS), buena ubicación de la antena y fusión con otros sensores.`,
a:`### Telemetría
• Datos **desde el dron hacia tierra** en tiempo real: voltaje y corriente de batería, RSSI y calidad del enlace, posición GPS, altura, velocidad, actitud, modo de vuelo y alarmas.
• Viaja por el mismo enlace de control (CRSF, ELRS, S.Port) o por una radio de telemetría aparte (MAVLink en 433 o 915 MHz).
• Se ve en la radio, en el OSD o en una **estación de tierra** (QGroundControl, Mission Planner).

### Cómo funciona un GNSS
• Constelaciones: **GPS** (EE.UU.), **GLONASS** (Rusia), **Galileo** (Unión Europea), **BeiDou** (China) y **NavIC** (India).
• Cada satélite transmite su posición (efemérides) y la hora exacta de sus relojes atómicos.
• El receptor mide cuánto tardó cada señal y calcula la distancia a cada satélite (pseudodistancia).
• Con **al menos cuatro satélites** resuelve las tres coordenadas y el error de su propio reloj (trilateración; en clase se la llama triangulación). Así obtiene la posición y la hora UTC.

### Fuentes de error
• Retardo ionosférico y troposférico (refracción atmosférica) y lluvia.
• **Multitrayecto:** rebotes en edificios.
• Errores de reloj y de órbita, y mala geometría de los satélites.
• Interferencias e incluso error inyectado a propósito en conflictos.

### Cómo disminuir el error
• Receptores **multiconstelación** y de **doble frecuencia**: más satélites, mejor geometría y cancelación del retardo ionosférico.
• **Corrección diferencial:** un GPS de referencia en un punto conocido mide el error y se le resta a la medición. Con **RTK** se llega a **centímetros**. También hay correcciones satelitales SBAS (WAAS, EGNOS).
• **Montaje:** antena elevada, con cielo despejado y lejos de interferencias eléctricas.
• **Esperar suficientes satélites** antes de despegar.
• **Fusión de sensores** con IMU, barómetro, magnetómetro y optical flow mediante un filtro de Kalman (preguntas 110 y 111).`},

{n:74, t:'vuelo', src:['02'], g:true,
q:`Explique qué es el FPV. Indique protocolos, frecuencias de radio y tecnologías.`,
k:`FPV (First Person View) es pilotar viendo en vivo lo que capta la cámara del dron, en goggles o en un monitor. Usa video analógico o digital, sobre todo en 5,8 GHz, con el control en 2,4 GHz o en 868 y 915 MHz, y protocolos como SmartAudio, MSP y CRSF.`,
a:`**Qué es:** la cámara del dron envía video en vivo por el VTX a unos goggles o un monitor, y el piloto vuela como si estuviera a bordo.

### Tecnologías
| | Analógico | Digital |
|---|---|---|
| Ejemplos | Sistemas NTSC o PAL | DJI O3 y O4, Walksnail, HDZero, OpenHD, OpenIPC |
| Latencia | Muy baja | Mayor (HDZero es la excepción: baja y fija) |
| Imagen | Baja resolución, con nieve si la señal es débil | HD, pero se corta de golpe |
| Costo | Barato | Caro |

### Frecuencias
• **Video:** sobre todo **5,8 GHz**, con bandas A, B, E, F y R (Raceband). También 1,2 y 1,3 GHz para largo alcance analógico, y 2,4 GHz en drones baratos por WiFi (como el E88).
• **Control:** 2,4 GHz (ELRS, FrSky, FlySky) y 868 o 915 MHz para largo alcance (ELRS 900, Crossfire).
• Hay que respetar las **regulaciones de frecuencia y potencia** de cada país (en Uruguay, la URSEC).

### Protocolos
• **VTX:** SmartAudio, Tramp o MSP para cambiar canal y potencia desde el OSD.
• **OSD:** chip MAX7456 en analógico y MSP DisplayPort en digital.
• **Control y telemetría:** CRSF, SBUS, MAVLink.
• **Software:** OpenHD (video, telemetría, OSD, audio y control en un solo canal digital por WiFi broadcast) y OpenIPC (firmware abierto para cámaras).

Goggles y VTX: preguntas 27 y 35.`}

);

/* Tarjetas 75 a 97: aerodinámica (clase 3) */
(window.DDANT_CARDS = window.DDANT_CARDS || []).push(

{n:75, t:'aero', src:['03'],
q:`¿Qué es un perfil aerodinámico y qué elementos geométricos lo componen?`,
k:`Es la sección transversal de un ala, una pala o una superficie sustentadora, analizada en 2D. Sus elementos son el borde de ataque y el de fuga, la cuerda, la línea de curvatura media, el espesor máximo, el radio del borde de ataque, la curvatura máxima, el extradós y el intradós.`,
a:`[[svg:perfil]]
**Definición:** la sección que sale de cortar transversalmente un ala, una pala de hélice o una superficie sustentadora. El flujo se analiza en **2D** (x e y), sin depender de la envergadura.

### Elementos geométricos
1. **Borde de ataque:** el frente, donde pega primero el aire. Su curvatura influye en la suavidad del flujo y en la resistencia.
2. **Borde de fuga:** el extremo trasero, donde el aire se separa. Influye en la eficiencia y en la formación de vórtices.
3. **Cuerda:** la recta que une el borde de ataque con el de fuga. Es la referencia para medir el ángulo de ataque.
4. **Línea de curvatura media:** une los puntos medios entre extradós e intradós. Define el **camber**, clave para la sustentación.
5. **Espesor máximo:** la mayor distancia entre extradós e intradós. Afecta la resistencia y la rigidez.
6. **Radio de curvatura del borde de ataque:** define cómo se comporta el flujo en esa zona crítica.
7. **Curvatura máxima:** ubicación y magnitud de la mayor distancia entre la cuerda y la línea media.
8. **Extradós:** la cara superior, normalmente más curvada.
9. **Intradós:** la cara inferior, normalmente menos curvada.

**Tipos:** finos o gruesos, curvos o poligonales, **simétricos o asimétricos**. El perfil puede cambiar a lo largo del ala o de la pala.`},

{n:76, t:'aero', src:['03'],
q:`Explique la diferencia entre flujo laminar y flujo turbulento.`,
k:`En el laminar las partículas se mueven en capas paralelas y ordenadas, con poco arrastre pero muy sensible a perturbaciones. En el turbulento el movimiento es caótico, con más arrastre por fricción pero mejor adherencia a la superficie, lo que retrasa la separación y el stall.`,
a:`| | Laminar | Turbulento |
|---|---|---|
| Movimiento | Capas paralelas y ordenadas, sin mezclarse | Caótico, con remolinos, vórtices y fluctuaciones |
| Cuándo aparece | Baja velocidad, cuerpos chicos, cerca del borde de ataque | Alta velocidad o cuerpos grandes |
| Arrastre por fricción | Bajo | Alto |
| Ante perturbaciones | Sensible: se vuelve turbulento fácil | Robusto |
| Separación del flujo | Se separa más fácil | Se adhiere mejor y retarda la separación y el stall |

• El laminar es deseable porque reduce el arrastre, pero es difícil de mantener (viento, vibraciones, suciedad).
• El turbulento sirve para evitar el stall; por eso hay superficies que lo inducen a propósito con **generadores de vórtices**.
• En drones chicos (Re bajo) se busca **retrasar la transición** a turbulento. En drones grandes o rápidos se asume flujo turbulento en casi toda la superficie.
• Se clasifica con el número de Reynolds (pregunta 77).`},

{n:77, t:'aero', src:['03'],
q:`¿Qué representa el número de Reynolds y cómo clasifica el régimen del flujo?`,
k:`⟦Re = ρ · V · L / μ⟧ es un número adimensional que compara las fuerzas inerciales con las viscosas. Con Re menor a 2000 el flujo es laminar, entre 2000 y 4000 es transitorio y por encima de 4000 es turbulento.`,
a:`⟦Re = ρ · V · L / μ⟧

Número **adimensional** que representa la relación entre las **fuerzas inerciales y las viscosas**:
• **ρ:** densidad.
• **V:** velocidad.
• **L:** longitud característica.
• **μ:** viscosidad.

| Re | Régimen |
|---|---|
| Menor a 2000 | Laminar |
| Entre 2000 y 4000 | Transitorio |
| Mayor a 4000 | Turbulento |

Los drones chicos operan con Re bajos, por eso se busca retrasar la transición a turbulento.`},

{n:78, t:'aero', src:['03'],
q:`Defina qué es la capa límite y por qué es importante el punto de transición.`,
k:`Es la capa fina pegada a la superficie donde el aire se frena por fricción: la velocidad va de cero en la pared a la del flujo libre. El punto de transición, donde pasa de laminar a turbulenta, importa porque cuanto más atrás esté, menor es la resistencia de fricción.`,
a:`**Capa límite:** la región fina pegada a la superficie donde el flujo se frena por fricción. La velocidad va de **cero en la superficie** (condición de no deslizamiento) a la velocidad del flujo libre. Su espesor δ crece desde el borde de ataque y se mide hasta donde la velocidad llega al **99%** de la corriente libre.

**Influye en:** la resistencia de fricción, el CL máximo, la forma de entrar en pérdida y la resistencia de forma.

**Tipos de flujo según la capa límite:** laminar, turbulento y separado.

### Punto de transición
• Es donde la capa límite pasa de laminar a turbulenta (en una región de transición).
• Se **adelanta** con la **rugosidad** de la superficie y con la **turbulencia** del aire.
• Importa porque, para tener menos resistencia de fricción, conviene que la capa sea laminar el mayor tramo posible: hay que **retrasar al máximo el punto de transición**.`},

{n:79, t:'aero', src:['03'],
q:`Describa la diferencia entre línea de corriente, trayectoria y tubo de corriente.`,
k:`Línea de corriente: su tangente es el vector velocidad en cada punto. Trayectoria: el camino real de una partícula. Tubo de corriente: la superficie formada por las líneas de corriente que pasan por una curva cerrada. En flujo estacionario líneas y trayectorias coinciden.`,
a:`• **Línea de corriente:** línea imaginaria cuya tangente en cada punto es el vector velocidad.
• **Trayectoria:** el camino que recorre una partícula.
• **Tubo de corriente:** superficie formada por las líneas de corriente que pasan por el contorno de una curva cerrada.

### Propiedades
• En **flujo estacionario**, trayectorias y líneas de corriente **coinciden** y no cambian con el tiempo.
• Por cada punto pasa una sola línea de corriente y **dos líneas nunca se cruzan**. La excepción son los **puntos de remanso**, donde ⟦V = 0⟧.
• No hay flujo a través de una línea de corriente, así que se puede reemplazar por una pared sólida. Por lo mismo, el contorno de un cuerpo actúa como línea de corriente.

### Relacionado
• **Flujo estacionario:** las propiedades no cambian en el tiempo en un punto fijo. Depende del sistema de referencia elegido.
• **Ecuación de continuidad:** en un tubo de corriente la masa por segundo es la misma en cualquier sección. Compresible: ⟦ρ · A · V = cte⟧. Incompresible: ⟦A · V = cte⟧, válida para el aire con Mach bajo. Si el tubo se angosta, el aire acelera.`},

{n:80, t:'aero', src:['03'],
q:`¿Qué indica el coeficiente de sustentación (CL) y cómo varía con el ángulo de ataque?`,
k:`Mide la capacidad del perfil de generar sustentación: ⟦L = ½ · ρ · V² · S · CL⟧. Crece casi linealmente con el ángulo de ataque hasta el CL máximo en el ángulo crítico; pasado ese punto el perfil entra en pérdida (stall) y el CL cae.`,
a:`[[svg:cl_alfa]]
⟦L = ½ · ρ · V² · S · CL⟧

Mide la **capacidad del perfil de generar sustentación** en relación a la velocidad y al área. Un CL alto significa mucha sustentación.

**Variación con α:** crece **casi linealmente** al aumentar el ángulo de ataque hasta un máximo, el **CL máx**, en el **ángulo de ataque crítico**. Pasado ese punto el perfil **entra en pérdida (stall)** y el CL cae.

### Ejemplo de clase (XFLR5)
• **NACA 0012** (simétrico): ⟦CL₀ ≈ 0⟧, no sustenta con α = 0°. Su CL máx ronda 1,0.
• **NACA 4412** (con camber): ⟦CL₀ > 0⟧ y CL máx cercano a 1,2 o 1,3. Entra en pérdida más tarde.`},

{n:81, t:'aero', src:['03'],
q:`¿Qué indica el coeficiente de arrastre (CD) y qué relación tiene con el consumo energético?`,
k:`Mide cuánta resistencia genera el cuerpo al avanzar: ⟦D = ½ · ρ · V² · S · CD⟧. Un CD bajo requiere menos empuje para la misma velocidad, así que baja el consumo y aumenta la autonomía.`,
a:`⟦D = ½ · ρ · V² · S · CD⟧

Mide **cuánta resistencia** genera el cuerpo al avanzar:
• CD bajo: cuerpo más aerodinámico.
• CD alto: hace falta **más empuje y más energía** para mantener la misma velocidad.

**Relación con el consumo:** menor CD implica **menos consumo y mayor autonomía**. En el diseño de alas y hélices se busca un compromiso entre un CD bajo y un CL alto (eficiencia, pregunta 82).`},

{n:82, t:'aero', src:['03'],
q:`¿Cómo se define la eficiencia aerodinámica en función de CL y de CD y para qué se utiliza?`,
k:`⟦E = CL / CD⟧, lo mismo que L/D: cuánta sustentación se obtiene por cada unidad de resistencia. Se usa para comparar perfiles, elegir el ángulo de operación óptimo (el de máxima eficiencia en la polar) y estimar la autonomía.`,
a:`⟦E = CL / CD⟧, equivalente a L/D.

• No es un coeficiente en sí, sino una **métrica de eficiencia**: cuánta sustentación se obtiene por cada unidad de resistencia.
• CL alto y CD bajo dan **alta eficiencia**.
• **Para qué se usa:** comparar perfiles, elegir el ángulo de operación óptimo (el de E máxima, que se ve en la **polar CL vs CD**) y estimar la autonomía. Un E mayor permite volar más tiempo con menos energía.
• **Ejemplo de clase:** el NACA 4412 da más CL para el mismo CD que el 0012, así que es más eficiente en crucero.`},

{n:83, t:'aero', src:['03'], g:true,
q:`¿Qué es el centro aerodinámico y por qué suele ubicarse en el 25% de la cuerda?`,
k:`Es el punto de la cuerda donde el momento aerodinámico casi no cambia al variar el ángulo de ataque. En perfiles subsónicos delgados está cerca del 25% de la cuerda porque, según la teoría de perfiles delgados, ahí actúa el incremento de sustentación que produce un cambio de α.`,
a:`• **Centro de presión:** el punto donde el momento resultante es **cero**. Se **mueve** al cambiar el ángulo de ataque.
• **Centro aerodinámico:** el punto donde el **momento se mantiene prácticamente constante** aunque cambie α. En perfiles **subsónicos delgados** está cerca de **c/4**, el 25% de la cuerda medido desde el borde de ataque.
• **Por qué ahí:** según la teoría de perfiles delgados, el incremento de sustentación que produce un cambio de α actúa en ese punto, así que respecto de él el momento no varía. Por eso es la referencia práctica para la estabilidad.

### Coeficiente de momento (Cm), tomado respecto de c/4
• **Cm > 0:** tiende a levantar la nariz.
• **Cm < 0:** tiende a bajar la nariz.
• Un **Cm constante y negativo es deseable**: da estabilidad longitudinal, porque si se altera α la aeronave vuelve a su posición. El NACA 4412 lo tiene negativo; el 0012, por ser simétrico, cerca de 0.`},

{n:84, t:'aero', src:['03'],
q:`Explique el teorema de Bernoulli aplicado a la sustentación.`,
k:`⟦p + ½ · ρ · V² = constante⟧ a lo largo de una línea de corriente: donde el aire va más rápido, la presión baja. Sobre el extradós el aire acelera y baja la presión; la diferencia con el intradós genera la sustentación.`,
a:`⟦p + ½ · ρ · V² = constante⟧ a lo largo de una línea de corriente.

• Sale de la primera ley de la termodinámica para un fluido **ideal, incompresible y sin fricción**.
• Dice que **donde el aire va más rápido, la presión es menor**.
• **Aplicado al ala:** el aire acelera sobre el **extradós** y genera **baja presión**; en el **intradós** la presión es mayor. Esa **diferencia de presión** produce la sustentación. Más precisamente, la sustentación es la integral de la presión sobre toda la superficie.
• Por encima de **Mach ≈ 0,3** (unos 100 m/s a nivel del mar) hay que usar la versión **compresible y adiabática**.

### Las tres explicaciones de la sustentación
1. **Cantidad de movimiento (Newton):** el ala empuja aire hacia abajo (**downwash**) y por acción y reacción recibe una fuerza hacia arriba.
2. **Bernoulli:** la diferencia de presión explicada arriba.
3. **Circulación (Kutta Joukowski):** pregunta 95.`},

{n:85, t:'aero', src:['03'],
q:`¿Cómo influye el paso geométrico de una hélice en su rendimiento y avance?`,
k:`El paso geométrico es lo que la hélice avanzaría por vuelta como un tornillo (60 a 85% del diámetro); en el aire avanza menos. Más paso: más avance y velocidad, pero exige más torque. Menos paso: más empuje estático, respuesta rápida y eficiencia en hover.`,
a:`**Definición:** la distancia que la hélice avanzaría en **una vuelta** si se enroscara como un tornillo en madera. Se expresa en **pulgadas** y suele estar **entre el 60% y el 85% del diámetro**. El ángulo de la pala con el plano de giro es el **ángulo de paso geométrico β**.

**En el aire real** la hélice avanza **menos** que su paso geométrico. El ángulo real de la trayectoria de la pala es el **ángulo de hélice φ**, menor que β:
⟦tan φ = Va / (2π · n · r)⟧
donde Va es la velocidad de avance y n las revoluciones por segundo.

### Efecto en el rendimiento
• **Paso mayor:** más avance por vuelta y más aire movido, pero exige **más torque**. Sirve para velocidad.
• **Paso menor:** más estable y maniobrable, con mejor empuje estático. Sirve para hover y carga.
• Cada perfil de la pala trabaja con un **ángulo de ataque** que depende del viento relativo, combinación de la **velocidad de avance (Va)** y la **de rotación (Vr)**. Con paso fijo, al aumentar la velocidad de avance **baja el ángulo de ataque** de la pala.`},

{n:86, t:'aero', src:['03'],
q:`¿Cómo se compensan en un dron multirrotor los efectos giroscópicos de las hélices?`,
k:`Usando pares de hélices que giran en sentidos opuestos (CW y CCW): sus momentos angulares y pares de reacción se cancelan. Si falla un motor la compensación se rompe y el FC tiene que corregir rápido; con hélices grandes los efectos giroscópicos pesan en maniobras rápidas.`,
a:`[[quad:layout]]
**Momento angular de la hélice:** ⟦h = I · Ω⟧ (momento de inercia por velocidad angular). Por conservación, si la hélice gira para un lado, el cuerpo tiende a girar para el otro.

**Efecto giroscópico:** cuando cambia la orientación del eje de giro (pitch o yaw rápidos), aparece un **momento de precesión perpendicular** al cambio (My, Mz). Es restaurador y desaparece cuando cesa el giro.

### Cómo se compensa en un multirrotor
• Con **pares de hélices CW y CCW** (horario y antihorario): los momentos angulares y los torques **se cancelan**.
• Si **falla un motor**, se rompe esa compensación y el **FC** tiene que corregir rápido para no perder el control.
• En drones con hélices **grandes** (de carga), los efectos giroscópicos son significativos en maniobras rápidas y el control los debe considerar.

En un avión monomotor, en cambio, se corrige con una leve deflexión del alerón.`},

{n:87, t:'aero', src:['03'],
q:`¿Qué diferencia existe entre presión estática y presión dinámica?`,
k:`La estática es la presión del aire en reposo, igual en todas las direcciones; es la que mide el barómetro. La dinámica es la asociada a la velocidad, ⟦q = ½ · ρ · V²⟧. Su suma, la presión total, se mantiene constante según Bernoulli.`,
a:`• **Presión estática (p):** la que ejerce el aire en reposo, igual en todas las direcciones. Es la que mide el barómetro.
• **Presión dinámica:** ⟦q = ½ · ρ · V²⟧, la asociada a la **velocidad** del flujo, es decir, a su energía cinética.
• **Presión total:** la suma de ambas, constante según Bernoulli. Si una sube, la otra baja.
• El **tubo Pitot** usa esta relación para medir la velocidad.`},

{n:88, t:'aero', src:['03'],
q:`¿Cómo afecta la densidad del aire a la generación de sustentación y al rendimiento de un dron?`,
k:`La sustentación y el empuje son proporcionales a la densidad. Con aire menos denso (más altura, calor o humedad) la hélice empuja menos a las mismas RPM: los motores giran más rápido, sube el consumo y bajan la autonomía, la carga útil y el margen de control.`,
a:`• La densidad es la **masa por unidad de volumen** (ρ) y aparece directamente en ⟦L = ½ · ρ · V² · S · CL⟧ y en el empuje de la hélice (⟦T ∝ ρ⟧).
• **Más densidad:** más partículas por volumen, **más sustentación y empuje**.
• **A mayor altitud, temperatura o humedad, la densidad baja.** Entonces:
  • la hélice genera menos empuje a las mismas RPM;
  • los motores tienen que girar más rápido;
  • **sube el consumo y baja la autonomía**;
  • se reducen la carga útil y el margen de control.`},

{n:89, t:'aero', src:['03'],
q:`¿Por qué un perfil con mayor curvatura del extradós tiende a generar mayor sustentación?`,
k:`Porque obliga al aire a acelerar más sobre el extradós que en el intradós; por Bernoulli, la diferencia de presión es mayor y aumenta el CL. Además, una curvatura pronunciada mantiene el flujo adherido a ángulos de ataque más altos y retrasa la pérdida.`,
a:`• Un extradós más arqueado obliga al aire a **acelerar más** que en el intradós.
• Esa mayor **diferencia de velocidades** se traduce, por Bernoulli, en una mayor **diferencia de presión**: **aumenta el CL**.
• Una curvatura pronunciada además ayuda a que el flujo **siga adherido a ángulos de ataque altos**: **más resistencia a la pérdida**.
• Por eso el NACA 4412 (con camber) sustenta incluso con α = 0°, y el 0012 (simétrico) no.

**Otros factores de la sustentación:** densidad, ángulo de ataque, superficie alar (más área da más sustentación pero también más resistencia) y velocidad, con un efecto **proporcional a V²**.`},

{n:90, t:'aero', src:['03'],
q:`Explique el concepto de compresibilidad y en qué rango de número de Mach puede considerarse el flujo incompresible.`,
k:`La compresibilidad mide cuánto cambia el volumen de un fluido ante cambios de presión. Con Mach menor a 0,3 (unos 100 m/s a nivel del mar) el flujo se considera incompresible; por encima hay que considerar sus efectos.`,
a:`• **Compresibilidad (β):** cuánto cambia el volumen del fluido ante cambios de presión.
• **Número de Mach:** ⟦M = V / a⟧, la velocidad del objeto sobre la **velocidad del sonido**, que depende de la temperatura. Indica si hay efectos de compresibilidad y ondas de choque.
• **Flujo incompresible: Mach < 0,3**, unos 100 m/s a nivel del mar. Por encima hay que considerar la compresibilidad.
• Las diapositivas también dicen que la ecuación de continuidad incompresible da un error despreciable hasta **Mach 0,5**.
• En drones el cuerpo vuela muy por debajo, pero conviene mirar la **punta de la pala**, que es lo que va más rápido.`},

{n:91, t:'aero', src:['03'],
q:`¿Qué muestra el coeficiente de presión (Cp) en un punto del perfil y qué indica cuando es negativo?`,
k:`⟦Cp = (p − p∞) / (½ · ρ · V∞²)⟧: la presión en un punto respecto del flujo libre, normalizada por la presión dinámica. Negativo indica succión, con velocidad local mayor que la del flujo libre, típico del extradós. En el punto de estancamiento vale 1.`,
a:`⟦Cp = (p − p∞) / (½ · ρ · V∞²)⟧

Muestra la **diferencia de presión** en un punto respecto del flujo libre, **normalizada por la presión dinámica**.
• **Cp > 0:** **sobrepresión**, típica del intradós.
• **Cp < 0:** **succión o depresión**, típica del extradós: la velocidad local es mayor que la del flujo libre.
• **Punto de estancamiento:** ⟦V = 0⟧, entonces ⟦Cp = 1⟧.

### Lectura del gráfico en XFLR5
• El eje vertical suele estar **invertido**: los valores negativos van arriba.
• En el ejemplo de clase, el extradós llega a ⟦Cp ≈ −3⟧ cerca del borde de ataque (succión fuerte) y la succión disminuye hacia el borde de fuga.
• **El área entre las curvas del extradós y del intradós es la sustentación.**`},

{n:92, t:'aero', src:['03'], g:true,
q:`¿Qué relación existe entre la velocidad angular de una hélice, su radio y la velocidad lineal de un punto en la pala? Explique la fórmula correspondiente.`,
k:`⟦v = ω · r⟧: todos los puntos de la pala tienen la misma velocidad angular, pero la velocidad lineal crece con la distancia al eje. Por eso la punta va mucho más rápido que la raíz.`,
a:`⟦v = ω · r⟧
• **ω:** velocidad angular, en rad/s. Es **igual para todos los puntos** de la pala, porque todos dan una vuelta en el mismo tiempo. Desde RPM: ⟦ω = 2π · RPM / 60⟧.
• **r:** distancia al eje.
• **v:** velocidad lineal del punto, en m/s.

**Conclusión:** la **punta va mucho más rápido que la raíz** porque recorre más distancia en el mismo tiempo. De ahí sale el twist de las palas (pregunta 94), y por eso la punta es la zona que más ruido genera y la primera en acercarse a Mach alto.

**Ejemplo:** una hélice de 5" (radio de 0,0635 m) a 30.000 RPM tiene ⟦ω ≈ 3142 rad/s⟧ y su punta va a ⟦v ≈ 200 m/s⟧, cerca de Mach 0,58: muy por encima del límite incompresible de la pregunta 90.`},

{n:93, t:'aero', src:['03'],
q:`¿Qué diferencia existe entre hélices de paso fijo y hélices de paso variable? Mencione ventajas y desventajas.`,
k:`Paso fijo: ángulo constante; simple, barata y liviana, pero eficiente en un solo régimen. Paso variable: ajusta el ángulo a cada fase del vuelo y es eficiente en todo el rango, a cambio de mecánica compleja, más peso y más costo. Los multirrotores usan paso fijo y controlan las RPM.`,
a:`| | Paso fijo | Paso variable |
|---|---|---|
| Qué es | El ángulo de la pala es constante y no cambia en vuelo | El ángulo se ajusta según la fase (despegue, ascenso, crucero, descenso) |
| Ventajas | Simple, barata, liviana, poco mantenimiento | Eficiente en todo el rango de vuelo |
| Desventajas | Eficiente solo en un régimen; su paso es un compromiso | Mecánica compleja, más peso, más costo y mantenimiento |
| Uso | Aviones chicos o de entrenamiento y casi todos los multirrotores | Aviones más grandes, helicópteros |

**Variantes del paso variable:** ajustable en tierra, variable en vuelo (controllable pitch), de velocidad constante (mantiene las RPM), reversible y en bandera (feathering).

Los multirrotores usan paso fijo porque controlan el empuje **variando las RPM**; el helicóptero, en cambio, varía el ángulo de las palas.`},

{n:94, t:'aero', src:['03'],
q:`¿Por qué las palas de una hélice están torcidas (twist) desde la raíz hacia la punta?`,
k:`Porque la punta gira más rápido que la raíz (⟦v = ω · r⟧). Con más ángulo en la raíz y menos en la punta, el empuje se reparte de forma uniforme a lo largo de la pala y bajan las tensiones internas, las vibraciones y el riesgo de pérdida en la punta.`,
a:`• La pala es una **sucesión de perfiles**, no uno solo.
• Como ⟦v = ω · r⟧, la **punta va más rápido** que la raíz.
• Para compensarlo, el ángulo de incidencia es **mayor en la raíz y menor en la punta**: menos velocidad con más ángulo en la raíz, más velocidad con menos ángulo en la punta.
• **Resultado:** el empuje se **reparte uniformemente** a lo largo de la pala; bajan las tensiones internas, las vibraciones y la probabilidad de que la punta entre en pérdida.`},

{n:95, t:'aero', src:['03'],
q:`¿Qué es la circulación (Γ) en el teorema de Kutta Joukowski y cómo se relaciona con la sustentación?`,
k:`La circulación ⟦Γ = ∮ V · dl⟧ representa la asimetría de velocidades alrededor del perfil como si hubiera un vórtice adherido. El teorema dice que la sustentación por unidad de envergadura es ⟦L′ = ρ · V∞ · Γ⟧: sin circulación no hay sustentación, y Γ crece con α hasta el stall.`,
a:`⟦L′ = ρ · V∞ · Γ⟧ (por unidad de envergadura), y para el ala completa ⟦L = ρ · V · Γ · b⟧.

**Circulación:** ⟦Γ = ∮ V · dl⟧, la integral de la velocidad tangencial a lo largo de una curva cerrada alrededor del perfil.
• Es más un **método matemático** que una explicación física directa.
• Por la **condición de Kutta**, el flujo sobre el extradós se acelera más que en el intradós. Esa asimetría se representa como un **vórtice adherido al ala** de intensidad Γ.

### Relación con la sustentación
• **Γ = 0:** no hay sustentación (por ejemplo, un perfil simétrico con α = 0°).
• **Γ > 0:** sustentación hacia arriba.
• Γ **crece con el ángulo de ataque** hasta el stall.`},

{n:96, t:'aero', src:['03'], g:true,
q:`En un dron, ¿qué efectos aerodinámicos aparecen al acercarse al ángulo de pérdida (stall) y cómo se identifican en la distribución de Cp?`,
k:`La capa límite se separa desde el borde de fuga, el CL deja de crecer y luego cae mientras el CD sube mucho, con vórtices y vibración. En el Cp se ve un pico de succión muy agudo cerca del borde de ataque y una meseta en la parte trasera del extradós (flujo separado); al entrar en pérdida el pico colapsa.`,
a:`### Qué pasa
• Al subir α aumenta el **gradiente de presión adverso** en el extradós y la capa límite **se separa**, empezando por el borde de fuga y avanzando hacia adelante.
• El CL deja de crecer, llega al **CL máx** y luego **cae**, mientras el **CD sube mucho**.
• Aparecen **vórtices**, turbulencia y vibraciones, y cambia el momento de cabeceo.
• **En un dron:** las palas pierden empuje, hay vibración y pérdida de control. En las hélices puede pasar en la punta o con maniobras bruscas.

### Cómo se identifica en la distribución de Cp
• El **pico de succión** cerca del borde de ataque se vuelve muy negativo y muy angosto.
• En la zona trasera del extradós la curva de Cp **se aplana** (meseta): ya no recupera presión, señal de **flujo separado**.
• Al entrar en pérdida, el pico de succión **colapsa**, el área entre extradós e intradós se achica y baja la sustentación.
• En XFLR5 también se ve en **Xtr top**: la transición se mueve hacia el borde de ataque.

En la tarea de clase se pide justamente el Cp a ⟦α ≈ α stall − 1°⟧ para ver estas señales de pre pérdida.`},

{n:97, t:'aero', src:['03'],
q:`Defina un vórtice en dinámica de fluidos.`,
k:`Es una región del fluido donde las partículas giran alrededor de un eje imaginario, recto o curvo. Su rotación se describe con la vorticidad. En los drones aparecen en la punta de las palas y forman la estela helicoidal, que cuesta energía y genera ruido.`,
a:`Es una **región del fluido donde las partículas giran alrededor de un eje imaginario**. Ese eje puede ser:
• **Recto:** por ejemplo, el vórtice de punta de ala.
• **Curvo o en espiral:** por ejemplo, un remolino o un tornado.

La rotación se describe con la **vorticidad (ω)**.

**En drones:** la diferencia de presión entre las caras de la pala genera un **vórtice en la punta** que el flujo arrastra hacia atrás y forma la típica **estela helicoidal**. Estos vórtices cuestan energía y generan ruido.`}

);

/* Tarjetas 98 a 114: dinámica, control y firmware.
   Las preguntas 98 a 113 no tenían diapositivas: respuestas generales marcadas con g:true. */
(window.DDANT_CARDS = window.DDANT_CARDS || []).push(

{n:98, t:'ctrl', src:[], g:true,
q:`¿Por qué un cuadricóptero es inherentemente inestable y requiere un controlador de vuelo para mantenerse en el aire?`,
k:`Porque no tiene superficies que generen momentos restauradores: cualquier perturbación produce un giro que crece solo, y además es no lineal, acoplado y subactuado. Mantenerlo exige medir la actitud y corregir los cuatro motores cientos o miles de veces por segundo, algo que solo puede hacer un FC con su IMU.`,
a:`• **Sin estabilidad natural:** un avión tiene cola y diedro que lo devuelven a su actitud; un cuadricóptero no. Si se inclina, nada lo endereza.
• **Inestable en lazo abierto:** un par pequeño (una ráfaga, un motor apenas más rápido, el centro de gravedad corrido) genera aceleración angular; integrada dos veces, el ángulo **crece sin límite**. Y con el dron inclinado, el empuje lo empuja hacia un costado.
• **No lineal y acoplado:** inclinarse cambia la altura y la posición al mismo tiempo, y el empuje depende del cuadrado de las RPM.
• **Subactuado:** 4 entradas para 6 grados de libertad (pregunta 99).
• **Velocidad de corrección:** hay que medir la actitud con la IMU y corregir los motores cientos o miles de veces por segundo (Betaflight corre su lazo a varios kHz). Una persona no puede hacerlo.
• Por eso el FC estima la actitud con filtros (pregunta 110) y aplica control (PID, LQR y otros) de forma continua.
• **Ejemplo de clase:** el E88 tiene un control inercial pobre, y el piloto tiene que corregir la posición todo el tiempo.`},

{n:99, t:'ctrl', src:[], g:true,
q:`¿Qué significan los grados de libertad y por qué un cuadricóptero es un sistema subactuado?`,
k:`Los grados de libertad son los movimientos independientes de un cuerpo: 6 en el espacio (3 traslaciones y 3 rotaciones). El cuadricóptero tiene solo 4 entradas de control (las velocidades de sus motores), menos que sus grados de libertad, por eso es subactuado: x e y se controlan indirectamente inclinándolo.`,
a:`• **Grados de libertad (DOF):** cantidad de coordenadas independientes que describen la posición y orientación de un cuerpo. Un cuerpo rígido en el espacio tiene **6**:
  • 3 de traslación: x, y, z.
  • 3 de rotación: roll (φ), pitch (θ) y yaw (ψ).
• **Entradas de control:** las 4 velocidades de motor, que se traducen en 4 acciones: el **empuje total** ⟦U1⟧ y **tres pares** ⟦U2, U3, U4⟧ (roll, pitch y yaw).
• **Subactuado:** 4 entradas para 6 DOF. No se pueden controlar los 6 de forma independiente.
• **Consecuencia:** se controlan directamente la altura (z) y los tres ángulos; x e y se controlan **indirectamente**, inclinando el dron para que el empuje tenga componente horizontal.
• Por eso el control suele ir en **cascada**: un lazo externo de posición genera ángulos deseados y un lazo interno de actitud los sigue.`},

{n:100, t:'ctrl', src:[], g:true,
q:`¿Cuáles son los cuatro movimientos principales del dron (pitch, roll, yaw y throttle) y qué rotores intervienen en cada uno?`,
k:`Throttle: los cuatro rotores por igual. Pitch: delanteros contra traseros. Roll: izquierdos contra derechos. Yaw: el par diagonal que gira en sentido horario contra el par antihorario.`,
a:`[[quad:layout]]
| Movimiento | Eje | Qué rotores cambian | Resultado |
|---|---|---|---|
| **Throttle** | Vertical (z) | Los cuatro por igual | Sube, baja o se mantiene en hover |
| **Pitch** (cabeceo) | Lateral (y) | Delanteros contra traseros | Nariz arriba o abajo: avanza o retrocede |
| **Roll** (alabeo) | Longitudinal (x) | Izquierdos contra derechos | Se inclina y se desplaza de costado |
| **Yaw** (guiñada) | Vertical (z) | Par diagonal CW contra par CCW | Gira sobre sí mismo |

• En pitch y roll se modifica un par del mismo lado (un motor CW y uno CCW), así no aparece par de yaw.
• En yaw se modifican los pares diagonales en sentidos opuestos, manteniendo el empuje total.
• La numeración de los motores depende del firmware (Betaflight y ArduPilot numeran distinto): lo importante es la posición y el sentido de giro.

Detalle de cada maniobra: preguntas 70, 71, 72, 101 y 102.`},

{n:101, t:'ctrl', src:[], g:true,
q:`¿Cómo debe modificarse la velocidad de los motores para generar un movimiento de roll hacia la izquierda?`,
k:`Hay que aumentar la velocidad de los dos motores derechos y disminuir la de los dos izquierdos. El dron se inclina hacia la izquierda y la componente horizontal del empuje lo desplaza hacia ese lado.`,
a:`[[quad:roll_izquierda]]
• **Motores derechos** (delantero derecho y trasero derecho): **aumentan**.
• **Motores izquierdos** (delantero izquierdo y trasero izquierdo): **disminuyen**.
• La diferencia de empuje genera un par alrededor del eje longitudinal: el lado derecho sube y el izquierdo baja.
• El vector de empuje se inclina hacia la izquierda y su componente horizontal desplaza el dron a la izquierda.
• Cada lado tiene un motor CW y uno CCW, así que el par de yaw sigue equilibrado.
• Para no perder altura, el FC aumenta levemente el empuje total, porque la componente vertical pasa a ser ⟦T · cos φ⟧.
• Desde el control (Modo 2): palanca derecha hacia la izquierda.`},

{n:102, t:'ctrl', src:[], g:true,
q:`¿Qué motor y en qué sentido debe aumentar potencia el dron para generar guiñada hacia la derecha (yaw horario)?`,
k:`Deben aumentar los motores que giran en sentido antihorario (CCW) y disminuir los que giran en sentido horario (CW). El par de reacción neto queda horario y el dron gira a la derecha sin cambiar de altura, porque el empuje total se mantiene.`,
a:`[[quad:yaw_derecha]]
• Cada hélice aplica sobre el cuerpo un par de reacción **contrario** a su giro.
• Para que el cuerpo gire en sentido **horario** hace falta más par horario, y ese par lo aportan las hélices que giran en sentido **antihorario**.
• **Aumentan:** el par diagonal **CCW** (en la configuración props in de Betaflight, delantero derecho y trasero izquierdo).
• **Disminuyen:** el par diagonal **CW** (delantero izquierdo y trasero derecho).
• El aumento y la disminución se compensan para que el **empuje total no cambie** y el dron no suba ni baje.
• Desde el control (Modo 2): palanca izquierda hacia la derecha.`},

{n:103, t:'ctrl', src:[], g:true,
q:`¿Qué representan los sistemas de referencia “marco terrestre” y “marco corporal” y cuál se usa para posición u orientación?`,
k:`El marco terrestre es fijo al suelo (inercial) y se usa para la posición y la velocidad. El marco corporal está pegado al dron, con origen en su centro de gravedad, y se usa para la orientación: los ángulos describen cómo está girado respecto del terrestre, y en él se expresan el empuje, los pares y lo que mide el giroscopio.`,
a:`### Marco terrestre (inercial)
• Fijo a la Tierra, por ejemplo con ejes Norte, Este y Abajo (NED) o Este, Norte y Arriba (ENU).
• Se usa para la **posición** (x, y, z) y la **velocidad**: navegación, GPS, waypoints.
• Ahí se escribe la segunda ley de Newton para la traslación.

### Marco corporal (body frame)
• Fijo al dron, con origen en el **centro de gravedad**: x hacia la nariz, y hacia la derecha y z hacia abajo (convención NED).
• Se usa para la **orientación**. Ahí se expresan el **empuje** (sobre el eje z del cuerpo), los **pares** y las **velocidades angulares** p, q y r que mide el giroscopio.

### Orientación
• Es la rotación del marco corporal respecto del terrestre, descrita por los **ángulos de Euler** roll (φ), pitch (θ) y yaw (ψ) o por cuaterniones.
• El paso entre un marco y otro lo hace la **matriz de rotación R** (pregunta 104).

**Resumen:** posición en el marco terrestre; orientación con el marco corporal, como su giro respecto del terrestre.`},

{n:104, t:'ctrl', src:[], g:true,
q:`¿Qué función cumple la matriz de rotación R en el modelo del cuadricóptero?`,
k:`Transforma vectores del marco corporal al terrestre, y su transpuesta hace el camino inverso. Se arma con los ángulos de Euler y sirve, por ejemplo, para proyectar sobre los ejes del suelo el empuje de los motores, que siempre apunta según el eje z del cuerpo.`,
a:`• **Qué hace:** pasa un vector expresado en el marco del cuerpo al marco terrestre: ⟦v tierra = R · v cuerpo⟧. La inversa es su transpuesta: ⟦R⁻¹ = Rᵀ⟧.
• **Cómo se arma:** con los ángulos de Euler, normalmente en orden ZYX: ⟦R = Rz(ψ) · Ry(θ) · Rx(φ)⟧.
• **Propiedades:** es ortogonal (⟦Rᵀ · R = I⟧) y su determinante es 1: rota sin deformar.
• **Uso principal:** el empuje de los motores apunta siempre según el eje z del cuerpo. Para saber cuánto empuja hacia arriba y hacia los costados en el marco terrestre se multiplica por R. Con el eje z hacia arriba:
⟦m · a = R · [0, 0, T]ᵀ − [0, 0, m · g]ᵀ⟧
• También permite convertir las mediciones de los sensores (acelerómetro, magnetómetro) y relacionar las velocidades angulares del cuerpo con la variación de los ángulos de Euler.`},

{n:105, t:'ctrl', src:[], g:true,
q:`Explique brevemente la diferencia entre la dinámica traslacional y la dinámica rotacional del dron.`,
k:`La traslacional describe cómo cambian la posición y la velocidad por el empuje, el peso y el arrastre (Newton, en el marco terrestre). La rotacional describe cómo cambian la orientación y las velocidades angulares por los pares de los motores (Euler, en el marco corporal). La rotacional es más rápida y gobierna a la traslacional.`,
a:`### Dinámica traslacional
• Segunda ley de Newton para el centro de masa, en el **marco terrestre**:
⟦m · ẍ = R · T cuerpo − m · g + arrastre⟧
• Variables: posición x, y, z y sus velocidades.
• Fuerzas: empuje total (rotado con R), peso y arrastre aerodinámico.

### Dinámica rotacional
• Ecuaciones de Euler del cuerpo rígido, en el **marco corporal**:
⟦I · ω̇ + ω × (I · ω) = τ⟧
• Variables: ángulos φ, θ, ψ y velocidades angulares p, q, r.
• Pares: diferencias de empuje entre motores (roll y pitch), diferencias de par de reacción (yaw) y efectos giroscópicos.

### Relación entre ambas
• La rotacional es **más rápida** y **manda** sobre la traslacional: para moverse en x o y primero hay que inclinarse.
• Por eso el control se arma en **cascada**: lazo interno de actitud (rápido) y lazo externo de posición (lento).`},

{n:106, t:'ctrl', src:[], g:true,
q:`¿Por qué se linealiza el modelo del cuadricóptero y alrededor de qué punto se hace?`,
k:`Porque el modelo real es no lineal (senos y cosenos de los ángulos, productos de velocidades, empuje proporcional a ω²) y las técnicas de control clásicas necesitan un modelo lineal. Se linealiza alrededor del hover: ángulos y velocidades nulos y empuje total igual al peso.`,
a:`• **Por qué:** con un modelo lineal ⟦ẋ = A · x + B · u⟧ se pueden usar las herramientas de control lineal: estabilidad por autovalores, diseño de PID, LQR, ubicación de polos y filtro de Kalman.
• **Punto de equilibrio: el hover.**
  • Roll y pitch nulos: ⟦φ = θ = 0⟧ (el yaw puede ser constante).
  • Velocidades lineales y angulares nulas.
  • Empuje total igual al peso: ⟦4 · k · ω₀² = m · g⟧, con cada motor girando a ⟦ω₀⟧.
• **Aproximaciones de ángulo chico:** ⟦sen φ ≈ φ⟧, ⟦cos φ ≈ 1⟧, y se desprecian los productos de velocidades angulares.
• **Resultado:** los ejes quedan casi desacoplados, por ejemplo ⟦ẍ ≈ g · θ⟧ y ⟦ÿ ≈ −g · φ⟧ (los signos dependen de la convención).
• **Limitación:** solo vale cerca del hover. En maniobras agresivas o con ángulos grandes hacen falta técnicas no lineales (pregunta 109).`},

{n:107, t:'ctrl', src:[], g:true,
q:`¿Cuál es el propósito del controlador LQR y qué minimiza su función de costo?`,
k:`El LQR (regulador lineal cuadrático) calcula la realimentación de estados óptima ⟦u = −K · x⟧ para un modelo lineal. Minimiza un costo que suma el error de los estados, pesado por Q, y el esfuerzo de control, pesado por R.`,
a:`• **Propósito:** llevar el sistema a su punto de equilibrio (por ejemplo, el hover) de forma **óptima**, equilibrando qué tan rápido se corrige el error con cuánta energía se gasta.
• **Función de costo:**
⟦J = ∫ (xᵀ Q x + uᵀ R u) dt⟧
  • ⟦xᵀ Q x⟧ penaliza las **desviaciones de los estados** (errores de ángulo, posición, velocidad). Q grande corrige más rápido y más agresivo.
  • ⟦uᵀ R u⟧ penaliza el **esfuerzo de control** (uso de los motores, energía). R grande da un control más suave y económico.
• **Solución:** ⟦K = R⁻¹ · Bᵀ · P⟧, donde P sale de la ecuación algebraica de Riccati.
• **Ventajas:** maneja varios estados y entradas a la vez (multivariable), tiene buenos márgenes de estabilidad y se ajusta con Q y R en lugar de ganancia por ganancia.
• **Limitaciones:** necesita el **modelo linealizado** (válido cerca del hover) y conocer todos los estados. Si no se miden todos, se estiman con un filtro de Kalman (LQG).`},

{n:108, t:'ctrl', src:[], g:true,
q:`¿Qué ventajas y limitaciones tiene el control por lógica difusa (Fuzzy Logic) en drones?`,
k:`Controla con reglas lingüísticas, del tipo “si el error es grande, aumentar mucho el empuje”, sin necesitar un modelo matemático preciso. Es robusto ante no linealidades e incertidumbre y suave, pero su ajuste es empírico, es difícil probar su estabilidad y el cálculo crece mucho con la cantidad de reglas.`,
a:`### Cómo funciona
1. **Fusificación:** las entradas (error y derivada del error) se convierten en grados de pertenencia a conjuntos como negativo grande, cero o positivo chico.
2. **Reglas:** una base de reglas del tipo “si el error es positivo grande y la derivada es chica, entonces el empuje aumenta mucho”.
3. **Inferencia y defusificación:** se combinan las reglas y se obtiene un valor numérico de salida.

| Ventajas | Limitaciones |
|---|---|
| No necesita un modelo matemático exacto del dron | El ajuste de funciones de pertenencia y reglas es de prueba y error |
| Maneja no linealidades e incertidumbre (viento, cambios de carga) | Es difícil demostrar formalmente la estabilidad |
| Incorpora el conocimiento de un experto en lenguaje natural | Con muchas entradas las reglas crecen de forma explosiva y aumenta el cálculo |
| Control suave y robusto | Puede ser menos preciso que un control basado en un modelo bien ajustado |

Se usa mucho combinado: un **PID difuso**, donde la lógica difusa ajusta en vuelo las ganancias del PID.`},

{n:109, t:'ctrl', src:[], g:true,
q:`¿En qué consiste el control por linealización por realimentación y por qué es útil para sistemas no lineales como un dron?`,
k:`Usa el modelo para calcular una entrada que cancela exactamente las no linealidades, de modo que el lazo cerrado se comporta como un sistema lineal y se controla con técnicas lineales. Es útil en un dron porque funciona en todo el rango de vuelo y no solo cerca del hover, aunque exige un modelo preciso.`,
a:`• **Idea:** si el sistema es ⟦ẋ = f(x) + g(x) · u⟧, se elige ⟦u = g(x)⁻¹ · (v − f(x))⟧. Así queda ⟦ẋ = v⟧, un sistema lineal, y para la nueva entrada v se diseña un control lineal (PD, ubicación de polos).
• **Por qué es útil en un dron:**
  • El modelo es fuertemente **no lineal y acoplado** (trigonometría de los ángulos, productos de velocidades, empuje proporcional a ω²).
  • La linealización alrededor del hover (pregunta 106) solo sirve con ángulos chicos; la realimentación linealizante sirve para **maniobras agresivas** y ángulos grandes.
  • Permite **desacoplar** los ejes y seguir trayectorias con precisión.
• **Limitaciones:**
  • Necesita un **modelo exacto** (masa, inercias, coeficientes de empuje y arrastre); los errores de modelo degradan el control (poca robustez).
  • Tiene **singularidades**, por ejemplo con empuje nulo o ángulos de 90°.
  • Mayor costo de cálculo.
  • Suele combinarse con técnicas robustas, como control por modos deslizantes o backstepping.`},

{n:110, t:'ctrl', src:[], g:true,
q:`¿Para qué sirve el filtro de Kalman dentro del controlador de vuelo y qué sensores combina?`,
k:`Estima de forma óptima el estado del dron (actitud, velocidad, posición y sesgos de sensores) combinando un modelo del movimiento con mediciones ruidosas. Fusiona giroscopio, acelerómetro, magnetómetro, barómetro y GPS, y también optical flow o rangefinder.`,
a:`### El problema: cada sensor falla distinto
• **Giroscopio:** preciso a corto plazo, pero **deriva** al integrarlo.
• **Acelerómetro:** da la referencia absoluta de la gravedad, pero es **ruidoso** y lo afectan las vibraciones y aceleraciones.
• **Magnetómetro:** da el rumbo, pero es sensible a interferencias.
• **Barómetro:** da la altura, con ruido y deriva por el clima.
• **GPS:** posición absoluta, pero lento (5 a 10 Hz) y con errores de metros.

### La solución
• El filtro de Kalman pondera cada fuente según su incertidumbre y entrega la **mejor estimación posible** del estado y de cuánto confiar en ella (la covarianza).
• Como el dron es no lineal se usa el **filtro de Kalman extendido (EKF)**, que linealiza en cada paso. ArduPilot usa EKF3 y PX4 su EKF2.
• Betaflight, más orientado a FPV, usa estimadores más simples (filtros complementarios) para la actitud.
• **Resultado:** actitud estable para el lazo de control y posición confiable para la navegación y el RTH.

Fases del filtro: pregunta 111.`},

{n:111, t:'ctrl', src:[], g:true,
q:`¿Qué mide la fase de predicción y qué ajusta la fase de corrección en el filtro de Kalman?`,
k:`La predicción no mide: usa el modelo para estimar el próximo estado y su incertidumbre, que crece. La corrección compara esa predicción con la medición real y la ajusta con la ganancia de Kalman, que decide cuánto confiar en el sensor y cuánto en el modelo; la incertidumbre baja.`,
a:`[[svg:kalman]]
### 1. Predicción (a priori)
• Con el modelo dinámico y las entradas (por ejemplo, la IMU) estima **dónde debería estar** el sistema:
⟦x̂⁻ = A · x̂ + B · u⟧
• Propaga la **incertidumbre**, que aumenta por el ruido del proceso Q:
⟦P⁻ = A · P · Aᵀ + Q⟧

### 2. Corrección o actualización (a posteriori)
• Llega una medición z (GPS, barómetro, magnetómetro) y se calcula la **innovación**, la diferencia entre lo medido y lo predicho: ⟦y = z − H · x̂⁻⟧
• **Ganancia de Kalman:** ⟦K = P⁻ · Hᵀ · (H · P⁻ · Hᵀ + R)⁻¹⟧
• **Ajusta la estimación:** ⟦x̂ = x̂⁻ + K · y⟧
• **Reduce la incertidumbre:** ⟦P = (I − K · H) · P⁻⟧

### Intuición
• Si el sensor es muy ruidoso (R grande), K es chica: se confía más en el modelo.
• Si el modelo es incierto (Q grande), K es grande: se confía más en la medición.
• El ciclo se repite todo el tiempo: la predicción puede correr a la frecuencia de la IMU y la corrección cada vez que llega un dato.`},

{n:112, t:'ctrl', src:[], g:true,
q:`Explique brevemente las funciones de cada término de un controlador PID (P, I, D).`,
k:`P reacciona al error actual y da rapidez; I acumula el error pasado para eliminar el error permanente; D mira la tendencia del error para amortiguar y evitar la sobreoscilación: ⟦u = Kp · e + Ki · ∫ e dt + Kd · de/dt⟧.`,
a:`[[svg:pid]]
⟦u(t) = Kp · e(t) + Ki · ∫ e dt + Kd · de/dt⟧

| Término | Qué hace | Si es muy alto | Si es muy bajo |
|---|---|---|---|
| **P** (proporcional) | Corrige en proporción al **error actual**; da la rapidez de respuesta | Oscilaciones rápidas, vibraciones | Respuesta lenta, el dron se siente blando |
| **I** (integral) | Suma el **error acumulado**; elimina el error en estado estacionario y compensa perturbaciones constantes (viento, centro de gravedad corrido) | Sobreoscilación, oscilaciones lentas, saturación (windup) | Deriva, no mantiene el ángulo |
| **D** (derivativo) | Reacciona a la **velocidad de cambio** del error; anticipa y amortigua | Amplifica el ruido, motores calientes, vibración | Se pasa del objetivo, rebotes (propwash) |

• **En drones** se usan PID en **cascada**: un lazo interno de velocidad angular con el giroscopio (muy rápido) y uno externo de ángulo o posición.
• El término D se filtra porque deriva el ruido de los sensores.
• Betaflight suma un término **feedforward** que reacciona directamente al movimiento de las palancas.`},

{n:113, t:'ctrl', src:[], g:true,
q:`¿Qué es la sintonización de un sistema de control PID y para qué se utiliza?`,
k:`Es ajustar Kp, Ki y Kd (y los filtros) para que el lazo cerrado responda rápido, sin oscilar ni pasarse, rechazando perturbaciones y sin amplificar ruido. Se hace porque cada dron (peso, motores, hélices, frame) tiene una dinámica distinta y los valores por defecto no sirven igual para todos.`,
a:`**Para qué:** lograr un vuelo estable y preciso en ese aparato en particular. Un PID mal ajustado se nota en oscilaciones, rebotes al frenar (propwash), deriva, motores calientes o un dron que se siente lento.

### Métodos
1. **Manual:** subir P hasta que aparecen oscilaciones y bajarlo un poco; subir D para amortiguar; ajustar I para que mantenga el ángulo.
2. **Ziegler y Nichols:** se busca la ganancia crítica y el período de oscilación y se calculan los valores con tablas.
3. **Análisis de registros:** el Blackbox de Betaflight y herramientas como PID Toolbox muestran la respuesta al escalón y el ruido.
4. **Autotune:** ArduPilot e iNav se ajustan solos en vuelo.
5. **Simulación** con el modelo del dron antes de volar.

### Síntomas típicos
• Oscilación rápida: P o D demasiado altos.
• Oscilación lenta o sobreoscilación al soltar las palancas: I alto o D bajo.
• Deriva o no mantiene el ángulo: I bajo.
• Motores calientes: D alto o mucho ruido sin filtrar.`},

{n:114, t:'ctrl', src:['02','05'],
q:`¿Para qué tipo de uso está orientado cada firmware de control de vuelo? a. ArduPilot b. Betaflight c. iNav`,
k:`ArduPilot: misiones autónomas, mapeo e industria, con muchos tipos de vehículos y navegación completa. Betaflight: carreras y freestyle FPV, con mínima latencia y GPS solo para rescate. iNav: FPV con navegación GPS (position hold, RTH, waypoints), también en ala fija.`,
a:`| | ArduPilot | Betaflight | iNav |
|---|---|---|---|
| Orientado a | Misiones autónomas, mapeo, industria | Carreras y freestyle FPV | Crucero y vuelo FPV con GPS |
| Prioridad | Fiabilidad y navegación | Agilidad y baja latencia | Estabilidad y navegación |
| GPS | Extenso: waypoints, RTH, geofencing | Limitado: modo rescate | Moderado: position hold, RTH, waypoints |
| Vehículos | Multirrotores, aviones, VTOL, rovers, submarinos | Multirrotores | Multirrotores y ala fija |
| Complejidad | Alta | Media | Media |

• **ArduPilot** (APM o Pixhawk) usa EKF para estimar el estado y se configura con Mission Planner o QGroundControl. Es ideal para mapeo e industria.
• **Betaflight** tiene PID avanzado, filtros muy elaborados y la menor latencia, pero poca navegación autónoma.
• **iNav** viene de la línea de Betaflight y le suma navegación GPS.
• **Otros:** KISS (cerrado, para su propio hardware, buena sensación de vuelo), Emuflight (FPV) y PX4 (autónomo, de la Dronecode Foundation).`}

);

