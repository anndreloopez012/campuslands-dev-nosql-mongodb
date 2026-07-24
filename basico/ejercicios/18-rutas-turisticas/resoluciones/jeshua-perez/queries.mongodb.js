// 18. Rutas turisticas
// Consultas - jeshua-perez

use campus_rutas_turisticas

// 1. Indice geoespacial 2dsphere para poder consultar por cercania
db.rutas.createIndex({ ubicacion: "2dsphere" })

// 2. Rutas por ciudad
db.rutas.find({ ciudad: "Salento" })

// 3. Rutas de dificultad baja, aptas para principiantes
db.rutas.find({ dificultad: "Baja" }, { nombre: 1, ciudad: 1, distanciaKm: 1, _id: 0 })

// 4. Rutas cercanas a un punto de referencia (cerca de Bogota), usando $near
db.rutas.find({
  ubicacion: {
    $near: {
      $geometry: { type: "Point", coordinates: [-74.08, 4.65] },
      $maxDistance: 50000
    }
  }
})

// 5. Rutas largas, mayores a 5 km, ordenadas de mayor a menor distancia
db.rutas.find({ distanciaKm: { $gt: 5 } }).sort({ distanciaKm: -1 })

// 6. Actualizar la dificultad de una ruta tras mantenimiento del sendero
db.rutas.updateOne(
  { nombre: "Ruta Cascada La Chorrera" },
  { $set: { dificultad: "Media" } }
)
