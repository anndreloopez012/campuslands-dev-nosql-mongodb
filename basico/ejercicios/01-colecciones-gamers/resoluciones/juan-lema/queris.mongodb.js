// Registro de partidas shooter

// Todos los documentos
db.registros.find({});

// Partidas de categoria "entrenamiento"
db.registros.find({ categoria: "entrenamiento" });

// Marca "Free For All" como activa
db.registros.updateOne({ nombre: "Free For All" }, { $set: { activo: true } });

// Verifica el cambio
db.registros.find({ nombre: "Free For All" });

// Verifica existencia antes de eliminar
db.registros.find({ nombre: "Historia: Capitulo 3" });

// Elimina "Historia: Capitulo 3"
db.registros.deleteOne({ nombre: "Historia: Capitulo 3" });
