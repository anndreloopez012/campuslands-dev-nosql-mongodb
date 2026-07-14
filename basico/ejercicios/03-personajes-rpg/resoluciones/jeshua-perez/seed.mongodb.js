// 03. Personajes RPG
// Solucion - jeshua-perez (nivel basico)
// Enfoque: documentos anidados

use campus_personajes_rpg

db.personajes.drop()

db.createCollection("personajes")

// Cada personaje embebe sus atributos (subdocumento) e inventario (array de subdocumentos)
db.personajes.insertMany([
  {
    nombre: "Aldric Vane",
    clase: "Guerrero",
    nivel: 24,
    atributos: { fuerza: 85, destreza: 40, inteligencia: 20, vida: 320 },
    inventario: [
      { item: "Espada larga", cantidad: 1 },
      { item: "Pocion de vida", cantidad: 3 }
    ],
    activo: true
  },
  {
    nombre: "Lyra Sombraluna",
    clase: "Maga",
    nivel: 30,
    atributos: { fuerza: 15, destreza: 30, inteligencia: 95, vida: 210 },
    inventario: [
      { item: "Baston arcano", cantidad: 1 },
      { item: "Pergamino de fuego", cantidad: 5 }
    ],
    activo: true
  },
  {
    nombre: "Doran Piedraverde",
    clase: "Clerigo",
    nivel: 18,
    atributos: { fuerza: 40, destreza: 25, inteligencia: 60, vida: 260 },
    inventario: [
      { item: "Maza sagrada", cantidad: 1 },
      { item: "Amuleto de curacion", cantidad: 2 }
    ],
    activo: true
  },
  {
    nombre: "Kira Vientoveloz",
    clase: "Picara",
    nivel: 22,
    atributos: { fuerza: 35, destreza: 90, inteligencia: 35, vida: 240 },
    inventario: [
      { item: "Dagas gemelas", cantidad: 2 },
      { item: "Kit de ganzuas", cantidad: 1 }
    ],
    activo: false
  },
  {
    nombre: "Bram Forjahierro",
    clase: "Guerrero",
    nivel: 12,
    atributos: { fuerza: 60, destreza: 20, inteligencia: 15, vida: 280 },
    inventario: [
      { item: "Hacha de guerra", cantidad: 1 }
    ],
    activo: true
  },
  {
    nombre: "Selene Nocheclara",
    clase: "Maga",
    nivel: 8,
    atributos: { fuerza: 10, destreza: 22, inteligencia: 50, vida: 140 },
    inventario: [
      { item: "Varita de aprendiz", cantidad: 1 },
      { item: "Pocion de mana", cantidad: 4 }
    ],
    activo: false
  }
])
