// Ejercicio 17 - Viajes mochileros
// Autor: juan-lema
// Consultas: CRUD sobre "registros"

use campus_viajes_mochileros

// 1) Find all: listado general (nombre, destino y fechas)
db.registros.find(
  {},
  { "viajero.nombre": 1, "destino.pais": 1, "destino.ciudad": 1, fechaInicio: 1, fechaFin: 1, _id: 0 }
)

// 2) Find filtrado: viajes con presupuesto <= 500 USD y aun no iniciados
db.registros.find(
  { "presupuesto.total": { $lte: 500 }, estado: "planificado" },
  { "viajero.nombre": 1, "destino.pais": 1, "presupuesto.total": 1, _id: 0 }
)

// 3) Find filtrado: viajes a Guatemala ordenados por fecha de inicio
db.registros.find(
  { "destino.pais": "Guatemala" }
).sort({ fechaInicio: 1 })

// 4) updateOne: el viaje de Camila Torres pasa a "finalizado" con calificacion
db.registros.updateOne(
  { "viajero.nombre": "Camila Torres" },
  { $set: { estado: "finalizado", calificacion: 5 } }
)
// Verificacion
db.registros.findOne(
  { "viajero.nombre": "Camila Torres" },
  { estado: 1, calificacion: 1, _id: 0 }
)

// 5) deleteOne: se cancela el viaje de Andres Paredes
db.registros.deleteOne({ "viajero.nombre": "Andres Paredes" })
// Verificacion
db.registros.countDocuments()
db.registros.findOne({ "viajero.nombre": "Andres Paredes" })
