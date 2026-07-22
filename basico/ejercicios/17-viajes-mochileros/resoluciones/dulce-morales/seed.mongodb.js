// Selecciona/crea la base de datos para los viajes mochileros
use("campus_viajes_mochileros");

// Inserta documentos realistas para la gestión de viajes
db.viajes.insertMany([
  {
    destino_principal: "Sudamérica Andina",
    paises: ["Peru", "Bolivia"],
    duracion_dias: 21,
    presupuesto: {
      estimado_cop: 2500000,
      moneda: "COP"
    },
    fechas: {
      inicio: ISODate("2026-06-01T00:00:00Z"),
      fin: ISODate("2026-06-22T00:00:00Z")
    },
    actividades_clave: ["trekking", "hostales", "cultura"],
    activo: true
  },
  {
    destino_principal: "Sudeste Asiatico Ruta",
    paises: ["Tailandia", "Vietnam", "Camboya"],
    duracion_dias: 30,
    presupuesto: {
      estimado_cop: 4500000,
      moneda: "COP"
    },
    fechas: {
      inicio: ISODate("2026-09-10T00:00:00Z"),
      fin: ISODate("2026-10-10T00:00:00Z")
    },
    actividades_clave: ["mochilero", "playas", "gastronomia"],
    activo: true
  },
  {
    destino_principal: "Ruta Centroamericana",
    paises: ["Guatemala", "Honduras", "Nicaragua"],
    duracion_dias: 15,
    presupuesto: {
      estimado_cop: 1800000,
      moneda: "COP"
    },
    fechas: {
      inicio: ISODate("2026-07-05T00:00:00Z"),
      fin: ISODate("2026-07-20T00:00:00Z")
    },
    actividades_clave: ["volcanes", "ruinas", "hostales"],
    activo: true
  },
  {
    destino_principal: "Patagonia Austral",
    paises: ["Chile", "Argentina"],
    duracion_dias: 14,
    presupuesto: {
      estimado_cop: 3200000,
      moneda: "COP"
    },
    fechas: {
      inicio: ISODate("2026-11-01T00:00:00Z"),
      fin: ISODate("2026-11-15T00:00:00Z")
    },
    actividades_clave: ["senderismo", "glaciares", "camping"],
    activo: false
  },
  {
    destino_principal: "Europa Low Cost",
    paises: ["Espana", "Portugal"],
    duracion_dias: 20,
    presupuesto: {
      estimado_cop: 5000000,
      moneda: "COP"
    },
    fechas: {
      inicio: ISODate("2026-08-01T00:00:00Z"),
      fin: ISODate("2026-08-21T00:00:00Z")
    },
    actividades_clave: ["ciudades", "hostales", "tren"],
    activo: true
  }
]);