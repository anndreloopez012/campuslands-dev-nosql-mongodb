// Garaje de autos de lujo - Consultas (juan-lema)
use campus_garaje_lujo;

// 1. Listar todos los autos
db.registros.find({});

// 2. Filtro numerico: autos con precio mayor a 220000 USD
db.registros.find(
  { precio: { $gt: 220000 } },
  { marca: 1, modelo: 1, precio: 1, _id: 0 }
);

// 3. Filtro numerico combinado: deportivos con potencia >= 600 hp
db.registros.find(
  { categoria: "deportivo", potencia_hp: { $gte: 600 } },
  { marca: 1, modelo: 1, potencia_hp: 1, _id: 0 }
);

// 4. Update: marcar el Urus como disponible tras mantenimiento
db.registros.updateOne(
  { marca: "Lamborghini", modelo: "Urus" },
  { $set: { disponible: true } }
);
db.registros.find({ marca: "Lamborghini" }, { modelo: 1, disponible: 1, _id: 0 });

// 5. Reporte: autos disponibles ordenados por precio descendente
db.registros.find(
  { disponible: true },
  { marca: 1, modelo: 1, precio: 1, _id: 0 }
).sort({ precio: -1 });

// 6. Delete: retirar el clasico del inventario (fuera de catalogo activo)
db.registros.deleteOne({ marca: "Aston Martin", modelo: "DB5" });
db.registros.find({}, { marca: 1, modelo: 1, _id: 0 });
