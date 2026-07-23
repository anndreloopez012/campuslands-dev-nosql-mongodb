# Garaje de autos de lujo

## Base de datos

`campus_garaje_lujo`

## Colección principal

- autos

## Decisiones del modelo

Cada documento representa un automóvil del catálogo.

Se utilizó una única colección porque toda la información pertenece al vehículo y las consultas del ejercicio están enfocadas en filtros numéricos como precio y potencia, sin necesidad de relaciones entre documentos.

## Archivos

- seed.mongodb.js
- queries.mongodb.js
- evidencias.md