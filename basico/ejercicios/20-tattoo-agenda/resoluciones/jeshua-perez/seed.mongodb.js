// 20. Agenda de tatuajes
// Solucion - jeshua-perez (nivel basico)
// Enfoque: estados y fechas

use campus_tattoo_agenda

db.citas.drop()

db.createCollection("citas")

db.citas.insertMany([
  { cliente: "Wilson Bravo", artista: "Nadia Ferro", estilo: "Blackwork", fecha: new Date("2026-07-15T14:00:00"), estado: "confirmada" },
  { cliente: "Erika Montano", artista: "Tomas Riveros", estilo: "Fine line", fecha: new Date("2026-07-16T10:00:00"), estado: "pendiente" },
  { cliente: "Alejandro Nunez", artista: "Nadia Ferro", estilo: "Realismo", fecha: new Date("2026-07-16T16:00:00"), estado: "pendiente" },
  { cliente: "Camila Ortega", artista: "Tomas Riveros", estilo: "Old school", fecha: new Date("2026-07-10T11:00:00"), estado: "completada" },
  { cliente: "Rodrigo Salas", artista: "Nadia Ferro", estilo: "Blackwork", fecha: new Date("2026-07-12T09:00:00"), estado: "cancelada" },
  { cliente: "Valentina Cruz", artista: "Tomas Riveros", estilo: "Fine line", fecha: new Date("2026-07-18T13:00:00"), estado: "confirmada" }
])
