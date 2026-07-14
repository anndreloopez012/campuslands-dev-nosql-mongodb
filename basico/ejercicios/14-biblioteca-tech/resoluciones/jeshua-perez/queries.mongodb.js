// 14. Biblioteca tech
// Consultas - jeshua-perez

use campus_biblioteca_tech

// 1. Catalogo limpio: solo titulo y autor, sin _id
db.libros.find({}, { titulo: 1, autor: 1, _id: 0 })

// 2. Proyeccion limpia de libros disponibles
db.libros.find(
  { disponible: true },
  { titulo: 1, categoria: 1, _id: 0 }
)

// 3. Proyeccion por exclusion: ocultar solo el campo paginas
db.libros.find({}, { paginas: 0 })

// 4. Libros de un autor especifico, proyeccion limpia ordenada por anio
db.libros.find(
  { autor: "Sofia Delgado" },
  { titulo: 1, anio: 1, _id: 0 }
).sort({ anio: 1 })

// 5. Marcar un libro como disponible tras su devolucion
db.libros.updateOne(
  { titulo: "Redes y Seguridad Basica" },
  { $set: { disponible: true } }
)

// 6. Reporte de categorias distintas en la biblioteca
db.libros.distinct("categoria")
