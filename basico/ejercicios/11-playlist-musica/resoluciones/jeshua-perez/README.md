# Solucion - 11. Playlist por energia

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_playlist_musica`, coleccion `canciones`.
- `tags` se modela como array simple de strings porque el enfoque del ejercicio es practicar consultas y actualizaciones sobre arrays simples (`$all`, `$push`, `$pull`, `$ne`).
- No se separan los tags en una coleccion aparte: son pocos valores por cancion y siempre se consultan junto con el resto del documento.

## Archivos

- `seed.mongodb.js`: crea la coleccion `canciones` con 6 canciones y sus tags.
- `queries.mongodb.js`: consultas sobre el array `tags` y actualizaciones con `$push`/`$pull`.
- `evidencias.md`: resultados esperados de cada consulta.
