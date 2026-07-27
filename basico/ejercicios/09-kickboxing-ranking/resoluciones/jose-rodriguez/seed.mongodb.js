/**
 * seed.mongodb.js
 * Carga de datos utilizando exclusivamente sintaxis nativa de MongoDB Shell (mongosh).
 */

// 1. Selección de base de datos
use('kickboxing_db');

// 2. Limpieza nativa de colecciones
db.peleadores.drop();
db.gimnasios.drop();

// 3. Inserción nativa de gimnasios
db.gimnasios.insertMany([
  {
    _id: ObjectId("64b5f1e2f1d2c3a4b5e6f901"),
    nombre: "Mike's Gym",
    ciudad: "Ámsterdam",
    pais: "Países Bajos",
    entrenador_principal: "Mike Passenier"
  },
  {
    _id: ObjectId("64b5f1e2f1d2c3a4b5e6f902"),
    nombre: "Gridin Gym",
    ciudad: "Minsk",
    pais: "Bielorrusia",
    entrenador_principal: "Andrei Gridin"
  },
  {
    _id: ObjectId("64b5f1e2f1d2c3a4b5e6f903"),
    nombre: "Target Gym",
    ciudad: "Tokio",
    pais: "Japón",
    entrenador_principal: "Hiroyuki Ito"
  },
  {
    _id: ObjectId("64b5f1e2f1d2c3a4b5e6f904"),
    nombre: "Hemmers Gym",
    ciudad: "Breda",
    pais: "Países Bajos",
    entrenador_principal: "Nick Hemmers"
  },
  {
    _id: ObjectId("64b5f1e2f1d2c3a4b5e6f905"),
    nombre: "Superbon Training Camp",
    ciudad: "Bangkok",
    pais: "Tailandia",
    entrenador_principal: "Gae Superbon"
  }
]);

// 4. Inserción nativa de peleadores
db.peleadores.insertMany([
  {
    nombre: "Rico Verhoeven",
    apodo: "El Rey del Kickboxing",
    pais: "Países Bajos",
    categoria_peso: "Peso Pesado",
    biometria: {
      estatura_cm: 196,
      alcance_cm: 200
    },
    record: {
      victorias: 60,
      derrotas: 10,
      empates: 0,
      nocauts: 20
    },
    estilos: ["Kickboxing Holandés", "Kárate"],
    titulos: ["Campeón Peso Pesado de GLORY"],
    activo: true,
    gimnasio_id: ObjectId("64b5f1e2f1d2c3a4b5e6f901")
  },
  {
    nombre: "Chingiz Allazov",
    apodo: "Chinga",
    pais: "Bielorrusia",
    categoria_peso: "Peso Pluma",
    biometria: {
      estatura_cm: 181,
      alcance_cm: 183
    },
    record: {
      victorias: 60,
      derrotas: 5,
      empates: 0,
      nocauts: 37
    },
    estilos: ["Muay Thai", "Kickboxing"],
    titulos: ["Campeón Peso Pluma de ONE"],
    activo: true,
    gimnasio_id: ObjectId("64b5f1e2f1d2c3a4b5e6f902")
  },
  {
    nombre: "Takeru Segawa",
    apodo: "Natural Born Crusher",
    pais: "Japón",
    categoria_peso: "Peso Mosca",
    biometria: {
      estatura_cm: 168,
      alcance_cm: 171
    },
    record: {
      victorias: 43,
      derrotas: 3,
      empates: 0,
      nocauts: 25
    },
    estilos: ["Kárate", "Kickboxing"],
    titulos: ["Campeón Mundial K-1"],
    activo: false,
    gimnasio_id: ObjectId("64b5f1e2f1d2c3a4b5e6f903")
  },
  {
    nombre: "Badr Hari",
    apodo: "The Golden Boy",
    pais: "Marruecos",
    categoria_peso: "Peso Pesado",
    biometria: {
      estatura_cm: 198,
      alcance_cm: 206
    },
    record: {
      victorias: 106,
      derrotas: 17,
      empates: 0,
      nocauts: 92
    },
    estilos: ["Kickboxing Holandés"],
    titulos: ["Campeón Peso Pesado K-1"],
    activo: true,
    gimnasio_id: ObjectId("64b5f1e2f1d2c3a4b5e6f901")
  },
  {
    nombre: "Superbon Singha Mawynn",
    apodo: "Superbon",
    pais: "Tailandia",
    categoria_peso: "Peso Pluma",
    biometria: {
      estatura_cm: 177,
      alcance_cm: 178
    },
    record: {
      victorias: 114,
      derrotas: 36,
      empates: 0,
      nocauts: 28
    },
    estilos: ["Muay Thai"],
    titulos: ["Campeón Mundial de Kickboxing ONE"],
    activo: true,
    gimnasio_id: ObjectId("64b5f1e2f1d2c3a4b5e6f905")
  },
  {
    nombre: "Marat Grigorian",
    apodo: "Iron Man",
    pais: "Armenia",
    categoria_peso: "Peso Pluma",
    biometria: {
      estatura_cm: 176,
      alcance_cm: 178
    },
    record: {
      victorias: 66,
      derrotas: 13,
      empates: 1,
      nocauts: 35
    },
    estilos: ["Kickboxing Holandés"],
    titulos: ["Campeón K-1 World GP", "Campeón Peso Ligero Glory"],
    activo: true,
    gimnasio_id: ObjectId("64b5f1e2f1d2c3a4b5e6f904")
  },
  {
    nombre: "Giorgio Petrosyan",
    apodo: "El Doctor",
    pais: "Italia",
    categoria_peso: "Peso Pluma",
    biometria: {
      estatura_cm: 178,
      alcance_cm: 180
    },
    record: {
      victorias: 105,
      derrotas: 3,
      empates: 2,
      nocauts: 42
    },
    estilos: ["Kickboxing", "Muay Thai"],
    titulos: ["Campeón K-1 World MAX", "Campeón World GP ONE"],
    activo: false,
    gimnasio_id: ObjectId("64b5f1e2f1d2c3a4b5e6f901")
  },
  {
    nombre: "Antonio Plazibat",
    apodo: "Plaza",
    pais: "Croacia",
    categoria_peso: "Peso Pesado",
    biometria: {
      estatura_cm: 193,
      alcance_cm: 195
    },
    record: {
      victorias: 22,
      derrotas: 5,
      empates: 0,
      nocauts: 16
    },
    estilos: ["Kickboxing Holandés"],
    titulos: ["Campeón Peso Pesado K-1"],
    activo: true,
    gimnasio_id: ObjectId("64b5f1e2f1d2c3a4b5e6f901")
  }
]);