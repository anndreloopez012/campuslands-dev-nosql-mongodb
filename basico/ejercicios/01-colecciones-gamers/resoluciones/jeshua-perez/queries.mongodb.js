// 01. Inventario de perfiles gamer
// Consultas - jeshua-perez

use campus_colecciones_gamers

// 1. Ver todos los documentos de la coleccion
db.jugadores.find({})

// 2. Consultar un jugador puntual por su gamertag
db.jugadores.findOne({ gamertag: "Andy_Frag" })

// 3. Listar solo jugadores activos, mostrando nombre y juego principal
db.jugadores.find(
  { activo: true },
  { nombre: 1, juegoPrincipal: 1, _id: 0 }
)

// 4. Contar cuantos documentos hay en la coleccion
db.jugadores.countDocuments({})

// 5. Actualizar horas jugadas tras una sesion (operacion de reporte pedida en el ejercicio)
db.jugadores.updateOne(
  { gamertag: "Kev_Rush" },
  { $inc: { horasJugadas: 5 }, $set: { activo: true } }
)

// 6. Confirmar que la coleccion existe dentro de la base de datos
db.getCollectionNames()
