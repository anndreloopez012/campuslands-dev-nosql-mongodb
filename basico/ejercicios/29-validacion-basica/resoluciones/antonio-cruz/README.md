# Validación básica de documentos

## Base de datos

`campus_validacion_basica`

## Colección

- dispositivos

## Decisiones de modelado

Se creó una colección llamada `dispositivos` con validación mediante `$jsonSchema`.

La validación se utiliza para garantizar que los documentos tengan los campos principales requeridos y evitar almacenar información incompleta o con tipos incorrectos.

Para este ejercicio no se utilizaron referencias porque todos los datos pertenecen directamente al dispositivo.

## Operaciones implementadas

- Creación de colección con schema validation.
- Inserción de 5 documentos válidos.
- Consultas por estado y categoría.
- Consulta por rango de precio.
- Reporte ordenado.
- Actualización de un documento validado.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`