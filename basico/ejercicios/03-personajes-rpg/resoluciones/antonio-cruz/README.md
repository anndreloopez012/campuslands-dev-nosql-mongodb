# Personajes RPG

## Base de Datos
`campus_personajes_rpg`
## Colección Principal
- `personajes`

## Decisiones del Modelo

Cada documento representa un personaje completo.

Los atributos y el equipo se almacenaron como subdocumentos porque forman parte del estado del personaje y normalmente se consultan juntos. Esto simplifica las consultas y evita dividir información que siempre se utiliza en la misma operación.

## Archivos

- seed.mongodb.js
- queries.mongodb.js
- evidencias.md