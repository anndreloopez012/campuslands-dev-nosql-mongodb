// 25. Formula lab
// Consultas - jeshua-perez

use campus_formulas_lab

// 1. Formulas que usan un componente especifico
db.formulas.find({ "componentes.nombre": "Agua destilada" })

// 2. Formulas experimentales inestables
db.formulas.find({ tipo: "Experimental", estable: false })

// 3. Formulas con mas de 2 componentes ($size no acepta operadores, se usa $expr con $size de array)
db.formulas.find({ $expr: { $gt: [{ $size: "$componentes" }, 2] } })

// 4. Proyeccion limpia: nombre y cantidad total de componentes
db.formulas.find(
  {},
  { nombre: 1, totalComponentes: { $size: "$componentes" }, _id: 0 }
)

// 5. Agregar un nuevo componente a una formula existente
db.formulas.updateOne(
  { nombre: "Solucion Reactiva X12" },
  { $push: { componentes: { nombre: "Estabilizador EDTA", cantidadGr: 8 } } }
)

// 6. Ajustar la cantidad de un componente dentro del array (arrayFilters)
db.formulas.updateOne(
  { nombre: "Gel Antibacterial" },
  { $set: { "componentes.$[c].cantidadGr": 15 } },
  { arrayFilters: [{ "c.nombre": "Carbomer" }] }
)
