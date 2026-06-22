// Asegurar uso de la base de datos correcta
use('campus_skins_battle_royale');

// --- OPERACIONES DE CONSULTA (READ) ---

// Consulta 1: Filtrar cosméticos de alta rareza (Épica o Legendaria) para la sección destacada de la tienda
// En la barra Filter de Compass pegar: { "rareza": { "$in": ["Épica", "Legendaria"] } }
db.skins.find({ "rareza": { "$in": ["Épica", "Legendaria"] } });

// Consulta 2: Buscar skins populares usando el subdocumento (Más de 200 victorias acumuladas)
// En la barra Filter de Compass pegar: { "estadisticas_uso.victorias_con_skin": { "$gt": 200 } }
db.skins.find({ "estadisticas_uso.victorias_con_skin": { "$gt": 200 } });

// Consulta 3: Buscar skins en la tienda que contengan la etiqueta visual "neón" dentro de su array
// En la barra Filter de Compass pegar: { "etiquetas_estilo": "neón" }
db.skins.find({ "etiquetas_estilo": "neón" });


// --- OPERACIÓN DE ACTUALIZACIÓN (UPDATE) ---

// Actualización: Retirar el "Pico de Grafito Extremo" de la tienda activa y modificar su costo por inflación
db.skins.updateOne(
  { nombre: "Pico de Grafito Extremo" },
  { 
    $set: { disponible_tienda: false },
    $inc: { precio_creditos: 150 }
  }
);


// --- OPERACIÓN DE REPORTE O CLASIFICACIÓN ---

// Reporte: Obtener el catálogo ordenado de la skin más costosa a la más barata
// En la barra Options -> Sort de Compass puedes usar de forma gráfica: { "precio_creditos": -1 }
db.skins.find().sort({ "precio_creditos": -1 });