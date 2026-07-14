# Evidencias - 13. Sagas de ciencia ficcion

## Ejecucion

1. `seed.mongodb.js` sobre `campus_sci_fi_sagas`: `sagas` queda con 3 documentos y `peliculas` con 6 documentos.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. `sagas.find({})`: retorna las 3 sagas (Horizonte Estelar, Nexo Cuantico, Ecos del Vacio).
2. Peliculas de "saga-horizonte" ordenadas por `orden`: Origen (1), Fractura (2), Retorno (3).
3. Resolucion manual de referencia: retorna el documento de la saga "Nexo Cuantico" a partir de `sagaId` de la pelicula "Nexo Cuantico: Colapso".
4. Conteo de peliculas por saga: `saga-horizonte: 3`, `saga-nexo: 2`, `saga-eco: 1`.
5. `insertOne` de "Ecos del Vacio: Reflejo": `insertedCount: 1`; la saga "saga-eco" pasa a tener 2 peliculas.
6. Sagas de "Renata Uribe": retorna 2 documentos (Horizonte Estelar, Ecos del Vacio).

## Conclusion

La referencia manual (`sagaId`) permitio mantener las peliculas como documentos independientes y consultables por su cuenta, evitando duplicar los datos de la saga en cada pelicula.
