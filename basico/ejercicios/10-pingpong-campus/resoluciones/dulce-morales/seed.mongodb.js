//seed:  Liga de Pingpong Campus

// Seleccionar o crear la base de datos de la liga de pingpong
use('campus_pingpong_campus');

// Inserción de documentos coherentes a lo solicitado
db.jugadores.insertMany([
  {
    nombre: "Carlos Mendoza",
    apodo: "El Rayo",
    categoria: "Avanzado",
    mano_habil: "Diestro",
    activo: true,
    estadisticas: {
      partidos_jugados: 15,
      partidos_ganados: 12,
      partidos_perdidos: 3,
      puntos_ranking: 1250
    },
    equipamiento: {
      raqueta: "Butterfly Viscaria",
      goma_derecha: "Tenergy 05"
    }
  },
  {
    nombre: "Ana Gómez",
    apodo: "Muro de China",
    categoria: "Avanzado",
    mano_habil: "Zurda",
    activo: true,
    estadisticas: {
      partidos_jugados: 18,
      partidos_ganados: 15,
      partidos_perdidos: 3,
      puntos_ranking: 1320
    },
    equipamiento: {
      raqueta: "Stiga Carbon",
      goma_derecha: "Donic Bluefire"
    }
  },
  {
    nombre: "Luis Fernández",
    apodo: "Spin Master",
    categoria: "Intermedio",
    mano_habil: "Diestro",
    activo: true,
    estadisticas: {
      partidos_jugados: 10,
      partidos_ganados: 6,
      partidos_perdidos: 4,
      puntos_ranking: 980
    },
    equipamiento: {
      raqueta: "Donic Ovtcharov",
      goma_derecha: "Yasaka Mark V"
    }
  },
  {
    nombre: "Sofia López",
    apodo: "La Flecha",
    categoria: "Intermedio",
    mano_habil: "Zurda",
    activo: false,
    estadisticas: {
      partidos_jugados: 8,
      partidos_ganados: 4,
      partidos_perdidos: 4,
      puntos_ranking: 850
    },
    equipamiento: {
      raqueta: "Tibhar Samsonov",
      goma_derecha: "Tibhar Evolution"
    }
  },
  {
    nombre: "Mateo Torres",
    apodo: "Zurdito",
    categoria: "Principiante",
    mano_habil: "Zurdo",
    activo: true,
    estadisticas: {
      partidos_jugados: 5,
      partidos_ganados: 2,
      partidos_perdidos: 3,
      puntos_ranking: 620
    },
    equipamiento: {
      raqueta: "Donic Waldner",
      goma_derecha: "Donic Formula"
    }
  }
]);