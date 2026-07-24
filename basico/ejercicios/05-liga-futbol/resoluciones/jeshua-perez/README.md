# Solucion - 05. Liga de futbol campus

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_liga_futbol`, coleccion `jugadores`.
- Documento plano por jugador: no se embebe el equipo como subdocumento porque en este ejercicio solo se necesita el nombre del equipo como filtro, no sus datos completos.
- El enfoque pedido es proyecciones y ordenamiento, por eso el modelo prioriza campos numericos simples (`goles`, `asistencias`, `partidosJugados`) faciles de proyectar y ordenar con `sort()`.

## Archivos

- `seed.mongodb.js`: crea la coleccion `jugadores` con estadisticas de 6 jugadores de 3 equipos.
- `queries.mongodb.js`: proyecciones limpias combinadas con `sort()` y `limit()`, mas una actualizacion de estadisticas.
- `evidencias.md`: resultados esperados de cada consulta.
