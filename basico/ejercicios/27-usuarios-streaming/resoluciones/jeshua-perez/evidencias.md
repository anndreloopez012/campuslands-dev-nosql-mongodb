# Evidencias - 27. Usuarios streaming

## Ejecucion

1. `seed.mongodb.js` sobre `campus_usuarios_streaming`: `insertMany` reporta `insertedCount: 6` en `usuarios`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Activos con plan Premium: retorna 2 documentos (Yesica Roman, Felipe Angulo).
2. Inactivos: retorna 2 documentos (Gina Paredes, Carolina Estupinan) con `nombre` y `email`.
3. Genero "rock": retorna 2 documentos (Brayan Ortiz, Felipe Angulo).
4. Conteo por plan: `Premium: 3`, `Basico: 2`, `Familiar: 1`.
5. `updateOne` sobre Carolina Estupinan: `matchedCount: 1`, `modifiedCount: 1`; queda `activo: true`.
6. `updateOne` con `$addToSet` sobre Brayan Ortiz: `matchedCount: 1`, `modifiedCount: 1`; su array `generosFavoritos` pasa a `["accion", "rock", "terror"]`.

## Conclusion

Modelar cada usuario como documento independiente con sus preferencias embebidas permitio segmentar, contar y actualizar perfiles sin necesitar joins entre colecciones.
