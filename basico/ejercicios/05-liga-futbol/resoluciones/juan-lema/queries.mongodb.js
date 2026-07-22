// Liga de futbol campus - queries
// Autor: juan-lema
use campus_liga_futbol

// 1. Find all, proyeccion basica (sin _id)
db.registros.find({}, { _id: 0, nombre: 1, equipo: 1, goles: 1 })

// 2. Filtrado: jugadores activos con mas de 5 goles, ordenados por goles desc
db.registros.find(
  { activo: true, goles: { $gt: 5 } },
  { _id: 0, nombre: 1, equipo: 1, goles: 1, asistencias: 1 }
).sort({ goles: -1 })

// 3. Proyeccion de mediocampistas ordenados por asistencias desc
db.registros.find(
  { posicion: "mediocampista" },
  { _id: 0, nombre: 1, equipo: 1, asistencias: 1 }
).sort({ asistencias: -1 })

// 4. Ordenamiento compuesto: por equipo asc, luego goles desc
db.registros.find(
  {},
  { _id: 0, nombre: 1, equipo: 1, posicion: 1, goles: 1 }
).sort({ equipo: 1, goles: -1 })

// 5. Update: registrar tarjeta amarilla a Diego Fernandez
db.registros.updateOne(
  { nombre: "Diego Fernandez" },
  { $push: { tarjetas: { tipo: "amarilla", partido: 15 } } }
)

// Verificacion del update
db.registros.find(
  { nombre: "Diego Fernandez" },
  { _id: 0, nombre: 1, tarjetas: 1 }
)

// 6. Delete: dar de baja al jugador inactivo con tarjeta roja
db.registros.deleteOne({ nombre: "Andres Villa" })

// Verificacion del delete
db.registros.find({}, { _id: 0, nombre: 1, equipo: 1 }).sort({ nombre: 1 })
