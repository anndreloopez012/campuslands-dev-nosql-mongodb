// Asegurar uso de la base de datos correcta
use('campus_taller_motos');

// --- OPERACIONES DE CONSULTA (READ) ---

// Consulta 1 Proyeccion simple - Listar motos activas en el taller mostrando solo Placa, Marca, Modelo y estado (ocultando el _id)
db.motos.find({ estado: { $ne: "Entregado" }}, { placa: 1, marca: 1, modelo: 1, estado: 1, _id: 0});

// Consulta 2: Filtrar por subdocumentos anidados - Buscar las motos asignadas al mecanico "Jorge Juarez"
db.motos.find({ "historial_mantenimeinto.mecanico_asigado": "Jorge Juarez"});

// Consulta 3: Buscar que motocicletas requirieron un cambio de filtro de aceite de su array de repuesto 
db.motos.find({ "repuestos_cambiados": "Filtro de aceite" });

// --- OPERADORES DE ACTUALIZACION BASICA (UPDATE) ---

// Actualizacion 1: Modificar el estado de la moto con placa "M-123XYZ" a "Listo para Entregar" tras finalizar la reparacion
db.motos.updateOne(
    { placa: "M-123XYZ" },
    {
        $set: { estado: "Listo para Entregar" }
    }
);

// Actualizacion 2: Anadir un elemento al array de repuestos e incrementar el an del modelo (simulacion de correccion de datos)
db.motos.updateOne(
    { placa: "M789DEF" },
    {
        $push: { repuestos_cambiados: "Fusible principal 15A" },
        $set: { estado: "En Reparacion" }
    }
);

