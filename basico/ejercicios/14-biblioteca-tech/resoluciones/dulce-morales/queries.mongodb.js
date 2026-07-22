use("campus_biblioteca_tech");

// Consulta 1: Proyección limpia de libros disponibles
db.libros.find(
  { disponible: true },
  { _id: 0, titulo: 1, "autor.nombre": 1, paginas: 1 }
);

// Consulta 2:Filtra libros que contengan la etiqueta "backend"
db.libros.find(
  { etiquetas: "backend" },
  { _id: 0, titulo: 1, etiquetas: 1, "autor.nombre": 1 }
);

// Consulta 3: Agrega una nueva reseña al libro "Clean Architecture" y cambia disponible
db.libros.updateOne(
  { isbn: "978-0134494166" },
  {
    $set: { disponible: false },
    $push: {
      resenas: {
        usuario: "nuevo_lector",
        calificacion: 5,
        comentario: "Excelente material de consulta."
      }
    }
  }
);

// Consulta 4: Cuenta la cantidad total de libros registrados en la biblioteca
db.libros.countDocuments();