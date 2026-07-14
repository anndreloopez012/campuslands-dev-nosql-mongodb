# Evidencias - 07. Garaje de autos de lujo

## Ejecucion

1. `seed.mongodb.js` sobre `campus_garaje_lujo`: `insertMany` reporta `insertedCount: 6` en `autos`.
2. `queries.mongodb.js` ejecutado sobre la misma base.

## Resultados por consulta

1. `precio > 900000`: retorna 3 documentos (Lamborghini Huracan, Bentley Continental GT, McLaren Artura).
2. `potenciaHP` entre 600 y 650: retorna 3 documentos (Ferrari Roma, Lamborghini Huracan, Porsche 911 Turbo S).
3. `anio >= 2023`: retorna 4 documentos (Ferrari Roma, Porsche 911 Turbo S, Aston Martin DB12, McLaren Artura).
4. Disponibles y precio <= 1000000: retorna 3 documentos (Ferrari Roma, Aston Martin DB12, Bentley Continental GT).
5. `updateOne` sobre Bentley Continental GT: `matchedCount: 1`, `modifiedCount: 1`; precio baja de 990000 a 950000.
6. `countDocuments({ potenciaHP: { $gt: 640 } })`: retorna `2` (Aston Martin DB12, McLaren Artura).

## Conclusion

Los operadores de comparacion (`$gt`, `$gte`, `$lte`) sobre campos numericos planos resolvieron todos los reportes pedidos sin necesidad de aggregation.
