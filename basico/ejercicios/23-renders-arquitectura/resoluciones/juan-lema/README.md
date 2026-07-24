# 23. Renders arquitectura 3D — juan-lema

## Modelo documental

Base de datos: `campus_renders_arquitectura`
Colección principal: `registros`

Cada documento representa un **render** solicitado por un cliente. Se decidió **embeber** los datos del cliente (`cliente`) y las especificaciones técnicas (`especificaciones`) dentro del mismo documento, porque siempre se leen juntos al consultar un render y no se comparten entre múltiples renders (no ameritan colección aparte ni referencia). El arreglo `etiquetas` permite filtrar por estilo o uso del render. No se usan referencias porque el volumen de datos es bajo y no hay relación muchos-a-muchos.

## Archivos entregados

- `seed.mongodb.js` — creación de la colección e inserción de documentos.
- `queries.mongodb.js` — consultas, actualización y eliminación.
- `evidencias.md` — resultados esperados de cada consulta.

## Cómo ejecutar

```bash
mongosh < seed.mongodb.js
mongosh < queries.mongodb.js
```
