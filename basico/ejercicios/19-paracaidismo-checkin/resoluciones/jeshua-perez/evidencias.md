# Evidencias - 19. Check-in de paracaidismo

## Ejecucion

1. `seed.mongodb.js` sobre `campus_paracaidismo_checkin`: `insertMany` reporta `insertedCount: 6` en `saltos`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Sin certificado medico: retorna 1 documento (Hugo Restrepo).
2. Peso fuera de rango (40-100 kg): retorna 1 documento (Ronald Chaves, 110 kg).
3. Marcados aptos pero que incumplen una regla (sin certificado o peso > 100 kg): retorna 0 documentos con los datos del seed, porque el error real de Karen Solano no es certificado ni limite superior de peso, sino que su peso (95 kg) esta demasiado cerca del limite y el instructor decide manualmente no habilitarla. Esta consulta queda como plantilla de auditoria para detectar inconsistencias automaticas.
4. Alumnos aptos (antes del update): retorna 4 documentos (Felipe Aranda, Karen Solano, Ximena Barrera, Isabel Marin).
5. `updateOne` sobre Karen Solano: `matchedCount: 1`, `modifiedCount: 1`; corrige `apto` a `false` por decision manual del instructor (peso 95 kg, cerca del limite de 100 kg).
6. Reporte por instructor: `Marcela Ibarra: 3`, `Daniel Cepeda: 3`.

## Conclusion

Las validaciones manuales con `find` y operadores logicos permitieron detectar registros que no cumplen las reglas del negocio (certificado, rango de peso) antes de confirmarlos como aptos para saltar.
