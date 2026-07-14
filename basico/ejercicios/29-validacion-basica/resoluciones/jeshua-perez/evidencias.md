# Evidencias - 29. Validacion basica de documentos

## Ejecucion

1. `seed.mongodb.js` sobre `campus_validacion_basica`: crea `dispositivos` con `$jsonSchema` y reporta `insertedCount: 5`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. `find({})`: retorna los 5 dispositivos iniciales.
2. `getCollectionInfos`: muestra la coleccion `dispositivos` con su `options.validator` (`$jsonSchema`) configurado.
3. `insertOne` de "Accesorio Mouse Inalambrico": pasa el schema, `insertedCount: 1`.
4. `insertOne` de "Celular Sin Precio" (sin campo `precio`): rechazado por el validador; se captura el error y se imprime "Insercion rechazada por el schema: Document failed validation".
5. `insertOne` de "Consola Retro" (`tipo: "consola"` no esta en el `enum`): rechazado por el validador; mismo tipo de error capturado.
6. `updateOne` sobre "Laptop Office 13": `matchedCount: 1`, `modifiedCount: 1`; sigue cumpliendo el schema (`stock: 5`, `activo: true`).

## Conclusion

El `$jsonSchema` bloqueo documentos incompletos o con valores fuera de las reglas (campo obligatorio faltante, `tipo` fuera del enum), mientras que los documentos validos y las actualizaciones correctas se procesaron sin problema.
