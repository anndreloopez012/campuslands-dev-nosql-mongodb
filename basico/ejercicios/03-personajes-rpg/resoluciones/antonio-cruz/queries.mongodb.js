use("campus_personajes_rpg")

// Mostrar todos los personajes.
db.personajes.find()

// mostrar solaente nombre, clase y nivel.
db.personajes.find(
    {},
    {
        _id: 0,
        nombre: 1,
        clase: 1,
        nivel: 1
    }
);
// personajes activos.
db.personajes.find(
    {
        activo: true
    },
    {
        _id: 0,
        nombre: 1,
        clase: 1,
        nivel: 1
    }
);

// Buscar únicamente los magos.
db.personajes.find({
    clase: "Maga"
})

// Personajes con fuerza mayor a 80.
db.personajes.find({
    "atributos.fuerza": {
        $gt: 80
    }
})

// Lyra sube de nivel después de completar una misión.
db.personajes.updateOne(
{
    nombre: "Lyra"
},
{
    $set: {
        nivel: 39
    }
}
)

// Reporte ordenado por nivel.
db.personajes.find(
    {},
    {
        _id: 0,
        nombre: 1,
        nivel: 1
    }
).sort({
    nivel: -1
}
);