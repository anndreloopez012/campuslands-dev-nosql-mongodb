// 25. Formula lab | juan-lema
// Seed: coleccion "registros" - formulas quimicas con componentes embebidos
use("campus_formulas_lab");

db.registros.drop();

db.registros.insertMany([
  {
    nombre: "Agua",
    formula: "H2O",
    categoria: "inorganico",
    estado: "liquido",
    masaMolar: 18.02,
    activo: true,
    componentes: [
      { elemento: "Hidrogeno", simbolo: "H", cantidad: 2 },
      { elemento: "Oxigeno", simbolo: "O", cantidad: 1 }
    ],
    etiquetas: ["comun", "polar"]
  },
  {
    nombre: "Dioxido de carbono",
    formula: "CO2",
    categoria: "inorganico",
    estado: "gas",
    masaMolar: 44.01,
    activo: true,
    componentes: [
      { elemento: "Carbono", simbolo: "C", cantidad: 1 },
      { elemento: "Oxigeno", simbolo: "O", cantidad: 2 }
    ],
    etiquetas: ["gas-efecto-invernadero"]
  },
  {
    nombre: "Cloruro de sodio",
    formula: "NaCl",
    categoria: "inorganico",
    estado: "solido",
    masaMolar: 58.44,
    activo: true,
    componentes: [
      { elemento: "Sodio", simbolo: "Na", cantidad: 1 },
      { elemento: "Cloro", simbolo: "Cl", cantidad: 1 }
    ],
    etiquetas: ["sal", "ionico"]
  },
  {
    nombre: "Glucosa",
    formula: "C6H12O6",
    categoria: "organico",
    estado: "solido",
    masaMolar: 180.16,
    activo: true,
    componentes: [
      { elemento: "Carbono", simbolo: "C", cantidad: 6 },
      { elemento: "Hidrogeno", simbolo: "H", cantidad: 12 },
      { elemento: "Oxigeno", simbolo: "O", cantidad: 6 }
    ],
    etiquetas: ["azucar", "organico"]
  },
  {
    nombre: "Amoniaco",
    formula: "NH3",
    categoria: "inorganico",
    estado: "gas",
    masaMolar: 17.03,
    activo: false,
    componentes: [
      { elemento: "Nitrogeno", simbolo: "N", cantidad: 1 },
      { elemento: "Hidrogeno", simbolo: "H", cantidad: 3 }
    ],
    etiquetas: ["base", "toxico"]
  },
  {
    nombre: "Metano",
    formula: "CH4",
    categoria: "organico",
    estado: "gas",
    masaMolar: 16.04,
    activo: true,
    componentes: [
      { elemento: "Carbono", simbolo: "C", cantidad: 1 },
      { elemento: "Hidrogeno", simbolo: "H", cantidad: 4 }
    ],
    etiquetas: ["combustible", "gas-efecto-invernadero"]
  }
]);
