use("campus_taller_motos")

// Mostrar todas las órdenes.
db.ordenes.find()

// Mostrar únicamente código, cliente y estado.
db.ordenes.find(
    {},
    {
        _id: 0,
        codigo: 1,
        cliente: 1,
        estado: 1
    }
)

// Consultar órdenes pendientes.
db.ordenes.find({
    estado: "Pendiente"
})

// Buscar servicios con costo mayor a Q300.
db.ordenes.find({
    costo: {
        $gt: 300
    }
})

// La orden OT-001 ya fue entregada al cliente.
db.ordenes.updateOne(
{
    codigo: "OT-001"
},
{
    $set: {
        estado: "Finalizada"
    }
}
)

// Reporte ordenado desde el servicio más costoso.
db.ordenes.find(
    {},
    {
        _id: 0,
        codigo: 1,
        servicio: 1,
        costo: 1
    }
).sort({
    costo: -1
})