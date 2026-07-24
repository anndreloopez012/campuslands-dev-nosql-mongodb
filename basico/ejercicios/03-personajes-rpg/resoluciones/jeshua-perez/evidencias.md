# Evidencias - 03. Personajes RPG

## Ejecucion

1. `seed.mongodb.js` sobre `campus_personajes_rpg`: `insertMany` reporta `insertedCount: 6` en `personajes`.
2. `queries.mongodb.js` ejecutado sobre la misma base.

## Resultados por consulta

1. `find({})`: retorna los 6 personajes con su subdocumento `atributos` completo.
2. Filtro `atributos.inteligencia >= 50`: retorna 3 documentos (Lyra Sombraluna 95, Doran Piedraverde 60, Selene Nocheclara 50).
3. Filtro `inventario.item = "Pocion de vida"`: retorna 1 documento (Aldric Vane).
4. Proyeccion nombre/clase/nivel: retorna los 6 personajes sin atributos ni inventario.
5. `updateOne` sobre Selene Nocheclara: `matchedCount: 1`, `modifiedCount: 1`; queda `nivel: 9` y `atributos.vida: 150`.
6. `updateOne` con `$push` sobre Kira Vientoveloz: `matchedCount: 1`, `modifiedCount: 1`; su array `inventario` pasa de 2 a 3 items.

## Conclusion

Los documentos anidados (subdocumento `atributos` y array `inventario`) permiten consultar y actualizar datos internos del personaje con operadores de punto (`.`) y `$push`, sin necesitar colecciones separadas.
