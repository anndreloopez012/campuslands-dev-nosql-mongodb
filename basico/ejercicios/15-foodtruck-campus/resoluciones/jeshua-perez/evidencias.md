# Evidencias - 15. Pedidos foodtruck

## Ejecucion

1. `seed.mongodb.js` sobre `campus_foodtruck_campus`: `insertMany` reporta `insertedCount: 5` en `pedidos`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. `insertOne` de Diego Palacios: `insertedCount: 1`; la coleccion pasa a 6 pedidos.
2. Pedidos "recibido" (tras el insert): retorna 3 documentos (Pedro Suarez, Diego Palacios, y Laura Beltran antes de actualizarse).
3. `updateOne` sobre Laura Beltran: `matchedCount: 1`, `modifiedCount: 1`; pasa a `estado: "en preparacion"`.
4. `updateOne` sobre Jhon Cardenas: `matchedCount: 1`, `modifiedCount: 1`; pasa a `estado: "entregado"`.
5. Pedidos entregados ordenados por fecha: Manuela Rios (11:50), Jhon Cardenas (12:10).
6. Reporte de total vendido en entregados: `{ _id: null, totalVendido: 42000 }` (20000 + 22000).

## Conclusion

`insertOne` cubrio la llegada de pedidos nuevos y `updateOne` con `$set` permitio mover cada pedido a traves de su ciclo de estados (`recibido` -> `en preparacion` -> `entregado`).
