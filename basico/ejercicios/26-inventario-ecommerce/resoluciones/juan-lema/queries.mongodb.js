// Ejercicio 26 - Inventario ecommerce (autos y motos)
// Autor: juan-lema
// Consultas CRUD sobre la coleccion "registros"

use campus_inventario_ecommerce;

// 1) Find all: listado general (nombre, categoria, stock)
try {
  print("--- 1) Todos los registros ---");
  db.registros.find({}, { nombre: 1, categoria: 1, stock_total: 1, _id: 0 }).forEach(printjson);
} catch (e) {
  print("Error en find general: " + e.message);
}

// 2) Find filtrado: productos con alerta de stock bajo y activos
try {
  print("--- 2) Alerta de stock bajo (activos) ---");
  db.registros
    .find({ alerta_stock_bajo: true, activo: true }, { nombre: 1, marca: 1, stock_total: 1, _id: 0 })
    .forEach(printjson);
} catch (e) {
  print("Error en find filtrado: " + e.message);
}

// 3) updateOne: reponer stock de la bateria y quitar la alerta
try {
  print("--- 3) Actualizar stock (Bateria 12V Auto Sedan) ---");
  const res = db.registros.updateOne(
    { nombre: "Bateria 12V Auto Sedan" },
    { $set: { stock_total: 20, alerta_stock_bajo: false, "variantes.0.stock": 20 } }
  );
  print("Modificados: " + res.modifiedCount);
  printjson(db.registros.findOne({ nombre: "Bateria 12V Auto Sedan" }, { nombre: 1, stock_total: 1, alerta_stock_bajo: 1, _id: 0 }));
} catch (e) {
  print("Error en updateOne: " + e.message);
}

// 4) deleteOne: eliminar producto descontinuado (espejo agotado e inactivo)
try {
  print("--- 4) Eliminar producto inactivo ---");
  const res = db.registros.deleteOne({ nombre: "Espejo Retrovisor Auto Universal", activo: false });
  print("Eliminados: " + res.deletedCount);
  print("Total restante: " + db.registros.countDocuments({}));
} catch (e) {
  print("Error en deleteOne: " + e.message);
}

// 5) Extra: aggregate simple, stock total por categoria
try {
  print("--- 5) Stock total agrupado por categoria ---");
  db.registros
    .aggregate([
      { $group: { _id: "$categoria", stock_categoria: { $sum: "$stock_total" }, productos: { $sum: 1 } } },
      { $sort: { stock_categoria: -1 } }
    ])
    .forEach(printjson);
} catch (e) {
  print("Error en aggregate: " + e.message);
}
