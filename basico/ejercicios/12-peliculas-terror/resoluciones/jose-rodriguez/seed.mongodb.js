// Base de Datos de Películas de Miedo - Script de Poblado (Seed)
use('terror_db');

// Limpieza de colecciones previas
db.directores.drop();
db.peliculas.drop();
db.resenas.drop();

// 1. Inserción de Directores (Colección: directores)
db.directores.insertMany([
  {
    _id: "DIR-001",
    nombre: "James Wan",
    nacionalidad: "Australiano",
    añoNacimiento: 1977,
    estiloPrincipal: "Sobrenatural y Casas Embrujadas",
    premiosGanados: 5
  },
  {
    _id: "DIR-002",
    nombre: "Ari Aster",
    nacionalidad: "Estadounidense",
    añoNacimiento: 1986,
    estiloPrincipal: "Terror Psicológico y Folclórico",
    premiosGanados: 8
  },
  {
    _id: "DIR-003",
    nombre: "Jordan Peele",
    nacionalidad: "Estadounidense",
    añoNacimiento: 1979,
    estiloPrincipal: "Terror Social y Satírico",
    premiosGanados: 12
  },
  {
    _id: "DIR-004",
    nombre: "John Carpenter",
    nacionalidad: "Estadounidense",
    añoNacimiento: 1948,
    estiloPrincipal: "Slasher y Terror de Ciencia Ficción",
    premiosGanados: 15
  }
]);

// 2. Inserción de Películas (Colección: peliculas)
// Modelado: Subdocumentos para calificaciones y arrays simples para subgéneros y etiquetas
db.peliculas.insertMany([
  {
    _id: "PEL-001",
    titulo: "El Conjuro",
    tituloOriginal: "The Conjuring",
    directorId: "DIR-001",
    añoEstreno: 2013,
    duracionMinutos: 112,
    clasificacionEdad: "R",
    subgeneros: ["Sobrenatural", "Casas Embrujadas", "Posesión"],
    sinopsis: "Investigadores paranormales trabajan para ayudar a una familia aterrorizada por una presencia oscura en su granja aislada.",
    etiquetas: ["demonio", "fantasmas", "basado en hechos reales", "investigacion", "exorcismo"],
    calificaciones: {
      imdb: 7.5,
      rottenTomatoes: 86,
      metacritic: 68,
      votosUsuarios: 520000
    },
    presupuestoUSD: 20000000,
    recaudacionUSD: 319500000
  },
  {
    _id: "PEL-002",
    titulo: "Hereditary: El Legado del Diablo",
    tituloOriginal: "Hereditary",
    directorId: "DIR-002",
    añoEstreno: 2018,
    duracionMinutos: 127,
    clasificacionEdad: "R",
    subgeneros: ["Terror Psicológico", "Sobrenatural", "Cultos"],
    sinopsis: "Tras la muerte de la abuela reclusa, una familia empieza a desentrañar secretos oscuros y perturbadores sobre su ascendencia.",
    etiquetas: ["culto", "tragedia", "demonio", "perturbador", "herencia"],
    calificaciones: {
      imdb: 7.3,
      rottenTomatoes: 90,
      metacritic: 87,
      votosUsuarios: 380000
    },
    presupuestoUSD: 10000000,
    recaudacionUSD: 82800000
  },
  {
    _id: "PEL-003",
    titulo: "¡Huye!",
    tituloOriginal: "Get Out",
    directorId: "DIR-003",
    añoEstreno: 2017,
    duracionMinutos: 104,
    clasificacionEdad: "R",
    subgeneros: ["Terror Social", "Suspenso", "Terror Psicológico"],
    sinopsis: "Un joven fotógrafo afroamericano visita a la familia de su novia blanca durante el fin de semana, descubriendo un secreto siniestro e hipnótico.",
    etiquetas: ["hipnosis", "racismo", "tension", "misterio", "escape"],
    calificaciones: {
      imdb: 7.8,
      rottenTomatoes: 98,
      metacritic: 85,
      votosUsuarios: 640000
    },
    presupuestoUSD: 4500000,
    recaudacionUSD: 255400000
  },
  {
    _id: "PEL-004",
    titulo: "Halloween",
    tituloOriginal: "Halloween",
    directorId: "DIR-004",
    añoEstreno: 1978,
    duracionMinutos: 91,
    clasificacionEdad: "R",
    subgeneros: ["Slasher", "Asesinos en Serie"],
    sinopsis: "Quince años después de haber asesinado a su hermana en la noche de Halloween, Michael Myers escapa del psiquiátrico y regresa a su pueblo natal.",
    etiquetas: ["asesino", "mascara", "cuchillo", "psiquiatrico", "clasico"],
    calificaciones: {
      imdb: 7.7,
      rottenTomatoes: 96,
      metacritic: 87,
      votosUsuarios: 290000
    },
    presupuestoUSD: 325000,
    recaudacionUSD: 70000000
  },
  {
    _id: "PEL-005",
    titulo: "Midsommar: El Terror No Espera a la Noche",
    tituloOriginal: "Midsommar",
    directorId: "DIR-002",
    añoEstreno: 2019,
    duracionMinutos: 147,
    clasificacionEdad: "R",
    subgeneros: ["Terror Folclórico", "Terror Psicológico"],
    sinopsis: "Una pareja viaja a Suecia para visitar el festival rural de verano de su amigo, pero el retiro se convierte en una pesadilla pagana bajo la luz del sol constante.",
    etiquetas: ["suecia", "pagano", "rituales", "luz de dia", "culto"],
    calificaciones: {
      imdb: 7.1,
      rottenTomatoes: 83,
      metacritic: 72,
      votosUsuarios: 340000
    },
    presupuestoUSD: 9000000,
    recaudacionUSD: 48000000
  }
]);

// 3. Inserción de Reseñas de Críticos/Usuarios (Colección: resenas)
db.resenas.insertMany([
  {
    _id: "RES-001",
    peliculaId: "PEL-001",
    usuario: "critico_terror_99",
    calificacionDada: 8.5,
    comentario: "Una obra maestra moderna del terror sobrenatural con sustos efectivos.",
    fecha: ISODate("2026-01-15T00:00:00Z")
  },
  {
    _id: "RES-002",
    peliculaId: "PEL-002",
    usuario: "cinefilo_oscuro",
    calificacionDada: 9.0,
    comentario: "Inquietante, perturbadora y con una actuación desgarradora. Terror psicológico en su máxima expresión.",
    fecha: ISODate("2026-02-10T00:00:00Z")
  },
  {
    _id: "RES-003",
    peliculaId: "PEL-003",
    usuario: "horror_fanatic",
    calificacionDada: 9.5,
    comentario: "Guion brillante. Combina crítica social con suspenso helador.",
    fecha: ISODate("2026-03-01T00:00:00Z")
  }
]);

// 4. Creación de Índice de Texto para Búsqueda Semántica en Español
// indexa los campos 'titulo', 'sinopsis' y 'etiquetas'
db.peliculas.createIndex(
  {
    titulo: "text",
    sinopsis: "text",
    etiquetas: "text"
  },
  {
    name: "idx_texto_pelicula",
    default_language: "spanish"
  }
);
