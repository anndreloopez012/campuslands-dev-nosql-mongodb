// Renders arquitectura 3D — juan-lema
use campus_renders_arquitectura;

// 1. Listar todos los registros
db.registros.find({});

// 2. Filtrar: renders exteriores entregados, solo proyecto y puntaje
db.registros.find(
  { tipo: "exterior", estado: "entregado" },
  { proyecto: 1, puntaje: 1, _id: 0 }
);

// 3. Filtrar por cliente en ciudad de Guatemala con puntaje mayor a 90
db.registros.find(
  { "cliente.ciudad": "Guatemala", puntaje: { $gt: 90 } },
  { proyecto: 1, "cliente.nombre": 1, puntaje: 1, _id: 0 }
);

// 4. Actualizar: marcar "Restaurante Fuego Azul" como entregado y asignar puntaje
db.registros.updateOne(
  { proyecto: "Restaurante Fuego Azul" },
  { $set: { estado: "entregado", puntaje: 90 } }
);

// Verificacion del update
db.registros.findOne({ proyecto: "Restaurante Fuego Azul" });

// 5. Eliminar el proyecto cancelado
db.registros.deleteOne({ estado: "cancelado" });

// Verificacion del delete
db.registros.find({}, { proyecto: 1, estado: 1, _id: 0 });
