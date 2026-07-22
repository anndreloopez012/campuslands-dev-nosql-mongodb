use("campus_liga_futbol")

// Mostrar todos los equipos.
db.equipos.find()

// Proyección mostrando únicamente la información más útil
// para una tabla de posiciones.
db.equipos.find(
    {},
    {
        _id: 0, 
        nombre: 1,
        ciudad: 1,
        puntos: 1
    }
)

// Equipos activos.
db.equipos.find({
    activo: true
})

// Equipos con más de 20 puntos.
db.equipos.find({
    puntos: {
        $gt: 20
    }
})

// Actualización.
// Águilas FC gana un partido y suma tres puntos.
db.equipos.updateOne(
{
    nombre: "Águilas FC"
},
{
    $inc: {
        puntos: 3
    }
}
)

// Reporte ordenado por puntos de mayor a menor.
db.equipos.find(
    {},
    {
        _id: 0,
        nombre: 1,
        puntos: 1
    }
).sort({
    puntos: -1
});