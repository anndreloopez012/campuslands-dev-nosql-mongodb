# 10. Liga de pingpong — juan-lema

## Base de datos
`campus_pingpong_campus`, coleccion `registros`.

## Modelo
Se usa **una sola coleccion** con documentos embebidos (sin subdocumentos ni referencias) porque cada jugador se lee y actualiza de forma independiente; no hay datos compartidos entre entidades que justifiquen referenciar. El array `etiquetas` embebe caracteristicas del jugador (estilo de juego, nivel) para permitir busquedas rapidas sin joins.

Campos: `nombre`, `sede`, `categoria` (singles/dobles), `activo`, `partidosJugados`, `victorias`, `derrotas`, `puntaje`, `etiquetas`.

## Contenido de `seed.mongodb.js`
Inserta 6 jugadores con datos variados en sede, categoria, estado y puntaje, tras limpiar la coleccion para que la carga sea repetible.

## Contenido de `queries.mongodb.js`
1. Busqueda general (proyeccion).
2. Busqueda filtrada por categoria y estado, ordenada por puntaje.
3. Busqueda por etiqueta dentro de un array.
4. Conteo total, de activos y de inactivos (`countDocuments`).
5. Conteo por categoria.
6. `updateOne` para registrar una victoria (`$inc`) y su verificacion.
7. `deleteOne` sobre un jugador inactivo y su verificacion.
8. Reporte con `aggregate` ($group) de jugadores y puntaje promedio por sede.

## Como ejecutar
```bash
mongosh "mongodb://localhost:27017" seed.mongodb.js
mongosh "mongodb://localhost:27017" queries.mongodb.js
```
