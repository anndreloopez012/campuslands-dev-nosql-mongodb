# Ejecricio 02: Inventario de Skins (Battle Royale)

## Objetivo 
Modelar datos NoSQL, insertar documentos, consultar informacion mediante filtros y documentar evidencias claras con criterio para decidir entre documentos embebidos y referencias, enfocandose en operadores 'insertMany' y documentos simples.

## Decisiones Tecnicas de modelado
Para ested caso de uso de personaliuzacion cometica en un videojuego *Battle Royal*, se diseno un modelo de documentos optimizado para lecturas rapidas durante la cargaa de la tienda y la sincronizacion del inventario de los jugadores.

* **Coleccion Principal ('skins'):** Almacena el catalogo global de aspectos y cosmeticos disponiblles en el juego (nombre, tipo, rareza y costo).
* **Datos Embebidos (Subdocumentos):** Las estadisticas_uso (partidas completas con la skin equipada, tasa de victorias) se modelaron dentro de un subdocumento en cada skin. Esto permite al equipo de desarrollo analizar el rendimiento de los cosmeticos sin necesidad de consultar colecciones externas.
* **Datos Embebidos (Arrays):** Las etiquetas_estilo (tags visuales como reactivo, neon, animado) se manejan en un array de strings para facilitar busquedas dinamicas en los filtros de personalizacion de la tienda.

## Estructura de la Carpeta de Entrega
basico/ejercicios/02-skins-battle-royale/resoluciones/jose-rodriguez/
├── README.md
├── seed.mongodb.js
├── queries.mongodb.js
└── evidencias.md