# Evidencias - 22. Assets de animacion 3D

## Ejecucion

1. `seed.mongodb.js` sobre `campus_assets_animacion`: `insertMany` reporta `insertedCount: 6` en `assets`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Estado "borrador": retorna 2 documentos (Modelo_Nave_Principal, Textura_Metal_Nave).
2. Aprobados de "Serie Orbita": retorna 1 documento (Rig_Criatura_Alada).
3. Estado "revision": retorna 2 documentos (Textura_Piel_Base, Modelo_Escenario_Ciudad) con `nombre` y `version`.
4. `updateOne` sobre Modelo_Nave_Principal: `matchedCount: 1`, `modifiedCount: 1`; pasa a `estado: "revision"` y `version: 2`.
5. `updateOne` sobre Textura_Piel_Base: `matchedCount: 1`, `modifiedCount: 1`; pasa a `estado: "aprobado"`.
6. Reporte por estado (tras los updates): `borrador: 1`, `revision: 2`, `aprobado: 3`.

## Conclusion

Un campo `estado` controlado permitio modelar el flujo de trabajo de produccion 3D (borrador -> revision -> aprobado) y generar reportes de avance por proyecto.
