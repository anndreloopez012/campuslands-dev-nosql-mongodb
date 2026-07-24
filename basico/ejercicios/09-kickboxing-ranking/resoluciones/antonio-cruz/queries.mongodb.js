use("campus_kickboxing_ranking")

// Mostrar todos los peleadores.
db.peleadores.find()

// Proyección básica.
db.peleadores.find(
    {},
    {
        _id: 0,
        nombre: 1,
        categoria: 1,
        ranking: 1
    }
)

// Operador lógico AND.
// Peleadores activos con más de 15 victorias.
db.peleadores.find({
    $and: [
        { activo: true },
        { victorias: { $gt: 15 } }
    ]
})

// Operador lógico OR.
// Peleadores del Top 3 o que pertenezcan al Peso Ligero.
db.peleadores.find({
    $or: [
        { ranking: { $lte: 3 } },
        { categoria: "Peso Ligero" }
    ]
})

// Operador lógico NOT.
// Peleadores que no estén inactivos.
db.peleadores.find({
    activo: {
        $not: {
            $eq: false
        }
    }
})

// Marco Torres consigue una victoria adicional.
db.peleadores.updateOne(
{
    nombre: "Marco Torres"
},
{
    $inc: {
        victorias: 1
    }
})