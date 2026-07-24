# Solucion - 03. Personajes RPG

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_personajes_rpg`, coleccion `personajes`.
- `atributos` se modela como subdocumento embebido (`fuerza`, `destreza`, `inteligencia`, `vida`) porque siempre se lee y se muestra junto con el personaje, y cambia con la misma frecuencia que el resto del documento.
- `inventario` se modela como array de subdocumentos (`item`, `cantidad`) porque cada personaje tiene pocos items y se consultan siempre en el contexto de ese personaje, no de forma independiente.
- No se referencian colecciones externas: en este ejercicio los items no necesitan catalogo propio (precio, descripcion, etc.), asi que embeber es mas simple que referenciar.

## Archivos

- `seed.mongodb.js`: crea la coleccion `personajes` con atributos e inventario embebidos.
- `queries.mongodb.js`: consultas sobre campos anidados (`atributos.inteligencia`, `inventario.item`) y actualizaciones dentro de subdocumentos/arrays.
- `evidencias.md`: resultados esperados de cada consulta.
