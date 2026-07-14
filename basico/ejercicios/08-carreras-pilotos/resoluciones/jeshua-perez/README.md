# Solucion - 08. Ranking de pilotos

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_carreras_pilotos`, coleccion `pilotos`.
- Documento plano por piloto con contadores numericos (`puntos`, `victorias`, `podios`) porque el enfoque del ejercicio es `sort()` y `limit()` sobre esos campos para generar rankings.
- No se referencia la escuderia como coleccion aparte: en este ejercicio solo se necesita agrupar/filtrar por su nombre, no consultar datos adicionales de la escuderia.

## Archivos

- `seed.mongodb.js`: crea la coleccion `pilotos` con 6 pilotos de 3 escuderias.
- `queries.mongodb.js`: rankings con `sort()` + `limit()` y una actualizacion de puntos tras una carrera.
- `evidencias.md`: resultados esperados de cada consulta.
