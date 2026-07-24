# 16 - Drop de ropa urbana | juan-lema

## Resumen
Solucion en MongoDB para un catalogo de un drop de ropa urbana. Se modela una
sola coleccion (`registros`) donde cada prenda embebe sus `tallas` (talla +
stock) y `etiquetas`, ya que ambos datos se leen siempre junto con la prenda.

## Archivos
- `modelado.md`: justificacion del diseno (por que embeber tallas/etiquetas).
- `seed.mongodb.js`: crea la BD `campus_ropa_drop` e inserta 6 prendas.
- `queries.mongodb.js`: find general, find filtrado por talla/stock, update de
  stock, delete de prenda inactiva y un aggregate de precio promedio por
  categoria.
- `evidencias.md`: resultados esperados de cada consulta.

## Como ejecutar
1. Abrir MongoDB Shell (`mongosh`) o conectar la extension de VS Code.
2. Ejecutar `seed.mongodb.js`.
3. Ejecutar `queries.mongodb.js`.
