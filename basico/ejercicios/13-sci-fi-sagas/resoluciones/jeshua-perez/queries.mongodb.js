// 13. Sagas de ciencia ficcion
// Consultas - jeshua-perez

use campus_sci_fi_sagas

// 1. Ver todas las sagas
db.sagas.find({})

// 2. Ver todas las peliculas de una saga, usando la referencia manual sagaId
db.peliculas.find({ sagaId: "saga-horizonte" }).sort({ orden: 1 })

// 3. Resolver la referencia manualmente: buscar la saga de una pelicula puntual
db.sagas.findOne({ _id: db.peliculas.findOne({ titulo: "Nexo Cuantico: Colapso" }).sagaId })

// 4. Contar cuantas peliculas tiene cada saga (agregacion simple con referencia manual)
db.peliculas.aggregate([
  { $group: { _id: "$sagaId", totalPeliculas: { $sum: 1 } } }
])

// 5. Agregar una nueva pelicula referenciando una saga existente
db.peliculas.insertOne({
  titulo: "Ecos del Vacio: Reflejo",
  anio: 2024,
  sagaId: "saga-eco",
  orden: 2
})

// 6. Listar sagas creadas por un autor especifico
db.sagas.find({ creador: "Renata Uribe" })
