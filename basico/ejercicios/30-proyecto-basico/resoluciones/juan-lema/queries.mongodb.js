// Proyecto basico - Torneos de videojuegos del campus - juan-lema
// Consultas CRUD sobre la coleccion registros

use("campus_proyecto_basico");

try {
  // 1. Consulta general
  print("--- Todos los registros ---");
  db.registros.find().forEach(printjson);

  // 2. Consulta filtrada: jugadores activos con puntaje alto, solo campos clave
  print("--- Jugadores activos con puntaje >= 70 ---");
  db.registros
    .find(
      { activo: true, puntaje: { $gte: 70 } },
      { _id: 0, nombre: 1, juego: 1, categoria: 1, puntaje: 1 }
    )
    .forEach(printjson);

  // 3. Consulta filtrada: por categoria y nivel
  print("--- Jugadores de shooter con nivel avanzado ---");
  db.registros
    .find({ categoria: "shooter", nivel: "avanzado" })
    .forEach(printjson);

  // 4. Actualizacion: sumar puntos y registrar nueva partida tras un torneo
  print("--- Actualizando puntaje y partidas de Laura Ramirez ---");
  const resultadoUpdate = db.registros.updateOne(
    { nombre: "Laura Ramirez" },
    {
      $inc: { puntaje: 10 },
      $push: {
        partidas: { rival: "Kernel FC", resultado: "victoria", fecha: new Date("2026-03-01") }
      }
    }
  );
  print("Documentos modificados: " + resultadoUpdate.modifiedCount);
  printjson(db.registros.findOne({ nombre: "Laura Ramirez" }));

  // 5. Eliminacion: retirar inscripcion inactiva
  print("--- Eliminando inscripcion inactiva de Sofia Herrera ---");
  const resultadoDelete = db.registros.deleteOne({ nombre: "Sofia Herrera" });
  print("Documentos eliminados: " + resultadoDelete.deletedCount);
  print("Total tras eliminacion: " + db.registros.countDocuments({}));

  // 6. Reporte: promedio de puntaje por categoria de juego
  print("--- Reporte: promedio de puntaje por categoria ---");
  db.registros
    .aggregate([
      { $group: { _id: "$categoria", promedioPuntaje: { $avg: "$puntaje" }, jugadores: { $sum: 1 } } },
      { $sort: { promedioPuntaje: -1 } }
    ])
    .forEach(printjson);
} catch (error) {
  print("Error en las consultas: " + error.message);
}
