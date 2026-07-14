# Evidencias - 16. Drop de ropa urbana

## Ejecucion

1. `seed.mongodb.js` sobre `campus_ropa_drop`: `insertMany` reporta `insertedCount: 6` en `prendas`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Talla "XL": retorna 2 documentos (Hoodie Oversize Negro, Jogger Tecnico).
2. `$all` ["S","M"]: retorna 3 documentos (Hoodie Oversize Negro, Chaqueta Bomber, Jogger Tecnico).
3. Prendas de "UrbanRoot": retorna 2 documentos (Cargo Pants Beige, Gorra Snapback) con `nombre` y `tallasDisponibles`.
4. `updateOne` con `$pull` sobre "Chaqueta Bomber": `matchedCount: 1`, `modifiedCount: 1`; su array queda `["M"]`.
5. `updateOne` con `$addToSet` sobre "Cargo Pants Beige": `matchedCount: 1`, `modifiedCount: 1`; su array pasa a `["M", "L", "XL"]`.
6. `$size: 1`: retorna 1 documento ("Gorra Snapback", talla "Unica"); "Chaqueta Bomber" tambien queda con 1 talla tras el paso 4.

## Conclusion

Los operadores de array (`$all`, `$pull`, `$addToSet`, `$size`) resolvieron el manejo completo de inventario por tallas sin necesitar un documento por talla.
