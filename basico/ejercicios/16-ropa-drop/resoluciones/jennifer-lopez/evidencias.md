# Modelo documental - Drop de ropa urbana

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para inicializar la colección `productos` con marcas globales de streetwear (Supreme, Stüssy, Nike, Off-White, Fear of God) y sus tallas disponibles.
- `queries.mongodb.js`: Script de operaciones centrado en consultas sobre arrays de tallas (`$all`, búsquedas directas) y manipulación de arreglos con `$push` y `$pull`.

## 1. Identificación de Entidades y Atributos
- **Producto:** `prenda`, `marca`, `categoria`, `precio_usd`, `coleccion_drop`, `tallas_disponibles` (Array simple de strings), `colores` (Array simple), `stock_total`, `agotado`.

## 2. Decisiones de Diseño
- **Array de Tallas Embebido (`tallas_disponibles`):** Al tratarse de un *drop* de ropa urbana, las búsquedas más frecuentes de los usuarios filtran prendas según las tallas que aún quedan en existencia. Embeber las tallas como un arreglo de cadenas dentro del mismo documento permite utilizar el motor de índices Multikey de MongoDB para realizar búsquedas rápidas sin necesidad de joins o colecciones auxiliares.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `productos`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "prenda": "Box Logo Oversized Hoodie",
  "marca": "Supreme",
  "categoria": "Hoodies",
  "precio_usd": 178.00,
  "coleccion_drop": "Fall/Winter 2026",
  "tallas_disponibles": ["S", "M", "L", "XL", "XXL"],
  "colores": ["Negro", "Gris", "Rojo"],
  "stock_total": 55,
  "agotado": false
}
```
### Índices implementados
{ marca: 1 }: Optimiza búsquedas por marcas específicas de la tienda.

{ tallas_disponibles: 1 }: Índice Multikey que acelera las consultas de filtrado por talla del cliente.

{ agotado: 1 }: Permite ocultar o mostrar rápidamente productos fuera de stock.

### Checklist
[x] Nombre de la colección en plural y minúsculas (productos).

[x] Inserción de 5 prendas coherentes utilizando marcas reales de ropa urbana.

[x] Enfoque en arreglos de tallas (tallas_disponibles).

[x] Consultas utilizando operadores de array ($all, búsquedas directas).

[x] Operaciones de actualización sobre arreglos con $push y $pull.

[x] Definición e implementación de índices.

[x] Archivos creados únicamente dentro de la carpeta personal de resolución.