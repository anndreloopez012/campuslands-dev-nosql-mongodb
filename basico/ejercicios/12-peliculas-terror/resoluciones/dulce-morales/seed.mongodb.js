// Seleccionar o crear la base de datos
use('campus_peliculas_terror');

// Insertar datos iniciales coherentes sobre películas de miedo
db.peliculas.insertMany([
  {
    titulo: "El Conjuro",
    director: "James Wan",
    anio_estreno: 2013,
    duracion_min: 112,
    generos: ["terror", "misterio", "thriller"],
    subgeneros: ["paranormal", "posesion"],
    clasificacion: {
      rating_imdb: 7.5,
      clasificacion_edad: "R"
    },
    activa: true,
    recaudacion: {
      presupuesto_usd: 20000000,
      taquilla_usd: 319500000
    }
  },
  {
    titulo: "Hereditary",
    director: "Ari Aster",
    anio_estreno: 2018,
    duracion_min: 127,
    generos: ["terror", "drama", "misterio"],
    subgeneros: ["psicologico", "culto"],
    clasificacion: {
      rating_imdb: 7.3,
      clasificacion_edad: "R"
    },
    activa: true,
    recaudacion: {
      presupuesto_usd: 10000000,
      taquilla_usd: 82800000
    }
  },
  {
    titulo: "Scream",
    director: "Wes Craven",
    anio_estreno: 1996,
    duracion_min: 111,
    generos: ["terror", "misterio"],
    subgeneros: ["slasher"],
    clasificacion: {
      rating_imdb: 7.4,
      clasificacion_edad: "R"
    },
    activa: true,
    recaudacion: {
      presupuesto_usd: 15000000,
      taquilla_usd: 173000000
    }
  },
  {
    titulo: "Alien: El octavo pasajero",
    director: "Ridley Scott",
    anio_estreno: 1979,
    duracion_min: 117,
    generos: ["terror", "ciencia ficcion"],
    subgeneros: ["monstruos", "espacial"],
    clasificacion: {
      rating_imdb: 8.5,
      clasificacion_edad: "R"
    },
    activa: true,
    recaudacion: {
      presupuesto_usd: 11000000,
      taquilla_usd: 106200000
    }
  },
  {
    titulo: "Un Lugar en Silencio",
    director: "John Krasinski",
    anio_estreno: 2018,
    duracion_min: 90,
    generos: ["terror", "drama", "thriller"],
    subgeneros: ["supervivencia", "monstruos"],
    clasificacion: {
      rating_imdb: 7.5,
      clasificacion_edad: "PG-13"
    },
    activa: true,
    recaudacion: {
      presupuesto_usd: 17000000,
      taquilla_usd: 341000000
    }
  }
]);