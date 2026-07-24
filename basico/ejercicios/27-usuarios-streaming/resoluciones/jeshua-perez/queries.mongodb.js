// 27. Usuarios streaming
// Consultas - jeshua-perez

use campus_usuarios_streaming

// 1. Usuarios activos con plan Premium
db.usuarios.find({ activo: true, plan: "Premium" })

// 2. Usuarios inactivos, candidatos a campania de reactivacion
db.usuarios.find({ activo: false }, { nombre: 1, email: 1, _id: 0 })

// 3. Usuarios interesados en un genero especifico
db.usuarios.find({ generosFavoritos: "rock" })

// 4. Contar usuarios por plan
db.usuarios.aggregate([
  { $group: { _id: "$plan", totalUsuarios: { $sum: 1 } } }
])

// 5. Reactivar la cuenta de un usuario
db.usuarios.updateOne(
  { email: "carolina.estupinan@correo.com" },
  { $set: { activo: true } }
)

// 6. Agregar un genero favorito a un usuario existente
db.usuarios.updateOne(
  { email: "brayan.ortiz@correo.com" },
  { $addToSet: { generosFavoritos: "terror" } }
)
