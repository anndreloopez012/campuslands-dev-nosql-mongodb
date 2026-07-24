// Seleccionar la base de datos para las rutas turisticas
use("campus_rutas_turisticas");

// Insertar documentos iniciales con datos realistas
db.rutas.insertMany([
  {
    nombre: "Ruta Colonial Historica",
    categoria: "cultura",
    duracion_dias: 3,
    precio: 350000,
    disponible: true,
    ubicacion: {
      ciudad: "Cartagena",
      pais: "Colombia"
    },
    puntos_interes: ["Ciudad Amurallada", "Castillo de San Felipe", "Convento de la Popa"],
    etiquetas: ["historia", "arquitectura", "caminata"]
  },
  {
    nombre: "Aventura Eje Cafetero",
    categoria: "naturaleza",
    duracion_dias: 4,
    precio: 520000,
    disponible: true,
    ubicacion: {
      ciudad: "Salento",
      pais: "Colombia"
    },
    puntos_interes: ["Valle de Cocora", "Finca Cafetera Tradicional", "Mirador de Salento"],
    etiquetas: ["café", "naturaleza", "trekking"]
  },
  {
    nombre: "Paraiso Playas Caribeñas",
    categoria: "playa",
    duracion_dias: 5,
    precio: 800000,
    disponible: true,
    ubicacion: {
      ciudad: "Santa Marta",
      pais: "Colombia"
    },
    puntos_interes: ["Parque Tayrona", "Playa Cristal", "Cabo San Juan"],
    etiquetas: ["playa", "mar", "descanso"]
  },
  {
    nombre: "Misticismo Ancestral Andino",
    categoria: "cultura",
    duracion_dias: 2,
    precio: 250000,
    disponible: false,
    ubicacion: {
      ciudad: "Bogotá",
      pais: "Colombia"
    },
    puntos_interes: ["Monserrate", "Museo del Oro", "La Candelaria"],
    etiquetas: ["museos", "historia", "ciudad"]
  },
  {
    nombre: "Expedicion Selva Amazonica",
    categoria: "naturaleza",
    duracion_dias: 6,
    precio: 1200000,
    disponible: true,
    ubicacion: {
      ciudad: "Leticia",
      pais: "Colombia"
    },
    puntos_interes: ["Isla de los Micos", "Comunidad Indigena", "Puerto Nariño"],
    etiquetas: ["selva", "aventura", "fauna"]
  }
]);

console.log("Se han insertado exitosamente los documentos en la coleccion rutas.");