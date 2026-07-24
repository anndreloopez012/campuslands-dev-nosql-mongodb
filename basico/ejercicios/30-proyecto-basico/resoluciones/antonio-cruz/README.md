# Proyecto básico MongoDB

## Base de datos

`campus_proyecto_basico`

## Colección

- videojuegos

## Decisiones de modelado

Se creó una colección llamada `videojuegos`, donde cada documento representa un videojuego completo.

La información del género, plataforma, jugadores y estado se mantiene dentro del mismo documento porque pertenece directamente al videojuego y permite realizar consultas CRUD simples sin manejar referencias adicionales.

## Operaciones implementadas

- Inserción de 5 videojuegos.
- Consulta de videojuegos activos.
- Consulta por plataforma.
- Consulta por cantidad de jugadores.
- Reporte ordenado.
- Actualización del estado de un videojuego.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`