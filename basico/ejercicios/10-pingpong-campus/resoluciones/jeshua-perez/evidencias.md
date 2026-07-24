# Evidencias - 10. Liga de pingpong

## Ejecucion

1. `seed.mongodb.js` sobre `campus_pingpong_campus`: `insertMany` reporta `insertedCount: 6` en `jugadores`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Busqueda por club "Paleta de Oro": retorna 2 documentos (Carlos Munoz, Hernan Diaz).
2. Busqueda por categoria "Avanzado": retorna 3 documentos (Carlos Munoz, Hernan Diaz, Paola Mendez).
3. `countDocuments({ categoria: "Intermedio" })`: retorna `2`.
4. `countDocuments({})`: retorna `6`.
5. Jugadores con mas de 15 ganados: retorna 3 documentos (Carlos Munoz 22, Hernan Diaz 18, Paola Mendez 20).
6. `updateOne` sobre Melissa Roa: `matchedCount: 1`, `modifiedCount: 1`; `partidosGanados` pasa de 4 a 5.
7. `distinct("club")`: retorna `["Paleta de Oro", "Ping Campus", "Smash Club"]`.

## Conclusion

`countDocuments` y `distinct` cubrieron los reportes de conteo, mientras que `find` con filtros simples resolvio las busquedas por club y categoria.
