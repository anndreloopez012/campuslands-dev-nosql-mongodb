// 14. Biblioteca tech
// Solucion - jeshua-perez (nivel basico)
// Enfoque: proyecciones limpias

use campus_biblioteca_tech

db.libros.drop()

db.createCollection("libros")

db.libros.insertMany([
  { titulo: "Patrones de Diseno Moderno", autor: "Helena Cruz", categoria: "Software", paginas: 320, anio: 2021, disponible: true },
  { titulo: "Bases de Datos NoSQL en Accion", autor: "Ricardo Ponce", categoria: "Bases de datos", paginas: 280, anio: 2022, disponible: true },
  { titulo: "Redes y Seguridad Basica", autor: "Helena Cruz", categoria: "Redes", paginas: 240, anio: 2019, disponible: false },
  { titulo: "Arquitectura de Microservicios", autor: "Sofia Delgado", categoria: "Software", paginas: 410, anio: 2023, disponible: true },
  { titulo: "Fundamentos de Cloud Computing", autor: "Ricardo Ponce", categoria: "Cloud", paginas: 300, anio: 2020, disponible: false },
  { titulo: "Introduccion a MongoDB", autor: "Sofia Delgado", categoria: "Bases de datos", paginas: 190, anio: 2024, disponible: true }
])
