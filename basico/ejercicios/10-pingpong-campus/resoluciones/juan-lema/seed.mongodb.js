// 10. Liga de pingpong
// Autor: juan-lema
use("campus_pingpong_campus");

try {
  db.createCollection("registros");
} catch (e) {
  print("La coleccion ya existe, continuo.");
}

db.registros.deleteMany({}); // entorno limpio y repetible

const seed = [
  {
    nombre: "Laura Nieto",
    sede: "Bogota",
    categoria: "singles",
    activo: true,
    partidosJugados: 14,
    victorias: 10,
    derrotas: 4,
    puntaje: 88,
    etiquetas: ["zurda", "ofensiva"]
  },
  {
    nombre: "Kevin Ospina",
    sede: "Medellin",
    categoria: "dobles",
    activo: true,
    partidosJugados: 9,
    victorias: 5,
    derrotas: 4,
    puntaje: 61,
    etiquetas: ["defensivo"]
  },
  {
    nombre: "Ana Castano",
    sede: "Cali",
    categoria: "singles",
    activo: false,
    partidosJugados: 20,
    victorias: 12,
    derrotas: 8,
    puntaje: 74,
    etiquetas: ["ofensiva", "veterana"]
  },
  {
    nombre: "David Reyes",
    sede: "Bogota",
    categoria: "dobles",
    activo: true,
    partidosJugados: 6,
    victorias: 2,
    derrotas: 4,
    puntaje: 35,
    etiquetas: ["novato"]
  },
  {
    nombre: "Marcela Ruiz",
    sede: "Barranquilla",
    categoria: "singles",
    activo: true,
    partidosJugados: 17,
    victorias: 13,
    derrotas: 4,
    puntaje: 91,
    etiquetas: ["ofensiva", "top"]
  },
  {
    nombre: "Sebastian Toro",
    sede: "Medellin",
    categoria: "singles",
    activo: false,
    partidosJugados: 11,
    victorias: 4,
    derrotas: 7,
    puntaje: 40,
    etiquetas: ["defensivo", "novato"]
  }
];

const resultado = db.registros.insertMany(seed);
print(`Documentos insertados: ${resultado.insertedIds ? Object.keys(resultado.insertedIds).length : 0}`);
