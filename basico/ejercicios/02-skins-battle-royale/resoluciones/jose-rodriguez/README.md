# Ejercicio 01: Inventario de Skins (Battle Royale)
**Estudiante:** José Rodríguez  
**Especialidad:** Full-Stack Development & AI  

## Objetivo
Modelar datos NoSQL, insertar documentos, consultar información y documentar evidencias claras con criterio para decidir entre documentos embebidos y referencias.

## Decisiones Técnicas de Modelado (NoSQL vs SQL)
Para este caso de uso de personalización en un videojuego *Battle Royale*, se diseñó un modelo híbrido optimizado para consultas rápidas en la tienda y perfiles de los jugadores.

* **Colección Principal (`skins`):** Almacena el catálogo global de aspectos disponibles en el juego (nombre, tipo, rareza y costo).
* **Datos Embebedos (Subdocumentos):** Las `estadisticas_uso` (partidas completadas con la skin equipada, tasa de victoria) se modelaron dentro de un subdocumento en cada skin. Esto permite al equipo de desarrollo analizar qué cosméticos rinden mejor en el mapa sin buscar en tablas externas.
* **Datos Embebedos (Arrays):** Las `etiquetas_estilo` (tags visuales como reactivo, neón, animado) se manejan en un array de strings para facilitar búsquedas dinámicas en los filtros de la tienda.

## Estructura de la Carpeta de Entrega
resoluciones/jose-rodriguez/
├── README.md
├── seed.mongodb.js
├── queries.mongodb.js
└── evidencias.md