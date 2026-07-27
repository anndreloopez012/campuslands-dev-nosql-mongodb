// Base de Datos de Diseño 3D Arquitectura - Script de Poblado (Seed)
use('archviz_3d_db');

// Limpieza de colecciones previas
db.clientes.drop();
db.proyectos3d.drop();

// 1. Inserción de Clientes (Colección: clientes)
db.clientes.insertMany([
  {
    _id: "CLI-001",
    nombreEmpresa: "Inmobiliaria Bosques del Norte",
    tipoCliente: "DESARROLLADORA", // DESARROLLADORA, FIRMA_ARQUITECTURA, PARTICULAR
    contactoPrincipal: {
      nombre: "Arq. Sofia Estrada",
      email: "s.estrada@bosquesnorte.com",
      telefono: "+502 5555-9012"
    },
    categoria: "VIP"
  },
  {
    _id: "CLI-002",
    nombreEmpresa: "Studio Concepto Interior",
    tipoCliente: "FIRMA_ARQUITECTURA",
    contactoPrincipal: {
      nombre: "Lic. Fernando Ruiz",
      email: "fruiz@conceptointerior.com",
      telefono: "+502 5555-3456"
    },
    categoria: "REGULAR"
  },
  {
    _id: "CLI-003",
    nombreEmpresa: "Residencia Particular Garzaro",
    tipoCliente: "PARTICULAR",
    contactoPrincipal: {
      nombre: "Ing. Mateo Garzaro",
      email: "m.garzaro@email.com",
      telefono: "+502 5555-7890"
    },
    categoria: "REGULAR"
  }
]);

// 2. Inserción de Proyectos 3D (Colección: proyectos3d)
// Modelado: Campo 'clienteId' como clave foránea legible,
// Subdocumentos 'especificacionesTecnicas' y 'presupuesto', Array 'entregables'.
db.proyectos3d.insertMany([
  {
    _id: "PRJ-3D-001",
    clienteId: "CLI-001",
    nombreProyecto: "Torre Residencial Altavista - Renders Exteriores",
    tipoEstructura: "Residencial Multi-familia",
    estadoProyecto: "REVISION_CLIENTE", // EN_DISEÑO, REVISION_CLIENTE, EN_RENDER, COMPLETADO
    especificacionesTecnicas: {
      softwareModelado: "Revit 2026",
      motorRender: "3ds Max / V-Ray",
      resolucion: "4K Ultra HD"
    },
    entregables: [
      { tipo: "Render Fachada Principal", cantidad: 3, completado: true },
      { tipo: "Recorrido Virtual 360", cantidad: 1, completado: false }
    ],
    presupuesto: {
      montoTotalUSD: 4500.00,
      anticipoPagadoUSD: 2250.00,
      pagadoTotalmente: false
    },
    etiquetas: ["Exterior", "Fotorrealismo", "Dron"],
    fechaEntrega: ISODate("2026-08-30T00:00:00Z")
  },
  {
    _id: "PRJ-3D-002",
    clienteId: "CLI-001",
    nombreProyecto: "Plaza Comercial El Roble - Masterplan 3D",
    tipoEstructura: "Comercial",
    estadoProyecto: "EN_DISENO",
    especificacionesTecnicas: {
      softwareModelado: "Rhino 8",
      motorRender: "Unreal Engine 5",
      resolucion: "Interactive Real-Time"
    },
    entregables: [
      { tipo: "Video Animado ArchViz", cantidad: 1, completado: false },
      { tipo: "Plantas 3D Renderizadas", cantidad: 6, completado: false }
    ],
    presupuesto: {
      montoTotalUSD: 8000.00,
      anticipoPagadoUSD: 4000.00,
      pagadoTotalmente: false
    },
    etiquetas: ["Comercial", "Animación", "VR"],
    fechaEntrega: ISODate("2026-10-15T00:00:00Z")
  },
  {
    _id: "PRJ-3D-003",
    clienteId: "CLI-002",
    nombreProyecto: "Penthouse Zona 14 - Interiorismo 3D",
    tipoEstructura: "Interiorismo",
    estadoProyecto: "COMPLETADO",
    especificacionesTecnicas: {
      softwareModelado: "3ds Max",
      motorRender: "Corona Renderer",
      resolucion: "4K Ultra HD"
    },
    entregables: [
      { tipo: "Render Sala / Comedor", cantidad: 4, completado: true },
      { tipo: "Render Habitación Principal", cantidad: 2, completado: true }
    ],
    presupuesto: {
      montoTotalUSD: 2800.00,
      anticipoPagadoUSD: 2800.00,
      pagadoTotalmente: true
    },
    etiquetas: ["Interior", "Iluminación_Cálida", "Lujo"],
    fechaEntrega: ISODate("2026-06-10T00:00:00Z")
  },
  {
    _id: "PRJ-3D-004",
    clienteId: "CLI-003",
    nombreProyecto: "Casa de Campo Antigua - Render 3D",
    tipoEstructura: "Residencial Unifamiliar",
    estadoProyecto: "REVISION_CLIENTE",
    especificacionesTecnicas: {
      softwareModelado: "SketchUp Pro",
      motorRender: "Lumion 2024",
      resolucion: "2K Full HD"
    },
    entregables: [
      { tipo: "Vistas 3D Exteriores", cantidad: 4, completado: true }
    ],
    presupuesto: {
      montoTotalUSD: 1200.00,
      anticipoPagadoUSD: 600.00,
      pagadoTotalmente: false
    },
    etiquetas: ["Residencial", "Paisajismo"],
    fechaEntrega: ISODate("2026-08-05T00:00:00Z")
  }
]);
