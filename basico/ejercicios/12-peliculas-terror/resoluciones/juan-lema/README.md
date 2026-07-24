# 12. Catalogo de peliculas de miedo — juan-lema

## Base de datos
`campus_peliculas_terror`

## Coleccion
`registros` (unica coleccion principal).

## Modelo documental
Cada documento representa una pelicula de terror con sus datos propios y dos estructuras embebidas:

- `etiquetas` (array de strings): subgeneros/temas (ej. "posesion", "found footage"). Se embebe porque es una lista corta que siempre se lee junto con la pelicula.
- `premios` (array de subdocumentos `{ nombre, anio }`): reconocimientos de la pelicula. Se embebe porque son pocos por documento, no se comparten entre peliculas y no necesitan consultarse de forma independiente.

No se usan referencias: no hay entidades que crezcan sin limite ni datos compartidos entre varias peliculas, por lo que embeber mantiene las consultas simples y evita joins innecesarios ($lookup).

## Campos
- `titulo` (string)
- `anio` (int)
- `director` (string)
- `genero` (string) — genero principal
- `etiquetas` (array<string>)
- `rating` (double, 0-10)
- `duracion_min` (int)
- `disponible` (bool)
- `premios` (array<{ nombre: string, anio: int }>)

## Consultas incluidas
1. Listado completo.
2. Peliculas disponibles (proyeccion titulo/rating).
3. Peliculas con rating >= 8, ordenadas desc.
4. Filtro por texto: genero "posesion" via regex sobre `etiquetas`.
5. `updateOne`: subir rating y agregar premio (`$set` + `$push`) con verificacion.
6. `updateOne`: marcar pelicula como no disponible (`$set`) con verificacion.
7. `deleteOne`: eliminar pelicula con rating mas bajo, con verificacion.
8. `countDocuments` final.

## Como validar
Ejecutar `seed.mongodb.js` y luego `queries.mongodb.js` en MongoDB Shell/Compass contra `campus_peliculas_terror`. Los resultados esperados estan en `evidencias.md`.
