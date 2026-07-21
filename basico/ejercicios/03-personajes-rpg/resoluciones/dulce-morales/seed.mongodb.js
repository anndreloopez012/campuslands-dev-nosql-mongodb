// Seleccionar o crear la base de datos
use('campus_personajes_rpg');

// Inserción masiva de personajes con estructura embebida
db.personajes.insertMany([
  {
    nombre: "Eldrin el Sabio",
    clase: "Mago",
    nivel: 45,
    activo: true,
    atributos: {
      salud_maxima: 800,
      mana_maximo: 1500,
      fuerza: 15,
      agilidad: 25,
      inteligencia: 95
    },
    habilidades: ["Bola de Fuego", "Escudo de Hielo", "Teletransportación"],
    equipamiento: [
      { slot: "Mano Principal", nombre: "Báculo Astral", rareza: "Legendario" },
      { slot: "Torso", nombre: "Túnica de Seda Estelar", rareza: "Épico" }
    ]
  },
  {
    nombre: "Kaelen Rompemuros",
    clase: "Guerrero",
    nivel: 50,
    activo: true,
    atributos: {
      salud_maxima: 2500,
      mana_maximo: 200,
      fuerza: 98,
      agilidad: 40,
      inteligencia: 20
    },
    habilidades: ["Giro Brutal", "Grito de Guerra", "Embestida"],
    equipamiento: [
      { slot: "Mano Principal", nombre: "Maza del Titán", rareza: "Legendario" },
      { slot: "Escudo", nombre: "Baluarte de Hierro", rareza: "Raro" }
    ]
  },
  {
    nombre: "Sombra Nocturna",
    clase: "Pícaro",
    nivel: 38,
    activo: true,
    atributos: {
      salud_maxima: 1100,
      mana_maximo: 400,
      fuerza: 45,
      agilidad: 92,
      inteligencia: 35
    },
    habilidades: ["Ataque Furtivo", "Bomba de Humo", "Paso Sombrío"],
    equipamiento: [
      { slot: "Mano Principal", nombre: "Daga Venenosa", rareza: "Épico" },
      { slot: "Mano Secundaria", nombre: "Daga de Sombras", rareza: "Raro" }
    ]
  },
  {
    nombre: "Aria Luzdelalba",
    clase: "Clérigo",
    nivel: 42,
    activo: true,
    atributos: {
      salud_maxima: 1400,
      mana_maximo: 1200,
      fuerza: 30,
      agilidad: 30,
      inteligencia: 88
    },
    habilidades: ["Curación Sagrada", "Purificación", "Luz Divina"],
    equipamiento: [
      { slot: "Mano Principal", nombre: "Cetro Solar", rareza: "Épico" },
      { slot: "Cabeza", nombre: "Tiara Bendita", rareza: "Común" }
    ]
  },
  {
    nombre: "Thorgar el Erradicado",
    clase: "Guerrero",
    nivel: 12,
    activo: false,
    atributos: {
      salud_maxima: 600,
      mana_maximo: 100,
      fuerza: 35,
      agilidad: 20,
      inteligencia: 10
    },
    habilidades: ["Golpe Básico"],
    equipamiento: [
      { slot: "Mano Principal", nombre: "Espada Oxidada", rareza: "Común" }
    ]
  }
]);