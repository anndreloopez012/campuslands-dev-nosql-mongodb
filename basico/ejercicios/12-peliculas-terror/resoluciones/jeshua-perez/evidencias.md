# Evidencias - 12. Catalogo de peliculas de miedo

## Ejecucion

1. `seed.mongodb.js` sobre `campus_peliculas_terror`: `insertMany` reporta `insertedCount: 6` en `peliculas`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. `createIndex({ titulo: "text" })`: confirma la creacion del indice `titulo_text`.
2. Busqueda `$text: "Sotano"`: retorna 1 documento ("El Sotano").
3. Rating >= 7.5 ordenado desc: Posesion Final (8.5), Sombras del Pantano (8.1), La Casa del Silencio (7.8).
4. Regex "Noche" (case-insensitive): retorna 1 documento ("Noche sin Luna").
5. Subgenero "Slasher" con rating >= 6: retorna 1 documento ("El Ultimo Grito"), ya que "Noche sin Luna" tenia 5.9 antes del update.
6. `updateOne` sobre "Noche sin Luna": `matchedCount: 1`, `modifiedCount: 1`; rating pasa de 5.9 a 6.3.

## Conclusion

El indice de texto resolvio busquedas por palabra clave, mientras que `$regex` cubrio coincidencias parciales puntuales; ambos se combinaron con filtros numericos de `rating` para acotar resultados.
