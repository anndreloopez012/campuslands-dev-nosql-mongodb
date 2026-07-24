// Base de datos del ejercicio.
use("campus_foodtruck_campus")

// Se limpia la colección para que el script pueda
// ejecutarse varias veces sin generar registros duplicados.
db.pedidos.deleteMany({})

// Cada documento representa un pedido realizado
// en el foodtruck del campus.

db.pedidos.insertMany([
{
    cliente: "Carlos Méndez",
    producto: "Hamburguesa Clásica",
    cantidad: 2,
    total: 70,
    estado: "Pendiente"
},
{
    cliente: "Andrea López",
    producto: "Hot Dog Especial",
    cantidad: 1,
    total: 30,
    estado: "Entregado"
},
{
    cliente: "Luis Herrera",
    producto: "Tacos",
    cantidad: 3,
    total: 60,
    estado: "Preparando"
},
{
    cliente: "María Gómez",
    producto: "Pizza Personal",
    cantidad: 2,
    total: 90,
    estado: "Pendiente"
},
{
    cliente: "José Ramírez",
    producto: "Burrito",
    cantidad: 1,
    total: 40,
    estado: "Entregado"
}
])

// Índice pensado para consultar rápidamente
// los pedidos según su estado.
db.pedidos.createIndex({
    estado: 1
});