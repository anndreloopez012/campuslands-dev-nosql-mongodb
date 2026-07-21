# 02. Catalogo de skins battle royale — juan-lema

## Modelo documental

Se usa una sola coleccion `registros` dentro de la base `campus_skins_battle_royale`. Cada documento representa una skin con sus atributos propios (`nombre`, `personaje`, `juego`, `rareza`, `precio`, `temporada`, `disponible`) y un array embebido `etiquetas` para las caracteristicas visuales o de tematica.

No se referencian colecciones externas porque las etiquetas y datos del personaje se leen siempre junto con la skin y no se comparten como entidades independientes entre documentos; embeberlos evita joins innecesarios y mantiene las consultas simples para un catalogo de este tamano.

## Contenido

- `seed.mongodb.js`: creacion de la coleccion e insercion de 6 skins con datos variados (rarezas, temporadas y disponibilidad distintas).
- `queries.mongodb.js`: consulta general, consultas filtradas, una actualizacion (`updateOne`), una eliminacion (`deleteOne`) y un reporte con `aggregate`, cada una con su verificacion.
- `evidencias.md`: resultados esperados de cada consulta.

## Como ejecutar

1. Abrir MongoDB Shell o Compass conectado a `mongodb://localhost:27017`.
2. Ejecutar `seed.mongodb.js` completo.
3. Ejecutar `queries.mongodb.js` bloque por bloque.
