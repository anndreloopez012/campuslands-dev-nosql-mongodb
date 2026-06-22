# Ejercicio 05: Catalogo de Equipos y Estadisticas (Futbol)

## Objetivo 
Modelar datos NoSQL, insertar documentos estructurados, realizar consultas enfocadas en proyecciones y ordenamiento, y documentar evidencias claras con criterio para decidir entre datos embedidos y referencias en un ecosistema deportivo.

## Decisiones tecnicas de Modelado
Para una aplicacion de seguimiento de una liga de futbol, las consultas mas comunes corresponden a la tabla de posiciones (ordenamiento) y fichas resumen de rendimiento equipo (proyecciones rapidas).

* **Coleccion Principal (equipos):** Almacena el nucleo de cada club deportivo (nombre, director_tecnico, presupuesto_millones y estado activo en el torneo).
* **Documentos Anidadfos / Subdocumentos (estadisticas_temporada):** Atributos nummericos de rendimiento como partidas_jugadas, puntos_totales y goles_a_favor se modelaron de manera anidada. Al ser metricas que se actualizan y se leen simultaneamente para armar la tabla de clasificacion, estructurarlas aqui elimina JOINs costosos.
* **Arrays Embebedos (jugadores_estrella):** La lista de los jugadores clave o capitanes del equipo se manejan en un array de strings directo en el documento. Al ser un listado acotado de figuras principales y no la plantilla completa de divisiones inferiores, embeberlo asegura que toda la informacion destada del club se recupere en una sola lectura de disco. 

## Estructura de la Carpeta de Entrega
basico/ejercicios/05-futbol/resoluciones/jose-rodriguez/
├── README.md
├── seed.mongodb.js
├── queries.mongodb.js
└── evidencias.md