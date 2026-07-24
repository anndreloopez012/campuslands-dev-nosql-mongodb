# Solucion - 02. Catalogo de skins battle royale

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_skins_battle_royale`, coleccion `skins`.
- Cada skin es un documento simple y plano: no hay subdocumentos ni arrays porque el catalogo no lo necesita (cumple el enfoque del ejercicio, `insertMany` con documentos simples).
- Se usa `insertMany` para cargar el catalogo completo en una sola operacion, tal como pide el enfoque del ejercicio.
- No se referencian otras colecciones: el juego se guarda como texto plano (`juego`) porque no se necesita informacion adicional sobre el juego en este ejercicio.

## Archivos

- `seed.mongodb.js`: crea la base de datos, la coleccion `skins` e inserta el catalogo con `insertMany`.
- `queries.mongodb.js`: filtros, proyeccion, conteo, update y una agregacion simple de reporte.
- `evidencias.md`: resultados esperados de cada consulta.
