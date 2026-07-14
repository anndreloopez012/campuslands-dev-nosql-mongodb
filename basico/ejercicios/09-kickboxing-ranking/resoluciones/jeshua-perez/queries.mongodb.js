// 09. Ranking kickboxing
// Consultas - jeshua-perez

use campus_kickboxing_ranking

// 1. Operador $and: peleadores activos con mas de 10 victorias
db.peleadores.find({
  $and: [{ activo: true }, { victorias: { $gt: 10 } }]
})

// 2. Operador $or: peleadores de Peso Pluma o con mas de 8 nocauts
db.peleadores.find({
  $or: [{ categoria: "Peso Pluma" }, { nocauts: { $gt: 8 } }]
})

// 3. Operador $not: peleadores que no estan inactivos
db.peleadores.find({ activo: { $not: { $eq: false } } })

// 4. Combinacion $and + $or: activos que sean Peso Welter o tengan mas de 10 victorias
db.peleadores.find({
  $and: [
    { activo: true },
    { $or: [{ categoria: "Peso Welter" }, { victorias: { $gt: 10 } }] }
  ]
})

// 5. Dar de baja a un peleador (operador logico para excluirlo de futuros rankings)
db.peleadores.updateOne(
  { nombre: "Sergio Aponte" },
  { $set: { activo: false } }
)

// 6. Contar peleadores activos con record ganador ($expr + $gt entre campos)
db.peleadores.countDocuments({
  activo: true,
  $expr: { $gt: ["$victorias", "$derrotas"] }
})
