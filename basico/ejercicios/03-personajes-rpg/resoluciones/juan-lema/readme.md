# 03. Personajes RPG — juan-lema

## Base de datos
`campus_personajes_rpg`

## Colección
`registros` (personajes del RPG)

## Modelo documental
Se usa **una sola colección con documentos embebidos**, sin referencias:

- `atributos` → subdocumento (fuerza, destreza, inteligencia, vida). Se embebe porque son datos 1:1 con el personaje, se consultan siempre juntos y nunca cambian de dueño.
- `inventario` → array de subdocumentos (objeto, tipo, valor). Se embebe porque es una lista pequeña y acotada (un personaje no tiene miles de ítems) que siempre se lee junto al personaje; no se comparte entre personajes.
- `habilidades` → array de strings. Igual razón: lista corta, propia del personaje, sin necesidad de consultarse por separado.

No se usan referencias porque ninguna entidad crece de forma independiente ni se comparte entre varios personajes, así que separar en colecciones adicionales solo agregaría `$lookup` innecesarios para un caso básico.

## Índice sugerido
`{ clase: 1 }` para acelerar filtros por clase, y `{ activo: 1 }` para reportes de personajes activos.

## Entregable
- `seed.mongodb.js`: creación de colección e inserción de documentos.
- `queries.mongodb.js`: consultas CRUD sobre `registros`.
- `evidencias.md`: resultados esperados de cada consulta.