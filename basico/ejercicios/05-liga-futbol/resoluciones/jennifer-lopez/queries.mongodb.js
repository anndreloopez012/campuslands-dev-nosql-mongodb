// Liga de fútbol campus - Consultas y Operaciones
// Solución de Denise López - Ejercicio 05

use campus_liga_futbol

// 1. Consulta general para obtener todos los equipos (requerido por la plantilla base)
db.equipos.find({})

// 2. Proyección y Ordenamiento: Mostrar la tabla de posiciones (Nombre y Puntos) ordenada de mayor a menor
db.equipos.find(
  { activo: true },
  { nombre: 1, "estadisticas.puntos": 1, _id: 0 }
).sort({ "estadisticas.puntos": -1 })

// 3. Consulta en subdocumentos: Equipos con más de 20 goles a favor
db.equipos.find(
  { "estadisticas.goles_favor": { $gt: 20 } },
  { nombre: 1, "estadisticas.goles_favor": 1, _id: 0 }
)

// 4. Consulta en arrays: Buscar equipos que jueguen en la categoría "Femenino"
db.equipos.find(
  { categorias: "Femenino" },
  { nombre: 1, categorias: 1, _id: 0 }
)

// 5. Operación de actualización: Sumar 3 puntos y 2 goles a favor a "Lions FC" tras ganar un partido
db.equipos.updateOne(
  { nombre: "Lions FC" },
  { 
    $inc: { 
      "estadisticas.puntos": 3, 
      "estadisticas.goles_favor": 2,
      "estadisticas.partidos_ganados": 1 
    } 
  }
)