// asegurar el uso de la base de datos correcta
use('campus_garaje_lujo');

// --- OPERADORES DE CONSULTA CON FILTROS NUMERICOS (READ) ---

// Consulta 1: Filtro por rango de precio - Buscar autos que cuesten entre USD 300,000 y USD 1,000,000
db.autos.find({ "precio_usd": { $gte: 300000, $lte: 1000000 }});

// Consulta 2: Filtro por subdocumento anidado numerico - Buscar hiperdeportivos con mas de 800 caballos de Fuerza (HP)
db.autos.find({ "rendimiento.caballos_fuerza": { $gt: 800 }});

// Consulta 3: Filtro numerico de aceleraciuon extrema - Buscar que hagan el 0 a 100km/h en menos de 3.0 segundos 
db.autos.find({ "rendimiento.aceleracion_0_100": { $lt: 3.0}});

// Consulta 4: Combinacion de filtros y array - Busca autos disponibles que incluya "Frenos ceramicos" en sus extras
db.autos.find({ "disponible_venta": true, "caracteristicas_premium": "Frenos cerámicos "});

// Actualizacion: Debido a la devalucion del mercado y cambio de anio, se aplica un descuento de USD 20,000 al McLaren 750S
db.autos.updateOne(
    { modelo: "750S" },
    {
        $inc: { precio_usd: -200000}
    } 
);

