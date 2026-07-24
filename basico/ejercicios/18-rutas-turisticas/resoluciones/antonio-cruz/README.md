# Rutas turísticas

## Base de datos

`campus_rutas_turisticas`

## Colección

- rutas

## Decisiones de modelado

Se utilizó una sola colección porque cada documento representa una ruta turística completa.

La información geográfica se almacenó como un subdocumento con latitud y longitud, ya que pertenece exclusivamente a cada ruta y el ejercicio únicamente requiere datos geográficos simples.

No se utilizaron referencias porque no existen entidades compartidas que lo justifiquen.

## Operaciones implementadas

- Inserción de 5 rutas.
- Consultas por estado, dificultad y distancia.
- Reporte ordenado por duración.
- Actualización del estado de una ruta.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`