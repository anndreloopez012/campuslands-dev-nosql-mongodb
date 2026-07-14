// 30. Proyecto basico MongoDB (videojuegos y campus)
// Solucion - jeshua-perez (nivel basico)
// Enfoque: integracion CRUD

use campus_proyecto_basico

db.jugadores.drop()
db.torneos.drop()

db.createCollection("jugadores")
db.createCollection("torneos")

// Coleccion jugadores: perfiles de estudiantes gamers del campus
db.jugadores.insertMany([
  { _id: "jug-1", nombre: "Andres Mejia", juego: "Valorant", rango: "Platino", activo: true },
  { _id: "jug-2", nombre: "Luisa Fernandez", juego: "League of Legends", rango: "Oro", activo: true },
  { _id: "jug-3", nombre: "Sebastian Cano", juego: "Valorant", rango: "Diamante", activo: true },
  { _id: "jug-4", nombre: "Camila Rueda", juego: "Rocket League", rango: "Platino", activo: false },
  { _id: "jug-5", nombre: "Daniel Pabon", juego: "League of Legends", rango: "Plata", activo: true }
])

// Coleccion torneos: referencia manual a jugadores inscritos por su _id
db.torneos.insertMany([
  {
    nombre: "Copa Campus Valorant",
    juego: "Valorant",
    fecha: new Date("2026-08-15"),
    cupos: 16,
    inscritos: ["jug-1", "jug-3"],
    estado: "abierto"
  },
  {
    nombre: "Liga Interna LoL",
    juego: "League of Legends",
    fecha: new Date("2026-08-20"),
    cupos: 10,
    inscritos: ["jug-2"],
    estado: "abierto"
  },
  {
    nombre: "Torneo Relampago Rocket League",
    juego: "Rocket League",
    fecha: new Date("2026-06-01"),
    cupos: 8,
    inscritos: ["jug-4"],
    estado: "cerrado"
  }
])
