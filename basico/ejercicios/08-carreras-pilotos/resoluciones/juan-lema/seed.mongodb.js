// Ranking de pilotos
use campus_carreras_pilotos

db.createCollection("registros")

db.registros.insertMany([
  { nombre: "Mateo Rivas", escuderia: "Halcon Azul", categoria: "GT", activo: true, puntos: 245, etiquetas: ["veterano", "sprint"] },
  { nombre: "Lucia Fernandez", escuderia: "Trueno Rojo", categoria: "F3", activo: true, puntos: 310, etiquetas: ["novato"] },
  { nombre: "Diego Salas", escuderia: "Cometa Negro", categoria: "F3", activo: false, puntos: 120, etiquetas: ["resistencia"] },
  { nombre: "Valentina Cruz", escuderia: "Halcon Azul", categoria: "GT", activo: true, puntos: 198, etiquetas: ["novato", "sprint"] },
  { nombre: "Andres Peña", escuderia: "Viento Sur", categoria: "F3", activo: true, puntos: 275, etiquetas: ["veterano"] },
  { nombre: "Camila Ortiz", escuderia: "Trueno Rojo", categoria: "GT", activo: false, puntos: 90, etiquetas: ["resistencia"] }
])
