// Base de Datos de Fórmulas Químicas - Script de Poblado (Seed)
use('quimica_formulas_db');

// Limpieza de colecciones previas
db.elementos.drop();
db.compuestos.drop();

// 1. Inserción de Catálogo de Elementos (Colección: elementos)
db.elementos.insertMany([
  { _id: "ELE-001", simbolo: "H", nombre: "Hidrógeno", numeroAtomico: 1, masaAtomicaGmol: 1.008 },
  { _id: "ELE-002", simbolo: "C", nombre: "Carbono", numeroAtomico: 6, masaAtomicaGmol: 12.011 },
  { _id: "ELE-003", simbolo: "N", nombre: "Nitrógeno", numeroAtomico: 7, masaAtomicaGmol: 14.007 },
  { _id: "ELE-004", simbolo: "O", nombre: "Oxígeno", numeroAtomico: 8, masaAtomicaGmol: 15.999 },
  { _id: "ELE-005", simbolo: "Na", nombre: "Sodio", numeroAtomico: 11, masaAtomicaGmol: 22.990 },
  { _id: "ELE-006", simbolo: "Cl", nombre: "Cloro", numeroAtomico: 17, masaAtomicaGmol: 35.453 },
  { _id: "ELE-007", simbolo: "S", nombre: "Azufre", numeroAtomico: 16, masaAtomicaGmol: 32.060 }
]);

// 2. Inserción de Compuestos Químicos (Colección: compuestos)
// Modelado: Array de Subdocumentos 'componentes' para representar la estequiometría de la fórmula.
db.compuestos.insertMany([
  {
    _id: "CMP-001",
    nombreComun: "Agua",
    formulaIUPAC: "H2O",
    numeroCAS: "7732-18-5",
    estadoMateria: "LÍQUIDO", // LÍQUIDO, GASEOSO, SÓLIDO
    clasificacionRiesgo: "NO_PELIGROSO",
    propiedadesFisicas: {
      masaMolarGmol: 18.015,
      puntoEbullicionC: 100.0,
      puntoFusionC: 0.0,
      densidadGcm3: 1.00
    },
    componentes: [
      { simboloElemento: "H", nombreElemento: "Hidrógeno", cantidadAtomos: 2, porcentajeMasa: 11.19 },
      { simboloElemento: "O", nombreElemento: "Oxígeno", cantidadAtomos: 1, porcentajeMasa: 88.81 }
    ],
    usosIndustriales: ["Solvente", "Refrigerante", "Consumo Humano"],
    fechaRegistro: ISODate("2026-01-15T00:00:00Z")
  },
  {
    _id: "CMP-002",
    nombreComun: "Ácido Sulfúrico",
    formulaIUPAC: "H2SO4",
    numeroCAS: "7664-93-9",
    estadoMateria: "LÍQUIDO",
    clasificacionRiesgo: "CORROSIVO",
    propiedadesFisicas: {
      masaMolarGmol: 98.079,
      puntoEbullicionC: 337.0,
      puntoFusionC: 10.31,
      densidadGcm3: 1.83
    },
    componentes: [
      { simboloElemento: "H", nombreElemento: "Hidrógeno", cantidadAtomos: 2, porcentajeMasa: 2.06 },
      { simboloElemento: "S", nombreElemento: "Azufre", cantidadAtomos: 1, porcentajeMasa: 32.69 },
      { simboloElemento: "O", nombreElemento: "Oxígeno", cantidadAtomos: 4, porcentajeMasa: 65.25 }
    ],
    usosIndustriales: ["Fertilizantes", "Refinación de Petróleo", "Baterías"],
    fechaRegistro: ISODate("2026-02-10T00:00:00Z")
  },
  {
    _id: "CMP-003",
    nombreComun: "Cloruro de Sodio (Sal Común)",
    formulaIUPAC: "NaCl",
    numeroCAS: "7647-14-5",
    estadoMateria: "SÓLIDO",
    clasificacionRiesgo: "NO_PELIGROSO",
    propiedadesFisicas: {
      masaMolarGmol: 58.440,
      puntoEbullicionC: 1465.0,
      puntoFusionC: 801.0,
      densidadGcm3: 2.17
    },
    componentes: [
      { simboloElemento: "Na", nombreElemento: "Sodio", cantidadAtomos: 1, porcentajeMasa: 39.34 },
      { simboloElemento: "Cl", nombreElemento: "Cloro", cantidadAtomos: 1, porcentajeMasa: 60.66 }
    ],
    usosIndustriales: ["Alimentaria", "Descongelación", "Industria Química"],
    fechaRegistro: ISODate("2026-03-01T00:00:00Z")
  },
  {
    _id: "CMP-004",
    nombreComun: "Dióxido de Carbono",
    formulaIUPAC: "CO2",
    numeroCAS: "124-38-9",
    estadoMateria: "GASEOSO",
    clasificacionRiesgo: "ASFIXIANTE",
    propiedadesFisicas: {
      masaMolarGmol: 44.010,
      puntoEbullicionC: -78.5,
      puntoFusionC: -56.6,
      densidadGcm3: 0.00198
    },
    componentes: [
      { simboloElemento: "C", nombreElemento: "Carbono", cantidadAtomos: 1, porcentajeMasa: 27.29 },
      { simboloElemento: "O", nombreElemento: "Oxígeno", cantidadAtomos: 2, porcentajeMasa: 72.71 }
    ],
    usosIndustriales: ["Bebidas Carbonatadas", "Refrigeración", "Extintores"],
    fechaRegistro: ISODate("2026-04-05T00:00:00Z")
  },
  {
    _id: "CMP-005",
    nombreComun: "Glucosa",
    formulaIUPAC: "C6H12O6",
    numeroCAS: "50-99-7",
    estadoMateria: "SÓLIDO",
    clasificacionRiesgo: "NO_PELIGROSO",
    propiedadesFisicas: {
      masaMolarGmol: 180.156,
      puntoEbullicionC: 527.1,
      puntoFusionC: 146.0,
      densidadGcm3: 1.54
    },
    componentes: [
      { simboloElemento: "C", nombreElemento: "Carbono", cantidadAtomos: 6, porcentajeMasa: 40.00 },
      { simboloElemento: "H", nombreElemento: "Hidrógeno", cantidadAtomos: 12, porcentajeMasa: 6.71 },
      { simboloElemento: "O", nombreElemento: "Oxígeno", cantidadAtomos: 6, porcentajeMasa: 53.29 }
    ],
    usosIndustriales: ["Alimentaria", "Farmacéutica", "Biotecnología"],
    fechaRegistro: ISODate("2026-05-12T00:00:00Z")
  }
]);
