// Asegura uso de la base de datos correcta 
use('campus_personajes_rpg');

// --- OPERADORES DE CONSULTA (READ) ---

// Consulta 1: Filtrar personajes activos excluyendo su ID para visualizacion limpia
db.personajes.find({ activo: true}, {nombre: 1, clase: 1, nivel: 1, _id: 0 });

// Consulta 2: Buscar personajes con alto poder magico usando el documento anidad
db.personajes.find({ "atributos.magia": { $gt: 50}});

// Consulta 3: Buscar heroes que tengan al menos un objeto de rareza "Epica" dentro de su array de equipamiento
db.personajes.find({ "equipamiento.rareza": "Epica" });

// Actualizacion: El picaro "Slytheif" subio de nivel, incrementando su nivel y su destreza anidada
db.personajes.updateOne(
    { nombre: "SlyThief" },
    {
        $inc: { nivel: 1, "atributos.destreza": 5}
    }
);

// --- OPERADORES DE REPORTE O CLASIFICACION ----

// Reporte: obtener el ranking de personajes ordenados del nivel mas alto al mas bajo 
db.personajes.find().sort({ nivel: -1});

