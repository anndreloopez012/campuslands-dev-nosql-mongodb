# Modelo documental - Pedidos foodtruck

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de carga con 5 pedidos iniciales usando elementos de comida popular (McDonald's, Taco Bell, KFC, Subway, Burger King) y clientes con nombres únicos/poco comunes.
- `queries.mongodb.js`: Script de operaciones centrado en inserción de órdenes, actualizaciones de estado del flujo de preparación y modificación de ítems mediante `$push`.

## 1. Identificación de Entidades y Atributos
- **Pedido:** `cliente`, `num_mesa_o_ticket`, `estado` (`pendiente`, `en_preparacion`, `listo`, `entregado`), `total_usd`, `metodo_pago`, `para_llevar`, `fecha`.
- **Detalle del ítem:** Subdocumentos contenidos en el array `items` (`producto`, `restaurante_estilo`, `cantidad`, `precio_unitario`).

## 2. Decisiones de Diseño
- **Array de Subdocumentos Embebido (`items`):** Permite almacenar múltiples productos en la misma orden de compra sin necesidad de realizar tablas intermedias, ideal para la velocidad requerida en comandas de comida rápida.
- **Flujo de Actualizaciones en Cascada:** Uso directo de `$set` para mutar el estado operacional del pedido según el flujo de la cocina del foodtruck.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `pedidos`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "cliente": "Azael Zevallos",
  "num_mesa_o_ticket": 101,
  "estado": "en_preparacion",
  "items": [
    { "producto": "Combo McMenú Big Mac", "restaurante_estilo": "McDonald's", "cantidad": 1, "precio_unitario": 8.50 },
    { "producto": "McFlurry Oreo", "restaurante_estilo": "McDonald's", "cantidad": 1, "precio_unitario": 3.00 }
  ],
  "total_usd": 11.50,
  "metodo_pago": "tarjeta",
  "para_llevar": false,
  "fecha": "2026-07-22T07:00:00Z"
}
```
### Índices implementados
{ estado: 1 }: Optimiza el filtrado instantáneo en las pantallas de la cocina.

{ num_mesa_o_ticket: 1 }: Permite ubicar de forma inmediata un pedido para su cobro o actualización.

### Checklist
[x] Nombre de la colección en plural y minúsculas (pedidos).

[x] Inserción de documentos coherentes con platillos populares y nombres de clientes originales/poco comunes.

[x] Demostración clara de operaciones insertOne y updateOne.

[x] Modificación de arreglos mediante $push e incrementos de saldo con $inc.

[x] Definición e implementación de índices.

[x] Archivos creados únicamente dentro de la carpeta personal de resolución.