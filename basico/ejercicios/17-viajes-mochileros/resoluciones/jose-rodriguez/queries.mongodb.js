// Base de Datos de Viajes - Consultas Nativas Orientadas a Fechas y Presupuestos
use('agencia_viajes_db');

// =============================================================================
// CONSULTA 1: Búsqueda por Rango de Fechas ($gte, $lte)
// Encuentra viajes cuya fecha de inicio esté programada dentro del segundo semestre de 2026
// (entre el 1 de julio de 2026 y el 31 de diciembre de 2026).
// =============================================================================
db.viajes.find(
  {
    "fechas.fechaInicio": {
      $gte: ISODate("2026-07-01T00:00:00Z"),
      $lte: ISODate("2026-12-31T23:59:59Z")
    }
  },
  {
    _id: 0,
    viajeId: "$_id",
    nombrePaquete: 1,
    estadoReserva: 1,
    fechaInicio: "$fechas.fechaInicio",
    fechaFin: "$fechas.fechaFin",
    totalGastosUSD: "$presupuesto.totalGastosUSD"
  }
).sort({ "fechas.fechaInicio": 1 });


// =============================================================================
// CONSULTA 2: Control Financiero de Presupuesto con Cálculo de Remanente ($expr, $subtract)
// Filtra viajes donde el costo total ejecutado no supere el presupuesto máximo,
// calculando en tiempo real el remanente (ahorro) disponible para el pasajero.
// =============================================================================
db.viajes.aggregate([
  {
    $match: {
      $expr: { $lte: ["$presupuesto.totalGastosUSD", "$presupuesto.presupuestoMaximoUSD"] }
    }
  },
  {
    $project: {
      _id: 0,
      nombrePaquete: 1,
      presupuestoMaximoUSD: "$presupuesto.presupuestoMaximoUSD",
      totalGastosUSD: "$presupuesto.totalGastosUSD",
      montoRemanenteUSD: {
        $subtract: ["$presupuesto.presupuestoMaximoUSD", "$presupuesto.totalGastosUSD"]
      },
      dentroDePresupuesto: { $literal: true }
    }
  },
  { $sort: { montoRemanenteUSD: -1 } }
]);


// =============================================================================
// CONSULTA 3: Evaluación Puntual de Fechas en Actividades Embebidas ($elemMatch)
// Busca viajes con actividades programadas específicamente en septiembre de 2026
// cuyo costo individual sea mayor a $100 USD.
// =============================================================================
db.viajes.find(
  {
    desgloseActividades: {
      $elemMatch: {
        fecha: {
          $gte: ISODate("2026-09-01T00:00:00Z"),
          $lte: ISODate("2026-09-30T23:59:59Z")
        },
        costoUSD: { $gt: 100.00 }
      }
    }
  },
  {
    _id: 0,
    nombrePaquete: 1,
    "desgloseActividades.$": 1
  }
);


// =============================================================================
// CONSULTA 4: Análisis de Duración Real y Costo Promedio Diario Promediado
// Calcula dinámicamente la duración en días mediante $dateDiff y el costo real diario por viaje.
// =============================================================================
db.viajes.aggregate([
  {
    $project: {
      _id: 0,
      nombrePaquete: 1,
      duracionCalculadaDias: {
        $dateDiff: {
          startDate: "$fechas.fechaInicio",
          endDate: "$fechas.fechaFin",
          unit: "day"
        }
      },
      costoDiarioRealUSD: {
        $round: [
          {
            $divide: [
              "$presupuesto.totalGastosUSD",
              {
                $dateDiff: {
                  startDate: "$fechas.fechaInicio",
                  endDate: "$fechas.fechaFin",
                  unit: "day"
                }
              }
            ]
          },
          2
        ]
      }
    }
  },
  { $sort: { costoDiarioRealUSD: -1 } }
]);


// =============================================================================
// CONSULTA 5: Agregación Analítica Mensual de Presupuesto Consolidado
// Agrupa los viajes por año y mes de inicio para determinar el total facturado,
// el promedio gastado en vuelos y el gasto total por periodo.
// =============================================================================
db.viajes.aggregate([
  {
    $group: {
      _id: {
        año: { $year: "$fechas.fechaInicio" },
        mes: { $month: "$fechas.fechaInicio" }
      },
      totalViajes: { $sum: 1 },
      presupuestoTotalAcumuladoUSD: { $sum: "$presupuesto.presupuestoMaximoUSD" },
      gastosEjecutadosTotalesUSD: { $sum: "$presupuesto.totalGastosUSD" },
      promedioVueloUSD: { $avg: "$presupuesto.costoVueloUSD" }
    }
  },
  {
    $project: {
      _id: 0,
      periodo: {
        $concat: [
          { $toString: "$_id.año" },
          "-",
          {
            $cond: {
              if: { $lt: ["$_id.mes", 10] },
              then: { $concat: ["0", { $toString: "$_id.mes" }] },
              else: { $toString: "$_id.mes" }
            }
          }
        ]
      },
      totalViajes: 1,
      presupuestoTotalAcumuladoUSD: 1,
      gastosEjecutadosTotalesUSD: 1,
      promedioVueloUSD: { $round: ["$promedioVueloUSD", 2] }
    }
  },
  { $sort: { periodo: 1 } }
]);
