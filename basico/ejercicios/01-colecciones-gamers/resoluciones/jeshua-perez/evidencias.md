# Evidencias - 01. Inventario de perfiles gamer

## Ejecucion

1. Se corrio `seed.mongodb.js` sobre `campus_colecciones_gamers`. Resultado: coleccion `jugadores` creada con 6 documentos insertados (`insertedCount: 6`).
2. Se corrio `queries.mongodb.js` sobre la misma base.

## Resultados por consulta

1. `find({})`: retorna los 6 perfiles completos (Camila Rios, Julian Cortes, Andrea Suarez, Miguel Torres, Laura Gomez, Kevin Ramirez).
2. `findOne({ gamertag: "Andy_Frag" })`: retorna el documento de Andrea Suarez (Counter-Strike 2, rango Global Elite).
3. Proyeccion de activos: retorna 4 documentos (Camila, Julian, Andrea, Laura) mostrando solo `nombre` y `juegoPrincipal`, sin `_id`.
4. `countDocuments({})`: retorna `6`.
5. `updateOne` sobre Kevin Ramirez: `matchedCount: 1`, `modifiedCount: 1`. Tras el update, `horasJugadas` pasa de 95 a 100 y `activo` cambia a `true`.
6. `getCollectionNames()`: retorna `["jugadores"]`.

## Conclusion

El modelo con un solo documento por jugador y arrays embebidos para datos de lectura conjunta responde correctamente a las consultas pedidas sin necesidad de joins ni referencias.
