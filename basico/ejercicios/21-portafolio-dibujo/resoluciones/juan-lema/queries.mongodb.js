// Ejercicio 21 - Portafolio de dibujo
// Autor: juan-lema
// Consultas CRUD sobre la coleccion registros

use campus_portafolio_dibujo

// 1. Listar todas las obras publicadas (proyeccion)
db.registros.find(
  { publicado: true },
  { titulo: 1, artista: 1, valoracion: 1, _id: 0 }
)

// 2. Buscar obras por etiqueta y tecnica combinadas
db.registros.find(
  { etiquetas: "estudio", tecnica: { $in: ["lapiz", "carboncillo"] } },
  { titulo: 1, tecnica: 1, etiquetas: 1, _id: 0 }
)

// 3. Obras con valoracion alta ordenadas descendente
db.registros.find(
  { valoracion: { $gte: 4.3 } }
).sort({ valoracion: -1 })

// 4. Reporte: cantidad de obras por artista
db.registros.aggregate([
  { $group: { _id: "$artista", totalObras: { $sum: 1 }, promedioValoracion: { $avg: "$valoracion" } } },
  { $sort: { totalObras: -1 } }
])

// 5. Actualizar: publicar una obra y agregar etiqueta, con verificacion
const resUpdate = db.registros.updateOne(
  { titulo: "Boceto de personaje anime" },
  { $set: { publicado: true }, $push: { etiquetas: "portafolio" } }
)
if (resUpdate.matchedCount === 0) {
  print("Aviso: no se encontro el documento a actualizar")
} else {
  db.registros.find({ titulo: "Boceto de personaje anime" })
}

// 6. Eliminar una obra puntual, con verificacion previa
const target = db.registros.findOne({ titulo: "Escena urbana nocturna" })
if (target) {
  db.registros.deleteOne({ _id: target._id })
  print("Documento eliminado: " + target._id)
} else {
  print("Aviso: no se encontro el documento a eliminar")
}

// 7. Verificacion final del estado de la coleccion
db.registros.find().pretty()
