// Renders arquitectura 3D 
// Solución de Denise López - Ejercicio 23

use campus_renders_arquitectura

// Crear la colección principal en minúsculas y plural
db.createCollection("renders")

// Insertar 5 proyectos de renders arquitectónicos con enfoque en clientes, nombres poco comunes y temáticas populares
db.renders.insertMany([
  {
    proyecto: "Residencia Estilo Mansión Malibú",
    cliente: "Orestes Vane",
    arquitecto_lead: "Zephyrine Valdivia",
    ubicacion_terreno: "Cráter Azul",
    pais: "Guatemala",
    estilo_arquitectonico: "Futurista / Cladismo Glass",
    inspiracion_popular: "Iron Man - Stark Tower & Mansion",
    software_render: "V-Ray / Unreal Engine 5",
    presupuesto_obra_usd: 850000.00,
    estado_proyecto: "en_proceso",
    especificaciones: {
      renders_interiores: 8,
      renders_exteriores: 4,
      recorrido_virtual_360: true,
      resolucion_final: "4K"
    },
    fecha_solicitud: ISODate("2026-05-12T00:00:00Z")
  },
  {
    proyecto: "Villa Fortificada Minas Tirith",
    cliente: "Cyrene Sterling",
    arquitecto_lead: "Hesperio Valdivia",
    ubicacion_terreno: "Laguna Lachúa",
    pais: "Guatemala",
    estilo_arquitectonico: "Neoclásico Boreal / Piedra",
    inspiracion_popular: "El Señor de los Anillos",
    software_render: "Corona Renderer / Blender",
    presupuesto_obra_usd: 1200000.00,
    estado_proyecto: "entregado",
    especificaciones: {
      renders_interiores: 12,
      renders_exteriores: 10,
      recorrido_virtual_360: true,
      resolucion_final: "8K"
    },
    fecha_solicitud: ISODate("2026-06-01T00:00:00Z")
  },
  {
    proyecto: "Complejo Residencial Muralla Trost",
    cliente: "Balthazar Nightshade",
    arquitecto_lead: "Amador Vane",
    ubicacion_terreno: "Quiriguá",
    pais: "Guatemala",
    estilo_arquitectonico: "Brutalismo Defensivo",
    inspiracion_popular: "Ataque a los Titanes",
    software_render: "Lumion 2024",
    presupuesto_obra_usd: 650000.00,
    estado_proyecto: "revision_cliente",
    especificaciones: {
      renders_interiores: 4,
      renders_exteriores: 6,
      recorrido_virtual_360: false,
      resolucion_final: "4K"
    },
    fecha_solicitud: ISODate("2026-06-20T00:00:00Z")
  },
  {
    proyecto: "Pabellón Botánico Palacio de Theed",
    cliente: "Melantho Frost",
    arquitecto_lead: "Tiberio Escandón",
    ubicacion_terreno: "Cataratas del Todra",
    pais: "Marruecos",
    estilo_arquitectonico: "Barroco Naboo / Cúpulas de Bronce",
    inspiracion_popular: "Star Wars - Episodio I",
    software_render: "D5 Render / 3ds Max",
    presupuesto_obra_usd: 920000.00,
    estado_proyecto: "entregado",
    especificaciones: {
      renders_interiores: 15,
      renders_exteriores: 8,
      recorrido_virtual_360: true,
      resolucion_final: "4K"
    },
    fecha_solicitud: ISODate("2026-07-05T00:00:00Z")
  },
  {
    proyecto: "Penthouse Gótico Mansión Wayne",
    cliente: "Orestes Vane", // Mismo cliente para demostrar múltiples encargos por cliente
    arquitecto_lead: "Kaelen Balthazar",
    ubicacion_terreno: "Semuc Champey",
    pais: "Guatemala",
    estilo_arquitectonico: "Gótico Contemporáneo",
    inspiracion_popular: "Batman - Gotham City",
    software_render: "Unreal Engine 5",
    presupuesto_obra_usd: 780000.00,
    estado_proyecto: "en_proceso",
    especificaciones: {
      renders_interiores: 10,
      renders_exteriores: 2,
      recorrido_virtual_360: true,
      resolucion_final: "4K"
    },
    fecha_solicitud: ISODate("2026-07-15T00:00:00Z")
  }
])

//indices para optimizar consultas frecuentes

// Este indice permite buscar todos los renders y proyectos contratados por un cliente específico
db.renders.createIndex({ cliente: 1 })

// Permite filtrar los proyectos según su fase de entrega ('entregado', 'en_proceso', 'revision_cliente').Ayuda a generar dashboards operacionales de entregas pendientes.
db.renders.createIndex({ estado_proyecto: 1 })

// Acelera la ordenación y filtrado por presupuesto de obra, facilitando reportes financieros y segmentación de clientes VIP o de alto presupuesto.
db.renders.createIndex({ presupuesto_obra_usd: -1 })