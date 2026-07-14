# Evidencias - 24. Ordenes de soldadura

## Ejecucion

1. `seed.mongodb.js` sobre `campus_ordenes_soldadura`: `insertMany` reporta `insertedCount: 6` en `ordenes`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Estado "rechazado": retorna 2 documentos (Tuberia 6 pulgadas, Escalera Metalica Modulo 2).
2. Estado "pendiente": retorna 2 documentos (Viga IPE-200 #14, Bracket Soporte A7).
3. Ordenes de Anibal Correa: retorna 2 documentos (Viga IPE-200 #14: pendiente, Tuberia 6 pulgadas: rechazado).
4. `updateOne` sobre Bracket Soporte A7: `matchedCount: 1`, `modifiedCount: 1`; pasa a `estadoInspeccion: "aprobado"`.
5. `updateOne` sobre Tuberia 6 pulgadas: `matchedCount: 1`, `modifiedCount: 1`; pasa de `rechazado` a `pendiente`.
6. Reporte por estado (tras los updates): `pendiente: 2`, `aprobado: 3`, `rechazado: 1`.

## Conclusion

El campo `estadoInspeccion` controlado modelo correctamente el ciclo de control de calidad (pendiente -> aprobado / rechazado -> pendiente para reproceso).
