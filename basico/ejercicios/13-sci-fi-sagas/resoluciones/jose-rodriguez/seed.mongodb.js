// Base de Datos de Ciencia Ficción - Script de Poblado (Seed)
use('ciencia_ficcion_db');

// Limpieza de colecciones previas
db.autores.drop();
db.universos.drop();
db.obras.drop();
db.planetas.drop();

// 1. Inserción de Autores (Colección: autores)
db.autores.insertMany([
  {
    _id: "AUT-001",
    nombre: "Isaac Asimov",
    nacionalidad: "Ruso-Estadounidense",
    añoNacimiento: 1920,
    premios: ["Hugo", "Nebula", "Grand Master"],
    estilo: "Ciencia Ficción Dura / Imperio Galáctico"
  },
  {
    _id: "AUT-002",
    nombre: "Frank Herbert",
    nacionalidad: "Estadounidense",
    añoNacimiento: 1920,
    premios: ["Hugo", "Nebula"],
    estilo: "Ciencia Ficción Ecológica y Política"
  },
  {
    _id: "AUT-003",
    nombre: "Philip K. Dick",
    nacionalidad: "Estadounidense",
    añoNacimiento: 1928,
    premios: ["Hugo"],
    estilo: "Cyberpunk / Realidad Simulada"
  },
  {
    _id: "AUT-004",
    nombre: "Arthur C. Clarke",
    nacionalidad: "Británico",
    añoNacimiento: 1917,
    premios: ["Hugo", "Nebula", "Kalinga"],
    estilo: "Hard Sci-Fi / Exploración Espacial"
  }
]);

// 2. Inserción de Universos Sci-Fi (Colección: universos)
// Modelado: Referencia manual simple 'creadorId' hacia la colección 'autores'
db.universos.insertMany([
  {
    _id: "UNI-001",
    nombre: "Universo de la Fundación",
    creadorId: "AUT-001",
    tipo: "Imperio Galáctico",
    elementosClave: ["Psicohistoria", "Trántor", "Segunda Fundación"]
  },
  {
    _id: "UNI-002",
    nombre: "Universo Dune",
    creadorId: "AUT-002",
    tipo: "Feudalismo Espacial",
    elementosClave: ["Melange", "Bene Gesserit", "Gusanos de Arena"]
  },
  {
    _id: "UNI-003",
    nombre: "Universo Odisea del Espacio",
    creadorId: "AUT-004",
    tipo: "Exploración Espacial e IA",
    elementosClave: ["HAL 9000", "Monolito", "Viaje a Júpiter"]
  }
]);

// 3. Inserción de Obras Literarias (Colección: obras)
// Modelado: Referencias manuales 'autorId' (1:N) y 'universoId' (1:N opcional)
db.obras.insertMany([
  {
    _id: "OBR-001",
    titulo: "Fundación",
    autorId: "AUT-001",
    universoId: "UNI-001",
    añoPublicacion: 1951,
    formato: "Novela",
    subgeneros: ["Space Opera", "Psicohistoria"],
    metricas: { paginas: 255, calificacionPromedio: 4.8 }
  },
  {
    _id: "OBR-002",
    titulo: "Dune",
    autorId: "AUT-002",
    universoId: "UNI-002",
    añoPublicacion: 1965,
    formato: "Novela",
    subgeneros: ["Epopeya Espacial", "Ecología"],
    metricas: { paginas: 688, calificacionPromedio: 4.9 }
  },
  {
    _id: "OBR-003",
    titulo: "2001: Una Odisea Espacial",
    autorId: "AUT-004",
    universoId: "UNI-003",
    añoPublicacion: 1968,
    formato: "Novela",
    subgeneros: ["Hard Sci-Fi", "Inteligencia Artificial"],
    metricas: { paginas: 297, calificacionPromedio: 4.7 }
  },
  {
    _id: "OBR-004",
    titulo: "¿Sueñan los androides con ovejas eléctricas?",
    autorId: "AUT-003",
    universoId: null,
    añoPublicacion: 1968,
    formato: "Novela",
    subgeneros: ["Cyberpunk", "Distopía"],
    metricas: { paginas: 210, calificacionPromedio: 4.6 }
  },
  {
    _id: "OBR-005",
    titulo: "Fundación e Imperio",
    autorId: "AUT-001",
    universoId: "UNI-001",
    añoPublicacion: 1952,
    formato: "Novela",
    subgeneros: ["Space Opera", "Militar"],
    metricas: { paginas: 247, calificacionPromedio: 4.7 }
  }
]);

// 4. Inserción de Planetas (Colección: planetas)
// Modelado: Referencia manual 'universoId' y Array de referencias manuales 'obrasDondeApareceIds'
db.planetas.insertMany([
  {
    _id: "PLA-001",
    nombre: "Arrakis",
    universoId: "UNI-002",
    obrasDondeApareceIds: ["OBR-002"],
    clima: "Desértico",
    recursoPrincipal: "Especia Melange",
    habitantesPeligrosos: ["Gusanos de arena"]
  },
  {
    _id: "PLA-002",
    nombre: "Trántor",
    universoId: "UNI-001",
    obrasDondeApareceIds: ["OBR-001", "OBR-005"],
    clima: "Ecumenópolis (Ciudad Planeta)",
    recursoPrincipal: "Administración Imperial",
    habitantesPeligrosos: []
  },
  {
    _id: "PLA-003",
    nombre: "Términus",
    universoId: "UNI-001",
    obrasDondeApareceIds: ["OBR-001", "OBR-005"],
    clima: "Fresco y Rocoso",
    recursoPrincipal: "Enciclopedia Galáctica",
    habitantesPeligrosos: []
  }
]);
