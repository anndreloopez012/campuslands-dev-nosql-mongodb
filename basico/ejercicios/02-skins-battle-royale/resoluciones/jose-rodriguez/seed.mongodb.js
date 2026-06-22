// 1. Crear y seleccionar la base de datos del Battle Royale
use('campus_skins_battle_royale');

// 2. Limpiar la colección antes de insertar para asegurar repetibilidad
db.skins.drop();

// 3. Inserta 5 documentos coherentes y realistas del catálogo de cosméticos
db.skins.insertMany([
  {
    nombre: "Camiseta Legendaria Campus",
    tipo: "Ropa",
    rareza: "Épica",
    precio_creditos: 1500,
    disponible_tienda: true,
    etiquetas_estilo: ["reactivo", "neón", "exclusivo"],
    estadisticas_uso: { partidas_equipadas: 1420, victorias_con_skin: 310 }
  },
  {
    nombre: "Pico de Grafito Extremo",
    tipo: "Herramienta",
    rareza: "Rara",
    precio_creditos: 800,
    disponible_tienda: true,
    etiquetas_estilo: ["metálico", "animado"],
    estadisticas_uso: { partidas_equipadas: 950, victorias_con_skin: 120 }
  },
  {
    nombre: "Paracaídas Avanzado JavaScript",
    tipo: "Planeador",
    rareza: "Común",
    precio_creditos: 350,
    disponible_tienda: false,
    etiquetas_estilo: ["básico", "comunidad"],
    estadisticas_uso: { partidas_equipadas: 4100, victorias_con_skin: 540 }
  },
  {
    nombre: "Aspecto de Arma Cyber-Coder",
    tipo: "Arma",
    rareza: "Legendaria",
    precio_creditos: 2400,
    disponible_tienda: true,
    etiquetas_estilo: ["reactivo", "futurista", "brillante"],
    estadisticas_uso: { partidas_equipadas: 620, victorias_con_skin: 195 }
  },
  {
    nombre: "Botas de Neón TypeScript",
    tipo: "Ropa",
    rareza: "Rara",
    precio_creditos: 950,
    disponible_tienda: true,
    etiquetas_estilo: ["neón", "brillante"],
    estadisticas_uso: { partidas_equipadas: 780, victorias_con_skin: 98 }
  }
]);

