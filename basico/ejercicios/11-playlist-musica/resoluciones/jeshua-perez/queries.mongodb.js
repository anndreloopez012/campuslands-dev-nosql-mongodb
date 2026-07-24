// 11. Playlist por energia
// Consultas - jeshua-perez

use campus_playlist_musica

// 1. Canciones que tienen el tag "gimnasio" dentro del array
db.canciones.find({ tags: "gimnasio" })

// 2. Canciones que combinan dos tags a la vez ($all)
db.canciones.find({ tags: { $all: ["fiesta", "gimnasio"] } })

// 3. Canciones de alta energia, ordenadas de mayor a menor
db.canciones.find(
  { energia: { $gte: 7 } },
  { titulo: 1, artista: 1, energia: 1, _id: 0 }
).sort({ energia: -1 })

// 4. Agregar un tag nuevo al array de una cancion
db.canciones.updateOne(
  { titulo: "Corre Conmigo" },
  { $push: { tags: "cardio" } }
)

// 5. Quitar un tag del array de una cancion
db.canciones.updateOne(
  { titulo: "Susurros" },
  { $pull: { tags: "dormir" } }
)

// 6. Canciones que no tienen el tag "relax"
db.canciones.find({ tags: { $ne: "relax" } })
