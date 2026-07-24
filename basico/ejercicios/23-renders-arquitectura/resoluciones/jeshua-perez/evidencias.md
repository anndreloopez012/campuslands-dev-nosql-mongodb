# Evidencias - 23. Renders arquitectura 3D

## Ejecucion

1. `seed.mongodb.js` sobre `campus_renders_arquitectura`: `insertMany` reporta `insertedCount: 6` en `renders`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Proyectos de "Grupo Meridiano": retorna 2 documentos (Oficinas Torre Sol, Centro Comercial Nova).
2. Pendientes de "Familia Escobar": retorna 1 documento (Remodelacion Cocina).
3. Entregados de "Constructora Alameda" ordenados por fecha: Casa Ventanal Norte (2026-04-10), Apartamento Loft 402 (2026-05-02).
4. Total facturado por cliente: `Constructora Alameda: 3000000`, `Grupo Meridiano: 7700000`, `Familia Escobar: 2300000`.
5. `updateOne` sobre "Oficinas Torre Sol": `matchedCount: 1`, `modifiedCount: 1`; queda `entregado: true`.
6. `distinct("cliente")`: retorna `["Constructora Alameda", "Grupo Meridiano", "Familia Escobar"]`.

## Conclusion

Filtrar y agrupar directamente por el campo `cliente` (sin referencia externa) fue suficiente para resolver todas las consultas por cliente pedidas en el ejercicio.
