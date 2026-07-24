# Ejercicio 30 - Proyecto basico MongoDB

**Autor:** juan-lema
**Tematica:** videojuegos y campus (torneos de videojuegos entre estudiantes)
**Base de datos:** `campus_proyecto_basico`
**Coleccion:** `registros`

## Modelo documental

Cada documento de `registros` representa la inscripcion de un estudiante a un torneo de videojuegos del campus. Se eligio una unica coleccion con subdocumentos y arrays embebidos porque toda la informacion se lee siempre junta al consultar un jugador:

- **Campos simples**: `nombre`, `carrera`, `juego`, `categoria`, `nivel`, `activo`, `puntaje`, `fechaInscripcion`.
- **Array simple** `etiquetas`: caracteristicas del jugador, se consulta junto al documento y no crece de forma ilimitada.
- **Subdocumento** `equipo` (`nombre`, `sede`): datos propios de la inscripcion, no se comparten entre muchos jugadores en este alcance, por lo que se embebe en vez de referenciar.
- **Array de subdocumentos** `partidas` (`rival`, `resultado`, `fecha`): historial de partidas del jugador, tamano acotado y siempre se lee junto al jugador, ideal para embeber.

No se usan referencias porque, a nivel basico y con el volumen de datos del ejercicio, ningun subconjunto de datos se comparte entre multiples entidades ni crece de forma independiente.

## Archivos entregados

- `seed.mongodb.js`: crea la coleccion e inserta 6 documentos originales.
- `queries.mongodb.js`: consulta general, dos consultas filtradas, `updateOne`, `deleteOne` y un reporte con `aggregate`.
- `evidencias.md`: resultados esperados de cada consulta.

## Como ejecutar

1. Abrir `seed.mongodb.js` en MongoDB Shell, Compass o la extension de VS Code y ejecutarlo completo.
2. Ejecutar `queries.mongodb.js` bloque por bloque.
3. Comparar la salida con `evidencias.md`.
