use("campus_biblioteca_tech")

// Mostrar todos los libros.
db.libros.find()

// Proyección limpia con la información principal.
db.libros.find(
    {},
    {
        _id: 0,
        titulo: 1,
        autor: 1,
        categoria: 1
    }
)

// Libros disponibles para préstamo.
db.libros.find({
    disponible: true
})

// Buscar libros de Bases de Datos.
db.libros.find({
    categoria: "Bases de Datos"
})

// Libros publicados después de 2010.
db.libros.find({
    anio: {
        $gt: 2010
    }
})

// El libro Clean Code fue prestado.
db.libros.updateOne(
{
    titulo: "Clean Code"
},
{
    $set: {
        disponible: false
    }
});