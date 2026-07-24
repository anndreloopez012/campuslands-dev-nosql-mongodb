// Biblioteca tech - queries
// Autor: juan-lema
use campus_biblioteca_tech

// 1. Listar todos los libros
db.registros.find({})

// 2. Libros disponibles, solo titulo y copias
db.registros.find(
  { disponible: true },
  { titulo: 1, copiasDisponibles: 1, _id: 0 }
)

// 3. Libros con puntaje mayor o igual a 85, ordenados por puntaje desc
db.registros.find(
  { puntaje: { $gte: 85 } },
  { titulo: 1, puntaje: 1, _id: 0 }
).sort({ puntaje: -1 })

// 4. Libros de la autora Elena Vargas
db.registros.find(
  { "autor.nombre": "Elena Vargas" },
  { titulo: 1, "autor.nombre": 1, anio: 1, _id: 0 }
)

// 5. Libros con la etiqueta "backend"
db.registros.find(
  { etiquetas: "backend" },
  { titulo: 1, etiquetas: 1, _id: 0 }
)

// 6. Actualizar: reponer copias de "JavaScript para el mundo real" y marcarlo disponible
db.registros.updateOne(
  { titulo: "JavaScript para el mundo real" },
  { $set: { disponible: true }, $inc: { copiasDisponibles: 3 } }
)

// 6.1 Verificacion del update
db.registros.find(
  { titulo: "JavaScript para el mundo real" },
  { disponible: 1, copiasDisponibles: 1, _id: 0 }
)

// 7. Agregar una resena nueva a "Fundamentos de redes modernas"
db.registros.updateOne(
  { titulo: "Fundamentos de redes modernas" },
  { $push: { resenas: { usuario: "monic_it", calificacion: 4, comentario: "Buen material de apoyo" } } }
)

// 7.1 Verificacion del push
db.registros.find(
  { titulo: "Fundamentos de redes modernas" },
  { resenas: 1, _id: 0 }
)

// 8. Reporte: cantidad de libros por categoria
db.registros.aggregate([
  { $group: { _id: "$categoria", totalLibros: { $sum: 1 }, promedioPuntaje: { $avg: "$puntaje" } } },
  { $sort: { totalLibros: -1 } }
])

// 9. Eliminar un libro sin copias disponibles ni disponibilidad
db.registros.deleteOne({ titulo: "Seguridad ofensiva basica", disponible: false });

// 9.1 Verificacion de borrado (no debe devolver documentos)
db.registros.find({ titulo: "Seguridad ofensiva basica" })

// 10. Conteo final de documentos
db.registros.countDocuments({})
