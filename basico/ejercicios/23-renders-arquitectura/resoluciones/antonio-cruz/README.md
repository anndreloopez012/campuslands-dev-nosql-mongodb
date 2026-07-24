# Renders arquitectura 3D

## Base de datos

`campus_renders_arquitectura`

## Colección

- renders

## Decisiones de modelado

Se utilizó una única colección porque cada documento representa un render completo asociado a un proyecto.

La información del cliente permanece embebida en el documento ya que el ejercicio se centra en realizar consultas por cliente y no existe una reutilización de datos que haga necesario trabajar con referencias.

## Operaciones implementadas

- Inserción de 5 renders.
- Consultas por cliente.
- Consultas por estado.
- Consultas por costo.
- Reporte ordenado por fecha de entrega.
- Actualización del estado de un render.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`