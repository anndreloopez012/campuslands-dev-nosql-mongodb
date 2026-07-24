# 29. Validacion basica de documentos

## Tematica
Inventario de dispositivos tecnologicos (coleccion `registros`).

## Modelo
Un solo documento por dispositivo. Se embeben `especificaciones` (subdocumento)
y `etiquetas` (array) porque siempre se leen junto con el dispositivo y no
crecen de forma independiente. No se referencian entidades externas: el caso
no requiere compartir estos datos entre otros documentos, asi que separar en
otra coleccion agregaria un join innecesario.

Se aplica **schema validation** (`$jsonSchema`) al crear la coleccion para
garantizar tipos y campos obligatorios: `nombre`, `categoria`, `precio`,
`disponible`, `especificaciones.ram_gb`.

## Como ejecutar
1. Abrir `seed.mongodb.js` y ejecutar todo el archivo (crea la coleccion con
   validator + inserta los documentos).
2. Abrir `queries.mongodb.js` y ejecutar cada bloque en orden.
3. Ver resultados esperados en `evidencias.md`.

## Reglas del validator
- `nombre`: string, requerido.
- `categoria`: string, uno de `["laptop","celular","monitor","accesorio"]`.
- `precio`: number >= 0, requerido.
- `disponible`: bool, requerido.
- `especificaciones.ram_gb`: int > 0, requerido.
