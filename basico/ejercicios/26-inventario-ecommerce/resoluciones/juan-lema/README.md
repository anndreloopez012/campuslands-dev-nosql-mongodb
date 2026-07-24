# 26. Inventario ecommerce (autos y motos) — juan-lema

## Modelo documental

Base de datos: `campus_inventario_ecommerce`
Coleccion principal: `registros`

Cada documento representa un producto (auto, moto o repuesto) con estos campos:

- `nombre`, `categoria`, `marca`: identificacion basica del producto.
- `precio_base`, `stock_total`: datos usados en casi toda consulta de catalogo.
- `alerta_stock_bajo`, `activo`: flags para reportes rapidos sin recalcular.
- `variantes` (array embebido): presentaciones/tallas/medidas del mismo producto (color, medida, presentacion), cada una con su propio stock y precio.
- `etiquetas` (array embebido): clasificacion libre para busquedas.
- `creado_en`: fecha de alta.

### Por que embeber y no referenciar

Las variantes siempre se leen junto con el producto (no tiene sentido mostrar una variante sin su producto padre), son un array acotado (2-5 elementos) y se actualizan en el mismo momento que el producto. Referenciarlas en otra coleccion obligaria a un `$lookup` en casi cada consulta de catalogo, sin ningun beneficio real ya que no se comparten entre productos ni crecen sin limite. Por eso se embeben tanto `variantes` como `etiquetas`.

## Archivos

- `seed.mongodb.js`: crea la coleccion e inserta 6 productos originales (autos, motos y repuestos).
- `queries.mongodb.js`: find general, find filtrado por alerta de stock, updateOne, deleteOne y un aggregate de refuerzo.
- `evidencias.md`: resultados esperados de cada consulta.

## Como ejecutar

1. Abrir `seed.mongodb.js` y ejecutar todo el archivo en MongoDB Shell / Compass / extension de VS Code.
2. Ejecutar `queries.mongodb.js` en orden.
3. Comparar la salida con `evidencias.md`.
