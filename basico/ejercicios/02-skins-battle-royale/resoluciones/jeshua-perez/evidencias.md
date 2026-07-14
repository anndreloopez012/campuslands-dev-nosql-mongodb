# Evidencias - 02. Catalogo de skins battle royale

## Ejecucion

1. `seed.mongodb.js` sobre `campus_skins_battle_royale`: `insertMany` reporta `insertedCount: 6` en la coleccion `skins`.
2. `queries.mongodb.js` ejecutado sobre la misma base.

## Resultados por consulta

1. `find({})`: retorna las 6 skins del catalogo.
2. Filtro por `juego` y `disponible`: retorna 2 documentos ("Fenix Nocturno" y "Guardian de Cristal").
3. Proyeccion por rareza "Epica": retorna 2 documentos ("Guardian de Cristal", "Sombra Electrica") con solo `nombre` y `precio`.
4. `countDocuments({ disponible: true })`: antes del update retorna `4`.
5. `updateOne` sobre "Explorador del Desierto": `matchedCount: 1`, `modifiedCount: 1`; queda `disponible: false`.
6. Agregacion de precio promedio: retorna un documento `{ _id: null, precioPromedio: 1591.67 }` (aprox).

## Conclusion

`insertMany` permitio cargar el catalogo en una sola operacion y los documentos simples (sin anidamiento) fueron suficientes para resolver filtros, proyecciones, conteo y una actualizacion basica.
