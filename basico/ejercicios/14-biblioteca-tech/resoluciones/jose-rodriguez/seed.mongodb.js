// Base de Datos de Libros - Script de Poblado (Seed)
use('biblioteca_db');

// Limpieza de colecciones previas
db.autores.drop();
db.libros.drop();
db.resenas.drop();

// 1. Inserción de Autores (Colección: autores)
db.autores.insertMany([
  {
    _id: "AUT-001",
    nombre: "Gabriel",
    apellido: "García Márquez",
    paisOrigen: "COL",
    añoNacimiento: 1927,
    estado: "FALLECIDO"
  },
  {
    _id: "AUT-002",
    nombre: "Isabel",
    apellido: "Allende",
    paisOrigen: "CHL",
    añoNacimiento: 1942,
    estado: "ACTIVO"
  },
  {
    _id: "AUT-003",
    nombre: "Mario",
    apellido: "Vargas Llosa",
    paisOrigen: "PER",
    añoNacimiento: 1936,
    estado: "ACTIVO"
  },
  {
    _id: "AUT-004",
    nombre: "Jorge Luis",
    apellido: "Borges",
    paisOrigen: "ARG",
    añoNacimiento: 1899,
    estado: "FALLECIDO"
  }
]);

// 2. Inserción de Libros (Colección: libros)
// Modelado: Subdocumentos para datos editoriales/físicos/métricas y campos internos de auditoría
db.libros.insertMany([
  {
    _id: "LIB-001",
    titulo: "Cien años de soledad",
    autorId: "AUT-001",
    isbn: "978-0307474728",
    añoPublicacion: 1967,
    generos: ["Realismo Mágico", "Ficción Literaria", "Novela"],
    idiomasDisponibles: ["Español", "Inglés", "Francés", "Alemán", "Italiano"],
    editorial: {
      nombre: "Editorial Sudamericana",
      pais: "Argentina",
      codigoRegistro: "EDI-SUD-1967"
    },
    detallesFisicos: {
      paginas: 496,
      encuadernacion: "Tapa Dura",
      pesoGramos: 650,
      dimensionesCm: "15 x 3.5 x 23"
    },
    metricas: {
      ejemplaresVendidos: 50000000,
      calificacionPromedio: 4.8,
      totalResenas: 12500
    },
    camposInternos: {
      ubicacionPasillo: "A-12-EST3",
      stockAlmacen: 140,
      costoAdquisicionUSD: 8.50,
      hashVerificacion: "a8f1082c418e",
      codigoAuditoria: "AUD-2026-001"
    }
  },
  {
    _id: "LIB-002",
    titulo: "La casa de los espíritus",
    autorId: "AUT-002",
    isbn: "978-0525433477",
    añoPublicacion: 1982,
    generos: ["Realismo Mágico", "Ficción Histórica"],
    idiomasDisponibles: ["Español", "Inglés", "Portugués"],
    editorial: {
      nombre: "Plaza & Janés",
      pais: "España",
      codigoRegistro: "EDI-PLZ-1982"
    },
    detallesFisicos: {
      paginas: 448,
      encuadernacion: "Tapa Blanda",
      pesoGramos: 420,
      dimensionesCm: "12.5 x 2.5 x 19"
    },
    metricas: {
      ejemplaresVendidos: 12000000,
      calificacionPromedio: 4.6,
      totalResenas: 8400
    },
    camposInternos: {
      ubicacionPasillo: "B-04-EST1",
      stockAlmacen: 85,
      costoAdquisicionUSD: 6.20,
      hashVerificacion: "f4e2091a318b",
      codigoAuditoria: "AUD-2026-002"
    }
  },
  {
    _id: "LIB-003",
    titulo: "La ciudad y los perros",
    autorId: "AUT-003",
    isbn: "978-8420471839",
    añoPublicacion: 1963,
    generos: ["Novela Urbana", "Ficción Literaria"],
    idiomasDisponibles: ["Español", "Francés"],
    editorial: {
      nombre: "Seix Barral",
      pais: "España",
      codigoRegistro: "EDI-SEI-1963"
    },
    detallesFisicos: {
      paginas: 400,
      encuadernacion: "Tapa Blanda",
      pesoGramos: 380,
      dimensionesCm: "13 x 2.2 x 20"
    },
    metricas: {
      ejemplaresVendidos: 5000000,
      calificacionPromedio: 4.4,
      totalResenas: 3100
    },
    camposInternos: {
      ubicacionPasillo: "C-01-EST5",
      stockAlmacen: 30,
      costoAdquisicionUSD: 5.80,
      hashVerificacion: "b1c3041d889e",
      codigoAuditoria: "AUD-2026-003"
    }
  },
  {
    _id: "LIB-004",
    titulo: "Ficciones",
    autorId: "AUT-004",
    isbn: "978-0307950925",
    añoPublicacion: 1944,
    generos: ["Cuentos", "Fantasía", "Filosofía"],
    idiomasDisponibles: ["Español", "Inglés", "Alemán", "Japonés"],
    editorial: {
      nombre: "Editorial Sur",
      pais: "Argentina",
      codigoRegistro: "EDI-SUR-1944"
    },
    detallesFisicos: {
      paginas: 224,
      encuadernacion: "Tapa Dura",
      pesoGramos: 310,
      dimensionesCm: "14 x 1.8 x 21"
    },
    metricas: {
      ejemplaresVendidos: 8000000,
      calificacionPromedio: 4.7,
      totalResenas: 6200
    },
    camposInternos: {
      ubicacionPasillo: "A-02-EST2",
      stockAlmacen: 50,
      costoAdquisicionUSD: 7.00,
      hashVerificacion: "c3d4052e990a",
      codigoAuditoria: "AUD-2026-004"
    }
  }
]);

// 3. Inserción de Reseñas (Colección: resenas)
db.resenas.insertMany([
  {
    _id: "RES-001",
    libroId: "LIB-001",
    usuario: "lector_apasionado",
    calificacion: 5,
    comentario: "Una obra cumbre de la literatura universal.",
    fecha: ISODate("2026-01-10T00:00:00Z")
  },
  {
    _id: "RES-002",
    libroId: "LIB-001",
    usuario: "critica_literaria",
    calificacion: 5,
    comentario: "Estructura narrativa perfecta.",
    fecha: ISODate("2026-02-14T00:00:00Z")
  },
  {
    _id: "RES-003",
    libroId: "LIB-004",
    usuario: "filosofo_urbano",
    calificacion: 4.5,
    comentario: "Relatos laberínticos e intelectualmente estimulantes.",
    fecha: ISODate("2026-03-01T00:00:00Z")
  }
]);
