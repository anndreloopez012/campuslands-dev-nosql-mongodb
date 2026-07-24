// Ordenes de soldadura — queries (juan-lema)
use campus_ordenes_soldadura;

// 1. Listar todas las ordenes
db.registros.find({});

// 2. Filtrar ordenes aprobadas, solo campos utiles
db.registros.find(
  { estado: "aprobada" },
  { codigo: 1, cliente: 1, soldador: 1, _id: 0 }
);

// 3. Filtrar por proceso y espesor mayor a 8mm
db.registros.find({ proceso: "SMAW", espesorMm: { $gt: 8 } });

// 4. Update: marcar OS-1002 como aprobada y agregar su inspeccion
db.registros.updateOne(
  { codigo: "OS-1002" },
  {
    $set: { estado: "aprobada" },
    $push: {
      inspecciones: {
        fecha: new Date("2026-07-10"),
        resultado: "aprobado",
        inspector: "L. Pineda"
      }
    }
  }
);
// Verificacion
db.registros.findOne({ codigo: "OS-1002" });

// 5. Delete: eliminar la orden rechazada OS-1003
db.registros.deleteOne({ codigo: "OS-1003" });
// Verificacion
db.registros.find({ codigo: "OS-1003" });
