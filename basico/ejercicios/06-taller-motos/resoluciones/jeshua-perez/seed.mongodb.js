// 06. Ordenes de taller de motos
// Solucion - jeshua-perez (nivel basico)
// Enfoque: updates basicos

use campus_taller_motos

db.ordenes.drop()

db.createCollection("ordenes")

db.ordenes.insertMany([
  { cliente: "Oscar Delgado", moto: "Yamaha FZ 250", servicio: "Cambio de aceite", estado: "pendiente", costo: 80000, fechaIngreso: new Date("2026-06-01") },
  { cliente: "Marcela Nino", moto: "Honda CB 190R", servicio: "Revision de frenos", estado: "en proceso", costo: 120000, fechaIngreso: new Date("2026-06-02") },
  { cliente: "Tomas Bermudez", moto: "Suzuki Gixxer", servicio: "Cambio de llanta", estado: "pendiente", costo: 250000, fechaIngreso: new Date("2026-06-03") },
  { cliente: "Paula Ortiz", moto: "Kawasaki Z400", servicio: "Ajuste de cadena", estado: "completado", costo: 45000, fechaIngreso: new Date("2026-05-28") },
  { cliente: "Julian Reyes", moto: "Yamaha MT-03", servicio: "Revision general", estado: "en proceso", costo: 180000, fechaIngreso: new Date("2026-06-04") },
  { cliente: "Diana Salazar", moto: "Honda XR 150", servicio: "Cambio de aceite", estado: "pendiente", costo: 75000, fechaIngreso: new Date("2026-06-05") }
])
