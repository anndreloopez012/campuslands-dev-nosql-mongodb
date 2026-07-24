// 10. Liga de pingpong
// Autor: juan-lema
use("campus_pingpong_campus");

// 1. Busqueda general
print("--- Todos los registros ---");
db.registros.find({}, { nombre: 1, categoria: 1, activo: 1, puntaje: 1, _id: 0 }).forEach(printjson);

// 2. Busqueda filtrada: jugadores activos de singles
print("--- Activos de singles ---");
db.registros
  .find({ categoria: "singles", activo: true }, { nombre: 1, puntaje: 1, _id: 0 })
  .sort({ puntaje: -1 })
  .forEach(printjson);

// 3. Busqueda por etiqueta (array)
print("--- Jugadores ofensivos ---");
db.registros.find({ etiquetas: "ofensiva" }, { nombre: 1, sede: 1, _id: 0 }).forEach(printjson);

// 4. Conteo total y conteo por condicion
const total = db.registros.countDocuments({});
const activos = db.registros.countDocuments({ activo: true });
const inactivos = db.registros.countDocuments({ activo: false });
print(`Total: ${total} | Activos: ${activos} | Inactivos: ${inactivos}`);

// 5. Conteo por categoria
const singles = db.registros.countDocuments({ categoria: "singles" });
const dobles = db.registros.countDocuments({ categoria: "dobles" });
print(`Singles: ${singles} | Dobles: ${dobles}`);

// 6. Actualizacion: sumar una victoria y puntos tras un partido ganado
try {
  const upd = db.registros.updateOne(
    { nombre: "David Reyes" },
    { $inc: { victorias: 1, partidosJugados: 1, puntaje: 8 } }
  );
  print(`Actualizados: ${upd.modifiedCount}`);
} catch (e) {
  print(`Error en updateOne: ${e.message}`);
}

// 7. Verificacion de la actualizacion
printjson(db.registros.findOne({ nombre: "David Reyes" }, { victorias: 1, puntaje: 1, _id: 0 }));

// 8. Eliminacion controlada de un registro inactivo
try {
  const del = db.registros.deleteOne({ nombre: "Sebastian Toro", activo: false });
  print(`Eliminados: ${del.deletedCount}`);
} catch (e) {
  print(`Error en deleteOne: ${e.message}`);
}

// 9. Verificacion de la eliminacion
print(`Registros restantes: ${db.registros.countDocuments({})}`);

// 10. Reporte: conteo de jugadores por sede
print("--- Reporte por sede ---");
db.registros
  .aggregate([
    { $group: { _id: "$sede", jugadores: { $sum: 1 }, promedioPuntaje: { $avg: "$puntaje" } } },
    { $sort: { jugadores: -1 } }
  ])
  .forEach(printjson);
