// 01. Inventario de perfiles gamer
// Solucion - jeshua-perez (nivel basico)
// Enfoque: crear base de datos, colecciones y documentos

use campus_colecciones_gamers

db.jugadores.drop()

db.createCollection("jugadores")

// Perfiles gamer de titulos shooter, con datos coherentes entre si
db.jugadores.insertMany([
  {
    nombre: "Camila Rios",
    gamertag: "Vortex_Cam",
    juegoPrincipal: "Valorant",
    rango: "Diamante",
    horasJugadas: 480,
    plataformas: ["PC"],
    activo: true
  },
  {
    nombre: "Julian Cortes",
    gamertag: "J_Sniper",
    juegoPrincipal: "Call of Duty: Warzone",
    rango: "Platino",
    horasJugadas: 610,
    plataformas: ["PC", "PlayStation"],
    activo: true
  },
  {
    nombre: "Andrea Suarez",
    gamertag: "Andy_Frag",
    juegoPrincipal: "Counter-Strike 2",
    rango: "Global Elite",
    horasJugadas: 920,
    plataformas: ["PC"],
    activo: true
  },
  {
    nombre: "Miguel Torres",
    gamertag: "MT_Ghost",
    juegoPrincipal: "Apex Legends",
    rango: "Oro",
    horasJugadas: 210,
    plataformas: ["PC", "Xbox"],
    activo: false
  },
  {
    nombre: "Laura Gomez",
    gamertag: "Laurita_GG",
    juegoPrincipal: "Valorant",
    rango: "Inmortal",
    horasJugadas: 1050,
    plataformas: ["PC"],
    activo: true
  },
  {
    nombre: "Kevin Ramirez",
    gamertag: "Kev_Rush",
    juegoPrincipal: "Overwatch 2",
    rango: "Plata",
    horasJugadas: 95,
    plataformas: ["PC", "PlayStation"],
    activo: false
  }
])
