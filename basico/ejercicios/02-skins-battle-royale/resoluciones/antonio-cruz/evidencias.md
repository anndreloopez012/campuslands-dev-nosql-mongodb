## Inserción de datos

Se registraron correctamente cinco skins con diferentes niveles de rareza, temporada, precio y disponibilidad.

## Consultas ejecutadas

- Listado completo de skins.
- Consulta por rareza.
- Consulta de skins disponibles.
- Consulta por precio.
- Reporte ordenado por precio.

## Actualización realizada

Se modificó el precio de la skin **Frozen Wolf**, pasando de **1500** a **1300** monedas mediante `updateOne()`.

## Índice utilizado

Se creó un índice sobre el campo **rareza**, ya que es uno de los filtros más comunes cuando se consulta el catálogo.

Subdocumentos

No fueron necesarios porque todos los atributos pertenecen directamente a la skin.

Arrays

No fueron necesarios para este ejercicio.

Referencias

No se utilizaron ya que no existen entidades compartidas ni relaciones entre documentos.

Índices sugeridos

db.skins.createIndex({
    rareza: 1
})

db.skins.createIndex({
    nombre: 1
}, {
    unique: true
})

El índice por rareza acelera las búsquedas por clasificación y el índice único sobre nombre evita registrar dos veces la misma skin.

Modelo documental

Base de datos
└── campus_skins_battle_royale

Colección
└── skins

Documento

{
    _id,
    nombre,
    rareza,
    personaje,
    temporada,
    precio,
    disponible
}