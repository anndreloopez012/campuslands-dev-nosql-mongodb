// Agenda de tatuajes
// Solución de Denise López - Ejercicio 20

use campus_tattoo_agenda

// Crear la colección principal en minúsculas y plural
db.createCollection("citas")

// Insertar 5 citas de tatuajes enfocado en estados, fechas y temas populares
db.citas.insertMany([
  {
    cliente: "Orestes Vane",
    tatuador: "Hesperio Valdivia",
    estudio_ubicacion: "Antigua Guatemala",
    pais: "Guatemala",
    estilo: "Anime / Blackwork",
    diseno: "Dragón Haku - El viaje de Chihiro",
    zona_cuerpo: "Antebrazo",
    duracion_estimada_horas: 4,
    precio_estimado_usd: 250.00,
    deposito_pagado_usd: 50.00,
    estado_cita: "confirmada",
    fecha_cita: ISODate("2026-08-15T14:00:00Z")
  },
  {
    cliente: "Cyrene Sterling",
    tatuador: "Cirene Mondragón",
    estudio_ubicacion: "Panajachel",
    pais: "Guatemala",
    estilo: "Microrealismo",
    diseno: "Casco de Darth Vader - Star Wars",
    zona_cuerpo: "Musa / Hombro",
    duracion_estimada_horas: 3,
    precio_estimado_usd: 180.00,
    deposito_pagado_usd: 40.00,
    estado_cita: "pendiente",
    fecha_cita: ISODate("2026-08-18T10:00:00Z")
  },
  {
    cliente: "Balthazar Nightshade",
    tatuador: "Amador Vane",
    estudio_ubicacion: "Quiriguá",
    pais: "Guatemala",
    estilo: "Neotradicional",
    diseno: "Alas de la Libertad - Ataque a los Titanes",
    zona_cuerpo: "Espalda",
    duracion_estimada_horas: 6,
    precio_estimado_usd: 400.00,
    deposito_pagado_usd: 100.00,
    estado_cita: "completada",
    fecha_cita: ISODate("2026-07-10T11:00:00Z")
  },
  {
    cliente: "Melantho Frost",
    tatuador: "Tiberio Escandón",
    estudio_ubicacion: "Cataratas del Todra",
    pais: "Marruecos",
    estilo: "Geométrico",
    diseno: "Símbolo de la Alianza Rebelde - Star Wars",
    zona_cuerpo: "Muñeca",
    duracion_estimada_horas: 2,
    precio_estimado_usd: 120.00,
    deposito_pagado_usd: 30.00,
    estado_cita: "cancelada",
    fecha_cita: ISODate("2026-07-19T16:00:00Z")
  },
  {
    cliente: "Xanthos Escandón",
    tatuador: "Kaelen Balthazar",
    estudio_ubicacion: "Somoto",
    pais: "Nicaragua",
    estilo: "Tradicional Americano",
    diseno: "Pokébola Clásica - Pokémon",
    zona_cuerpo: "Pantorrilla",
    duracion_estimada_horas: 3,
    precio_estimado_usd: 150.00,
    deposito_pagado_usd: 50.00,
    estado_cita: "confirmada",
    fecha_cita: ISODate("2026-08-22T15:00:00Z")
  }
])

// Crear índices para acelerar búsquedas por fechas y estado de las citas
db.citas.createIndex({ fecha_cita: 1 })
db.citas.createIndex({ estado_cita: 1 })
db.citas.createIndex({ tatuador: 1 })