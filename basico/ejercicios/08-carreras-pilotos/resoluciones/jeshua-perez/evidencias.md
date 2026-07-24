# Evidencias - 08. Ranking de pilotos

## Ejecucion

1. `seed.mongodb.js` sobre `campus_carreras_pilotos`: `insertMany` reporta `insertedCount: 6` en `pilotos`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Ranking inicial desc: Nicolas Prada (310), Mateo Cardenas (285), Valeria Nunez (265), Emilio Rangel (245), Sara Beltran (190), Camilo Osorio (150).
2. Top 3: Nicolas Prada, Mateo Cardenas, Valeria Nunez.
3. Ultimo lugar: Camilo Osorio (150 puntos).
4. Top 2 por victorias: Nicolas Prada (8), Mateo Cardenas (6).
5. `updateOne` sobre Sara Beltran: `matchedCount: 1`, `modifiedCount: 1`; queda con 215 puntos, 3 victorias, 8 podios.
6. Ranking actualizado desc: Nicolas Prada (310), Mateo Cardenas (285), Valeria Nunez (265), Emilio Rangel (245), Sara Beltran (215), Camilo Osorio (150).

## Conclusion

`sort()` combinado con `limit()` genero rankings completos y parciales (top N, ultimo lugar) de forma directa sobre campos numericos planos.
