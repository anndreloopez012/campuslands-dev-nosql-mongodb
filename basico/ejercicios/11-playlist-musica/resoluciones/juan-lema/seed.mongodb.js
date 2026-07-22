// Playlist por energia — seed
// Autor: juan-lema
use("campus_playlist_musica");

db.registros.drop();

db.registros.insertMany([
  {
    nombre: "Levantate",
    artista: "Voltio Sonico",
    genero: "electronica",
    duracion_seg: 210,
    energia: 9,
    activo: true,
    reproducciones: 340,
    etiquetas: ["gym", "energia-alta"]
  },
  {
    nombre: "Modo Foco",
    artista: "Nimbus",
    genero: "lofi",
    duracion_seg: 185,
    energia: 3,
    activo: true,
    reproducciones: 512,
    etiquetas: ["focus", "estudio"]
  },
  {
    nombre: "Atardecer Lento",
    artista: "Rio Sur",
    genero: "indie",
    duracion_seg: 240,
    energia: 4,
    activo: true,
    reproducciones: 128,
    etiquetas: ["chill", "atardecer"]
  },
  {
    nombre: "Corre o Cae",
    artista: "Turbo Beat",
    genero: "electronica",
    duracion_seg: 198,
    energia: 8,
    activo: false,
    reproducciones: 97,
    etiquetas: ["gym", "correr"]
  },
  {
    nombre: "Noche Calma",
    artista: "Delta Azul",
    genero: "jazz",
    duracion_seg: 260,
    energia: 2,
    activo: true,
    reproducciones: 76,
    etiquetas: ["chill", "dormir"]
  },
  {
    nombre: "Subida",
    artista: "Nimbus",
    genero: "pop",
    duracion_seg: 175,
    energia: 7,
    activo: true,
    reproducciones: 289,
    etiquetas: ["fiesta", "energia-alta"]
  }
]);

// Verificacion rapida de la carga
print("Total insertados:", db.registros.countDocuments({}));
