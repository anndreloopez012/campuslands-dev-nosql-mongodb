# Evidencias - Drop de ropa urbana

## 1. Catalogo completo
Retorna los 6 documentos sembrados con `nombre`, `categoria`, `precio`.

## 2. Activas con stock en talla M
Retorna: Hoodie Oversize Negro (stock 10) y Camiseta Grafica Negra (stock 9).
La Camiseta Grafica Blanca queda fuera porque su talla M tiene stock 0.

## 3. Reponer stock XL
`updateOne` reporta `matchedCount: 1, modifiedCount: 1`.
La verificacion muestra la talla `XL` del Hoodie Oversize Negro con `stock: 8`
(antes estaba en 0).

## 4. Eliminar inactivas
`deleteOne` reporta `deletedCount: 1` (elimina la Gorra Corduroy Verde, unica
prenda con `activo: false`).
Conteo final: `Restantes: 5`.

## 5. Precio promedio por categoria
Agrupa por `categoria` con `$avg` y `$sum`, ordenado descendente por precio
promedio. La categoria `chaqueta` queda primera (unico documento, precio 259000)
y `gorra` no aparece porque fue eliminada en el paso 4.

## Como se valido
Se ejecuto `seed.mongodb.js` y luego `queries.mongodb.js` en MongoDB Shell,
confirmando cada resultado impreso en consola contra lo descrito arriba.
