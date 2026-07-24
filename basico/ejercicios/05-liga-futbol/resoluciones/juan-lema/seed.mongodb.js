// Liga de futbol campus - seed
// Autor: juan-lema
use campus_liga_futbol

db.createCollection("registros")

db.registros.insertMany([
  {
    nombre: "Kevin Ramirez",
    equipo: "Halcones FC",
    posicion: "delantero",
    activo: true,
    goles: 14,
    asistencias: 5,
    partidosJugados: 18,
    tarjetas: [{ tipo: "amarilla", partido: 3 }, { tipo: "amarilla", partido: 11 }]
  },
  {
    nombre: "Diego Fernandez",
    equipo: "Halcones FC",
    posicion: "portero",
    activo: true,
    goles: 0,
    asistencias: 0,
    partidosJugados: 18,
    tarjetas: []
  },
  {
    nombre: "Mateo Suarez",
    equipo: "Leones United",
    posicion: "mediocampista",
    activo: true,
    goles: 7,
    asistencias: 10,
    partidosJugados: 17,
    tarjetas: [{ tipo: "amarilla", partido: 6 }]
  },
  {
    nombre: "Andres Villa",
    equipo: "Leones United",
    posicion: "defensa",
    activo: false,
    goles: 1,
    asistencias: 2,
    partidosJugados: 9,
    tarjetas: [{ tipo: "roja", partido: 9 }]
  },
  {
    nombre: "Jorge Paredes",
    equipo: "Tiburones SC",
    posicion: "delantero",
    activo: true,
    goles: 11,
    asistencias: 3,
    partidosJugados: 16,
    tarjetas: []
  },
  {
    nombre: "Luis Cardenas",
    equipo: "Tiburones SC",
    posicion: "mediocampista",
    activo: true,
    goles: 4,
    asistencias: 8,
    partidosJugados: 18,
    tarjetas: [{ tipo: "amarilla", partido: 14 }]
  }
])
