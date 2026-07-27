// Base de Datos de Ciencia Ficción - Consultas Nativas de Referencias Manuales
use('ciencia_ficcion_db');

// =============================================================================
// CONSULTA 1: Resolución de Referencia Manual Simple (1:N) con $lookup
// Une la colección 'obras' con 'autores' resolviendo la referencia manual 'autorId'.
// =============================================================================
db.obras.aggregate([
  {
    $lookup: {
      from: "autores",
      localField: "autorId",
      foreignField: "_id",
      as: "autorInfo"
    }
  },
  {
    $unwind: "$autorInfo"
  },
  {
    $project: {
      _id: 0,
      obraId: "$_id",
      titulo: 1,
      añoPublicacion: 1,
      autor: "$autorInfo.nombre",
      nacionalidadAutor: "$autorInfo.nacionalidad"
    }
  },
  { $sort: { añoPublicacion: 1 } }
]);


// =============================================================================
// CONSULTA 2: Resolución Doble de Referencias Manuales en Cadena
// Une 'obras' con sus 'autores' Y con sus 'universos' correspondientes.
// =============================================================================
db.obras.aggregate([
  {
    $match: { universoId: { $ne: null } }
  },
  {
    $lookup: {
      from: "autores",
      localField: "autorId",
      foreignField: "_id",
      as: "autor"
    }
  },
  {
    $lookup: {
      from: "universos",
      localField: "universoId",
      foreignField: "_id",
      as: "universo"
    }
  },
  { $unwind: "$autor" },
  { $unwind: "$universo" },
  {
    $project: {
      _id: 0,
      tituloObra: "$titulo",
      autor: "$autor.nombre",
      universo: "$universo.nombre",
      tipoUniverso: "$universo.tipo"
    }
  }
]);


// =============================================================================
// CONSULTA 3: Resolución de Array de Referencias Manuales (N:M)
// Une 'planetas' con las 'obras' donde aparece leyendo el array de IDs 'obrasDondeApareceIds'.
// =============================================================================
db.planetas.aggregate([
  {
    $lookup: {
      from: "obras",
      localField: "obrasDondeApareceIds",
      foreignField: "_id",
      as: "obrasRelacionadas"
    }
  },
  {
    $project: {
      _id: 0,
      planeta: "$nombre",
      clima: 1,
      recursoPrincipal: 1,
      totalApariciones: { $size: "$obrasRelacionadas" },
      titulosObras: "$obrasRelacionadas.titulo"
    }
  }
]);


// =============================================================================
// CONSULTA 4: Agregación con Filtrado por Referencia Manual Directa y Conteo
// Filtra obras pertenecientes al universo "UNI-001" sin hacer JOIN previa.
// =============================================================================
db.obras.countDocuments({
  universoId: "UNI-001"
});


// =============================================================================
// CONSULTA 5: Agregación Analítica de Métricas por Universo Referenciado
// Agrupa obras por 'universoId', calcula promedios de páginas y une información del universo.
// =============================================================================
db.obras.aggregate([
  {
    $match: { universoId: { $ne: null } }
  },
  {
    $group: {
      _id: "$universoId",
      totalObras: { $sum: 1 },
      promedioPaginas: { $avg: "$metricas.paginas" },
      calificacionPromedio: { $avg: "$metricas.calificacionPromedio" }
    }
  },
  {
    $lookup: {
      from: "universos",
      localField: "_id",
      foreignField: "_id",
      as: "universoInfo"
    }
  },
  { $unwind: "$universoInfo" },
  {
    $project: {
      _id: 0,
      universoId: "$_id",
      nombreUniverso: "$universoInfo.nombre",
      totalObras: 1,
      promedioPaginas: { $round: ["$promedioPaginas", 0] },
      calificacionPromedio: { $round: ["$calificacionPromedio", 2] }
    }
  },
  { $sort: { totalObras: -1 } }
]);
