// Garaje de autos de lujo - Consultas y Operaciones
// Solución de Denise López - Ejercicio 07

use campus_garaje_lujo

// 1. Consulta general para obtener todos los autos (requerido por la plantilla base)
db.autos.find({})

// 2. Filtro numérico simple: Autos disponibles con un precio mayor a 300,000 USD
db.autos.find(
  { disponible: true, precio_usd: { $gt: 300000 } },
  { marca: 1, modelo: 1, precio_usd: 1, _id: 0 }
)

// 3. Filtro numérico en subdocumento: Autos con potencia igual o superior a 700 HP
db.autos.find(
  { "especificaciones.potencia_hp": { $gte: 700 } },
  { marca: 1, modelo: 1, "especificaciones.potencia_hp": 1, _id: 0 }
)

// 4. Consulta en arrays: Autos que incluyan "Frenos cerámicos" en su equipamiento
db.autos.find(
  { equipamiento: "Frenos cerámicos" },
  { marca: 1, modelo: 1, equipamiento: 1, _id: 0 }
)

// 5. Operación de actualización (Update): Marcar disponible el Lamborghini Aventador SVJ y ajustar su precio
db.autos.updateOne(
  { marca: "Lamborghini", modelo: "Aventador SVJ" },
  { 
    $set: { disponible: true },
    $inc: { precio_usd: 5000 },$push: { equipamiento: "Tratamiento cerámico de pintura" }
  }
)