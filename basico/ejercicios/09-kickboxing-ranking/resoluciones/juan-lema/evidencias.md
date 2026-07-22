# Evidencias

- `find({})` retorna los 7 documentos cargados en el seed.
- El filtro con `$and` (activos y puntos > 800) retorna 4 peleadores: Tomas
  Vera, Camila Rios, Lucia Paz y Andres Nunez.
- El filtro con `$or` (categoria "welter" o racha >= 5) retorna 4 peleadores:
  Tomas Vera, Bruno Salas, Andres Nunez y Lucia Paz.
- El filtro con `$and` + `$ne` (activos y no "pesado") retorna 4 peleadores,
  excluyendo a Diego Roman (pesado) y a los inactivos.
- El filtro con `$in` + `$gte` (Colombia o Peru, victorias >= 15) retorna 3
  peleadores: Camila Rios, Lucia Paz y Andres Nunez.
- El `updateOne` sobre "Bruno Salas" sumo 40 puntos, 1 victoria y 1 a la
  racha, verificado con un `find` posterior (680 puntos, 13 victorias,
  racha 1).
- El `deleteOne` con `$and` (inactivo y puntos < 600) elimino a "Valeria
  Cruz"; el `find` posterior confirma que ya no existe en la coleccion.
