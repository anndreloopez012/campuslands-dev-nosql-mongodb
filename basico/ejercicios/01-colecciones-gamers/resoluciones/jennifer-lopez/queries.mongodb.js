// Inventario de perfiles gamer - Consultas y Operaciones
// Solución de Denise López - Ejercicio 01

use campus_colecciones_gamers

// 1. Consulta general para listar todos los perfiles
db.gamers.find({})

// 2. Consulta con proyección: Mostrar nombre, rango y nivel de jugadores activos
db.gamers.find(
  { activo: true },
  { nombre: 1, rango: 1, nivel: 1, _id: 0 }
)

// 3. Consulta sobre subdocumento: Buscar jugadores con precisión mayor al 60%
db.gamers.find(
  { "estadisticas.precision": { $gt: 60 } },
  { nombre: 1, "estadisticas.precision": 1, _id: 0 }
)

// 4. Consulta sobre array: Buscar jugadores que tengan el arma "AWP" equipada
db.gamers.find(
  { armas: "AWP" },
  { nombre: 1, armas: 1, _id: 0 }
)

// 5. Operación de actualización: Aumentar el nivel de Jeser y sumarle una victoria
db.gamers.updateOne(
  { nombre: "Jeser" },
  { 
    $inc: { nivel: 1, "estadisticas.partidas_ganadas": 1 } 
  }
)