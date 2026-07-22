// Personajes RPG
// Solución de Denise López - Ejercicio 03

use campus_personajes_rpg

// Crear la colección explícitamente en minúsculas y plural
db.createCollection("personajes")

// Insertar 5 personajes de RPG con subdocumentos y arrays
db.personajes.insertMany([
  {
    nombre: "Eldoria",
    clase: "Mago",
    nivel: 45,
    activo: true,
    atributos: {
      fuerza: 12,
      destreza: 25,
      inteligencia: 85,
      vitalidad: 40
    },
    habilidades: ["Bola de Fuego", "Teletransporte", "Escudo de Maná"],
    equipamiento_actual: "Báculo del Vacío"
  },
  {
    nombre: "Kael",
    clase: "Guerrero",
    nivel: 50,
    activo: true,
    atributos: {
      fuerza: 90,
      destreza: 45,
      inteligencia: 15,
      vitalidad: 88
    },
    habilidades: ["Golpe Devastador", "Grito de Batalla", "Carga"],
    equipamiento_actual: "Espada Larga de Hierro"
  },
  {
    nombre: "Lyra",
    clase: "Pícaro",
    nivel: 38,
    activo: true,
    atributos: {
      fuerza: 30,
      destreza: 95,
      inteligencia: 40,
      vitalidad: 50
    },
    habilidades: ["Sigilo", "Apuñalar", "Evasión"],
    equipamiento_actual: "Dagas Gemelas Venenosas"
  },
  {
    nombre: "Thorne",
    clase: "Paladín",
    nivel: 42,
    activo: false,
    atributos: {
      fuerza: 75,
      destreza: 30,
      inteligencia: 50,
      vitalidad: 80
    },
    habilidades: ["Curación Divina", "Aura de Protección", "Golpe Sagrado"],
    equipamiento_actual: "Martillo de la Luz"
  },
  {
    nombre: "Sylas",
    clase: "Cazador",
    nivel: 25,
    activo: true,
    atributos: {
      fuerza: 40,
      destreza: 85,
      inteligencia: 30,
      vitalidad: 55
    },
    habilidades: ["Disparo Certero", "Trampa de Hielo", "Llamar Mascota"],
    equipamiento_actual: "Arco Largo de Madera"
  }
])

// Índices para optimizar búsquedas por nombre del personaje y por clase/nivel
db.personajes.createIndex({ nombre: 1 })
db.personajes.createIndex({ clase: 1, nivel: -1 })