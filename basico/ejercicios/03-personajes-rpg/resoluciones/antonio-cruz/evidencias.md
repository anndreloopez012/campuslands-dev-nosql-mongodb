## Inserción de datos

Se insertaron correctamente cinco personajes RPG con diferentes clases, niveles, atributos y equipamiento.

## Consultas realizadas

- Listado completo de personajes.
- Consulta por clase.
- Consulta de personajes activos.
- Consulta utilizando un campo anidado (`atributos.fuerza`).
- Reporte ordenado por nivel.

## Actualización realizada

El personaje **Lyra** aumentó de nivel de **38** a **39** utilizando `updateOne()`.

## Índice implementado

Se creó un índice sobre el campo **clase**, ya que es uno de los filtros más comunes para consultar personajes.

Modelo documental

Base de datos
└── campus_personajes_rpg

Colección
└── personajes

Documento

{
    _id,
    nombre,
    clase,
    nivel,

    atributos: {
        fuerza,
        defensa,
        magia,
        velocidad
    },

    equipo: {
        arma,
        armadura,
        accesorio
    },

    activo
}
Subdocumentos

- atributos
- equipo

Se embeben porque representan información propia del personaje y siempre se consulta junto con él.

Arrays

No fueron necesarios para este ejercicio.

Referencias

No se utilizaron porque no existen entidades compartidas entre varios personajes.

Índices sugeridos

db.personajes.createIndex({
    clase: 1
})

db.personajes.createIndex({
    nombre: 1
}, {
    unique: true
})

El índice por clase mejora las búsquedas de personajes según su rol, mientras que el índice único sobre nombre evita registrar personajes duplicados.