# Solucion - 29. Validacion basica de documentos

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_validacion_basica`, coleccion `dispositivos`.
- Se usa `db.createCollection` con un `validator` `$jsonSchema` (enfoque del ejercicio: schema validation introductorio) que exige `nombre`, `tipo`, `precio`, `stock` y `activo`, ademas de restringir `tipo` a un `enum` fijo y `precio`/`stock` a numeros no negativos.
- `validationLevel: "strict"` aplica la regla tanto a inserts como a updates, y `validationAction: "error"` rechaza el documento en vez de solo advertir, para que quede evidencia clara de que documentos invalidos no entran a la coleccion.

## Archivos

- `seed.mongodb.js`: crea la coleccion `dispositivos` con su `$jsonSchema` y carga 5 documentos validos.
- `queries.mongodb.js`: inserta un documento valido, intenta insertar dos documentos invalidos (campo faltante y `tipo` fuera del enum) capturando el error, y hace un update valido.
- `evidencias.md`: resultados esperados de cada consulta, incluyendo los rechazos del validador.
