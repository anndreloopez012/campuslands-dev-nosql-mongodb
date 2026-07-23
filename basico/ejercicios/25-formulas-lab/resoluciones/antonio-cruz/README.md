# Formula Lab

## Base de datos

`campus_formulas_lab`

## Colección

- formulas

## Decisiones de modelado

Se utilizó una única colección porque cada documento representa una fórmula química completa.

Los componentes se almacenan como un arreglo (`componentes`) ya que pertenecen exclusivamente a la fórmula y es común buscarlas según alguno de sus ingredientes. Este modelo evita consultas adicionales y mantiene la información agrupada.

## Operaciones implementadas

- Inserción de 5 fórmulas.
- Consultas por estado.
- Búsqueda utilizando componentes.
- Consulta por categoría.
- Reporte ordenado por fecha.
- Actualización del estado de una fórmula.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`