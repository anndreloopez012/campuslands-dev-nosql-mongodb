// 1. Crear y seleccionar la base de datros del Battle Royale
use('campus_skins_battle_royale');

// 2. Inserta 5 documentos coherentes y realistas del catalogo de cosmeticos
db.skins.insertMany([
    {
        nombre: "Camiseta Legendaria Campus",
        tipo: "Ropa",
        rareza: "Epica",
        disponible_tienda: true,
        etiquetas_estilo: ["reactivo", "neon,", "exclusivo"],
        estadisticas_uso: { partidas_equipadas: 1420, victorias_con_skin: 310 }
    },
    {
        nombre: "Pico de Grafito Extremo",
        tipo: "Herramienta",
        rareza: "Rara",
        precio_creditos: 800,
        disponible_tienda: true,
        etiquetas_estilo: ["metalico", "anidado"],
        estadisticas_uso: { partidas_equipadas: 950, victorias_con_skin: 120 }
    },
    {
        nombre: "Paracaidas Avanzado JavaScript",
        tipo: "Planeador",
        rareza: "Comun",
        precio_creditos: 350,
        disponible_tienda: false,
        etiquetas_estilo: ["basico", "comunidad"],
        estadisticas_uso: { partidas_equipadas: 4100, victorias_con_skin: 540 }
    },
    {
        nombre: "Aspecto de Arma Cyber-Coder",
        tipo: "Arma",
        rareza: "Legendaria",
        precio_creditos: 2400,
        disponibles_tienda: true,
        etiquetas_estilo: ["reactivo", "Futurista", "brillante"],
        estadisticas_uso: { partidas_equipadas: 620, victorias_con_skin: 195 }
    },
    {
        nombre: "Botas de Neon TypeScript",
        tipo: "Ropa",
        rareza: "Rara",
        precio_creditos: 950,
        disponible_tienda: true,
        etiquetas_estilo: ["neon", "brillante"],
        estadisticas_uso: { partidas_equipadas: 780, victorias_con_skin: 98 }
    }
]);