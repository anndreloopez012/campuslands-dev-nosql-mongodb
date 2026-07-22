# Evidencias — Ejercicio 10 (juan-lema)

## Seed
`insertMany` inserta 6 documentos en `registros`.

## Busqueda general
Devuelve los 6 jugadores con `nombre`, `categoria`, `activo`, `puntaje`.

## Busqueda filtrada (singles + activo)
Devuelve 2 jugadoras: Marcela Ruiz (91) y Laura Nieto (88), ordenadas de mayor a menor puntaje.

## Busqueda por etiqueta "ofensiva"
Devuelve 3 jugadores: Laura Nieto, Ana Castano, Marcela Ruiz.

## Conteos
- Total: 6
- Activos: 4
- Inactivos: 2
- Singles: 4
- Dobles: 2

## Actualizacion
`David Reyes` pasa de 2 a 3 victorias, de 6 a 7 partidos jugados y de 35 a 43 puntos. `modifiedCount: 1`.

## Eliminacion
Se elimina a `Sebastian Toro` (inactivo). `deletedCount: 1`. Registros restantes: 5.

## Reporte por sede (aggregate)
- Bogota: 2 jugadores (Laura 88, David 43 tras actualizar) → promedio 65.5
- Medellin: 1 jugador activo tras la eliminacion (Kevin, 61) → promedio 61
- Cali: 1 jugador (Ana, 74) → promedio 74
- Barranquilla: 1 jugador (Marcela, 91) → promedio 91
