# Solucion - 10. Liga de pingpong

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_pingpong_campus`, coleccion `jugadores`.
- Documento plano por jugador con `club` y `categoria` como campos de texto simples: el enfoque del ejercicio es conteo y busqueda, por lo que no se necesitan subdocumentos.
- `distinct("club")` se usa para listar clubes sin duplicados, complementando `countDocuments` para los reportes de conteo.

## Archivos

- `seed.mongodb.js`: crea la coleccion `jugadores` con 6 jugadores de 3 clubes.
- `queries.mongodb.js`: busquedas por club/categoria, conteos y `distinct`, mas una actualizacion de resultado.
- `evidencias.md`: resultados esperados de cada consulta.
