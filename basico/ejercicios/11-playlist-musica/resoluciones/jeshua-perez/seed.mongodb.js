// 11. Playlist por energia
// Solucion - jeshua-perez (nivel basico)
// Enfoque: arrays simples

use campus_playlist_musica

db.canciones.drop()

db.createCollection("canciones")

db.canciones.insertMany([
  { titulo: "Noche Electrica", artista: "Neon Pulse", genero: "Electronica", energia: 9, tags: ["fiesta", "gimnasio", "noche"] },
  { titulo: "Camino Lento", artista: "Rio Sereno", genero: "Acustico", energia: 3, tags: ["relax", "estudio"] },
  { titulo: "Corre Conmigo", artista: "Bloque 7", genero: "Pop", energia: 7, tags: ["gimnasio", "motivacion"] },
  { titulo: "Atardecer Urbano", artista: "Kira Beats", genero: "Lo-fi", energia: 4, tags: ["estudio", "relax"] },
  { titulo: "Fuego Interior", artista: "Neon Pulse", genero: "Electronica", energia: 10, tags: ["fiesta", "gimnasio"] },
  { titulo: "Susurros", artista: "Rio Sereno", genero: "Acustico", energia: 2, tags: ["relax", "dormir"] }
])
