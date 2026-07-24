// 19. Check-in de paracaidismo
// Consultas - jeshua-perez

use campus_paracaidismo_checkin

// 1. Validacion manual: alumnos sin certificado medico (no deberian estar aptos)
db.saltos.find({ certificadoMedico: false })

// 2. Validacion manual: alumnos con peso fuera del rango permitido (40-100 kg)
db.saltos.find({ $or: [{ pesoKg: { $lt: 40 } }, { pesoKg: { $gt: 100 } }] })

// 3. Validacion manual: alumnos marcados aptos pero que incumplen alguna regla (inconsistencia a corregir)
db.saltos.find({
  apto: true,
  $or: [{ certificadoMedico: false }, { pesoKg: { $gt: 100 } }]
})

// 4. Alumnos aptos para saltar
db.saltos.find({ apto: true }, { alumno: 1, instructor: 1, _id: 0 })

// 5. Corregir manualmente la aptitud de un alumno que no cumple el rango de peso
db.saltos.updateOne(
  { alumno: "Karen Solano" },
  { $set: { apto: false } }
)

// 6. Reporte de saltos por instructor
db.saltos.aggregate([
  { $group: { _id: "$instructor", totalAlumnos: { $sum: 1 } } }
])
