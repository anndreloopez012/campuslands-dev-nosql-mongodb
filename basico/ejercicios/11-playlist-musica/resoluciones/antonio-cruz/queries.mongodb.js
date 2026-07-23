use("campus_playlist_musica")

// Mostrar todas las playlists.
db.playlists.find()

// Proyección básica.
db.playlists.find(
    {},
    {
        _id: 0,
        nombre: 1,
        energia: 1,
        genero: 1
    }
)

// Buscar playlists de energía alta.
db.playlists.find({
    energia: "Alta"
})

// Buscar playlists públicas.
db.playlists.find({
    publica: true
})

// Buscar playlists que contengan la canción "Believer".
db.playlists.find({
    canciones: "Believer"
})

// Agregar una nueva canción a "Modo Entreno".
db.playlists.updateOne(
{
    nombre: "Modo Entreno"
},
{
    $push: {
        canciones: "Eye of the Tiger"
    }
});