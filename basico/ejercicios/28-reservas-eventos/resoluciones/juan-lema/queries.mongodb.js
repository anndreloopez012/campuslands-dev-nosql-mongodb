// Ejercicio 28 - Reservas de eventos campus (deportes)
// Autor: juan-lema

use("campus_reservas_eventos");

// 1. Find all: listado completo de reservas
db.registros.find({});

// 2. Find filtrado: eventos activos con cupo mayor a 15, ordenados por fecha
db.registros
  .find(
    { estado: "activa", cupo_maximo: { $gt: 15 } },
    { evento: 1, deporte: 1, fecha: 1, cupo_maximo: 1, _id: 0 }
  )
  .sort({ fecha: 1 });

// 3. UpdateOne: confirmar un participante e inscribir uno nuevo al Torneo de Futbol
db.registros.updateOne(
  { evento: "Torneo de Futbol Interno", "participantes.documento": "1003" },
  { $set: { "participantes.$.confirmado": true } }
);

db.registros.updateOne(
  { evento: "Torneo de Futbol Interno" },
  {
    $push: {
      participantes: { nombre: "Sofia Herrera", documento: "1013", confirmado: true }
    }
  }
);

// Verificacion del update
db.registros.findOne(
  { evento: "Torneo de Futbol Interno" },
  { evento: 1, participantes: 1, _id: 0 }
);

// 4. Delete controlado: solo se eliminan eventos cancelados y SIN participantes
//    (evita borrar por error un evento cancelado que aun tenga inscritos)
db.registros.countDocuments({ estado: "cancelada" }); // eventos cancelados totales (antes)

db.registros.deleteOne({
  estado: "cancelada",
  $expr: { $eq: [{ $size: "$participantes" }, 0] }
});

// Verificacion del delete
db.registros.countDocuments({ estado: "cancelada" }); // eventos cancelados totales (despues)
db.registros.find({ estado: "cancelada" }, { evento: 1, participantes: 1, _id: 0 }); // solo debe quedar Ciclismo Ruta Norte
