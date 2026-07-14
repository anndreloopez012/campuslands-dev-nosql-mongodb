# Evidencias - 04. Heroes MOBA por rol

## Ejecucion

1. `seed.mongodb.js` sobre `campus_heroes_moba`: `insertMany` reporta `insertedCount: 6` en `heroes`.
2. `queries.mongodb.js` ejecutado sobre la misma base.

## Resultados por consulta

1. `find({})`: retorna los 6 heroes.
2. Filtro `rol: "Tank"`: retorna 2 documentos (Muralla de Piedra, Coloso Errante).
3. Filtro `disponibleRanked: true`: retorna 4 documentos antes del update.
4. Filtro `dificultad: "Alta"`: retorna 2 documentos (Sombra Silente, Arcano Central) con solo `nombre` y `rol`.
5. `updateOne` sobre Sombra Silente: `matchedCount: 1`, `modifiedCount: 1`; queda `disponibleRanked: true`.
6. `countDocuments({ disponibleRanked: true })` tras el update: retorna `5`.

## Conclusion

Filtros simples de igualdad sobre campos planos (`rol`, `dificultad`, `disponibleRanked`) fueron suficientes para responder todas las preguntas del ejercicio.
