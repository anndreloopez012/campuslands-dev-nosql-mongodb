# Evidencias

- `find({})` retornó 8 documentos, confirmando la carga inicial correcta.
- El filtro por `categoria: "entrenamiento"` devolvió 2 partidas, ambas activas.
- El `updateOne` sobre "Free For All" cambió `activo` de `false` a `true`, verificado con un `find` posterior.
- El `deleteOne` sobre "Historia: Capitulo 3" eliminó el documento; una búsqueda posterior confirmó que ya no existe en la colección.