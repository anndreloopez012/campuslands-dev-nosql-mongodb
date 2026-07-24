use("campus_pingpong_campus")

// Mostrar todos los jugadores.
db.jugadores.find()

// Proyección con la información principal.
db.jugadores.find(
    {},
    {
        _id: 0,
        nombre: 1,
        categoria: 1,
        victorias: 1
    }
)

// Buscar jugadores activos.
db.jugadores.find({
    activo: true
})

// Buscar jugadores de categoría Avanzado.
db.jugadores.find({
    categoria: "Avanzado"
})

// Contar todos los jugadores registrados.
db.jugadores.countDocuments()

// Contar únicamente los jugadores activos.
db.jugadores.countDocuments({
    activo: true
})

// Diego Morales consigue una victoria más.
db.jugadores.updateOne(
{
    nombre: "Diego Morales"
},
{
    $inc: {
        victorias: 1
    }
});