// Heroes MOBA por rol - Consultas
// Autor: juan-lema
use("campus_heroes_moba");

// 1. Find all: listado completo de heroes
db.registros.find({}, { nombre: 1, rol: 1, activo: 1, _id: 0 });

// 2. Find filtrado: heroes activos de rol "tank"
db.registros.find(
  { rol: "tank", activo: true },
  { nombre: 1, region: 1, estadisticas: 1, _id: 0 }
);

// 3. Find filtrado: heroes de dificultad "dificil" con dano mayor a 400
db.registros.find(
  { dificultad: "dificil", "estadisticas.dano": { $gt: 400 } },
  { nombre: 1, rol: 1, "estadisticas.dano": 1, _id: 0 }
);

// 4. UpdateOne con manejo de errores: reactivar a "Nyx" y ajustar dano
const updateResult = db.registros.updateOne(
  { nombre: "Nyx" },
  { $set: { activo: true }, $inc: { "estadisticas.dano": 10 } }
);
if (updateResult.matchedCount === 0) {
  print("Aviso: no se encontro el heroe a actualizar.");
} else {
  print("Heroes actualizados:", updateResult.modifiedCount);
}

// 5. Verificacion del update
db.registros.find({ nombre: "Nyx" }, { activo: 1, "estadisticas.dano": 1, _id: 0 });

// 6. DeleteOne con manejo de errores: eliminar un heroe inexistente para validar respuesta segura
const deleteResult = db.registros.deleteOne({ nombre: "HeroeInexistente" });
if (deleteResult.deletedCount === 0) {
  print("Aviso: no se elimino ningun documento, el heroe no existe.");
} else {
  print("Heroes eliminados:", deleteResult.deletedCount);
}

// 7. Reporte (aggregate): cantidad de heroes y dano promedio por rol
db.registros.aggregate([
  { $group: { _id: "$rol", totalHeroes: { $sum: 1 }, danoPromedio: { $avg: "$estadisticas.dano" } } },
  { $sort: { danoPromedio: -1 } }
]);
