# Evidencias - 09. Ranking kickboxing

## Ejecucion

1. `seed.mongodb.js` sobre `campus_kickboxing_ranking`: `insertMany` reporta `insertedCount: 6` en `peleadores`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. `$and` activos con >10 victorias: retorna 2 documentos (Brayan Cifuentes, Diego Salcedo).
2. `$or` Peso Pluma o >8 nocauts: retorna 3 documentos (Brayan Cifuentes, Manuela Castro, Diego Salcedo).
3. `$not` distinto de inactivo: retorna 4 documentos (todos los `activo: true`).
4. Combinacion `$and` + `$or`: retorna 3 documentos (Natalia Rios, Brayan Cifuentes, Diego Salcedo).
5. `updateOne` sobre Sergio Aponte: `matchedCount: 1`, `modifiedCount: 1`; ya estaba `activo: false`, por lo que `modifiedCount` puede ser `0` si Mongo detecta que el valor no cambio.
6. `countDocuments` con `$expr` de record ganador entre activos: retorna `4` (Brayan Cifuentes, Natalia Rios, Manuela Castro, Diego Salcedo).

## Conclusion

Los operadores logicos (`$and`, `$or`, `$not`, `$expr`) permitieron construir reglas de ranking combinando varias condiciones sobre el mismo documento.
