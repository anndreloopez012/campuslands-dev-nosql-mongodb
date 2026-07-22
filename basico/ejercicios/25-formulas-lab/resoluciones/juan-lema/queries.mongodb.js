// 25. Formula lab | juan-lema
// Consultas CRUD sobre "registros"
use("campus_formulas_lab");

// 1. Listar todos los registros
db.registros.find({});

// 2. Filtrar: compuestos organicos activos
db.registros.find(
  { categoria: "organico", activo: true },
  { nombre: 1, formula: 1, masaMolar: 1, _id: 0 }
);

// 3. Filtrar: compuestos en estado gaseoso con >=2 componentes
db.registros.find(
  { estado: "gas", $expr: { $gte: [{ $size: "$componentes" }, 2] } },
  { nombre: 1, formula: 1, componentes: 1, _id: 0 }
);

// 4. Actualizar: reactivar el amoniaco
db.registros.updateOne(
  { formula: "NH3" },
  { $set: { activo: true } }
);
// Verificacion
db.registros.findOne({ formula: "NH3" }, { nombre: 1, activo: 1, _id: 0 });

// 5. Eliminar: quitar el metano del registro
db.registros.deleteOne({ formula: "CH4" });
// Verificacion
db.registros.countDocuments({ formula: "CH4" });

// 6. Reporte agrupado: cantidad de compuestos y masa molar promedio por categoria
db.registros.aggregate([
  { $group: {
      _id: "$categoria",
      totalCompuestos: { $sum: 1 },
      masaMolarPromedio: { $avg: "$masaMolar" }
  }},
  { $sort: { _id: 1 } }
]);
