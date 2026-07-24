# Assets de animación 3D

## Base de datos

`campus_assets_animacion`

## Colección

- assets

## Decisiones de modelado

Se trabajó con una única colección porque cada documento representa un asset completo dentro del proyecto.

El estado se almacena directamente en cada documento ya que forma parte del ciclo de vida del asset y normalmente se consulta junto con el resto de su información. Para este escenario no existen datos compartidos que justifiquen el uso de referencias.

## Operaciones implementadas

- Inserción de 5 assets.
- Consultas por estado.
- Consulta por formato.
- Reporte ordenado por tamaño.
- Actualización del estado de un asset.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`