// Base de Datos de Música - Script de Poblado (Seed)
use('musica_db');

// Limpieza de colecciones previas
db.artistas.drop();
db.albumes.drop();
db.listasReproduccion.drop();

// 1. Inserción de Artistas (Colección: artistas)
// Uso de arrays simples para géneros e integrantes
db.artistas.insertMany([
  {
    _id: "ART-001",
    nombre: "Soda Stereo",
    paisOrigen: "ARG",
    añoFormacion: 1982,
    estado: "INACTIVO",
    generos: ["Rock en Español", "Rock Alternativo", "Post-Punk"],
    integrantes: ["Gustavo Cerati", "Zeta Bosio", "Charly Alberti"],
    oyentesMensuales: 8500000
  },
  {
    _id: "ART-002",
    nombre: "Café Tacvba",
    paisOrigen: "MEX",
    añoFormacion: 1989,
    estado: "ACTIVO",
    generos: ["Rock Alternativo", "Folk Rock", "Experimental"],
    integrantes: ["Rubén Albarrán", "Emanuel del Real", "Enrique Rangel", "Joselo Rangel"],
    oyentesMensuales: 4200000
  },
  {
    _id: "ART-003",
    nombre: "Zoé",
    paisOrigen: "MEX",
    añoFormacion: 1997,
    estado: "ACTIVO",
    generos: ["Indie Rock", "Rock Psicodélico", "Space Rock"],
    integrantes: ["León Larregui", "Sergio Acosta", "Jesús Báez", "Ángel Mosqueda", "Rodrigo Guardiola"],
    oyentesMensuales: 5100000
  },
  {
    _id: "ART-004",
    nombre: "Los Prisioneros",
    paisOrigen: "CHL",
    añoFormacion: 1983,
    estado: "INACTIVO",
    generos: ["Rock en Español", "New Wave", "Punk Rock"],
    integrantes: ["Jorge González", "Claudio Narea", "Miguel Tapia"],
    oyentesMensuales: 3100000
  },
  {
    _id: "ART-005",
    nombre: "Mon Laferte",
    paisOrigen: "CHL",
    añoFormacion: 2003,
    estado: "ACTIVO",
    generos: ["Pop Latino", "Bolero", "Indie Pop"],
    integrantes: ["Mon Laferte"],
    oyentesMensuales: 6800000
  }
]);

// 2. Inserción de Álbumes (Colección: albumes)
// Uso de arrays simples para la lista de canciones y países de distribución
db.albumes.insertMany([
  {
    _id: "ALB-001",
    titulo: "Canción Animal",
    artistaId: "ART-001",
    añoLanzamiento: 1990,
    discografica: "CBS Records",
    estilos: ["Hard Rock", "Pop Rock"],
    canciones: [
      "(Un) Lescano",
      "Canción Animal",
      "De Música Ligera",
      "Hombre al Agua",
      "Un Millón de Años Luz",
      "Té Para Tres"
    ],
    paisesDistribucion: ["ARG", "MEX", "CHL", "COL", "ESP"]
  },
  {
    _id: "ALB-002",
    titulo: "Re",
    artistaId: "ART-002",
    añoLanzamiento: 1994,
    discografica: "Warner Music",
    estilos: ["Folk Rock", "Experimental", "Punk"],
    canciones: [
      "El Aparato",
      "La Ingrata",
      "El Ciclón",
      "Esa Noche",
      "Las Flores",
      "El Baile y el Salón"
    ],
    paisesDistribucion: ["MEX", "ARG", "CHL", "USA"]
  },
  {
    _id: "ALB-003",
    titulo: "Prográmaton",
    artistaId: "ART-003",
    añoLanzamiento: 2013,
    discografica: "Universal Music",
    estilos: ["Indie Rock", "Synth-Pop"],
    canciones: [
      "10:10",
      "Arrullo de Estrellas",
      "Fin de Semana",
      "Dos Mil Trece",
      "Panoramas"
    ],
    paisesDistribucion: ["MEX", "COL", "ARG", "USA", "ESP"]
  },
  {
    _id: "ALB-004",
    titulo: "Corazones",
    artistaId: "ART-004",
    añoLanzamiento: 1990,
    discografica: "Capitol Records",
    estilos: ["Synth-Pop", "New Wave"],
    canciones: [
      "Tren al Sur",
      "Amiga Mía",
      "Con Suavidad",
      "Estrechez de Corazón"
    ],
    paisesDistribucion: ["CHL", "ARG", "PER", "COL"]
  }
]);

// 3. Inserción de Listas de Reproducción (Colección: listasReproduccion)
// Uso de arrays simples de etiquetas y referencias a álbumes incluidos
db.listasReproduccion.insertMany([
  {
    _id: "LIS-001",
    nombre: "Clásicos del Rock en Español",
    creador: "carlos_dj",
    publica: true,
    seguidores: 24500,
    etiquetas: ["rock", "clasicos", "90s", "español"],
    albumesIncluidosIds: ["ALB-001", "ALB-002", "ALB-004"]
  },
  {
    _id: "LIS-002",
    nombre: "Indie & Alternativo Latino",
    creador: "sofia_music",
    publica: true,
    seguidores: 8900,
    etiquetas: ["indie", "alternativo", "español", "actual"],
    albumesIncluidosIds: ["ALB-002", "ALB-003"]
  },
  {
    _id: "LIS-003",
    nombre: "Ruta 90s Nostalgia",
    creador: "diego_rock",
    publica: false,
    seguidores: 120,
    etiquetas: ["90s", "nostalgia", "rock"],
    albumesIncluidosIds: ["ALB-001", "ALB-004"]
  }
]);
