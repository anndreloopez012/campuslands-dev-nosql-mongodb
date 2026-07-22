// Seleccionar / Crear la base de datos objetivo
use("campus_biblioteca_tech");

// Insertar documentos de libros técnicos con subdocumentos y arrays
db.libros.insertMany([
  {
    isbn: "978-0134494166",
    titulo: "Clean Architecture",
    paginas: 432,
    publicado: 2017,
    disponible: true,
    autor: {
      nombre: "Robert C. Martin",
      nacionalidad: "Estados Unidos"
    },
    etiquetas: ["arquitectura", "software", "clean code", "buenas practicas"],
    resenas: [
      { usuario: "marta_dev", calificacion: 5, comentario: "Esencial para cualquier desarrollador." },
      { usuario: "carlos_tech", calificacion: 4, comentario: "Conceptos sólidos pero teóricos." }
    ]
  },
  {
    isbn: "978-1491954461",
    titulo: "MongoDB: The Definitive Guide",
    paginas: 514,
    publicado: 2019,
    disponible: true,
    autor: {
      nombre: "Shannon Bradshaw",
      nacionalidad: "Estados Unidos"
    },
    etiquetas: ["mongodb", "nosql", "base de datos", "backend"],
    resenas: [
      { usuario: "alex_nosql", calificacion: 5, comentario: "La biblia para aprender MongoDB." }
    ]
  },
  {
    isbn: "978-0596517748",
    titulo: "JavaScript: The Good Parts",
    paginas: 172,
    publicado: 2008,
    disponible: false,
    autor: {
      nombre: "Douglas Crockford",
      nacionalidad: "Estados Unidos"
    },
    etiquetas: ["javascript", "frontend", "web", "programacion"],
    resenas: [
      { usuario: "juan_js", calificacion: 3, comentario: "Un clásico, pero un poco antiguo." }
    ]
  },
  {
    isbn: "978-1617294136",
    titulo: "Designing Data-Intensive Applications",
    paginas: 616,
    publicado: 2017,
    disponible: true,
    autor: {
      nombre: "Martin Kleppmann",
      nacionalidad: "Reino Unido"
    },
    etiquetas: ["sistemas distribuidos", "arquitectura", "base de datos", "backend"],
    resenas: [
      { usuario: "sofia_data", calificacion: 5, comentario: "Excelente libro sobre ingeniería de datos." },
      { usuario: "lucas_arch", calificacion: 5, comentario: "Obra maestra indispensable." }
    ]
  },
  {
    isbn: "978-1492040712",
    titulo: "Fluent Python",
    paginas: 1014,
    publicado: 2022,
    disponible: true,
    autor: {
      nombre: "Luciano Ramalho",
      nacionalidad: "Brasil"
    },
    etiquetas: ["python", "programacion", "backend"],
    resenas: [
      { usuario: "andres_py", calificacion: 5, comentario: "Increíble profundización en el lenguaje." }
    ]
  }
]);