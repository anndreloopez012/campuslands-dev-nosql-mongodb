// Seleccionar o crear la base de datos
use('campus_liga_futbol');

// Inserción de al menos 5 documentos coherentes
db.equipos.insertMany([
  {
    nombre: "Jaguares FC",
    ciudad: "Campus Norte",
    categoria: "Primera A",
    activo: true,
    estadisticas: {
      partidos_jugados: 10,
      victorias: 7,
      empates: 2,
      derrotas: 1,
      goles_favor: 22,
      goles_contra: 8,
      puntos: 23
    },
    colores: ["Amarillo", "Negro"],
    jugadores_clave: [
      { nombre: "Carlos Vela", posicion: "Delantero", goles: 9 },
      { nombre: "Andrés Guardado", posicion: "Centrocampista", goles: 3 }
    ]
  },
  {
    nombre: "Águilas del Campus",
    ciudad: "Campus Sur",
    categoria: "Primera A",
    activo: true,
    estadisticas: {
      partidos_jugados: 10,
      victorias: 6,
      empates: 3,
      derrotas: 1,
      goles_favor: 18,
      goles_contra: 7,
      puntos: 21
    },
    colores: ["Azul", "Blanco"],
    jugadores_clave: [
      { nombre: "Guillermo Ochoa", posicion: "Portero", goles: 0 },
      { nombre: "Henry Martín", posicion: "Delantero", goles: 7 }
    ]
  },
  {
    nombre: "Tigres de la Facultad",
    ciudad: "Campus Centro",
    categoria: "Primera A",
    activo: true,
    estadisticas: {
      partidos_jugados: 10,
      victorias: 5,
      empates: 1,
      derrotas: 4,
      goles_favor: 15,
      goles_contra: 14,
      puntos: 16
    },
    colores: ["Azul", "Amarillo"],
    jugadores_clave: [
      { nombre: "André-Pierre Gignac", posicion: "Delantero", goles: 8 }
    ]
  },
  {
    nombre: "Rayados Universitarios",
    ciudad: "Campus Norte",
    categoria: "Primera A",
    activo: true,
    estadisticas: {
      partidos_jugados: 10,
      victorias: 4,
      empates: 2,
      derrotas: 4,
      goles_favor: 12,
      goles_contra: 12,
      puntos: 14
    },
    colores: ["Azul", "Blanco"],
    jugadores_clave: [
      { nombre: "Rogelio Funes Mori", posicion: "Delantero", goles: 5 }
    ]
  },
  {
    nombre: "Pumas Académicos",
    ciudad: "Campus Oeste",
    categoria: "Primera B",
    activo: false,
    estadisticas: {
      partidos_jugados: 10,
      victorias: 1,
      empates: 3,
      derrotas: 6,
      goles_favor: 6,
      goles_contra: 18,
      puntos: 6
    },
    colores: ["Dorado", "Azul"],
    jugadores_clave: [
      { nombre: "Juan Dinenno", posicion: "Delantero", goles: 3 }
    ]
  }
]);