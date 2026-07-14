# Evidencias - 21. Portafolio de dibujo

## Ejecucion

1. `seed.mongodb.js` sobre `campus_portafolio_dibujo`: `insertMany` reporta `insertedCount: 6` en `dibujos`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Tag "paisaje": retorna 2 documentos (Ciudad Futurista, Bosque Encantado).
2. `$all` ["ciencia ficcion","personaje"]: retorna 1 documento ("Robot Guardian").
3. Obras de Lorena Duque publicadas: retorna 1 documento ("Bosque Encantado"); "Dragon Ancestral" queda fuera por `publicado: false` (antes del update).
4. Tecnica "Digital": retorna 3 documentos (Ciudad Futurista, Robot Guardian, Dragon Ancestral) con `titulo` y `tags`.
5. `updateOne` sobre "Dragon Ancestral": `matchedCount: 1`, `modifiedCount: 1`; queda `publicado: true`.
6. `updateOne` con `$push` sobre "Estudio de Manos": `matchedCount: 1`, `modifiedCount: 1`; su array `tags` pasa a `["estudio", "anatomia", "referencia"]`.

## Conclusion

Los tags embebidos permitieron busquedas simples y combinadas (`$all`) sin necesitar una coleccion de categorias aparte, y el campo `publicado` separo el portafolio publico del material en borrador.
