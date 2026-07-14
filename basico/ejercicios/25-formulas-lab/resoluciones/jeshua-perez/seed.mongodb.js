// 25. Formula lab
// Solucion - jeshua-perez (nivel basico)
// Enfoque: arrays de componentes

use campus_formulas_lab

db.formulas.drop()

db.createCollection("formulas")

// Cada formula embebe su lista de componentes como array de subdocumentos
db.formulas.insertMany([
  {
    nombre: "Limpiador Multiusos Citrico",
    tipo: "Limpieza",
    componentes: [
      { nombre: "Agua destilada", cantidadGr: 800 },
      { nombre: "Acido citrico", cantidadGr: 50 },
      { nombre: "Tensoactivo", cantidadGr: 30 }
    ],
    estable: true
  },
  {
    nombre: "Gel Antibacterial",
    tipo: "Higiene",
    componentes: [
      { nombre: "Alcohol isopropilico", cantidadGr: 700 },
      { nombre: "Carbomer", cantidadGr: 10 },
      { nombre: "Glicerina", cantidadGr: 20 }
    ],
    estable: true
  },
  {
    nombre: "Solucion Reactiva X12",
    tipo: "Experimental",
    componentes: [
      { nombre: "Peroxido de hidrogeno", cantidadGr: 200 },
      { nombre: "Catalizador Fe2O3", cantidadGr: 5 }
    ],
    estable: false
  },
  {
    nombre: "Shampoo Base Neutro",
    tipo: "Cosmetica",
    componentes: [
      { nombre: "Agua destilada", cantidadGr: 600 },
      { nombre: "Tensoactivo", cantidadGr: 80 },
      { nombre: "Sal NaCl", cantidadGr: 15 }
    ],
    estable: true
  },
  {
    nombre: "Compuesto Termico Z9",
    tipo: "Experimental",
    componentes: [
      { nombre: "Silicona termica", cantidadGr: 100 },
      { nombre: "Oxido de aluminio", cantidadGr: 40 }
    ],
    estable: false
  }
])
