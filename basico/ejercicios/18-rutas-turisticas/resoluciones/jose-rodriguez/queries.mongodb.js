// Base de Datos de Turismo - Consultas Geográficas y Analíticas Nativas
use('turismo_db');

// =============================================================================
// CONSULTA 1: Búsqueda Espacial de Proximidad GeoJSON ($near)
// Encuentra los sitios turísticos más cercanos a la Isla de Flores, Petén
// Coordenadas de Origen: Longitud -89.8883, Latitud 16.9298.
// Filtra sitios dentro de un radio de 80,000 metros (80 km).
// =============================================================================
db.sitios.find(
  {
    ubicacion: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [-89.8883, 16.9298]
        },
        $maxDistance: 80000 // Distancia en metros
      }
    }
  },
  {
    _id: 0,
    sitioId: "$_id",
    nombre: 1,
    categoria: 1,
    coordenadas: "$ubicacion.coordinates",
    precioEntrada: "$infoPractica.precioEntradaQ"
  }
);


// =============================================================================
// CONSULTA 2: Búsqueda Geográfica por Área Delimitada / Bounding Box ($geoWithin)
// Busca sitios ubicados dentro de una ventana geográfica que abarca la región Norte/Petén
// definida por un rectángulo (Polígono).
// =============================================================================
db.sitios.find(
  {
    ubicacion: {
      $geoWithin: {
        $box: [
          [-90.5000, 16.5000], // Esquina inferior izquierda [Long, Lat]
          [-89.0000, 17.8000]  // Esquina superior derecha [Long, Lat]
        ]
      }
    }
  },
  {
    _id: 0,
    nombre: 1,
    categoria: 1,
    direccionFisica: 1,
    coordenadas: "$ubicacion.coordinates"
  }
);


// =============================================================================
// CONSULTA 3: Proyección Limpia con Filtro Combinado Atractivo y Precio
// Busca sitios con entradas menores o iguales a Q100 que ofrezcan "Avistamiento" o "Mirador".
// =============================================================================
db.sitios.find(
  {
    "infoPractica.precioEntradaQ": { $lte: 100.00 },
    atractivosPrincipales: { $elemMatch: { $regex: "Avistamiento|Mirador", $options: "i" } }
  },
  {
    _id: 0,
    nombre: 1,
    categoria: 1,
    precioEntradaQ: "$infoPractica.precioEntradaQ",
    atractivosPrincipales: 1
  }
);


// =============================================================================
// CONSULTA 4: Resolución de Referencias en Rutas para Reconstruir Mapa Geográfico ($lookup)
// Une cada 'ruta' con los 'sitios' referenciados en 'puntosInteresIds', proyectando
// la secuencia ordenada de puntos con sus coordenadas GeoJSON.
// =============================================================================
db.rutas.aggregate([
  {
    $lookup: {
      from: "sitios",
      localField: "puntosInteresIds",
      foreignField: "_id",
      as: "puntosDetalle"
    }
  },
  {
    $project: {
      _id: 0,
      rutaId: "$_id",
      nombreRuta: "$nombre",
      duracionDias: 1,
      precioOperadorQ: 1,
      totalParadas: { $size: "$puntosDetalle" },
      itinerarioGeografico: {
        $map: {
          input: "$puntosDetalle",
          as: "sitio",
          in: {
            nombre: "$$sitio.nombre",
            categoria: "$$sitio.categoria",
            coordenadas: "$$sitio.ubicacion.coordinates"
          }
        }
      }
    }
  }
]);


// =============================================================================
// CONSULTA 5: Agregación Analítica Territorial por Región ($group + $lookup)
// Consolida el costo promedio de entradas, total de atractivos ofertados y
// la lista de sitios registrados en cada región geográfica.
// =============================================================================
db.sitios.aggregate([
  {
    $group: {
      _id: "$regionId",
      totalSitios: { $sum: 1 },
      precioEntradaPromedioQ: { $avg: "$infoPractica.precioEntradaQ" },
      calificacionPromedioRegion: { $avg: "$calificacionPromedio" },
      nombresSitios: { $push: "$nombre" }
    }
  },
  {
    $lookup: {
      from: "regiones",
      localField: "_id",
      foreignField: "_id",
      as: "infoRegion"
    }
  },
  { $unwind: "$infoRegion" },
  {
    $project: {
      _id: 0,
      regionId: "$_id",
      nombreRegion: "$infoRegion.nombre",
      zonaGeografica: "$infoRegion.zonaGeografica",
      totalSitios: 1,
      precioEntradaPromedioQ: { $round: ["$precioEntradaPromedioQ", 2] },
      calificacionPromedioRegion: { $round: ["$calificacionPromedioRegion", 2] },
      sitiosDestacados: "$nombresSitios"
    }
  },
  { $sort: { totalSitios: -1 } }
]);
