# Evidencias — Ejercicio 26 (juan-lema)

## Seed
`db.registros.countDocuments({})` → **6** documentos insertados (2 motos, 2 autos, 2 repuestos).

## Query 1 — Find general
Devuelve los 6 productos con `nombre`, `categoria` y `stock_total`.

## Query 2 — Find filtrado (alerta de stock bajo y activos)
Devuelve 2 productos:
- Bateria 12V Auto Sedan (stock 4)
- Llanta Aro 15 Auto (stock 2)

(El espejo retrovisor no aparece porque `activo: false`.)

## Query 3 — updateOne
`modifiedCount: 1`. Tras la actualizacion, "Bateria 12V Auto Sedan" queda con `stock_total: 20` y `alerta_stock_bajo: false`.

## Query 4 — deleteOne
`deletedCount: 1`. El total de documentos baja de 6 a **5**.

## Query 5 — aggregate (stock por categoria)
Agrupa el stock restante por `categoria`, ordenado descendente. Ejemplo esperado tras el update/delete:
- moto → mayor stock acumulado (casco + kit frenos + aceite)
- repuesto → stock del kit de frenos
- auto → bateria repuesta (20) + llanta (2) = 22
