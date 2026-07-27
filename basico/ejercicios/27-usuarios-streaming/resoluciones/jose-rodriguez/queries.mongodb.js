// Base de Datos de Streaming Multimedia - Consultas Avanzadas sobre Documentos de Usuario
use('streaming_media_db');

// =============================================================================
// CONSULTA 1: Top Usuarios Más Activos (.sort() + .limit())
// Muestra los 3 usuarios con mayor tiempo de reproducción acumulado.
// =============================================================================
db.usuarios.find(
  {},
  {
    _id: 0,
    username: 1,
    "perfil.nombreCompleto": 1,
    "perfil.pais": 1,
    plan: "$suscripcion.plan",
    horasConsumidasTotales: 1
  }
).sort({ horasConsumidasTotales: -1 }).limit(3);


// =============================================================================
// CONSULTA 2: Métricas de Consumo por Plan de Suscripción ($group + $avg)
// Agrupa usuarios por tipo de plan, calculando el consumo promedio de horas
// y la facturación mensual proyectada por categoría de usuario.
// =============================================================================
db.usuarios.aggregate([
  {
    $group: {
      _id: "$suscripcion.plan",
      totalUsuarios: { $sum: 1 },
      promedioHorasConsumidas: { $avg: "$horasConsumidasTotales" },
      ingresoMensualTotalUSD: { $sum: "$suscripcion.precioMensualUSD" }
    }
  },
  {
    $sort: { promedioHorasConsumidas: -1 }
  }
]);


// =============================================================================
// CONSULTA 3: Análisis de Preferencias de Géneros ($unwind + $group)
// Desglosa el array 'generosPreferidos' de cada usuario para identificar
// cuáles son las categorías más demandadas en la plataforma.
// =============================================================================
db.usuarios.aggregate([
  { $unwind: "$generosPreferidos" },
  {
    $group: {
      _id: "$generosPreferidos",
      totalUsuariosQueLoPrefieren: { $sum: 1 },
      paisesInteresados: { $addToSet: "$perfil.pais" }
    }
  },
  {
    $sort: { totalUsuariosQueLoPrefieren: -1 }
  }
]);


// =============================================================================
// CONSULTA 4: Auditoría de Contenido Guardado en Favoritos ($unwind + $match + $group)
// Analiza qué contenidos específicos (Películas o Canciones) han sido marcados
// como favoritos por los usuarios con suscripción activa.
// =============================================================================
db.usuarios.aggregate([
  {
    $match: { "suscripcion.estado": "ACTIVA" }
  },
  { $unwind: "$favoritos" },
  {
    $group: {
      _id: {
        contenidoId: "$favoritos.contenidoId",
        titulo: "$favoritos.titulo",
        tipo: "$favoritos.tipo"
      },
      vecesGuardado: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      contenidoId: "$_id.contenidoId",
      titulo: "$_id.titulo",
      tipo: "$_id.tipo",
      vecesGuardado: 1
    }
  },
  {
    $sort: { vecesGuardado: -1 }
  }
]);


// =============================================================================
// CONSULTA 5: Evaluación de Calificaciones de Reproducción por Usuario ($unwind + $group)
// Desestructura el historial de reproducción de los usuarios para calcular la
// calificación promedio otorgada a los contenidos vistos/escuchados.
// =============================================================================
db.usuarios.aggregate([
  { $unwind: "$historialReproduccion" },
  {
    $group: {
      _id: "$username",
      totalReproduccionesRegistradas: { $sum: 1 },
      calificacionPromedioDada: { $avg: "$historialReproduccion.calificacionUsuario" },
      minutosTotalesEnHistorial: { $sum: "$historialReproduccion.minConsumidos" }
    }
  },
  {
    $sort: { calificacionPromedioDada: -1 }
  }
]);
