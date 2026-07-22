// Sagas de ciencia ficcion - Consultas
// Autor: juan-lema
use campus_sci_fi_sagas

// 1. Listar todas las sagas
db.sagas.find()

// 2. Filtrar: personajes activos de una saga especifica
db.personajes.find({ saga_id: "SAGA001", activo: true })

// 3. Resolver referencia manual: obtener la saga de un personaje puntual
const personaje = db.personajes.findOne({ nombre: "Nira Solis" })
db.sagas.findOne({ _id: personaje.saga_id })

// 4. Actualizar: marcar una saga como inactiva
db.sagas.updateOne(
  { _id: "SAGA003" },
  { $set: { activa: false } }
)
// Verificacion
db.sagas.findOne({ _id: "SAGA003" })

// 5. Eliminar un personaje inactivo
db.personajes.deleteOne({ nombre: "Dr. Ezra Kahn" })
// Verificacion: ya no deberia aparecer
db.personajes.find({ saga_id: "SAGA003" })

// 6. Reporte: total de personajes por saga
db.personajes.aggregate([
  { $group: { _id: "$saga_id", total: { $sum: 1 } } }
])
