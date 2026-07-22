use('campus_playlist_musica');

// CONSULTA 1: Filtrar canciones con alta energía (> 70)
db.canciones.find(
  { "parametros.energia": { $gt: 70 }, activa: true },
  { titulo: 1, artista: 1, "parametros.energia": 1, _id: 0 }
);

// CONSULTA 2: Búsca canciones que contengan el género "pop" dentro de su array generos.
db.canciones.find(
  { generos: "pop" },
  { titulo: 1, artista: 1, generos: 1, _id: 0 }
);

// CONSULTA 3: añade una nueva etiqueta/género al array de la canción 'Blinding Lights'
db.canciones.updateOne(
  { titulo: "Blinding Lights" },
  { $push: { generos: "electronic" } }
);

// CONSULTA 4: Conteo de canciones activas por playlist
db.canciones.countDocuments({ activa: true });