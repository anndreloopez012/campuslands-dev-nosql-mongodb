// Conectarse a la base de datos
use("campus_formulas_lab");

// Insertar al menos 5 documentos coherentes con la temática de fórmulas químicas
db.formulas.insertMany([
  {
    nombre: "Agua Destilada",
    categoria: "disolvente",
    formula_quimica: "H2O",
    activa: true,
    componentes: ["Hidrogeno", "Oxigeno"],
    detalles_laboratorio: {
      ph: 7.0,
      estado: "liquido",
      responsable: "Dra. Elena Vargas"
    },
    etiquetas: ["inorganica", "solvente", "basico"]
  },
  {
    nombre: "Acido Sulfurico",
    categoria: "acido",
    formula_quimica: "H2SO4",
    activa: true,
    componentes: ["Hidrogeno", "Azufre", "Oxigeno"],
    detalles_laboratorio: {
      ph: 0.5,
      estado: "liquido",
      responsable: "Dr. Roberto Gomez"
    },
    etiquetas: ["corrosivo", "reactivo", "peligroso"]
  },
  {
    nombre: "Cloruro de Sodio",
    categoria: "sal",
    formula_quimica: "NaCl",
    activa: true,
    componentes: ["Sodio", "Cloro"],
    detalles_laboratorio: {
      ph: 7.0,
      estado: "solido",
      responsable: "Lic. Sofia Martinez"
    },
    etiquetas: ["sal", "cristal", "estable"]
  },
  {
    nombre: "Hidroxido de Sodio",
    categoria: "base",
    formula_quimica: "NaOH",
    activa: true,
    componentes: ["Sodio", "Oxigeno", "Hidrogeno"],
    detalles_laboratorio: {
      ph: 14.0,
      estado: "solido",
      responsable: "Dra. Elena Vargas"
    },
    etiquetas: ["alcalino", "base", "corrosivo"]
  },
  {
    nombre: "Dioxido de Carbono",
    categoria: "gas",
    formula_quimica: "CO2",
    activa: false,
    componentes: ["Carbono", "Oxigeno"],
    detalles_laboratorio: {
      ph: 5.5,
      estado: "gas",
      responsable: "Dr. Carlos Ruiz"
    },
    etiquetas: ["gas", "atmosferico", "inactivo"]
  }
]);