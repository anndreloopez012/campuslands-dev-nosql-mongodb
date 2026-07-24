// Validación básica de documentos 
// Solución de Denise López - Ejercicio 29

use campus_validacion_basica

// Crear la colección principal con Schema Validation ($jsonSchema)
db.createCollection("dispositivos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["codigo_activo", "nombre_equipo", "categoria", "responsable", "sede_laboratorio", "precio_usd", "estado"],
      properties: {
        codigo_activo: {
          bsonType: "string",
          description: "Debe ser un string y es obligatorio"
        },
        nombre_equipo: {
          bsonType: "string",
          description: "Debe ser un string y es obligatorio"
        },
        categoria: {
          enum: ["Servidor", "Laptop", "Redes", "Contenedor Docker", "Periférico"],
          description: "Debe ser uno de los valores definidos en la lista de categorías"
        },
        responsable: {
          bsonType: "string",
          description: "Debe ser un string y es obligatorio"
        },
        sede_laboratorio: {
          bsonType: "string",
          description: "Debe ser un string y es obligatorio"
        },
        pais: {
          bsonType: "string",
          description: "Debe ser un string"
        },
        precio_usd: {
          bsonType: "number",
          minimum: 0,
          description: "Debe ser un número mayor o igual a 0 y es obligatorio"
        },
        estado: {
          enum: ["Operativo", "En Mantenimiento", "Retirado"],
          description: "Debe ser Operativo, En Mantenimiento o Retirado"
        },
        especificaciones: {
          bsonType: "object",
          required: ["procesador", "ram_gb"],
          properties: {
            procesador: { bsonType: "string" },
            ram_gb: { bsonType: "number", minimum: 1 }
          }
        },
        etiquetas: {
          bsonType: "array",
          items: { bsonType: "string" },
          description: "Debe ser un arreglo de cadenas de texto"
        }
      }
    }
  }
})

// Insertar 5 equipos tecnológicos válidos según el esquema
db.dispositivos.insertMany([
  {
    codigo_activo: "DEV-SRV-001",
    nombre_equipo: "Servidor Principal Strapi & MongoDB",
    categoria: "Servidor",
    responsable: "Zephyrine Valdivia",
    sede_laboratorio: "Laboratorio Cráter Azul",
    pais: "Guatemala",
    precio_usd: 2400.00,
    estado: "Operativo",
    especificaciones: {
      procesador: "AMD EPYC 16-Core",
      ram_gb: 64
    },
    etiquetas: ["docker", "backend", "strapi", "mongodb"],
    fecha_alta: ISODate("2026-01-15T00:00:00Z")
  },
  {
    codigo_activo: "DEV-LPT-002",
    nombre_equipo: "Workstation TypeScript & Frontend",
    categoria: "Laptop",
    responsable: "Orestes Vane",
    sede_laboratorio: "Laboratorio Semuc Champey",
    pais: "Guatemala",
    precio_usd: 1850.00,
    estado: "Operativo",
    especificaciones: {
      procesador: "Apple M3 Pro",
      ram_gb: 36
    },
    etiquetas: ["typescript", "frontend", "react"],
    fecha_alta: ISODate("2026-02-10T00:00:00Z")
  },
  {
    codigo_activo: "DEV-NET-003",
    nombre_equipo: "Switch Administrable Gigabit",
    categoria: "Redes",
    responsable: "Balthazar Nightshade",
    sede_laboratorio: "Laboratorio Quiriguá",
    pais: "Guatemala",
    precio_usd: 620.00,
    estado: "En Mantenimiento",
    especificaciones: {
      procesador: "ARM Cortex-A9",
      ram_gb: 2
    },
    etiquetas: ["redes", "switch", "infraestructura"],
    fecha_alta: ISODate("2026-03-05T00:00:00Z")
  },
  {
    codigo_activo: "DEV-DOC-004",
    nombre_equipo: "Cluster de Contenedores Case-Party",
    categoria: "Contenedor Docker",
    responsable: "Cyrene Sterling",
    sede_laboratorio: "Laboratorio Tikal",
    pais: "Guatemala",
    precio_usd: 1200.00,
    estado: "Operativo",
    especificaciones: {
      procesador: "Intel Xeon 8-Core",
      ram_gb: 32
    },
    etiquetas: ["docker", "microservicios", "case-party"],
    fecha_alta: ISODate("2026-04-18T00:00:00Z")
  },
  {
    codigo_activo: "DEV-PRF-005",
    nombre_equipo: "Monitor Curvo 4K para Programación",
    categoria: "Periférico",
    responsable: "Melantho Frost",
    sede_laboratorio: "Laboratorio Laguna Lachúa",
    pais: "Guatemala",
    precio_usd: 450.00,
    estado: "Retirado",
    especificaciones: {
      procesador: "N/A Display Controller",
      ram_gb: 1
    },
    etiquetas: ["hardware", "pantalla", "desarrollo"],
    fecha_alta: ISODate("2026-05-12T00:00:00Z")
  }
])

// creación de índices para optimizar consultas y garantizar unicidad

// Sirve para consultar de forma rápida los equipos filtrados por categoría.
db.dispositivos.createIndex({ categoria: 1 })

// Sirve para filtrar al instante los activos según su estado operativo.
db.dispositivos.createIndex({ estado: 1 })

// Sirve para garantizar que el código de activo sea único en todo el inventario.
db.dispositivos.createIndex({ codigo_activo: 1 }, { unique: true })