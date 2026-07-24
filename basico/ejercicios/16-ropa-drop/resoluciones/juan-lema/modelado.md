# Modelado - Drop de ropa urbana

## Base de datos
`campus_ropa_drop`

## Coleccion principal
`registros` (una coleccion, nombres en plural/minusculas segun regla del ejercicio)

## Decision de diseno
Cada documento representa una prenda del drop. Se embebe el array `tallas`
(cada objeto con `talla` y `stock`) porque:
- Se lee siempre junto con la prenda (no tiene sentido consultarlo aparte).
- Es un array corto y acotado (max ~6 tallas por prenda), no crece sin control.
- Evita joins/lookups innecesarios para una consulta tan frecuente como "stock por talla".

Tambien se embebe `etiquetas` (array de strings) por el mismo motivo: son datos
pequenos, de lectura conjunta y sin necesidad de consultarse de forma independiente.

No se referencia nada externo porque el catalogo es autocontenible a nivel basico:
no hay entidades que crezcan de forma independiente (como un vendedor o una tienda)
ni datos compartidos entre muchos documentos que justifiquen una coleccion aparte.

## Estructura de documento
```js
{
  nombre: String,
  categoria: String,        // "hoodie" | "jean" | "camiseta" | "gorra" | "chaqueta"
  precio: Number,
  activo: Boolean,
  tallas: [
    { talla: String, stock: Number }
  ],
  etiquetas: [String]
}
```

## Indices sugeridos
- `{ categoria: 1 }` para filtrar rapido por tipo de prenda.
- `{ "tallas.talla": 1 }` para buscar disponibilidad por talla especifica.
