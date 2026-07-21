use("campus_taller_motos");

// 1. Consulta: Listar órdenes activas ("En proceso" o "En revisión") ordenadas por costo total descendente
db.ordenes.find(
  { estado: { $in: ["En proceso", "En revisión"] } },
  { numero_orden: 1, "cliente.nombre": 1, "moto.placa": 1, estado: 1, total: 1, _id: 0 }
).sort({ total: -1 });

// 2. Consulta: Buscar órdenes asignadas a un mecánico específico
db.ordenes.find(
  { mecanico_asignado: "Roberto Silva" },
  { numero_orden: 1, "moto.marca": 1, "moto.modelo": 1, estado: 1, _id: 0 }
);

// 3. Operación de Actualización: Marcar orden ORD-001 como "Completado" y agregar un nuevo servicio
db.ordenes.updateOne(
  { numero_orden: "ORD-001" },
  {
    $set: { estado: "Completado" },
    $inc: { total: 20.00 },
    $push: {
      servicios: { descripcion: "Lavado general y lubricación", costo: 20.00 }
    }
  }
);

// 4. Verificación de la actualización
db.ordenes.find(
  { numero_orden: "ORD-001" },
  { numero_orden: 1, estado: 1, servicios: 1, total: 1, _id: 0 }
);