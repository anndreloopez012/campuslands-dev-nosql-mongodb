# Ejercicio 03: Inventario de Personajes (RPG)

## Objetivo 
Modelas datos NoSQL, insertar documentos anidados, consultar informacion y documentar evidencias claras con criterio para decidir entre documentos embedidos y referencias en un ecosistema RPG.

## Decisiones Tecnicas de Modelado
Para un videojuego de rol (RPG), los perfiles de los personajes requieren una alta flexibilidad y lecturas instantanes para no entorpecer los tiempos de carga en medio de una partida.

* **Coleccion Princuipal ('personajes'):** Almacenan el nucleo del heroe o avatar (nombre, clase, nivel, puntos?vida y estaddo activo).
* **Documentos Anidados / Subdocumentos (atributos):** Estadisticas dinamicas como fuerza, magia y destreza se modelaron anidadas dentro del personaje. Al ser valores propios dde su hoja de datos quue se renderizan siempre juntos, el subdocumento elimina la necesidad de realizar costosas opeciones de union (JOINs).
* **Arrays de objetos embedidos (equipacmiento):** El inventario de items equipados (armas, armaduras, amuletros con sus propias rarezas) se integro directamente en un array de objetos dentro de cada personaje. Dado que un personaje tiene un limite fisico estricto de ranuras de equipamiento (no crecera infinitamente), embeberlo garantiza un rendimiento optimo de lectura.

## Estructura de la Carpeta de Entrega
basico/ejercicios/03-personajes-rpg/resoluciones/jose-rodriguez/
├── README.md
├── seed.mongodb.js
├── queries.mongodb.js
└── evidencias.md