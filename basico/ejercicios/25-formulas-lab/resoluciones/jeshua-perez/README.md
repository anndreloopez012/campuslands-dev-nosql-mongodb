# Solucion - 25. Formula lab

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_formulas_lab`, coleccion `formulas`.
- `componentes` se modela como array de subdocumentos (`nombre`, `cantidadGr`) porque el enfoque del ejercicio es practicar arrays de componentes: buscarlos por nombre, contarlos y modificar cantidades puntuales dentro del array.
- No se referencia un catalogo global de componentes: en nivel basico el volumen de datos no lo justifica y cada formula se consulta como una unidad completa.

## Archivos

- `seed.mongodb.js`: crea la coleccion `formulas` con 5 formulas y sus componentes embebidos.
- `queries.mongodb.js`: busqueda por componente, filtro por cantidad de componentes con `$expr`/`$size`, `$push` para agregar un componente y `arrayFilters` para modificar uno puntual.
- `evidencias.md`: resultados esperados de cada consulta.
