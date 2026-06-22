use('campus_heroes_moba');

// --- OPERACIONES DE CONSULTA (READ) --

// Consulta 1: Filtrar heroes actiuvos excluyendo su ID para la pantalla de seleccion basica

db.heroes.find({ activo: true }, { nombre: 1, rol: 1, dificultad: 1, _id: 0 });

// Consulta 2: Buscar campeones con alto ataque base usando el subdocumento anidado (ataque_base > 60)
db.heroes.find({ "estadisticas_base.ataque_base": { $gt: 60 }});

// Consulta 3: Buscar campeones que tengan la habilidad de "Escudo de Viento" en su kit de poderes
db.heroes.find({ "habilidades": "Escudo de Viento" });

// --- OPERACION DE ACTUALIZACION (UPDATE) ---

// Actualizacion: Debnido al balance del juego (buff/nerf), el personaje 'ShadowBlade' aumenta su coste por alta demanada 
db.heroes.updateOne(
    { nombre: "ShadowBlade" },
    {
        $set: { dificultad: "Alta" },
        $inc: { costo_esencia: 200, "estadisticas_base.velocidad_movimiento": 5}
    }
);

// --- OPERACION DE REPORTE O CLASIFICACION ---

//Reporte: Obtener el ccatalogo de heroes ordenados del mayor vida inicial al de menor vida inicial

db.heroes.find().sort({ "estadisticas_base.vida_inical": -1});