// Playlist por energia — consultas
// Autor: juan-lema
use("campus_playlist_musica");

// 1) Listar todas las canciones (nombre + energia)
db.registros.find({}, { nombre: 1, energia: 1, _id: 0 });

// 2) Canciones activas con energia alta (>= 7), ordenadas de mas a menos energia
db.registros.find(
  { activo: true, energia: { $gte: 7 } },
  { nombre: 1, artista: 1, energia: 1, _id: 0 }
).sort({ energia: -1 });

// 3) Canciones con la etiqueta "chill" (array simple)
db.registros.find(
  { etiquetas: "chill" },
  { nombre: 1, etiquetas: 1, _id: 0 }
);

// 4) Actualizar reproducciones al reproducir una cancion existente
db.registros.updateOne(
  { nombre: "Modo Foco" },
  { $inc: { reproducciones: 1 } }
);

// Verificacion del update
db.registros.findOne({ nombre: "Modo Foco" }, { nombre: 1, reproducciones: 1, _id: 0 });

// 5) Reactivar una cancion inactiva agregando una etiqueta nueva
db.registros.updateOne(
  { nombre: "Corre o Cae" },
  { $set: { activo: true }, $push: { etiquetas: "reactivada" } }
);

// Verificacion del reactivado
db.registros.findOne({ nombre: "Corre o Cae" }, { nombre: 1, activo: 1, etiquetas: 1, _id: 0 });

// 6) Eliminar una cancion de baja energia y pocas reproducciones
db.registros.deleteOne({ nombre: "Noche Calma" });

// Verificacion del delete
db.registros.countDocuments({ nombre: "Noche Calma" });
