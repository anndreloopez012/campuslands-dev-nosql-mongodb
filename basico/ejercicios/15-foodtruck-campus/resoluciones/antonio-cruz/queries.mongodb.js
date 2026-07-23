use("campus_foodtruck_campus")

// Mostrar todos los pedidos.
db.pedidos.find()

// Mostrar únicamente cliente, producto y estado.
db.pedidos.find(
    {},
    {
        _id: 0,
        cliente: 1,
        producto: 1,
        estado: 1
    }
)

// Consultar pedidos pendientes.
db.pedidos.find({
    estado: "Pendiente"
})

// Registrar un nuevo pedido.
db.pedidos.insertOne({
    cliente: "Daniel Castro",
    producto: "Nachos",
    cantidad: 2,
    total: 50,
    estado: "Pendiente"
})

// El pedido de María Gómez ya fue entregado.
db.pedidos.updateOne(
{
    cliente: "María Gómez"
},
{
    $set: {
        estado: "Entregado"
    }
});