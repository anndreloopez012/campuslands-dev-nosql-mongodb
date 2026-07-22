use("campus_heroes_moba")

// Mostrar todos los héroes.
db.heroes.find()

// Listar únicamente nombre y rol.
db.heroes.find(
    {},
    {
        _id: 0,
        nombre: 1,
        rol: 1
    }
)

// Consultar héroes disponibles.
db.heroes.find({
    disponible: true
})

// Buscar únicamente héroes del rol Mago.
db.heroes.find({
    rol: "Mago"
})

// Héroes con ataque mayor a 90.
db.heroes.find({
    ataque: {
        $gt: 90
    }
})

// Nyx es un héroe que estaba deshabilitado, pero después de una actualización vuelve a estar disponible. 
// Nyx vuelve a estar disponible después de una actualización.
db.heroes.updateOne(
{
    nombre: "Nyx"
},
{
    $set: {
        disponible: true
    }
}
);

// Reporte ordenado por ataque.
db.heroes.find(
    {},
    {
        _id: 0,
        nombre: 1,
        rol: 1,
        ataque: 1
    }
).sort({
    ataque: -1
});