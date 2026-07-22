# 09. Ranking kickboxing

## Modelo documental
Una sola colección `registros` en `campus_kickboxing_ranking`. Cada documento
representa un peleador con su rendimiento en el ranking.

### Documentos
Se guarda nombre, categoria de peso, pais, estado (`activo`), `puntos`,
`victorias`, `derrotas` y `racha` (ganadas seguidas) como campos planos, ya
que se consultan y actualizan siempre juntos por peleador.

### Arrays
`etiquetas` (Array de Strings): estilo o distinciones del peleador (ej.
`["zurdo", "top10"]`). Se usa array simple porque el dato solo se lee junto
al documento padre, sin compartirse entre peleadores.

### Por que no se usan referencias
No hay entidades que crezcan sola ni se repitan entre varios peleadores, asi
que una coleccion adicional solo agregaria `$lookup` innecesarios para este
caso basico.

### Indice sugerido
`{ categoria: 1 }` para acelerar filtros por categoria de peso, y
`{ activo: 1 }` para reportes de peleadores activos.

## Entregable
- `seed.mongodb.js`: creacion de coleccion e insercion de documentos.
- `queries.mongodb.js`: consultas con operadores logicos sobre `registros`.
- `evidencias.md`: resultados esperados de cada consulta.
