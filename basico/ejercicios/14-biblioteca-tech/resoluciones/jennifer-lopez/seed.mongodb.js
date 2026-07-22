// Biblioteca tech
// Solución de Denise López - Ejercicio 14

use campus_biblioteca_tech

// Limpiar la colección si existe para garantizar repetibilidad del script
db.libros.drop()

// Crear la colección principal en minúsculas y plural
db.createCollection("libros")

// Insertar 5 documentos de libros técnicos reconocidos
db.libros.insertMany([
  {
    titulo: "Clean Code",
    subtitulo: "A Handbook of Agile Software Craftsmanship",
    autor: "Robert C. Martin",
    anio_publicacion: 2008,
    paginas: 464,
    disponible: true,
    etiquetas: ["buenas practicas", "arquitectura", "agile"],
    detalles: {
      idioma: "Inglés",
      editorial: "Prentice Hall"
    }
  },
  {
    titulo: "Eloquent JavaScript",
    subtitulo: "A Modern Introduction to Programming",
    autor: "Marijn Haverbeke",
    anio_publicacion: 2018,
    paginas: 472,
    disponible: true,
    etiquetas: ["javascript", "web", "frontend"],
    detalles: {
      idioma: "Inglés",
      editorial: "No Starch Press"
    }
  },
  {
    titulo: "The Pragmatic Programmer",
    subtitulo: "Your Journey to Mastery",
    autor: "David Thomas, Andrew Hunt",
    anio_publicacion: 1999,
    paginas: 352,
    disponible: false,
    etiquetas: ["buenas practicas", "desarrollo profesional", "ingenieria"],
    detalles: {
      idioma: "Inglés",
      editorial: "Addison-Wesley"
    }
  },
  {
    titulo: "Grokking Algorithms",
    subtitulo: "An illustrated guide for programmers and other curious people",
    autor: "Aditya Bhargava",
    anio_publicacion: 2016,
    paginas: 256,
    disponible: true,
    etiquetas: ["algoritmos", "estructuras de datos", "python"],
    detalles: {
      idioma: "Inglés",
      editorial: "Manning"
    }
  },
  {
    titulo: "Design Patterns",
    subtitulo: "Elements of Reusable Object-Oriented Software",
    autor: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    anio_publicacion: 1994,
    paginas: 395,
    disponible: true,
    etiquetas: ["patrones de diseño", "arquitectura", "poo"],
    detalles: {
      idioma: "Inglés",
      editorial: "Addison-Wesley"
    }
  }
])

// Índices para optimizar búsquedas por título, disponibilidad y etiquetas
db.libros.createIndex({ titulo: 1 })
db.libros.createIndex({ disponible: 1 })
db.libros.createIndex({ etiquetas: 1 })