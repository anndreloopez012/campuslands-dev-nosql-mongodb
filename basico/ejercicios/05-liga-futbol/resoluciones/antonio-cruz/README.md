# Liga de fútbol Campus

## Base de datos

`campus_liga_futbol`

## Colección principal

- equipos

## Decisiones del modelo

Cada documento representa un equipo de la liga.

Se utilizó una colección única porque toda la información pertenece directamente al equipo y las consultas del ejercicio se enfocan en proyecciones y ordenamiento de datos. No fue necesario utilizar subdocumentos ni referencias.

## Archivos

- seed.mongodb.js
- queries.mongodb.js
- evidencias.md