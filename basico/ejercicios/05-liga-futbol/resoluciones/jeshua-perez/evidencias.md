# Evidencias - 05. Liga de futbol campus

## Ejecucion

1. `seed.mongodb.js` sobre `campus_liga_futbol`: `insertMany` reporta `insertedCount: 6` en `jugadores`.
2. `queries.mongodb.js` ejecutado sobre la misma base.

## Resultados por consulta

1. Tabla de goleadores ordenada desc: Esteban Molina (18), Santiago Vera (15), Felipe Duarte (9), Ricardo Pena (6), David Fonseca (1), Andres Puentes (0).
2. Top 3 asistidores: Ricardo Pena (14), Felipe Duarte (11), Santiago Vera (6).
3. Jugadores de "Halcones FC" ordenados alfabeticamente: David Fonseca, Esteban Molina.
4. Orden por partidos jugados ascendente: Santiago Vera y Felipe Duarte (19-20) primero, Andres Puentes y Ricardo Pena (22) al final.
5. `updateOne` sobre Felipe Duarte: `matchedCount: 1`, `modifiedCount: 1`; queda con 10 goles y 21 partidos jugados.

## Conclusion

Combinar proyeccion (`{ campo: 1, _id: 0 }`) con `sort()` permitio generar reportes tipo tabla de posiciones sin exponer campos innecesarios.
