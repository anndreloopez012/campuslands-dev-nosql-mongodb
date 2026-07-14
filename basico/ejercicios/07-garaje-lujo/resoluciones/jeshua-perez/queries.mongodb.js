// 07. Garaje de autos de lujo
// Consultas - jeshua-perez

use campus_garaje_lujo

// 1. Autos con precio mayor a 900000
db.autos.find({ precio: { $gt: 900000 } })

// 2. Autos con potencia entre 600 y 650 HP
db.autos.find(
  { potenciaHP: { $gte: 600, $lte: 650 } },
  { marca: 1, modelo: 1, potenciaHP: 1, _id: 0 }
)

// 3. Autos fabricados a partir de 2023
db.autos.find({ anio: { $gte: 2023 } })

// 4. Autos disponibles con precio menor o igual a 1000000
db.autos.find({ disponible: true, precio: { $lte: 1000000 } })

// 5. Actualizar precio de un auto (reporte de ajuste de mercado)
db.autos.updateOne(
  { modelo: "Continental GT" },
  { $inc: { precio: -40000 } }
)

// 6. Contar autos con potencia superior a 640 HP
db.autos.countDocuments({ potenciaHP: { $gt: 640 } })
