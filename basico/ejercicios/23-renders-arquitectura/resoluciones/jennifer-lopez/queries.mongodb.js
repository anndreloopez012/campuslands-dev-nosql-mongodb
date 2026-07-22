// Renders arquitectura 3D - Consultas y Operaciones
// Solución de Denise López - Ejercicio 23

use campus_renders_arquitectura

// 1. Consulta general requerida por la plantilla base
db.renders.find({})

// 2. Consulta principal enfocada en cliente: Buscar todos los proyectos encargados por "Orestes Vane"
db.renders.find(
  { cliente: "Orestes Vane" },
  { proyecto: 1, estilo_arquitectonico: 1, presupuesto_obra_usd: 1, estado_proyecto: 1, _id: 0 }
)

// 3. Consulta de proyectos en proceso o revisión con recorrido virtual 360 incluido
db.renders.find(
  { 
    estado_proyecto: { $in: ["en_proceso", "revision_cliente"] },
    "especificaciones.recorrido_virtual_360": true
  },
  { proyecto: 1, cliente: 1, ubicacion_terreno: 1, software_render: 1, _id: 0 }
)

// 4. Consulta por rango de presupuesto: Proyectos con presupuesto de obra mayor a $800,000 USD
db.renders.find(
  { presupuesto_obra_usd: { $gt: 800000 } },
  { proyecto: 1, cliente: 1, presupuesto_obra_usd: 1, inspiracion_popular: 1, _id: 0 }
)

// 5. Operación de actualización (Update): Cambiar el estado del proyecto de Balthazar Nightshade a "entregado"
db.renders.updateOne(
  { proyecto: "Complejo Residencial Muralla Trost", cliente: "Balthazar Nightshade" },
  {
    $set: {
      estado_proyecto: "entregado",
      "especificaciones.recorrido_virtual_360": true
    }
  }
)

// 6. Inserción de un nuevo encargo de render para un cliente en Tikal, Guatemala
db.renders.insertOne({
  proyecto: "Templo del Sol Maya Contemporáneo",
  cliente: "Xanthos Escandón",
  arquitecto_lead: "Zephyrine Valdivia",
  ubicacion_terreno: "Tikal",
  pais: "Guatemala",
  estilo_arquitectonico: "Vernáculo Neo-Maya",
  inspiracion_popular: "El Dorado",
  software_render: "Unreal Engine 5",
  presupuesto_obra_usd: 950000.00,
  estado_proyecto: "en_proceso",
  especificaciones: {
    renders_interiores: 6,
    renders_exteriores: 12,
    recorrido_virtual_360: true,
    resolucion_final: "8K"
  },
  fecha_solicitud: ISODate("2026-07-22T00:00:00Z")
})