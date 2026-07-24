## Inserción de datos

Se insertaron correctamente cinco héroes con diferentes roles, estadísticas y niveles de dificultad.

## Consultas realizadas

- Listado completo de héroes.
- Consulta por rol.
- Consulta de héroes disponibles.
- Consulta por valor de ataque.
- Reporte ordenado por ataque.

## Actualización realizada

El héroe **Nyx** cambió su estado de disponibilidad de **false** a **true** utilizando `updateOne()`.

## Índice implementado

Se creó un índice sobre el campo **rol**, ya que es el filtro más utilizado para clasificar héroes dentro del juego.
Modelo documental

Base de datos
└── campus_heroes_moba

Colección
└── heroes

Documento

{
    _id,
    nombre,
    rol,
    dificultad,
    ataque,
    defensa,
    disponible
}
Subdocumentos

No fueron necesarios porque todos los atributos pertenecen directamente al héroe.

Arrays

No fueron necesarios para este caso.

Referencias

No se utilizaron ya que no existen relaciones entre documentos.

Índices sugeridos

db.heroes.createIndex({
    rol: 1
})

db.heroes.createIndex({
    nombre: 1
}, {
    unique: true
})

El índice por rol mejora las búsquedas de héroes según su función en la partida. Por otro lado, el índice por nombre mejora la búsqueda de héroes por nombre, ya que es un campo clave.