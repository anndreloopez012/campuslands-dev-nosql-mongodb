# Evidencias — Ejercicio 15

## 1. Find general
Retorna los 6 pedidos insertados con todos sus campos.

## 2. Find filtrado (pendientes de Tacos Al Vapor)
Retorna 1 documento: pedido de Ana Martinez, total 22000, sin `_id`.

## 3. Insert nuevo pedido
`insertedId` retornado; la coleccion pasa de 6 a 7 documentos.

## 4. Update estado (Carlos Ruiz)
`matchedCount: 1, modifiedCount: 1`. El pedido pasa de `en_preparacion` a `listo`.

## 5. Verificacion del update
`find` sobre Carlos Ruiz muestra `estado: "listo"`.

## 6. Delete pedido cancelado
`deletedCount: 1`. Se elimina el pedido de Sofia Herrera.

## 7. Verificacion del delete
`find({ estado: "cancelado" })` retorna arreglo vacio.

## 8. Aggregation — ventas por foodtruck
Agrupa los pedidos no cancelados y ordena por ventas totales descendente:
- Pizza Rodante: 57000 (2 pedidos)
- Tacos Al Vapor: 51000 (2 pedidos)
- Burger Express: 50000 (2 pedidos, incluye el insertado en el punto 3)
