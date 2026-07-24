# Pedidos Foodtruck

## Descripción

Se implementó una base de datos para administrar los pedidos realizados en un foodtruck ubicado dentro del campus.

El ejercicio está orientado al uso de operaciones de inserción y actualización de documentos utilizando MongoDB.

## Colección utilizada

- **pedidos**

## Modelo documental

Cada pedido se almacena como un documento independiente.

```javascript
{
    cliente,
    producto,
    cantidad,
    total,
    estado
}
```

No fue necesario utilizar subdocumentos o referencias porque toda la información corresponde directamente a un único pedido.

## Índice implementado

```javascript
db.pedidos.createIndex({
    estado: 1
})
```

Este índice mejora el tiempo de respuesta cuando se consultan pedidos según su estado.

## Archivos incluidos

- seed.mongodb.js
- queries.mongodb.js
- evidencias.md