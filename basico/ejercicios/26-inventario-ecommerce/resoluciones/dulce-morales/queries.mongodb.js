use (campus_inventario_ecommerce);

// Consulta 1: Productos disponibles orientados a motos con proyección limpia
db.productos.find(
  { vehiculo_aplicacion: "moto", activo: true },
  { nombre: 1, categoria: 1, precio: 1, stock: 1, _id: 0 }
);

// Consulta 2: Alerta de stock bajo (stock menor o igual al stock mínimo)
db.productos.find(
  { $expr: { $lte: ["$stock", "$stock_minimo"] } },
  { nombre: 1, stock: 1, stock_minimo: 1, _id: 0 }
);

// Consulta 3: Búsqueda por coincidencia en array de etiquetas
db.productos.find(
  { etiquetas: "rendimiento" },
  { nombre: 1, categoria: 1, precio: 1, _id: 0 }
);

// Consulta 4: Actualización atómica de stock y precio para un producto
db.productos.updateOne(
  { nombre: "Kit de Frenos Deportivos Brembo" },
  { 
    $inc: { stock: -2 }, 
    $set: { precio: 470000 } 
  }
);

// Consulta 5: Conteo total de productos activos en el inventario
db.productos.countDocuments({ activo: true });