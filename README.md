# Tarjetas DDANT

Tarjetas de estudio para el parcial de **Desarrollo de Dispositivos Aéreos No Tripulados** (Facultad de Ingeniería, Universidad ORT Uruguay).

Las 114 preguntas del listado oficial para el parcial, con respuestas armadas a partir de las diapositivas de las clases 1 a 6. Cada tarjeta muestra la pregunta de un lado y la respuesta del otro.

**Sitio:** https://ddanttarjetas.netlify.app

## Qué se puede hacer

* **Dar vuelta las tarjetas** con un clic, un toque o la barra espaciadora, y pasar de una a otra con las flechas o deslizando en el celular.
* **Filtrar** por tema, por rango de preguntas (por ejemplo de la 75 a la 97), por clase de origen y por estado, o buscar texto en preguntas y respuestas.
* **Ordenar** en orden, mezcladas o con las dudosas primero, y armar **sesiones** de 10, 20 o 30 tarjetas.
* **Marcar** cada tarjeta como *Ya la sé*, que la saca del mazo, o como *Dudosa*, que la deja para repasar. Las marcas se pueden deshacer en cualquier momento.
* **Ver tu avance** por selección y en todo el curso.
* **Crear tarjetas propias**, con soporte de negrita, listas, tablas y fórmulas, y **editar** las del curso con opción de volver al original.
* **Exportar e importar** un respaldo con tu avance, o solo tus tarjetas para compartirlas con compañeros.
* **Diagramas** dibujados en SVG: interconexión de componentes, perfil NACA 4412, curva de CL, maniobras del cuadricóptero, lazo PID y ciclo del filtro de Kalman.
* **Tema claro y oscuro**, diseño adaptado a celular y atajos de teclado.

## Contenido

| Clase | Tema | Preguntas |
|---|---|---|
| 1 | Introducción, historia, aplicaciones, normativa y ética | 1 a 13 |
| 2 | Componentes de drones | 14 a 37 |
| 3 | Aerodinámica y física | 75 a 97 |
| 4 | Electricidad y electrónica | 38 a 46 y 51 |
| 5 | Montaje del dron | 55 a 64 |
| 6 | Configuración del sistema de potencia | 47 a 50 y 65 a 68 |

Las preguntas 98 a 113 (dinámica y control: LQR, lógica difusa, Kalman, PID) no tenían diapositivas, y su respuesta es general. La tarjeta lo indica, y también avisa cuando una respuesta suma información que no está en las clases.

> Es material de estudio armado por estudiantes. Puede tener errores: ante cualquier duda, manda lo que se dio en clase.

## Cómo funciona

Es un sitio estático, sin frameworks ni backend:

* HTML, CSS y JavaScript puro.
* El progreso y las tarjetas propias se guardan en el `localStorage` del navegador de cada usuario. Nadie puede modificar lo que ven los demás.
* Las fuentes (B612 y Source Serif 4, con licencia SIL Open Font License) están alojadas en el propio sitio, así que no depende de servicios externos.

## Publicarlo

El sitio está en Netlify. Para actualizarlo, corré `./build.sh` y subí el contenido de la carpeta `site` en la página de Deploys del proyecto, arrastrando la carpeta o un zip con los archivos en la raíz.
