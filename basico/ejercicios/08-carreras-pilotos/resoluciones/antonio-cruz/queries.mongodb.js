use("campus_carreras_pilotos")

// Listado general.
db.pilotos.find()

// Mostrar únicamente nombre, escudería y puntos.
db.pilotos.find(
    {},
    {
        _id: 0,
        nombre: 1,
        escuderia: 1,
        puntos: 1
    }
)

// Pilotos activos.
db.pilotos.find({
    activo: true
})

// Ranking completo ordenado por puntos.
db.pilotos.find().sort({
    puntos: -1
})

// Top 3 pilotos del campeonato.
db.pilotos.find(
    {},
    {
        _id: 0,
        nombre: 1,
        puntos: 1
    }
)
.sort({
    puntos: -1
})
.limit(3)

// Alex Vega consigue una nueva victoria.
db.pilotos.updateOne(
{
    nombre: "Alex Vega"
},
{
    $inc: {
        victorias: 1,
        puntos: 25
    }
})