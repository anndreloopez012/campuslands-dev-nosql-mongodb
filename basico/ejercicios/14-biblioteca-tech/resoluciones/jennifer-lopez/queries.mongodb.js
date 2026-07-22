// Biblioteca tech - Consultas y Operaciones
// Solución de Denise López - Ejercicio 14

use campus_biblioteca_tech

// 1. Consulta general para listar todos los registros (requerido por la plantilla base)
db.libros.find({})

// 2. Proyección limpia: Listar solo los títulos y autores de libros que estén disponibles
db.libros.find(
  { disponible: true },
  { titulo: 1, autor: 1, _id: 0 }
)

// 3. Proyección limpia con array: Buscar libros de "javascript" y mostrar título, páginas y etiquetas
db.libros.find(
  { etiquetas: "javascript" },
  { titulo: 1, paginas: 1, etiquetas: 1, _id: 0 }
)

// 4. Proyección limpia con subdocumento: Libros de menos de 400 páginas, mostrando detalles de editorial
db.libros.find(
  { paginas: { $lt: 400 } },
  { titulo: 1, paginas: 1, "detalles.editorial": 1, _id: 0 }
)

// 5. Operación de actualización (Update): Marcar "The Pragmatic Programmer" como disponible nuevamente
db.libros.updateOne(
  { titulo: "The Pragmatic Programmer" },
  { $set: { disponible: true } }
)