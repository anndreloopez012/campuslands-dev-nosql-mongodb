// Ranking kickboxing - Consultas y Operaciones
// Solución de Denise López - Ejercicio 09

use campus_kickboxing_ranking

// 1. Consulta general para listar todos los registros (requerido por la plantilla base)
db.peleadores.find({})

// 2. Operador Lógico $and: Peleadores activos Y de categoría "Pesado"
db.peleadores.find(
  {
    $and: [
      { activo: true },
      { categoria_peso: "Pesado" }
    ]
  },
  { nombre: 1, categoria_peso: 1, "record.victorias": 1, _id: 0 }
)

// 3. Operador Lógico $or: Peleadores que sean de categoría "Mediano" O tengan más de 50 nocauts
db.peleadores.find(
  {
    $or: [
      { categoria_peso: "Mediano" },
      { "record.nocauts": { $gt: 50 } }
    ]
  },
  { nombre: 1, categoria_peso: 1, "record.nocauts": 1, _id: 0 }
)

// 4. Operadores Lógicos $nor / $not: Peleadores que NO sean inactivos Y NO pertenezcan a la categoría "Pluma"
db.peleadores.find(
  {
    $nor: [
      { activo: false },
      { categoria_peso: "Pluma" }
    ]
  },
  { nombre: 1, categoria_peso: 1, activo: 1, _id: 0 }
)

// 5. Consulta sobre arrays: Peleadores que practiquen el estilo "Muay Thai"
db.peleadores.find(
  { estilos: "Muay Thai" },
  { nombre: 1, estilos: 1, _id: 0 }
)

// 6. Operación de actualización (Update): Registrar una victoria por nocaut para Rico Verhoeven
db.peleadores.updateOne(
  { nombre: "Rico Verhoeven" },
  { 
    $inc: { 
      "record.victorias": 1,
      "record.nocauts": 1
    }
  }
)