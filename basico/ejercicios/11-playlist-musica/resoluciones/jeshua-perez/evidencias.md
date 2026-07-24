# Evidencias - 11. Playlist por energia

## Ejecucion

1. `seed.mongodb.js` sobre `campus_playlist_musica`: `insertMany` reporta `insertedCount: 6` en `canciones`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Tag "gimnasio": retorna 3 documentos (Noche Electrica, Corre Conmigo, Fuego Interior).
2. `$all` ["fiesta","gimnasio"]: retorna 2 documentos (Noche Electrica, Fuego Interior).
3. Energia >= 7 ordenada desc: Fuego Interior (10), Noche Electrica (9), Corre Conmigo (7).
4. `updateOne` con `$push` sobre "Corre Conmigo": `matchedCount: 1`, `modifiedCount: 1`; su array `tags` pasa a `["gimnasio", "motivacion", "cardio"]`.
5. `updateOne` con `$pull` sobre "Susurros": `matchedCount: 1`, `modifiedCount: 1`; su array `tags` pasa a `["relax"]`.
6. Canciones sin el tag "relax": retorna 4 documentos (Noche Electrica, Corre Conmigo, Fuego Interior, y Susurros tras el `$pull` del paso anterior).

## Conclusion

Los operadores de array (`$all`, `$push`, `$pull`, `$ne`) permitieron filtrar y mantener actualizada la lista de tags de cada cancion sin modelar una coleccion separada para etiquetas.
