// Personajes RPG - juan-lema
// Consultas CRUD sobre campus_personajes_rpg.registros

use("campus_personajes_rpg");

// 1. Listar todos los personajes
db.registros.find({});

// 2. Personajes activos, solo nombre y nivel
db.registros.find(
  { activo: true },
  { nombre: 1, nivel: 1, _id: 0 }
);

// 3. Personajes con inteligencia mayor a 15, ordenados por inteligencia desc
db.registros.find(
  { "atributos.inteligencia": { $gt: 15 } },
  { nombre: 1, "atributos.inteligencia": 1, _id: 0 }
).sort({ "atributos.inteligencia": -1 });

// 4. Filtrar guerreros con nivel mayor o igual a 12
db.registros.find(
  { clase: "guerrero", nivel: { $gte: 12 } },
  { nombre: 1, clase: 1, nivel: 1, _id: 0 }
);

// 5. Actualizar: subir de nivel a Brock Colmillo y reactivarlo
db.registros.updateOne(
  { nombre: "Brock Colmillo" },
  { $set: { activo: true }, $inc: { nivel: 1 } }
);

// 5.1 Verificacion del update
db.registros.find({ nombre: "Brock Colmillo" }, { nivel: 1, activo: 1, _id: 0 });

// 6. Agregar una habilidad nueva a Sira Lunaplata
db.registros.updateOne(
  { nombre: "Sira Lunaplata" },
  { $push: { habilidades: "invocar meteoro" } }
);

// 6.1 Verificacion del push
db.registros.find({ nombre: "Sira Lunaplata" }, { habilidades: 1, _id: 0 });

// 7. Eliminar personaje inactivo (Vesna Sombraclara)
db.registros.deleteOne({ nombre: "Vesna Sombraclara" });

// 7.1 Verificacion de borrado (debe devolver 0 documentos)
db.registros.find({ nombre: "Vesna Sombraclara" });

// 8. Conteo final de documentos en la coleccion
db.registros.countDocuments({});