use("campus_sci_fi_sagas")

// Mostrar todas las sagas.
db.sagas.find()

// Mostrar todas las películas.
db.peliculas.find()

// Buscar únicamente las películas de Star Wars
// usando la referencia manual.
db.peliculas.find({
    sagaCodigo: "SG001"
})

// Mostrar películas con rating superior a 8.4.
db.peliculas.find({
    rating: {
        $gt: 8.4
    }
})

// Actualización.
// Dune mejora su valoración.
db.peliculas.updateOne(
{
    titulo: "Dune"
},
{
    $set: {
        rating: 8.2
    }
})

// Reporte ordenado por rating.
db.peliculas.find(
    {},
    {
        _id: 0,
        titulo: 1,
        rating: 1
    }
).sort({
    rating: -1
});