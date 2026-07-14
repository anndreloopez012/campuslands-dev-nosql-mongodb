# Evidencias - 26. Inventario ecommerce

## Ejecucion

1. `seed.mongodb.js` sobre `campus_inventario_ecommerce`: `insertMany` reporta `insertedCount: 6` en `productos`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Alerta de stock bajo minimo: retorna 2 documentos (Kit de frenos delanteros: 6 < 8, Bujia de alto rendimiento: 3 < 12).
2. Productos de categoria "moto": retorna 3 documentos (Cadena de transmision, Bujia de alto rendimiento, Casco Integral DOT).
3. Stock <= 0: retorna 0 documentos con los datos del seed (ningun producto esta agotado todavia).
4. `updateOne` sobre Bujia de alto rendimiento: `matchedCount: 1`, `modifiedCount: 1`; stock baja de 3 a 2 (sigue en alerta).
5. `updateOne` sobre Kit de frenos delanteros: `matchedCount: 1`, `modifiedCount: 1`; stock sube de 6 a 26 (sale de alerta).
6. Valor de inventario por categoria (tras los updates): calculo de `precio * stock` sumado por `categoria` (auto y moto).

## Conclusion

`$expr` permitio comparar `stock` contra `stockMinimo` dentro del mismo documento para generar alertas dinamicas, sin necesitar un campo booleano que se desactualizara con cada venta o reposicion.
