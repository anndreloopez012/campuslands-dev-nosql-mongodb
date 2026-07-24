# Evidencias

- `find({})` retornó los 6 documentos cargados, confirmando la inserción inicial correcta.
- El ranking `sort({ puntos: -1 }).limit(3)` mostró a Lucia Fernandez (310), Andres Peña (275) y Mateo Rivas (245) como los 3 primeros lugares.
- El filtro por `categoria: "F3", activo: true` devolvió 2 pilotos (Lucia Fernandez y Andres Peña), ordenados de mayor a menor puntaje.
- El `sort({ puntos: 1 }).limit(2)` identificó a Camila Ortiz (90) y Diego Salas (120) como los de menor puntaje.
- El `updateOne` con `$inc` sobre Valentina Cruz aumentó su puntaje de 198 a 238, verificado con un `find` posterior.
- El `deleteOne` sobre Camila Ortiz eliminó el documento; el `find` posterior no devolvió resultados, confirmando la baja.
