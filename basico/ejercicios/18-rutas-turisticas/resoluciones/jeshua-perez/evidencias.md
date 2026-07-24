# Evidencias - 18. Rutas turisticas

## Ejecucion

1. `seed.mongodb.js` sobre `campus_rutas_turisticas`: `insertMany` reporta `insertedCount: 6` en `rutas`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. `createIndex({ ubicacion: "2dsphere" })`: confirma la creacion del indice geoespacial.
2. Rutas en "Salento": retorna 1 documento ("Ruta Cocora").
3. Dificultad "Baja": retorna 2 documentos (Camino a la Piedra del Penol, Camino del Centro Historico).
4. `$near` desde un punto cercano a Bogota (50 km): retorna 1 documento ("Sendero Cerro de Monserrate").
5. Rutas > 5 km ordenadas desc: Ruta Cocora (11), Ruta Cascada La Chorrera (8.4).
6. `updateOne` sobre "Ruta Cascada La Chorrera": `matchedCount: 1`, `modifiedCount: 1`; queda `dificultad: "Media"`.

## Conclusion

El formato GeoJSON `Point` junto con el indice `2dsphere` permitio resolver tanto filtros clasicos (ciudad, dificultad, distancia) como una consulta de cercania real (`$near`).
