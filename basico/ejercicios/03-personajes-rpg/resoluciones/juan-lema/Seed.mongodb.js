// Personajes RPG - juan-lema
// Seed: coleccion "registros" en campus_personajes_rpg

use("campus_personajes_rpg");

db.registros.drop();

db.registros.insertMany([
  {
    nombre: "Kaelor Vientonorte",
    clase: "guerrero",
    raza: "humano",
    nivel: 12,
    activo: true,
    atributos: { fuerza: 18, destreza: 9, inteligencia: 6, vida: 140 },
    inventario: [
      { objeto: "espada larga", tipo: "arma", valor: 250 },
      { objeto: "escudo de hierro", tipo: "armadura", valor: 180 }
    ],
    habilidades: ["golpe pesado", "grito de guerra"]
  },
  {
    nombre: "Sira Lunaplata",
    clase: "maga",
    raza: "elfa",
    nivel: 15,
    activo: true,
    atributos: { fuerza: 5, destreza: 10, inteligencia: 20, vida: 90 },
    inventario: [
      { objeto: "baston arcano", tipo: "arma", valor: 300 },
      { objeto: "tunica encantada", tipo: "armadura", valor: 220 }
    ],
    habilidades: ["bola de fuego", "escudo magico", "teletransporte corto"]
  },
  {
    nombre: "Brock Colmillo",
    clase: "picaro",
    raza: "orco",
    nivel: 9,
    activo: false,
    atributos: { fuerza: 12, destreza: 19, inteligencia: 8, vida: 105 },
    inventario: [{ objeto: "dagas gemelas", tipo: "arma", valor: 160 }],
    habilidades: ["ataque furtivo", "evasion"]
  },
  {
    nombre: "Nael Hojaverde",
    clase: "arquero",
    raza: "elfo",
    nivel: 11,
    activo: true,
    atributos: { fuerza: 10, destreza: 18, inteligencia: 11, vida: 100 },
    inventario: [
      { objeto: "arco largo", tipo: "arma", valor: 210 },
      { objeto: "carcaj reforzado", tipo: "accesorio", valor: 60 }
    ],
    habilidades: ["disparo certero", "lluvia de flechas"]
  },
  {
    nombre: "Grom Rocaferrea",
    clase: "guerrero",
    raza: "enano",
    nivel: 14,
    activo: true,
    atributos: { fuerza: 20, destreza: 7, inteligencia: 5, vida: 160 },
    inventario: [{ objeto: "martillo de guerra", tipo: "arma", valor: 280 }],
    habilidades: ["golpe sismico", "resistencia petrea"]
  },
  {
    nombre: "Vesna Sombraclara",
    clase: "clerigo",
    raza: "humana",
    nivel: 10,
    activo: false,
    atributos: { fuerza: 8, destreza: 8, inteligencia: 16, vida: 110 },
    inventario: [{ objeto: "maza sagrada", tipo: "arma", valor: 150 }],
    habilidades: ["curacion mayor", "bendicion"]
  }
]);