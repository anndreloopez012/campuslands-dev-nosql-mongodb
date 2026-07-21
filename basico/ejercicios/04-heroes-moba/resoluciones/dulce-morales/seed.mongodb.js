// Seleccionar la base de datos objetivo
use('campus_heroes_moba');

// Insercion de 5 documentos coherentes con temática MOBA
db.heroes.insertMany([
  {
    nombre: "Astra",
    titulo: "La Embajadora Estelar",
    roles: ["Mago", "Soporte"],
    dificultad: "Alta",
    dano_tipo: "Magico",
    estadisticas: {
      vida_base: 550,
      mana_base: 480,
      velocidad_movimiento: 335,
      ataque_fisico: 52
    },
    habilidades: [
      { nombre: "Pulso Gravitacional", tipo: "Control" },
      { nombre: "Supernova", tipo: "Definitiva" }
    ],
    disponible: true,
    precio_oro: 10000
  },
  {
    nombre: "Vanguard",
    titulo: "El Escudo Inquebrantable",
    roles: ["Tanque", "Iniciador"],
    dificultad: "Baja",
    dano_tipo: "Fisico",
    estadisticas: {
      vida_base: 720,
      mana_base: 300,
      velocidad_movimiento: 340,
      ataque_fisico: 65
    },
    habilidades: [
      { nombre: "Carga de Acero", tipo: "Movilidad" },
      { nombre: "Baluarde Divino", tipo: "Definitiva" }
    ],
    disponible: true,
    precio_oro: 4000
  },
  {
    nombre: "Shadow",
    titulo: "La Hoja Silenciosa",
    roles: ["Asesino"],
    dificultad: "Alta",
    dano_tipo: "Fisico",
    estadisticas: {
      vida_base: 580,
      mana_base: 320,
      velocidad_movimiento: 350,
      ataque_fisico: 70
    },
    habilidades: [
      { nombre: "Paso Sombrio", tipo: "Movilidad" },
      { nombre: "Danza Mortifera", tipo: "Definitiva" }
    ],
    disponible: true,
    precio_oro: 10000
  },
  {
    nombre: "Kaelen",
    titulo: "El Tirador Arcano",
    roles: ["Tirador"],
    dificultad: "Media",
    dano_tipo: "Fisico",
    estadisticas: {
      vida_base: 530,
      mana_base: 360,
      velocidad_movimiento: 330,
      ataque_fisico: 68
    },
    habilidades: [
      { nombre: "Disparo Mágico", tipo: "Ataque" },
      { nombre: "Andanada Final", tipo: "Definitiva" }
    ],
    disponible: true,
    precio_oro: 8000
  },
  {
    nombre: "Lyra",
    titulo: "La Voz del Bosque",
    roles: ["Soporte", "Mago"],
    dificultad: "Baja",
    dano_tipo: "Magico",
    estadisticas: {
      vida_base: 510,
      mana_base: 500,
      velocidad_movimiento: 330,
      ataque_fisico: 48
    },
    habilidades: [
      { nombre: "Curacion Floreciente", tipo: "Curación" },
      { nombre: "Santuario de la Naturaleza", tipo: "Definitiva" }
    ],
    disponible: false,
    precio_oro: 2000
  }
]);