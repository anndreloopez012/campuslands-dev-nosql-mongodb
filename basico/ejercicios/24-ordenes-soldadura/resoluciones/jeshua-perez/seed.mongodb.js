// 24. Ordenes de soldadura
// Solucion - jeshua-perez (nivel basico)
// Enfoque: estados de inspeccion

use campus_ordenes_soldadura

db.ordenes.drop()

db.createCollection("ordenes")

db.ordenes.insertMany([
  { pieza: "Viga IPE-200 #14", soldador: "Anibal Correa", tipoJunta: "Tope", estadoInspeccion: "pendiente", fecha: new Date("2026-06-01") },
  { pieza: "Placa Base Columna C3", soldador: "Rosa Fajardo", tipoJunta: "Filete", estadoInspeccion: "aprobado", fecha: new Date("2026-06-02") },
  { pieza: "Tuberia 6 pulgadas", soldador: "Anibal Correa", tipoJunta: "Circunferencial", estadoInspeccion: "rechazado", fecha: new Date("2026-06-02") },
  { pieza: "Bracket Soporte A7", soldador: "Rosa Fajardo", tipoJunta: "Filete", estadoInspeccion: "pendiente", fecha: new Date("2026-06-03") },
  { pieza: "Viga IPE-200 #15", soldador: "Cesar Naranjo", tipoJunta: "Tope", estadoInspeccion: "aprobado", fecha: new Date("2026-06-03") },
  { pieza: "Escalera Metalica Modulo 2", soldador: "Cesar Naranjo", tipoJunta: "Filete", estadoInspeccion: "rechazado", fecha: new Date("2026-06-04") }
])
