# Solucion - 22. Assets de animacion 3D

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_assets_animacion`, coleccion `assets`.
- `estado` es un campo controlado (`borrador`, `revision`, `aprobado`) porque el enfoque del ejercicio es documentos con estado: cada asset avanza por un flujo de trabajo lineal.
- `version` se incrementa junto con el estado para dejar rastro de cuantas iteraciones tuvo el asset antes de aprobarse.
- No se separan tipo/proyecto en colecciones aparte: en este ejercicio son solo etiquetas de clasificacion sobre el asset.

## Archivos

- `seed.mongodb.js`: crea la coleccion `assets` con 6 assets de 2 proyectos en distintos estados.
- `queries.mongodb.js`: filtros por estado/proyecto, transiciones de estado con `updateOne` y un reporte agrupado.
- `evidencias.md`: resultados esperados de cada consulta.
