# Ejercicio 02: Inventario de Skins (Battle Royale)
**Estudiante:** Jose Rodriguez

## Objetivo

Modelar datos NoSQL, insertar documentos, consultar informacion y documentar evidencias claras con criterio para decidir entre documentos embedidos y referencias.

## Desisiones tecnicas de modelado (NoSQL vs SQL)
Para este caso de uso de personalizacion en un videojuego *Battle Royale*, se diseno un modelo hibrido optimizado para consultas rapidas en la tienda y perfiles de los jugadores.

* **Coleccion principal ('Skins')" ** Almacena el catalogo global de aspectos disponibkles en el juego (nombre,, tipo, rareza y costo).
* **Datos Embebedos (subdocumentos): ** Las 'estadisticas_uso' (partidas completadas con la skin equipada, tasas de victoria) se modelaron dentro dde un subdocumento en cada skin. Esto permite al equipo de desarrollo analizar que cosmeticos rinden mejor en el mapa sin buscar en tablas externas.
* **Datos embebedos (Arrays):** Las 'etiquetas_estilo' (tags visuales como reactivo, neon, animado) se manejan en un array de strings para facilitar busquedas dinamicas en los filtros de la tienda.

## Estructura de la Carpeta de Entrega
resoluciones/jose-rodriguez/
├── README.md
├── seed.mongodb.js
├── queries.mongodb.js
└── evidencias.md