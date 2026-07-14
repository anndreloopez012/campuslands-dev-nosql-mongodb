// 28. Reservas de eventos campus
// Consultas - jeshua-perez

use campus_reservas_eventos

// 1. Ver reservas canceladas antes de decidir si se eliminan
db.reservas.find({ estado: "cancelada" })

// 2. Ver reservas confirmadas (no se deben tocar)
db.reservas.find({ estado: "confirmada" })

// 3. Delete controlado: eliminar solo una reserva cancelada puntual (nunca deleteMany sin filtro)
db.reservas.deleteOne({ evento: "Sesion de Yoga al Aire Libre", estado: "cancelada" })

// 4. Delete controlado sobre eventos ya pasados y cancelados (filtro compuesto, no un delete masivo abierto)
db.reservas.deleteMany({ estado: "cancelada", fecha: { $lt: new Date("2026-07-01") } })

// 5. Confirmar que las reservas confirmadas siguen intactas
db.reservas.find({ estado: "confirmada" }, { evento: 1, fecha: 1, _id: 0 })

// 6. Contar cuantas reservas quedan en total tras el delete controlado
db.reservas.countDocuments({})
