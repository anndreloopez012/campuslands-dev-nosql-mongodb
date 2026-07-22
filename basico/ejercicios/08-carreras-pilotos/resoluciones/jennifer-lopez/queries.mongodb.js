// Ranking de pilotos - Consultas y Operaciones
// Solución de Denise López - Ejercicio 08

use campus_carreras_pilotos

// 1. Consulta general para obtener todos los registros (requerido por la plantilla base)
db.pilotos.find({})

// 2. Consulta de Ranking (sort + limit): Obtener el Top 3 de pilotos con más puntos
db.pilotos.find(
  { activo: true },
  { nombre: 1, escuderia: 1, "estadisticas.puntos": 1, _id: 0 }
).sort({ "estadisticas.puntos": -1 }).limit(3)

// 3. Consulta en subdocumentos: Buscar pilotos con más de 2 victorias en la temporada
db.pilotos.find(
  { "estadisticas.victorias": { $gt: 2 } },
  { nombre: 1, escuderia: 1, "estadisticas.victorias": 1, _id: 0 }
)

// 4. Consulta en arrays: Buscar pilotos que tengan a "Monza" como circuito favorito
db.pilotos.find(
  { circuitos_favoritos: "Monza" },
  { nombre: 1, escuderia: 1, circuitos_favoritos: 1, _id: 0 }
)

// 5. Operación de actualización (Update): Sumar 25 puntos y 1 victoria a Lando Norris tras ganar un Gran Premio
db.pilotos.updateOne(
  { nombre: "Lando Norris" },
  { 
    $inc: { 
      "estadisticas.puntos": 25, 
      "estadisticas.victorias": 1,
      "estadisticas.podios": 1
    } 
  }
)