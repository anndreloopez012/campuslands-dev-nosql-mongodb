## Inserción de datos

Se insertaron correctamente cinco perfiles gamer con información coherente sobre rango, estadísticas y configuración.

## Consultas probadas

- Listado completo de perfiles.
- Consulta por rango.
- Consulta de jugadores conectados.
- Consulta por cantidad de bajas.
- Reporte ordenado por bajas.

## Actualización realizada

Se actualizó el nivel del jugador **ShadowX**, pasando de nivel **87** a **88** mediante `updateOne()`.

## Índice utilizado

Se creó un índice sobre el campo `rango` para optimizar búsquedas cuando se filtran perfiles según su clasificación competitiva.

## Modelado documental
Base de datos
└── campus_colecciones_gamers

Colección
└── perfiles

Documento

{
    _id,
    nickname,
    nivel,
    rango,
    pais,

    estadisticas: {
        partidas,
        victorias,
        bajas,
        precision
    },

    armasFavoritas: [
        String
    ],

    configuracion: {
        sensibilidad,
        dpi
    },

    online
}

El índice por rango mejora consultas de clasificación y el de nickname evita perfiles duplicados y acelera búsquedas por jugador.