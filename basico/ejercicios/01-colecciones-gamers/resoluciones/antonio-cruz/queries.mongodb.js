use("campus_colecciones_gamers")

// Ver todos los perfiles registrados.
db.perfiles.find()

// Mostrar únicamente nickname y rango.
db.perfiles.find(
    {},
    {
        _id: 0,
        nickname: 1,
        rango: 1
    }
)

// Jugadores conectados actualmente.
db.perfiles.find(
    {
        online: true
    },
    {
        _id: 0,
        nickname: 1,
        pais: 1
    }
)

// Buscar perfiles Diamante.
db.perfiles.find({
    rango: "Diamante"
})

// Jugadores con más de 4000 bajas.
db.perfiles.find({
    "estadisticas.bajas": {
        $gt: 4000
    }
})

// Actualización sencilla.
// ShadowX subió de nivel después de varias partidas.
db.perfiles.updateOne(
{
    nickname: "ShadowX"
},
{
    $set: {
        nivel: 88
    }
}
)

// Reporte rápido ordenado por cantidad de bajas.
db.perfiles.find(
    {},
    {
        _id: 0,
        nickname: 1,
        "estadisticas.bajas": 1
    }
).sort({
    "estadisticas.bajas": -1
})