// Heroes MOBA por rol - Seed
// Autor: juan-lema
use("campus_heroes_moba");

db.registros.drop(); // entorno limpio y repetible

db.registros.insertMany([
  {
    nombre: "Kordan",
    rol: "tank",
    region: "norte",
    dificultad: "facil",
    activo: true,
    estadisticas: { vida: 3200, dano: 180, velocidad: 320 },
    habilidades: ["Muro de Piedra", "Embate", "Resistencia Ferrea"],
    sinergias: ["Lyra", "Voss"]
  },
  {
    nombre: "Lyra",
    rol: "soporte",
    region: "este",
    dificultad: "media",
    activo: true,
    estadisticas: { vida: 1800, dano: 220, velocidad: 340 },
    habilidades: ["Bendicion", "Escudo Sagrado", "Pulso Curativo"],
    sinergias: ["Kordan", "Rhaze"]
  },
  {
    nombre: "Rhaze",
    rol: "asesino",
    region: "sur",
    dificultad: "dificil",
    activo: true,
    estadisticas: { vida: 1600, dano: 410, velocidad: 400 },
    habilidades: ["Filo Sombrio", "Emboscada", "Golpe Letal"],
    sinergias: ["Lyra"]
  },
  {
    nombre: "Voss",
    rol: "tirador",
    region: "oeste",
    dificultad: "media",
    activo: true,
    estadisticas: { vida: 1900, dano: 380, velocidad: 360 },
    habilidades: ["Lluvia de Flechas", "Retirada Tactica", "Disparo Cargado"],
    sinergias: ["Kordan", "Nyx"]
  },
  {
    nombre: "Nyx",
    rol: "mago",
    region: "norte",
    dificultad: "dificil",
    activo: false,
    estadisticas: { vida: 1500, dano: 450, velocidad: 300 },
    habilidades: ["Onda de Caos", "Portal Arcano", "Meteoro"],
    sinergias: ["Voss"]
  },
  {
    nombre: "Bram",
    rol: "tank",
    region: "sur",
    dificultad: "facil",
    activo: true,
    estadisticas: { vida: 3400, dano: 150, velocidad: 300 },
    habilidades: ["Carga Brutal", "Piel de Roca", "Grito de Guerra"],
    sinergias: ["Rhaze"]
  }
]);

// Verificacion rapida de la carga
print("Documentos insertados:", db.registros.countDocuments());
