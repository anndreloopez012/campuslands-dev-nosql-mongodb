# Ejercicio 13 - Sagas de ciencia ficcion

## Modelo documental

Base de datos: `campus_sci_fi_sagas`

### Colecciones

**sagas**
Entidad principal. Cada documento describe una saga de ciencia ficcion.
```
{ _id, titulo, anio_inicio, creador, planetas: [], activa }
```

**personajes**
Entidad independiente que referencia a su saga mediante `saga_id` (referencia manual al `_id` de `sagas`).
```
{ _id, nombre, especie, rol, saga_id, habilidades: [], activo }
```

### Decisiones de diseno

- Se usan **referencias manuales** (no embebido) entre `personajes` y `sagas` porque:
  - Los personajes pueden crecer en numero de forma independiente a la saga (no son de tamano acotado).
  - Se necesita consultar personajes sin cargar toda la informacion de la saga, y viceversa.
  - Varias sagas comparten el mismo `creador`, evitando duplicar ese dato en cada personaje.
- `planetas` y `habilidades` se embeben como arrays porque son datos pequenos, de lectura conjunta y sin necesidad de consulta independiente.
- `_id` de `sagas` se define manualmente (`SAGA001`...) para que la referencia en `personajes.saga_id` sea legible y facil de verificar en las consultas.
- Indice sugerido: `db.personajes.createIndex({ saga_id: 1 })` para acelerar la resolucion de la referencia manual.

## Entregable
- `seed.mongodb.js`: datos originales.
- `queries.mongodb.js`: consultas CRUD y resolucion de referencia manual.
- `evidencias.md`: resultados esperados.
