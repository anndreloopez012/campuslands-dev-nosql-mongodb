// Base de Datos de Control de Soldadura - Consultas Avanzadas (Aggregation, $group, $avg, $sort)
use('soldadura_db');

// =============================================================================
// CONSULTA 1: Búsqueda con Ordenamiento ($sort) y Límite ($limit)
// Obtiene las 3 juntas soldadas de mayor espesor ordenadas de forma descendente.
// =============================================================================
db.juntas_soldadas.find(
  {},
  {
    _id: 0,
    identificadorJunta: 1,
    procesoSoldadura: 1,
    espesorMM: "$especificacionesTecnicas.espesorMM",
    estadoInspeccion: 1
  }
).sort({ "especificacionesTecnicas.espesorMM": -1 }).limit(3);


// =============================================================================
// CONSULTA 2: Agregación con Promedio ($avg) y Conteo ($sum) por Proceso
// Calcula el espesor promedio ($avg) y la cantidad total de juntas por proceso de soldadura.
// =============================================================================
db.juntas_soldadas.aggregate([
  {
    $group: {
      _id: "$procesoSoldadura",
      totalJuntas: { $sum: 1 },
      espesorPromedioMM: { $avg: "$especificacionesTecnicas.espesorMM" }
    }
  },
  {
    $sort: { espesorPromedioMM: -1 }
  }
]);


// =============================================================================
// CONSULTA 3: Agregación para Métricas de Control de Calidad por Estado
// Agrupa las juntas por estado de inspección, contando el total por estado
// y obteniendo el promedio de espesor inspeccionado.
// =============================================================================
db.juntas_soldadas.aggregate([
  {
    $group: {
      _id: "$estadoInspeccion",
      cantidadJuntas: { $sum: 1 },
      espesorPromedioMM: { $avg: "$especificacionesTecnicas.espesorMM" }
    }
  },
  {
    $sort: { cantidadJuntas: -1 }
  }
]);


// =============================================================================
// CONSULTA 4: Agregación Filtrada ($match) y Resumen por Soldador
// Analiza el desempeño del soldador "WLD-08", calculando total de inspecciones,
// espesor promedio trabajado y recopilando la lista de estados de sus juntas.
// =============================================================================
db.juntas_soldadas.aggregate([
  {
    $match: { codigoSoldador: "WLD-08" }
  },
  {
    $group: {
      _id: "$codigoSoldador",
      totalInspecciones: { $sum: 1 },
      espesorPromedioMM: { $avg: "$especificacionesTecnicas.espesorMM" },
      estadosObtenidos: { $push: "$estadoInspeccion" }
    }
  }
]);


// =============================================================================
// CONSULTA 5: Agregación de Defectología con Descomposición ($unwind)
// Desglosa el array de defectos para contar la frecuencia de cada tipo de defecto
// según el método de ensayo NDT utilizado.
// =============================================================================
db.juntas_soldadas.aggregate([
  { $unwind: "$defectosEncontrados" },
  {
    $group: {
      _id: {
        tipoEnsayo: "$detallesInspeccion.tipoEnsayo",
        defecto: "$defectosEncontrados"
      },
      frecuenciaDefecto: { $sum: 1 }
    }
  },
  {
    $sort: { frecuenciaDefecto: -1 }
  }
]);
