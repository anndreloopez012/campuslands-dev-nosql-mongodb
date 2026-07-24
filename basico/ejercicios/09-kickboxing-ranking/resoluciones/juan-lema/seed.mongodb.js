// Ranking kickboxing - juan-lema
// Seed: coleccion "registros" en campus_kickboxing_ranking

use("campus_kickboxing_ranking");

db.registros.drop();

db.registros.insertMany([
  { nombre: "Tomas Vera", categoria: "welter", pais: "Ecuador", activo: true, puntos: 980, victorias: 22, derrotas: 3, racha: 6, etiquetas: ["zurdo", "top10"] },
  { nombre: "Camila Rios", categoria: "pluma", pais: "Colombia", activo: true, puntos: 860, victorias: 18, derrotas: 5, racha: 2, etiquetas: ["top10"] },
  { nombre: "Bruno Salas", categoria: "welter", pais: "Argentina", activo: false, puntos: 640, victorias: 12, derrotas: 9, racha: 0, etiquetas: [] },
  { nombre: "Lucia Paz", categoria: "mosca", pais: "Peru", activo: true, puntos: 910, victorias: 20, derrotas: 2, racha: 8, etiquetas: ["invicta-local"] },
  { nombre: "Diego Roman", categoria: "pesado", pais: "Mexico", activo: true, puntos: 720, victorias: 14, derrotas: 7, racha: 1, etiquetas: ["knockout"] },
  { nombre: "Valeria Cruz", categoria: "pluma", pais: "Chile", activo: false, puntos: 505, victorias: 9, derrotas: 11, racha: 0, etiquetas: [] },
  { nombre: "Andres Nunez", categoria: "welter", pais: "Colombia", activo: true, puntos: 875, victorias: 19, derrotas: 4, racha: 3, etiquetas: ["zurdo"] }
]);
