// Base de Datos de Libros - Consultas Nativas Orientadas a Proyecciones Limpias
use('biblioteca_db');

// =============================================================================
// CONSULTA 1: Proyección Inclusiva Estricta (Inclusión Positiva)
// Selecciona únicamente título, año de publicación y calificación de métricas,
// suprimiendo explícitamente el identificador _id para una API de catálogo.
// =============================================================================
db.libros.find(
  {
    "metricas.calificacionPromedio": { $gte: 4.5 }
  },
  {
    _id: 0,
    titulo: 1,
    añoPublicacion: 1,
    generos: 1,
    "metricas.calificacionPromedio": 1
  }
).sort({ añoPublicacion: -1 });


// =============================================================================
// CONSULTA 2: Proyección Exclusiva Táctica (Exclusión Negativa)
// Retorna la información del libro suprimiendo objetos pesados o confidenciales
// como 'camposInternos' y 'detallesFisicos.dimensionesCm'.
// =============================================================================
db.libros.find(
  {
    generos: { $in: ["Realismo Mágico"] }
  },
  {
    camposInternos: 0,
    "detallesFisicos.dimensionesCm": 0,
    "detallesFisicos.pesoGramos": 0
  }
);


// =============================================================================
// CONSULTA 3: Proyección Acotada sobre Subdocumentos y Arrays ($slice)
// Proyecta el título, la editorial (solo nombre) y limita el array de idiomas
// para mostrar únicamente los 2 primeros idiomas disponibles.
// =============================================================================
db.libros.find(
  {
    "editorial.pais": "Argentina"
  },
  {
    _id: 0,
    titulo: 1,
    "editorial.nombre": 1,
    idiomasDisponibles: { $slice: 2 }
  }
);


// =============================================================================
// CONSULTA 4: Proyección Transformadora en Agregación ($project)
// Reestructura el documento: renombrado de llaves, formateo de campos calculados
// y clasificación condicional del libro según sus ventas.
// =============================================================================
db.libros.aggregate([
  {
    $project: {
      _id: 0,
      codigoIsbn: "$isbn",
      tituloLibro: "$titulo",
      editorialOrigen: "$editorial.nombre",
      totalPaginas: "$detallesFisicos.paginas",
      clasificacionVentas: {
        $cond: {
          if: { $gte: ["$metricas.ejemplaresVendidos", 10000000] },
          then: "BESTSELLER_HISTORICO",
          else: "VENTA_ESTANDAR"
        }
      },
      puntuacion: "$metricas.calificacionPromedio"
    }
  },
  { $sort: { puntuacion: -1 } }
]);


// =============================================================================
// CONSULTA 5: Agregación Compleja con $lookup y Depuración Limpia ($project)
// Cruza libros con su autor, une las entidades y elimina campos de unión
// temporales para entregar un JSON cliente perfectamente estructurado.
// =============================================================================
db.libros.aggregate([
  {
    $lookup: {
      from: "autores",
      localField: "autorId",
      foreignField: "_id",
      as: "autorDetalle"
    }
  },
  {
    $unwind: "$autorDetalle"
  },
  {
    $project: {
      _id: 0,
      libroId: "$_id",
      titulo: 1,
      añoPublicacion: 1,
      autor: {
        $concat: ["$autorDetalle.nombre", " ", "$autorDetalle.apellido"]
      },
      nacionalidadAutor: "$autorDetalle.paisOrigen",
      editorial: "$editorial.nombre",
      calificacion: "$metricas.calificacionPromedio"
    }
  },
  { $sort: { calificacion: -1 } }
]);
