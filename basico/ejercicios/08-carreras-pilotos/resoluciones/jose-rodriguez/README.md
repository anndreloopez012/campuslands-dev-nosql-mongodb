# Ejercicio 08: Clasificación de Pilotos (Carreras)


## Objetivo
Modelar datos NoSQL, insertar documentos estructurados, realizar consultas enfocadas en ordenamiento (`sort`) y límites (`limit`) de alto rendimiento, y documentar evidencias claras con criterio para decidir entre datos embebidos y referencias en un ecosistema de automovilismo.

## Decisiones Técnicas de Modelado (NoSQL vs SQL)
Para un sistema de cronometraje y telemetría de carreras, las consultas críticas del negocio demandan construir tablas de posiciones rápidas (Leaderboards), clasificaciones por vuelta e historiales de rendimiento inmediatos.

* **Colección Principal (`pilotos`):** Almacena la entidad base de cada competidor (nombre, escudería, número_carro, país y estado activo en la temporada).
* **Documentos Anidados / Subdocumentos (`estadisticas_temporada`):** Métricas de competición críticas basadas en números como `puntos_totales`, `podios` y `vueltas_rapidas` se modelaron dentro de un subdocumento. Al ser datos consolidados que siempre se renderizan al lado del perfil del piloto en la tabla de posiciones, estructurarlas de forma anidada elimina la necesidad de realizar operaciones JOIN relacionales costosas.
* **Arrays Embebedos (`ultimos_resultados_posicion`):** Las posiciones finales de las últimas carreras (ej. `[1, 3, 2, 5, 12]`) se manejan en un array de enteros directo en el documento. Esto permite analizar la constancia y racha reciente del piloto de manera inmediata sin consultar una tabla histórica externa.

## Estructura de la Carpeta de Entrega
basico/ejercicios/08-carreras/resoluciones/jose-rodriguez/
├── README.md
├── seed.mongodb.js
├── queries.mongodb.js
└── evidencias.md