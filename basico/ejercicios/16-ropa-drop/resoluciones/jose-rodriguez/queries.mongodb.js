// Base de Datos de Ropa - Consultas Nativas Orientadas a Arrays de Tallas
use('tienda_ropa_db');

// =============================================================================
// CONSULTA 1: Filtrado Cualquiera en Array Simple de Tallas ($in)
// Encuentra productos que estén disponibles en al menos una de las tallas pequeñas ("XS" o "S").
// =============================================================================
db.productos.find(
  {
    tallasDisponibles: { $in: ["XS", "S"] }
  },
  {
    _id: 0,
    productoId: "$_id",
    nombre: 1,
    genero: 1,
    tallasDisponibles: 1,
    precioQ: 1
  }
);


// =============================================================================
// CONSULTA 2: Coincidencia Estricta Múltiple en Array de Tallas ($all)
// Busca prendas que ofrezcan simultáneamente el rango de tallas "S" Y "M" Y "L".
// =============================================================================
db.productos.find(
  {
    tallasDisponibles: { $all: ["S", "M", "L"] }
  },
  {
    _id: 0,
    nombre: 1,
    tallasDisponibles: 1,
    colores: 1
  }
);


// =============================================================================
// CONSULTA 3: Filtrado Aislado sobre Subdocumentos de Talla ($elemMatch)
// Busca prendas donde la talla "M" tenga un stock real disponible estrictamente mayor a 10 unidades.
// =============================================================================
db.productos.find(
  {
    inventarioPorTalla: {
      $elemMatch: {
        talla: "M",
        stock: { $gt: 10 }
      }
    }
  },
  {
    _id: 0,
    nombre: 1,
    precioQ: 1,
    "inventarioPorTalla.$": 1 // Proyecta únicamente el subdocumento de la talla coincidente
  }
);


// =============================================================================
// OPERACIÓN 4: Actualización Evolutiva de Tallas ($addToSet / $push con arrayFilters)
// A) Añade la nueva talla "XXL" al array de tallas sin duplicar ($addToSet).
// B) Agrega la entrada correspondiente en el inventario por talla.
// =============================================================================
db.productos.updateOne(
  { _id: "PROD-001" },
  {
    $addToSet: { tallasDisponibles: "XXL" },
    $push: {
      inventarioPorTalla: { talla: "XXL", stock: 6, sku: "TSH-OVR-XXL" }
    }
  }
);

// Reabastecimiento de stock puntual para una talla específica ("30") usando arrayFilters
db.productos.updateOne(
  { _id: "PROD-002" },
  {
    $inc: { "inventarioPorTalla.$[elemento].stock": 15 }
  },
  {
    arrayFilters: [{ "elemento.talla": "30" }]
  }
);


// =============================================================================
// CONSULTA 5: Agregación Analítica de Stock Total por Talla ($unwind + $group)
// Aplana el array 'inventarioPorTalla' para consolidar cuántas prendas físicas existen
// en bodega para cada talla a lo largo de todo el catálogo.
// =============================================================================
db.productos.aggregate([
  { $unwind: "$inventarioPorTalla" },
  {
    $group: {
      _id: "$inventarioPorTalla.talla",
      totalUnidadesBodega: { $sum: "$inventarioPorTalla.stock" },
      modelosDisponibles: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      talla: "$_id",
      totalUnidadesBodega: 1,
      modelosDisponibles: 1
    }
  },
  { $sort: { totalUnidadesBodega: -1 } }
]);
