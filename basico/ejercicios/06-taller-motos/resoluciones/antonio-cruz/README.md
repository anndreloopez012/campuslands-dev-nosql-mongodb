# Órdenes de taller de motos

## Base de datos

`campus_taller_motos`

## Colección principal

- ordenes

## Decisiones del modelo

Cada documento representa una orden de servicio registrada en el taller.

Se utilizó una sola colección porque toda la información pertenece directamente a la orden de trabajo y no existen relaciones que justifiquen referencias. El modelo facilita las consultas y las actualizaciones del estado de cada servicio.

## Archivos

- seed.mongodb.js
- queries.mongodb.js
- evidencias.md