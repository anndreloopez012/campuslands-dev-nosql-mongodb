use("campus_garaje_lujo")

// Mostrar todos los vehículos.
db.autos.find()

// Proyección mostrando solo la información principal.
db.autos.find(
    {},
    {
        _id: 0,
        marca: 1,
        modelo: 1,
        precio: 1
    }
)

// Autos disponibles para la venta.
db.autos.find({
    disponible: true
})

// Vehículos con precio superior a 300000.
db.autos.find({
    precio: {
        $gt: 300000
    }
})

// Vehículos con más de 700 caballos de fuerza.
db.autos.find({
    caballos: {
        $gt: 700
    }
})

// El Porsche vuelve a estar disponible.
db.autos.updateOne(
{
    modelo: "911 Turbo S"
},
{
    $set: {
        disponible: true
    }
}
)

// Reporte ordenado desde el auto más costoso.
db.autos.find(
    {},
    {
        _id: 0,
        marca: 1,
        modelo: 1,
        precio: 1
    }
).sort({
    precio: -1
})