// 1. Crear y seleccionar la base de datos para el ecosistema RPG
use('campus_personajes_rpg');

// 2. Insertar 5 documentos coherentes y realistas con datos anidados
db.personajes.insertMany([
  {
    nombre: "Aethelgard",
    clase: "Guerrero",
    nivel: 45,
    activo: true,
    atributos: { fuerza: 85, magia: 15, destreza: 40 },
    equipamiento: [
      { item: "Espada de Hierro Negro", tipo: "Arma", rareza: "Rara" },
      { item: "Escudo de la Torre", tipo: "Armadura", rareza: "Común" }
    ]
  },
  {
    nombre: "Morrigan",
    clase: "Mago",
    nivel: 52,
    activo: true,
    atributos: { fuerza: 12, magia: 98, destreza: 35 },
    equipamiento: [
      { item: "Bastón de Cristal Arcano", tipo: "Arma", rareza: "Épica" },
      { item: "Toga de Teñidor de Almas", tipo: "Armadura", rareza: "Legendaria" }
    ]
  },
  {
    nombre: "SlyThief",
    clase: "Pícaro",
    nivel: 38,
    activo: true,
    atributos: { fuerza: 45, magia: 10, destreza: 90 },
    equipamiento: [
      { item: "Daga de Veneno Sutil", tipo: "Arma", rareza: "Épica" }
    ]
  },
  {
    nombre: "Eldrin",
    clase: "Paladín",
    nivel: 15,
    activo: true,
    atributos: { fuerza: 60, magia: 40, destreza: 25 },
    equipamiento: [
      { item: "Martillo del Alba", tipo: "Arma", rareza: "Rara" }
    ]
  },
  {
    nombre: "Grok",
    clase: "Bárbaro",
    nivel: 60,
    activo: false,
    atributos: { fuerza: 99, magia: 0, destreza: 30 },
    equipamiento: [
      { item: "Hacha Dos Manos Oxidada", tipo: "Arma", rareza: "Común" }
    ]
  }
]);