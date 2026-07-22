# Solución: 15. Pedidos Foodtruck

## Estrategia de Modelado de Datos 

Para la gestión de órdenes en un Foodtruck, se optó por un **diseño basado en documentos embebidos (Subdocumentos y Arrays de Objetos)** en una única colección principal llamada `pedidos`.

### Justificación de las decisiones técnico-estructurales:

1. **Cliente (Subdocumento):** Se embebe la información del cliente (`nombre`, `telefono`) en el pedido para evitar consultas cruzadas. Un pedido debe congelar el estado de la información del cliente al momento de hacer la compra.
2. **Items/Productos (Array de Objetos):** Cada ítem comprado (`producto`, `cantidad`, `precio_unitario`) forma parte del pedido. Al ser información acoplada y leída junta en el contexto de preparación de la orden, es óptimo embeberlo dentro del arreglo `items`.
3. **Manejo de Estados de Pedido:** Se incluye un campo `estado` (`"pendiente"`, `"en_preparacion"`, `"completado"`, `"cancelado"`) que permite realizar actualizaciones atómicas operacionales a medida que la cocina procesa cada orden.
4. **Campos Numéricos Calculados (`total`):** Se almacena el coste total simplificando el filtrado por montos elevados mediante operadores de comparación (`$gt`, `$gte`).
