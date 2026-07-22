// Viajes mochileros - Consultas y Operaciones
// Solución de Denise López - Ejercicio 17

use campus_viajes_mochileros

// 1. Consulta general para listar todos los registros (requerido por la plantilla base)
db.itinerarios.find({})

// 2. Consulta por rango de presupuesto: Viajes económicos de mochilero por debajo o igual a $1000 USD
db.itinerarios.find(
  { presupuesto_usd: { $lte: 1000.00 } },
  { viajero: 1, destino_popular: 1, pais: 1, presupuesto_usd: 1, _id: 0 }
)

// 3. Consulta por fechas: Viajes programados a partir de septiembre de 2026 ($gte)
db.itinerarios.find(
  { fecha_inicio: { $gte: ISODate("2026-09-01T00:00:00Z") } },
  { viajero: 1, pais: 1, fecha_inicio: 1, fecha_fin: 1, duracion_dias: 1, _id: 0 }
)

// 4. Consulta combinada: Presupuesto menor a $1000 USD en el continente África
db.itinerarios.find(
  { 
    presupuesto_usd: { $lt: 1000.00 },
    continente: "África"
  },
  { viajero: 1, destino_popular: 1, pais: 1, presupuesto_usd: 1, _id: 0 }
)

// 5. Operación de actualización (Update): Ajustar el presupuesto de Orestes Vane en Bolivia (incrementar $100 USD por transporte)
db.itinerarios.updateOne(
  { viajero: "Orestes Vane", pais: "Bolivia" },
  { 
    $inc: { 
      presupuesto_usd: 100.00,
      "gastos_estimados.transporte": 100.00
    } 
  }
)