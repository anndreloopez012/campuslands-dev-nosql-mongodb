# Evidencias - 17. Viajes mochileros

## Ejecucion

1. `seed.mongodb.js` sobre `campus_viajes_mochileros`: `insertMany` reporta `insertedCount: 6` en `viajes`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Viajes desde marzo 2026: retorna 4 documentos (Salento, Guatape, Desierto de la Tatacoa, Villa de Leyva).
2. Viajes sobre presupuesto (`$expr`): retorna 2 documentos (Tayrona, Desierto de la Tatacoa).
3. Viajes de Cristian Lopez ordenados por fecha: Tayrona (2026-02-05), Villa de Leyva (2026-06-15).
4. Presupuesto > 500000: retorna 2 documentos (San Gil, Tayrona).
5. `updateOne` sobre Salento: `matchedCount: 1`, `modifiedCount: 1`; `gastado` pasa de 590000 a 615000 (ahora tambien queda sobre presupuesto).
6. Reporte de presupuesto total: `{ _id: null, presupuestoTotal: 3950000 }`.

## Conclusion

`Date` nativo permitio filtrar y ordenar por fecha de forma directa, y `$expr` resolvio la comparacion entre dos campos del mismo documento (`gastado` vs `presupuesto`) sin necesitar aggregation compleja.
