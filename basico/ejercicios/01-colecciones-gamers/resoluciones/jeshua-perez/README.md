# Solucion - 01. Inventario de perfiles gamer

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_colecciones_gamers`, coleccion principal `jugadores` (plural, minuscula).
- Cada jugador es un documento independiente porque se consulta y actualiza de forma individual.
- `plataformas` se modela como array embebido: es una lista corta que siempre se lee junto con el resto del perfil, no justifica una coleccion aparte.
- No se usan referencias en este ejercicio: todas las entidades (nombre, gamertag, juego, rango, horas, plataformas) pertenecen al mismo perfil y se leen juntas.

## Archivos

- `seed.mongodb.js`: crea la base de datos, la coleccion `jugadores` y sus documentos iniciales.
- `queries.mongodb.js`: consultas de lectura, proyeccion, conteo y una actualizacion basica.
- `evidencias.md`: resultados esperados al ejecutar cada consulta.
