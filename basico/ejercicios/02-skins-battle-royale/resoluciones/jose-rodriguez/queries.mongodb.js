//Asegurar uso de la base de datos correcta
use('campus_skins_battle_royale');


// --- OPERADORES DE CONSULTA (READ) ---
// Consulta 1: Filtrar cosmeticos de alta rareza (Epica o Lengendaria)
db.skins.find({ "rareza": { $in: ["Epica", "Legendaria"] } });

// Consulta 2: Buscar skins populares usando el subdocumento (Mas de 200 victorias acumuladas)
db.skins.find({ "estadisticas_uso.victorias_cons_skin": { $gt: 200} });

// Consulta 3: Buscar skins en la tienda que contengan la etiqueta visual neon dentro de su array
db.skins.find({ "etiquetas_estilo": "neon"});

// --- OPERACION DE ACTUALIZACION (UPDATE) ---

// Actualizacion: Retirar el "Pico de Grafito Extremo" de la tienda activa y modificar su por inflacion
db.skins.updateOne(
    { nombre: "Pico de Grafito Extremo" },
    {
        $set: { disponible_tienda: false},
        $inc: { precio_creditos: 150}
    }
);

// --- OPERACION DE REPORTE O CLASIFICACION ---

// Reporte: Obtener el catálogo ordenado de la skin más costosa a la más barata
db.skins.find().sort({ "precio_creditos": -1 });