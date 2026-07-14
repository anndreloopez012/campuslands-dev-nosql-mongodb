// 30. Proyecto basico MongoDB (videojuegos y campus)
// Consultas - jeshua-perez
// Integracion CRUD: Create, Read, Update, Delete sobre jugadores y torneos

use campus_proyecto_basico

// --- CREATE ---

// 1. Registrar un nuevo jugador
db.jugadores.insertOne({ _id: "jug-6", nombre: "Paula Nieto", juego: "Valorant", rango: "Oro", activo: true })

// 2. Inscribir al nuevo jugador en un torneo abierto (referencia manual)
db.torneos.updateOne(
  { nombre: "Copa Campus Valorant" },
  { $addToSet: { inscritos: "jug-6" } }
)

// --- READ ---

// 3. Ver todos los jugadores activos
db.jugadores.find({ activo: true })

// 4. Ver torneos abiertos con sus jugadores inscritos
db.torneos.find({ estado: "abierto" })

// 5. Resolver referencias manualmente: nombres de los jugadores inscritos en la Copa Campus Valorant
db.jugadores.find(
  { _id: { $in: db.torneos.findOne({ nombre: "Copa Campus Valorant" }).inscritos } },
  { nombre: 1, rango: 1, _id: 0 }
)

// --- UPDATE ---

// 6. Actualizar el rango de un jugador tras subir de nivel
db.jugadores.updateOne(
  { _id: "jug-5" },
  { $set: { rango: "Oro" } }
)

// 7. Cerrar un torneo que ya se jugo
db.torneos.updateOne(
  { nombre: "Liga Interna LoL" },
  { $set: { estado: "cerrado" } }
)

// --- DELETE ---

// 8. Dar de baja a un jugador inactivo (delete controlado, con filtro especifico)
db.jugadores.deleteOne({ _id: "jug-4", activo: false })

// 9. Confirmar el estado final de ambas colecciones
db.jugadores.find({})
db.torneos.find({})
