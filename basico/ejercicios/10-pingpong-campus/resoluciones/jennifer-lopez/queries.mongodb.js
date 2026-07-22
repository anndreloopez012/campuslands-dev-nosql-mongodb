// Liga de pingpong - Consultas y Operaciones
// Solución de Denise López - Ejercicio 10

use campus_pingpong_campus

// 1. Consulta general para listar todos los registros (requerido por la plantilla base)
db.jugadores.find({})

// 2. Búsqueda con proyección: Jugadores activos de categoría "Avanzado"
db.jugadores.find(
  { activo: true, categoria: "Avanzado" },
  { nombre: 1, categoria: 1, "estadisticas.partidos_ganados": 1, _id: 0 }
)

// 3. Conteo 1: Contar total de jugadores activos en la liga
db.jugadores.countDocuments({ activo: true })

// 4. Conteo 2: Contar jugadores que pertenecen al grupo "campus-elite"
db.jugadores.countDocuments({ etiquetas: "campus-elite" })

// 5. Búsqueda en subdocumentos: Jugadores con más de 80 partidos ganados
db.jugadores.find(
  { "estadisticas.partidos_ganados": { $gt: 80 } },
  { nombre: 1, "estadisticas.partidos_ganados": 1, _id: 0 }
)

// 6. Operación de actualización (Update): Registrar un partido ganado y un torneo más para Fan Zhendong
db.jugadores.updateOne(
  { nombre: "Fan Zhendong" },
  {
    $inc: {
      "estadisticas.partidos_jugados": 1,
      "estadisticas.partidos_ganados": 1,
      "estadisticas.torneos_ganados": 1
    }
  }
)