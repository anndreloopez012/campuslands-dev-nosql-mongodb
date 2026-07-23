// Base de datos del ejercicio.
use("campus_playlist_musica")

// Limpiamos la colección para que el script siempre
// inserte el mismo conjunto de datos.
db.playlists.deleteMany({})

// Cada documento representa una playlist.
// Las canciones se almacenan en un array porque forman
// parte de la playlist y normalmente siempre se consultan juntas.

db.playlists.insertMany([
{
    nombre: "Modo Entreno",
    energia: "Alta",
    genero: "Rock",
    canciones: [
        "Fuel",
        "Numb",
        "Believer",
        "Animal I Have Become"
    ],
    publica: true
},
{
    nombre: "Estudio Concentrado",
    energia: "Media",
    genero: "Lo-fi",
    canciones: [
        "Night Drive",
        "Focus",
        "Dreams",
        "Calm Waves"
    ],
    publica: true
},
{
    nombre: "Relax Total",
    energia: "Baja",
    genero: "Ambient",
    canciones: [
        "Ocean",
        "Rain",
        "Deep Sleep"
    ],
    publica: true
},
{
    nombre: "Fiesta Latina",
    energia: "Alta",
    genero: "Reggaetón",
    canciones: [
        "Pepas",
        "La Jumpa",
        "Baila"
    ],
    publica: false
},
{
    nombre: "Viaje Nocturno",
    energia: "Media",
    genero: "Synthwave",
    canciones: [
        "Midnight City",
        "Nightcall",
        "After Dark"
    ],
    publica: true
}
])

// Índice pensado para consultas por nivel de energía.
db.playlists.createIndex({
    energia: 1
});