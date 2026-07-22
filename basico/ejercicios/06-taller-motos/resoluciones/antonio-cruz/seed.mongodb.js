// Base de datos del ejercicio.
use("campus_taller_motos")

// Limpiamos la colección para que el script pueda ejecutarse
// varias veces sin crear registros duplicados.
db.ordenes.deleteMany({})

// Cada documento representa una orden de trabajo.
// Se mantiene un modelo simple porque el ejercicio está
// enfocado en consultas y actualizaciones básicas.

db.ordenes.insertMany([
{
    codigo: "OT-001",
    cliente: "Carlos Ramírez",
    moto: "Yamaha FZ 150",
    servicio: "Cambio de aceite",
    costo: 180,
    estado: "Pendiente"
},
{
    codigo: "OT-002",
    cliente: "Ana López",
    moto: "Honda CB190R",
    servicio: "Cambio de pastillas de freno",
    costo: 320,
    estado: "En proceso"
},
{
    codigo: "OT-003",
    cliente: "Luis Herrera",
    moto: "Suzuki Gixxer 150",
    servicio: "Ajuste de cadena",
    costo: 120,
    estado: "Finalizada"
},
{
    codigo: "OT-004",
    cliente: "María Castillo",
    moto: "Bajaj Pulsar NS200",
    servicio: "Cambio de llanta trasera",
    costo: 650,
    estado: "Pendiente"
},
{
    codigo: "OT-005",
    cliente: "José Morales",
    moto: "Freedom FXR150",
    servicio: "Revisión general",
    costo: 450,
    estado: "En proceso"
}
])

// Índice pensado para consultas frecuentes por estado.
db.ordenes.createIndex({
    estado: 1
})