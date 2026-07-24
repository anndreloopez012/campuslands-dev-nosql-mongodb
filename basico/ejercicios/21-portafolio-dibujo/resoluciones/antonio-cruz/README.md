# Portafolio de dibujo

## Base de datos

`campus_portafolio_dibujo`

## Colección

- dibujos

## Decisiones de modelado

Se utilizó una única colección porque cada documento representa un dibujo completo.

Las etiquetas se almacenan en un arreglo (`etiquetas`) ya que permiten realizar búsquedas rápidas por temática sin necesidad de crear colecciones adicionales. Este modelo resulta más simple y suficiente para el alcance del ejercicio.

## Operaciones implementadas

- Inserción de 5 dibujos.
- Consultas por estado de publicación.
- Búsquedas utilizando etiquetas.
- Consulta por técnica.
- Reporte ordenado por fecha.
- Actualización del estado de publicación.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`