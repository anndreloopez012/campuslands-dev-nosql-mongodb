# Modelo documental — Pedidos foodtruck

## Base de datos
`campus_foodtruck_campus`

## Coleccion principal
`registros` — un documento por pedido realizado a un foodtruck.

## Estructura del documento
```json
{
  "_id": ObjectId,
  "cliente": { "nombre": String, "telefono": String },
  "foodtruck": { "nombre": String, "ubicacion": String },
  "items": [
    { "producto": String, "cantidad": Number, "precioUnitario": Number }
  ],
  "total": Number,
  "estado": String,       // pendiente | en_preparacion | listo | entregado | cancelado
  "metodoPago": String,   // efectivo | tarjeta | app
  "fechaPedido": Date,
  "notas": String
}
```

## Decisiones de diseno
- **Embebido de `cliente` y `foodtruck`**: son datos pequenos que siempre se leen junto con el pedido; no justifican una coleccion aparte ni referencias en un escenario basico.
- **Array `items`**: cada pedido tiene varios productos con cantidad y precio propios; un array de subdocumentos evita joins y refleja que los items solo tienen sentido dentro de su pedido (relacion de composicion, no de referencia).
- **`estado` como string controlado**: permite filtrar y actualizar pedidos sin necesitar una coleccion de estados separada.
- **Sin referencias**: no existen entidades compartidas por muchos documentos ni datos que crezcan de forma independiente, por lo que no se justifica `$lookup` en este nivel.
- **Indice sugerido**: `db.registros.createIndex({ estado: 1 })` para acelerar filtros por estado de pedido, que es la consulta mas frecuente del caso de uso.
