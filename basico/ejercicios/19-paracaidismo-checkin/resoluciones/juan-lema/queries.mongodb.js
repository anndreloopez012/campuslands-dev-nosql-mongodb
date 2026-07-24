// Check-in de paracaidismo — consultas
// Autor: juan-lema
use("campus_paracaidismo_checkin");

// 1. Find all
db.registros.find({});

// 2. Find filtrado: saltadores activos y aptos medicamente, categoria avanzado
db.registros.find(
  { activo: true, "chequeo_medico.apto": true, categoria: "avanzado" },
  { nombre: 1, altura_salto_pies: 1, instructor: 1, _id: 0 }
);

// 3. updateOne: agregar item de equipo a un saltador puntual
db.registros.updateOne(
  { documento: "P002" },
  { $push: { equipo: "camara-casco" } }
);
// Verificacion
db.registros.findOne({ documento: "P002" }, { nombre: 1, equipo: 1, _id: 0 });

// 4. deleteOne: eliminar registro inactivo y no apto
db.registros.deleteOne({ documento: "P004" });
// Verificacion
db.registros.countDocuments();
db.registros.findOne({ documento: "P004" });
