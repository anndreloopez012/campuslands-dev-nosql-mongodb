// Agenda de tatuajes - juan-lema
// Consultas sobre campus_tattoo_agenda.registros

use("campus_tattoo_agenda");

// 1. Consulta general
db.registros.find({}, { _id: 0, cliente: 1, tatuador: 1, estado: 1, fecha: 1 });

// 2. Citas agendadas (pendientes)
db.registros.find(
  { estado: "agendado" },
  { _id: 0, cliente: 1, tatuador: 1, fecha: 1, precio: 1 }
).sort({ fecha: 1 });

// 3. Citas completadas con precio mayor a 350000
db.registros.find(
  { estado: "completado", precio: { $gt: 350000 } },
  { _id: 0, cliente: 1, tatuador: 1, precio: 1 }
);

// 4. Actualizacion: marcar cita de Valentina Cruz como agendada de nuevo
db.registros.updateOne(
  { cliente: "Valentina Cruz" },
  { $set: { estado: "agendado", fecha: new Date("2026-08-05") } }
);
db.registros.findOne(
  { cliente: "Valentina Cruz" },
  { _id: 0, cliente: 1, estado: 1, fecha: 1 }
);

// 5. Eliminacion controlada: retirar cita cancelada restante (si existe)
db.registros.deleteOne({ estado: "cancelado" });
db.registros.countDocuments();

// 6. Reporte: citas y facturacion total por tatuador
db.registros.aggregate([
  { $group: { _id: "$tatuador", total_citas: { $sum: 1 }, ingresos: { $sum: "$precio" } } },
  { $sort: { ingresos: -1 } }
]);
