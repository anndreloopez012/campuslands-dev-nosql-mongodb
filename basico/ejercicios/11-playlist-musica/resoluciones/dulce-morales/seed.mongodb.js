// Seleccionar/Crear la base de datos
use('campus_playlist_musica');

// Insertar documentos iniciales coherentes con la temática
db.canciones.insertMany([
  {
    titulo: "Blinding Lights",
    artista: "The Weeknd",
    album: "After Hours",
    generos: ["synthwave", "pop"],
    parametros: {
      energia: 80,
      tempo: 171,
      duracion_seg: 200
    },
    activa: true
  },
  {
    titulo: "Weightless",
    artista: "Marconi Union",
    album: "Ambient 1",
    generos: ["ambient", "chillout", "relax"],
    parametros: {
      energia: 15,
      tempo: 60,
      duracion_seg: 480
    },
    activa: true
  },
  {
    titulo: "Thunderstruck",
    artista: "AC/DC",
    album: "The Razors Edge",
    generos: ["hard rock", "rock"],
    parametros: {
      energia: 95,
      tempo: 133,
      duracion_seg: 292
    },
    activa: true
  },
  {
    titulo: "Sunflower",
    artista: "Post Malone & Swae Lee",
    album: "Spider-Man: Into the Spider-Verse",
    generos: ["hip hop", "pop"],
    parametros: {
      energia: 76,
      tempo: 90,
      duracion_seg: 158
    },
    activa: true
  },
  {
    titulo: "Clair de Lune",
    artista: "Claude Debussy",
    album: "Suite bergamasque",
    generos: ["clasica", "piano"],
    parametros: {
      energia: 20,
      tempo: 65,
      duracion_seg: 300
    },
    activa: false
  }
]);