## Inserción de datos

Se insertaron correctamente cinco equipos con estadísticas de la temporada.

## Consultas realizadas

- Listado completo de equipos.
- Proyección mostrando únicamente nombre, ciudad y puntos.
- Consulta de equipos activos.
- Consulta de equipos con más de 20 puntos.
- Reporte ordenado por puntos.

## Actualización realizada

El equipo **Águilas FC** incrementó su puntaje en **3** mediante el operador `$inc`.

## Índice implementado

Se creó un índice sobre el campo **puntos** para optimizar consultas y reportes donde la clasificación depende de la cantidad de puntos obtenidos.
Modelo documental

Base de datos
└── campus_liga_futbol

Colección
└── equipos

Documento

{
    _id,
    nombre,
    ciudad,
    partidos,
    puntos,
    golesFavor,
    golesContra,
    activo
}
Subdocumentos

No fueron necesarios porque toda la información pertenece directamente al equipo.

Arrays

No fueron necesarios para este ejercicio.

Referencias

No se utilizaron debido a que el modelo está compuesto únicamente por una entidad principal.

Índices sugeridos

db.equipos.createIndex({
    puntos: -1
})

db.equipos.createIndex({
    nombre: 1
}, {
    unique: true
})


El índice por puntos mejora el rendimiento de consultas y reportes ordenados por la tabla de posiciones, mientras que el índice único sobre nombre evita registrar equipos duplicados.