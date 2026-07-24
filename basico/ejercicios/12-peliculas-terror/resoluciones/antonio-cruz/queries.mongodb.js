use("campus_peliculas_terror")

// Mostrar todas las películas.
db.peliculas.find()

// Proyección con la información principal.
db.peliculas.find(
    {},
    {
        _id: 0,
        titulo: 1,
        genero: 1,
        rating: 1
    }
)

// Buscar películas del género Sobrenatural.
db.peliculas.find({
    genero: "Sobrenatural"
})

// Películas con rating mayor o igual a 8.5.
db.peliculas.find({
    rating: {
        $gte: 8.5
    }
})

// Buscar títulos que contengan la palabra "Casa".
db.peliculas.find({
    titulo: /Casa/i
})

// La película "Casa Sin Salida" entra al catálogo destacado.
db.peliculas.updateOne(
{
    titulo: "Casa Sin Salida"
},
{
    $set: {
        rating: 8.1
    }
});