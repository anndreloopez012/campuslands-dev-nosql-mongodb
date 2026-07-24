# Evidencias - 30. Proyecto basico MongoDB

## Ejecucion

1. `seed.mongodb.js` sobre `campus_proyecto_basico`: `jugadores` queda con 5 documentos y `torneos` con 3 documentos.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden (Create, Read, Update, Delete).

## Resultados por operacion

### Create

1. `insertOne` de "Paula Nieto" (`jug-6`): `insertedCount: 1`.
2. `updateOne` con `$addToSet` sobre "Copa Campus Valorant": `matchedCount: 1`, `modifiedCount: 1`; `inscritos` pasa a `["jug-1", "jug-3", "jug-6"]`.

### Read

3. Jugadores activos: retorna 5 documentos (todos menos "Camila Rueda", `jug-4`).
4. Torneos abiertos: retorna 2 documentos ("Copa Campus Valorant", "Liga Interna LoL").
5. Resolucion manual de referencia: retorna 3 documentos (Andres Mejia, Sebastian Cano, Paula Nieto) con `nombre` y `rango`.

### Update

6. `updateOne` sobre "jug-5" (Daniel Pabon): `matchedCount: 1`, `modifiedCount: 1`; `rango` pasa de "Plata" a "Oro".
7. `updateOne` sobre "Liga Interna LoL": `matchedCount: 1`, `modifiedCount: 1`; pasa a `estado: "cerrado"`.

### Delete

8. `deleteOne` sobre "jug-4" (Camila Rueda, inactiva): `deletedCount: 1`.
9. Estado final: `jugadores` con 5 documentos (jug-1, jug-2, jug-3, jug-5, jug-6); `torneos` con 3 documentos, todos con `estado: "cerrado"` excepto "Copa Campus Valorant".

## Conclusion

El proyecto integro las cuatro operaciones CRUD sobre un modelo de dos colecciones con referencia manual, reutilizando los criterios de modelado (referencias vs. embebido, delete controlado, updates de estado) trabajados en los ejercicios anteriores del nivel basico.
