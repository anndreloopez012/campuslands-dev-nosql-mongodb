use("campus_skins_battle_royale")

// Mostrar todas las skins.
db.skins.find()

// Listar únicamente nombre y rareza.
db.skins.find(
    {},
    {
        _id: 0,
        nombre: 1,
        rareza: 1
    }
)

// Skins disponibles actualmente.
db.skins.find(
    {
        disponible: true
    },
    {
        _id: 0,
        nombre: 1,
        precio: 1
    }
)

// Buscar únicamente skins legendarias.
db.skins.find({
    rareza: "Legendaria"
})

// Skins con precio superior a 1800 monedas.
db.skins.find({
    precio: {
        $gt: 1800
    }
})

// Actualización.
// Frozen Wolf entra en promoción y baja de precio.
db.skins.updateOne(
{
    nombre: "Frozen Wolf"
},
{
    $set: {
        precio: 1300
    }
}
)

// Reporte ordenado desde la skin más costosa.
db.skins.find(
    {},
    {
        _id: 0,
        nombre: 1,
        precio: 1
    }
).sort({
    precio: -1
})