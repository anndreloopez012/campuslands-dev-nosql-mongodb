// Asegurar uso de la base de datos correcta 
use('campus_skins_battle_royale');
// --- OPERADORES DE CONSULTA (READ) ---

// Consulta 1: Filtrar cosmeticos de alta rareza (Epica o Legendaria) para la seccion destacadda de la tienda
db.skins.find({ "rareza": { $in: ["Épica", "Legendaria"] } });

//Consulta 2: Buscar skins populares usando el subdocumento (mas de 200 victorias acumuladas)

db.skins.find({ "estadisticas_uso.victorias_con_skin": { $gt: 200 }});

// Consulta 3: Buscar skins en la tienda que contengan la etiqueta visual "neon" dentro de su array

db.skins.find({ "etiquetas_estilo": "neon"});

// ---- OPERACION DE ACTUALIZAR (UPDATE) ---

// Actualizacion: Retirar el "Pico de grafito Extremo" de la tienda activa y modificar su costo por inflacion

db.skins.updateOne(
    { nombre: "Pico de Grafito Extremo" },
    {
        $set: { disponible_tienda: false },
        $inc: { precio_creditos: 150 }
    }
);

// --- OPERACION DE REPORTE O CLASIFICACION ---

// Reporte: Obtener el catalogo ordenado de la skin mas costosa a la mas barata 

db.skins.find().sort({ "precio_creditos": -1 });