use("campus_renders_arquitectura");

db.renders.drop();

db.renders.insertMany([
  {
    nombre: "Torre Residencial Aurora",
    cliente: "Constructora Vértice S.A.",
    categoria: "exterior",
    precio: 2500000,
    activo: true,
    detalles_tecnicos: {
      resolucion: "4K",
      software: "3ds Max + V-Ray",
      tiempo_render_horas: 14
    },
    etiquetas: ["exterior", "nocturno", "residencial", "lumion"]
  },
  {
    nombre: "Loft Minimalista Centro",
    cliente: "Elena Gómez",
    categoria: "interior",
    precio: 1200000,
    activo: true,
    detalles_tecnicos: {
      resolucion: "Full HD",
      software: "Blender + Cycles",
      tiempo_render_horas: 8
    },
    etiquetas: ["interior", "minimalista", "moderno"]
  },
  {
    nombre: "Centro Comercial Andino",
    cliente: "Inmobiliaria Metrópolis",
    categoria: "comercial",
    precio: 4500000,
    activo: true,
    detalles_tecnicos: {
      resolucion: "8K",
      software: "Cinema 4D + Corona",
      tiempo_render_horas: 24
    },
    etiquetas: ["comercial", "exterior", "diurno"]
  },
  {
    nombre: "Casa Campestre El Bosque",
    cliente: "Carlos Mendoza",
    categoria: "residencial",
    precio: 1800000,
    activo: false,
    detalles_tecnicos: {
      resolucion: "4K",
      software: "SketchUp + V-Ray",
      tiempo_render_horas: 10
    },
    etiquetas: ["residencial", "natural", "sostenible"]
  },
  {
    nombre: "Oficinas Corporativas Nexus",
    cliente: "Tech Solutions Corp",
    categoria: "comercial",
    precio: 3200000,
    activo: true,
    detalles_tecnicos: {
      resolucion: "4K",
      software: "Revit + Lumion",
      tiempo_render_horas: 12
    },
    etiquetas: ["interior", "oficinas", "corporativo"]
  }
]);

print("Datos iniciales insertados correctamente en la colección 'renders'.");