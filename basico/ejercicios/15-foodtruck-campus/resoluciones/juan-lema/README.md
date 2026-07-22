# Ejercicio 15 — Pedidos foodtruck

## Autor
juan-lema

## Resumen
Solucion NoSQL en MongoDB para gestionar pedidos de foodtrucks. Se modelo una
sola coleccion `registros` en la base `campus_foodtruck_campus`, embebiendo
cliente, foodtruck e items dentro de cada pedido por ser datos que siempre se
consultan juntos y no se comparten entre muchos documentos (ver `modelado.md`).

## Contenido
- `seed.mongodb.js`: crea la base, limpia la coleccion e inserta 6 pedidos
  con distintos estados, foodtrucks y metodos de pago.
- `queries.mongodb.js`: find general, find filtrado, insertOne, updateOne,
  deleteOne con verificaciones, y una aggregation de ventas por foodtruck.
- `modelado.md`: justificacion del diseno documental.
- `evidencias.md`: resultados esperados de cada consulta.

## Como ejecutar
```bash
mongosh < seed.mongodb.js
mongosh < queries.mongodb.js
```
