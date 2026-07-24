# 24. Ordenes de soldadura — juan-lema

## Modelo documental

Coleccion unica `registros` (campus_ordenes_soldadura). Cada documento es una
orden de trabajo de soldadura.

**Embebido (no referencia):**
- `inspecciones`: array de subdocumentos (fecha, resultado, inspector). Se leen
  siempre junto con la orden, son pocos por orden y no se comparten entre
  ordenes -> embeber es lo correcto.
- `materiales`: array de strings simples (electrodos/insumos usados).

**No se referencia nada externo** porque el caso es basico y de un solo
dominio: no hay entidad grande y compartida (como un catalogo global de
clientes) que justifique una coleccion aparte. Si `soldador` fuera una
entidad con historial propio en muchas ordenes y datos extensos, se
referenciaria por `soldadorId`; aqui se deja embebido por simplicidad y
volumen bajo.

**Indice sugerido:** `{ estado: 1 }` porque las consultas filtran
frecuentemente por estado de inspeccion.

## Archivos
- `seed.mongodb.js`: creacion de coleccion + 5 documentos.
- `queries.mongodb.js`: find, filtros, update, delete con verificaciones.
- `evidencias.md`: resultados esperados de cada consulta.
