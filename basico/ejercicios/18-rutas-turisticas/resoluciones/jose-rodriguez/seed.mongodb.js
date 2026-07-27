// Base de Datos de Turismo - Script de Poblado (Seed)
use('turismo_db');

// Limpieza de colecciones previas
db.regiones.drop();
db.sitios.drop();
db.rutas.drop();

// 1. Inserción de Regiones Turísticas (Colección: regiones)
db.regiones.insertMany([
  {
    _id: "REG-001",
    nombre: "Petén - Mundo Maya",
    zonaGeografica: "Norte",
    climaPredominante: "Tropical Cálido",
    pais: "Guatemala"
  },
  {
    _id: "REG-002",
    nombre: "Valle Central y Sacatepéquez",
    zonaGeografica: "Centro",
    climaPredominante: "Templado",
    pais: "Guatemala"
  },
  {
    _id: "REG-003",
    nombre: "Las Verapaces",
    zonaGeografica: "Norte-Centro",
    climaPredominante: "Subtropical Húmedo",
    pais: "Guatemala"
  }
]);

// 2. Inserción de Sitios Turísticos con Ubicación GeoJSON (Colección: sitios)
// Modelado: Objeto GeoJSON 'ubicacion' con tipo 'Point' y coordenadas [longitud, latitud].
// Subdocumentos para 'infoPractica' y Arrays para 'atractivos' y 'servicios'.
db.sitios.insertMany([
  {
    _id: "SIT-001",
    nombre: "Parque Nacional Tikal",
    categoria: "Sitio Arqueológico",
    regionId: "REG-001",
    ubicacion: {
      type: "Point",
      coordinates: [-89.6230, 17.2220] // [Longitud, Latitud]
    },
    direccionFisica: "Flores, Petén",
    atractivosPrincipales: ["Templo del Gran Jaguar", "Templo IV", "Plaza Mayor", "Avistamiento de Fauna"],
    infoPractica: {
      precioEntradaQ: 150.00,
      tiempoRecomendadoHoras: 6,
      horarioApertura: "06:00 - 18:00"
    },
    serviciosDisponibles: [
      { tipo: "Guía Turístico Certificado", costoQ: 200.00, disponible: true },
      { tipo: "Área de Acampar", costoQ: 50.00, disponible: true },
      { tipo: "Restaurante / Museo", costoQ: 0.00, disponible: true }
    ],
    calificacionPromedio: 4.9
  },
  {
    _id: "SIT-002",
    nombre: "Antigua Guatemala (Centro Histórico)",
    categoria: "Ciudad Colonial",
    regionId: "REG-002",
    ubicacion: {
      type: "Point",
      coordinates: [-90.7339, 14.5586]
    },
    direccionFisica: "Sacatepéquez",
    atractivosPrincipales: ["Arco de Santa Catalina", "Cerro de la Cruz", "Catedral de San José", "Mercado de Artesanías"],
    infoPractica: {
      precioEntradaQ: 0.00, // Acceso público
      tiempoRecomendadoHoras: 12,
      horarioApertura: "24 Horas"
    },
    serviciosDisponibles: [
      { tipo: "Tour Gastronómico", costoQ: 175.00, disponible: true },
      { tipo: "Alquiler de Bicicletas", costoQ: 75.00, disponible: true }
    ],
    calificacionPromedio: 4.8
  },
  {
    _id: "SIT-003",
    nombre: "Monumento Natural Semuc Champey",
    categoria: "Reserva Natural",
    regionId: "REG-003",
    ubicacion: {
      type: "Point",
      coordinates: [-89.9602, 15.5342]
    },
    direccionFisica: "Lanquín, Alta Verapaz",
    atractivosPrincipales: ["Pozas Turquesas", "Mirador Natural", "Río Cahabón", "Cuevas de K'anba"],
    infoPractica: {
      precioEntradaQ: 50.00,
      tiempoRecomendadoHoras: 8,
      horarioApertura: "08:00 - 16:00"
    },
    serviciosDisponibles: [
      { tipo: "Tubing en Río", costoQ: 60.00, disponible: true },
      { tipo: "Transporte 4x4 Lanquín", costoQ: 35.00, disponible: true }
    ],
    calificacionPromedio: 4.7
  },
  {
    _id: "SIT-004",
    nombre: "Sitio Arqueológico Yaxhá",
    categoria: "Sitio Arqueológico",
    regionId: "REG-001",
    ubicacion: {
      type: "Point",
      coordinates: [-89.3980, 17.0673]
    },
    direccionFisica: "Laguna Yaxhá, Petén",
    atractivosPrincipales: ["Atardecer desde Templo 216", "Calzada Lincoln", "Avistamiento de Monos Aulladores"],
    infoPractica: {
      precioEntradaQ: 80.00,
      tiempoRecomendadoHoras: 4,
      horarioApertura: "08:00 - 18:00"
    },
    serviciosDisponibles: [
      { tipo: "Paseo en Lancha", costoQ: 100.00, disponible: true }
    ],
    calificacionPromedio: 4.8
  }
]);

// Creación obligatoria del índice espacial 2dsphere para soporte GeoJSON
db.sitios.createIndex({ ubicacion: "2dsphere" });

// 3. Inserción de Rutas Turísticas (Colección: rutas)
// Modelado: Array de referencias manuales 'puntosInteresIds' para conectar varios sitios geográficos
db.rutas.insertMany([
  {
    _id: "RUT-001",
    nombre: "Ruta del Misterio Maya",
    duracionDias: 3,
    dificultad: "Moderada",
    puntosInteresIds: ["SIT-001", "SIT-004"],
    precioOperadorQ: 1800.00,
    incluyeGuia: true
  },
  {
    _id: "RUT-002",
    nombre: "Ruta Colonial y de las Verapaces",
    duracionDias: 4,
    dificultad: "Baja",
    puntosInteresIds: ["SIT-002", "SIT-003"],
    precioOperadorQ: 2200.00,
    incluyeGuia: true
  }
]);
