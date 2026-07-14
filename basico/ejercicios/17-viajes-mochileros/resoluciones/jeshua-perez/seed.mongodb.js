// 17. Viajes mochileros
// Solucion - jeshua-perez (nivel basico)
// Enfoque: fechas y presupuesto

use campus_viajes_mochileros

db.viajes.drop()

db.createCollection("viajes")

db.viajes.insertMany([
  { viajero: "Tatiana Osorio", destino: "San Gil", fechaInicio: new Date("2026-01-10"), fechaFin: new Date("2026-01-15"), presupuesto: 800000, gastado: 650000 },
  { viajero: "Cristian Lopez", destino: "Tayrona", fechaInicio: new Date("2026-02-05"), fechaFin: new Date("2026-02-12"), presupuesto: 1200000, gastado: 1350000 },
  { viajero: "Natalia Perez", destino: "Salento", fechaInicio: new Date("2026-03-01"), fechaFin: new Date("2026-03-06"), presupuesto: 600000, gastado: 590000 },
  { viajero: "Tatiana Osorio", destino: "Guatape", fechaInicio: new Date("2026-04-20"), fechaFin: new Date("2026-04-23"), presupuesto: 450000, gastado: 300000 },
  { viajero: "Andres Puentes", destino: "Desierto de la Tatacoa", fechaInicio: new Date("2026-05-10"), fechaFin: new Date("2026-05-13"), presupuesto: 500000, gastado: 520000 },
  { viajero: "Cristian Lopez", destino: "Villa de Leyva", fechaInicio: new Date("2026-06-15"), fechaFin: new Date("2026-06-18"), presupuesto: 400000, gastado: 350000 }
])
