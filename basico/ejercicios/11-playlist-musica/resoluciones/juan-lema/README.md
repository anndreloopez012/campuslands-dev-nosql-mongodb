# 11. Playlist por energia — Solucion

**Autor:** juan-lema

## Resumen
Se modelo una coleccion unica `registros` en la base `campus_playlist_musica`, donde cada documento es una cancion con un array simple `etiquetas` para clasificar el momento de uso (gym, focus, chill, etc.) y un campo `energia` (1-10) para filtrar por intensidad.

## Archivos
- `modelado.md` — justificacion del modelo (documento embebido, array simple, indices). Extra, no obligatorio.
- `seed.mongodb.js` — 6 documentos originales con datos variados de genero y energia.
- `queries.mongodb.js` — CRUD: find general, find filtrado, updateOne (`$inc`, `$set`/`$push`), deleteOne, con verificaciones.
- `evidencias.md` — resultados esperados de cada consulta.

## Como ejecutar
```bash
mongosh < seed.mongodb.js
mongosh < queries.mongodb.js
```
