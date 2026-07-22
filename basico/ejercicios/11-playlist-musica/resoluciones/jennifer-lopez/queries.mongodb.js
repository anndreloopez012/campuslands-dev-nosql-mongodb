// Playlist por energia - Consultas y Operaciones
// Solución de Denise López - Ejercicio 11

use campus_playlist_musica

// 1. Consulta general para listar todos los registros (requerido por la plantilla base)
db.playlists.find({})

// 2. Búsqueda con proyección: Playlists activas de energía "Alta"
db.playlists.find(
  { activo: true, nivel_energia: "Alta" },
  { nombre: 1, nivel_energia: 1, me_gusta: 1, _id: 0 }
)

// 3. Consulta sobre arrays simples: Buscar playlists que contengan la canción "Plan A"
db.playlists.find(
  { canciones: "Plan A" },
  { nombre: 1, nivel_energia: 1, canciones: 1, _id: 0 }
)

// 4. Operador $in sobre arrays: Playlists que incluyan géneros "Lo-Fi" o "EDM"
db.playlists.find(
  { generos: { $in: ["Lo-Fi", "EDM"] } },
  { nombre: 1, generos: 1, _id: 0 }
)

// 5. Operador $all sobre arrays: Playlists que tengan simultáneamente las etiquetas "gym" y "cardio"
db.playlists.find(
  { etiquetas: { $all: ["gym", "cardio"] } },
  { nombre: 1, etiquetas: 1, _id: 0 }
)

// 6. Operación de actualización (Update): Agregar una nueva canción al array de "Workout Workout Ultra" e incrementar me_gusta
db.playlists.updateOne(
  { nombre: "Workout Workout Ultra" },
  {
    $push: { canciones: "Lose Yourself" },
    $inc: { me_gusta: 1 }
  }
)