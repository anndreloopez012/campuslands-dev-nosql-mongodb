// Usuarios streaming - juan-lema
use("campus_usuarios_streaming");

// 1. Find all
db.registros.find({}, { nombre: 1, plan: 1, activo: 1, _id: 0 });

// 2. Find filtrado: usuarios activos con plan premium
db.registros.find(
  { activo: true, plan: "premium" },
  { nombre: 1, pais: 1, generosFavoritos: 1, _id: 0 }
);

// 3. Find filtrado: usuarios con genero "drama" en favoritos
db.registros.find(
  { generosFavoritos: "drama" },
  { nombre: 1, generosFavoritos: 1, _id: 0 }
);

// 4. updateOne: reactivar a Ana Morales y agregar historial
const resultUpdate = db.registros.updateOne(
  { email: "ana.morales@correo.com" },
  {
    $set: { activo: true },
    $push: { historial: { titulo: "Risas al aire", tipo: "cancion", fecha: new Date(), calificacion: 4 } }
  }
);
if (resultUpdate.matchedCount === 0) {
  print("Aviso: no se encontro el usuario a actualizar.");
} else {
  print(`Actualizados: ${resultUpdate.modifiedCount}`);
}
db.registros.find({ email: "ana.morales@correo.com" }, { nombre: 1, activo: 1, historial: 1, _id: 0 });

// 5. deleteOne: eliminar usuario por email
const resultDelete = db.registros.deleteOne({ email: "mario.castillo@correo.com" });
if (resultDelete.deletedCount === 0) {
  print("Aviso: no se encontro el usuario a eliminar.");
} else {
  print(`Eliminados: ${resultDelete.deletedCount}`);
}
db.registros.find({}, { nombre: 1, _id: 0 });

// 6. Verificacion final: conteo total de usuarios
print(`Total de usuarios: ${db.registros.countDocuments({})}`);
