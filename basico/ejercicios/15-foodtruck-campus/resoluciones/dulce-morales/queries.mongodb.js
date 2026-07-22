// Seleccionar la base de datos
use('campus_foodtruck_campus');

// Consulta 1: Listar pedidos pendientes ordenados por fecha de creación
print("--- Consulta 1: Pedidos pendientes de preparación ---");
db.pedidos.find(
  { estado: "pendiente" },
  { _id: 0, numero_pedido: 1, "cliente.nombre": 1, total: 1, estado: 1 }
).sort({ fecha: 1 });

// Consulta 2: Filtrar pedidos con un total superior a $30,000 (Ventas altas)
print("--- Consulta 2: Pedidos con total > 30,000 COP ---");
db.pedidos.find(
  { total: { $gt: 30000 } },
  { _id: 0, numero_pedido: 1, "cliente.nombre": 1, total: 1, metodo_pago: 1 }
);

// Consulta 3: Búsqueda sobre Array de objetos (Pedidos que incluyan Hamburguesa)
print("--- Consulta 3: Pedidos que contengan 'Hamburguesa Doble Queso' ---");
db.pedidos.find(
  { "items.producto": "Hamburguesa Doble Queso" },
  { _id: 0, numero_pedido: 1, "cliente.nombre": 1, items: 1 }
);

// Cambiar el estado del pedido ORD-003 a 'completado'
print("--- Operación de Actualización: Avance de estado de pedido ---");
db.pedidos.updateOne(
  { numero_pedido: "ORD-003" },
  { $set: { estado: "completado" } }
);

// Verificación posterior de la actualización
print("--- Verificación del pedido ORD-003 tras el cambio de estado ---");
db.pedidos.find(
  { numero_pedido: "ORD-003" },
  { _id: 0, numero_pedido: 1, "cliente.nombre": 1, estado: 1 }
);

// Consulta 4: Reporte/Conteo de documentos por estado
print("--- Consulta 4: Conteo de pedidos completados ---");
const totalCompletados = db.pedidos.countDocuments({ estado: "completado" });
print("Total de pedidos completados: " + totalCompletados);