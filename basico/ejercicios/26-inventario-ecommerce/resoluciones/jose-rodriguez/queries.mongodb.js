// Base de Datos de Concesionaria Automotriz - Consultas Analíticas y Alertas de Stock
use('automotriz_stock_db');

// =============================================================================
// CONSULTA 1: Detección de Alertas Activas de Stock ($match)
// Obtiene todos los vehículos (autos y motos) con alerta "STOCK_BAJO" o "CRITICO".
// =============================================================================
db.vehiculos.find(
  { "stockGeneral.nivelAlerta": { $in: ["STOCK_BAJO", "CRITICO"] } },
  {
    _id: 0,
    tipoVehiculo: 1,
    marca: 1,
    modelo: 1,
    precioUSD: 1,
    stockActual: "$stockGeneral.actual",
    stockMinimo: "$stockGeneral.minimoAlerta",
    nivelAlerta: "$stockGeneral.nivelAlerta"
  }
).sort({ "stockGeneral.actual": 1 });


// =============================================================================
// CONSULTA 2: Top 3 Vehículos con Menor Inventario ($sort + $limit)
// Muestra las 3 unidades con stock más bajo para priorizar pedidos a fábrica.
// =============================================================================
db.vehiculos.find(
  {},
  {
    _id: 0,
    tipoVehiculo: 1,
    marca: 1,
    modelo: 1,
    stockActual: "$stockGeneral.actual",
    nivelAlerta: "$stockGeneral.nivelAlerta"
  }
).sort({ "stockGeneral.actual": 1 }).limit(3);


// =============================================================================
// CONSULTA 3: Agregación de Precio Promedio y Stock Total por Tipo ($group + $avg)
// Compara las métricas financieras e inventario entre AUTOS y MOTOS.
// =============================================================================
db.vehiculos.aggregate([
  {
    $group: {
      _id: "$tipoVehiculo",
      totalModelosDiferentes: { $sum: 1 },
      stockTotalUnidades: { $sum: "$stockGeneral.actual" },
      precioPromedioUSD: { $avg: "$precioUSD" },
      precioMaximoUSD: { $max: "$precioUSD" }
    }
  },
  {
    $sort: { stockTotalUnidades: -1 }
  }
]);


// =============================================================================
// CONSULTA 4: Agregación de Inventario Físico por Sucursal ($unwind + $group)
// Descompone el array 'stockPorSucursal' para calcular cuántos vehículos
// reales existen guardados físicamente en cada agencia.
// =============================================================================
db.vehiculos.aggregate([
  { $unwind: "$stockPorSucursal" },
  {
    $group: {
      _id: "$stockPorSucursal.sucursalNombre",
      unidadesDisponibles: { $sum: "$stockPorSucursal.cantidad" },
      valorEstimadoSucursalUSD: {
        $sum: { $multiply: ["$stockPorSucursal.cantidad", "$precioUSD"] }
      }
    }
  },
  {
    $sort: { unidadesDisponibles: -1 }
  }
]);


// =============================================================================
// CONSULTA 5: Agregación de Popularidad de Equipamiento ($unwind + $match + $group)
// Analiza qué características técnicas/equipamientos son los más frecuentes
// entre los vehículos con nivel de stock "NORMAL" (de alta rotación).
// =============================================================================
db.vehiculos.aggregate([
  {
    $match: { "stockGeneral.nivelAlerta": "NORMAL" }
  },
  { $unwind: "$equipamiento" },
  {
    $group: {
      _id: "$equipamiento",
      totalModelosQueLoIncluyen: { $sum: 1 },
      marcasAsociadas: { $addToSet: "$marca" }
    }
  },
  {
    $sort: { totalModelosQueLoIncluyen: -1 }
  }
]);
