// Sagas de ciencia ficción - Consultas y Operaciones
// Solución de Denise López - Ejercicio 13

use campus_sci_fi_sagas

// 1. Consulta general para listar las sagas populares (requerido por la plantilla base)
db.sagas.find({})

// 2. Consulta de referencia manual: Obtener las películas pertenecientes a Star Wars
const sagaSW = db.sagas.findOne({ nombre: "Star Wars" })
db.peliculas.find(
  { saga_id: sagaSW._id },
  { titulo: 1, estreno: 1, recaudacion_m_usd: 1, _id: 0 }
)

// 3. Agregación relacional ($lookup): Unir las sagas con sus entregas cinematográficas
db.sagas.aggregate([
  {
    $lookup: {
      from: "peliculas",
      localField: "_id",
      foreignField: "saga_id",
      as: "peliculas_franquicia"
    }
  },
  {
    $project: {
      nombre: 1,
      universo: 1,
      "peliculas_franquicia.titulo": 1,
      "peliculas_franquicia.recaudacion_m_usd": 1,
      _id: 0
    }
  }
])

// 4. Filtro por taquilla: Películas que superaron los 2000 millones de dólares
db.peliculas.find(
  { recaudacion_m_usd: { $gt: 2000 } },
  { titulo: 1, recaudacion_m_usd: 1, director: 1, _id: 0 }
)

// 5. Operación de actualización (Update): Ajustar la recaudación final de Avatar
db.peliculas.updateOne(
  { titulo: "Avatar" },
  { $inc: { recaudacion_m_usd: 10 } }
)