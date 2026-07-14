# Solucion - 09. Ranking kickboxing

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_kickboxing_ranking`, coleccion `peleadores`.
- Documento plano por peleador con campos booleanos y numericos (`activo`, `victorias`, `derrotas`, `nocauts`) porque el enfoque del ejercicio es practicar operadores logicos (`$and`, `$or`, `$not`, `$expr`) sobre esos campos.
- No se referencian otras colecciones: la categoria de peso se guarda como texto simple, suficiente para los filtros logicos pedidos.

## Archivos

- `seed.mongodb.js`: crea la coleccion `peleadores` con 6 peleadores en 3 categorias.
- `queries.mongodb.js`: combinaciones de `$and`, `$or`, `$not` y `$expr`, mas una actualizacion y un conteo.
- `evidencias.md`: resultados esperados de cada consulta.
