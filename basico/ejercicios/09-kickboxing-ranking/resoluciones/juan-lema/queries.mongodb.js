// Ranking kickboxing - juan-lema
// Consultas sobre campus_kickboxing_ranking.registros

use("campus_kickboxing_ranking");

// 1. Todos los documentos
db.registros.find({});

// 2. Activos Y con mas de 800 puntos ($and)
db.registros.find({
  $and: [{ activo: true }, { puntos: { $gt: 800 } }]
});

// 3. Categoria "welter" O racha mayor o igual a 5 ($or)
db.registros.find({
  $or: [{ categoria: "welter" }, { racha: { $gte: 5 } }]
});

// 4. Activos y NO de categoria "pesado" ($and + $ne)
db.registros.find({
  $and: [{ activo: true }, { categoria: { $ne: "pesado" } }]
});

// 5. Pais en Colombia o Peru, con al menos 15 victorias ($in + $gte)
db.registros.find({
  pais: { $in: ["Colombia", "Peru"] },
  victorias: { $gte: 15 }
}, { nombre: 1, pais: 1, victorias: 1, _id: 0 });

// 6. Actualiza puntos y racha de "Bruno Salas" tras una victoria
db.registros.updateOne(
  { nombre: "Bruno Salas" },
  { $inc: { puntos: 40, victorias: 1, racha: 1 } }
);

// Verifica el cambio
db.registros.find({ nombre: "Bruno Salas" });

// 7. Verifica existencia antes de eliminar
db.registros.find({ nombre: "Valeria Cruz" });

// Elimina peleador inactivo con menos de 600 puntos
db.registros.deleteOne({
  $and: [{ activo: false }, { puntos: { $lt: 600 } }]
});

// Verifica la eliminacion
db.registros.find({ nombre: "Valeria Cruz" });
