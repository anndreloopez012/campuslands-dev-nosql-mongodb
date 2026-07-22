# Entrega — 04. Heroes MOBA por rol

**Autor:** juan-lema

## Contenido
- `modelado.md`: diseno de la coleccion `registros` (base `campus_heroes_moba`) y justificacion de embeber estadisticas, habilidades y sinergias.
- `seed.mongodb.js`: carga 6 heroes originales, con roles, dificultades y regiones variadas.
- `queries.mongodb.js`: find general, dos find filtrados, un updateOne, un deleteOne controlado (con manejo de errores) y un reporte con aggregate.
- `evidencias.md`: resultados esperados de cada consulta.

## Como ejecutar
1. Abrir `seed.mongodb.js` en MongoDB Shell o Compass y ejecutarlo completo.
2. Ejecutar `queries.mongodb.js` en orden.
3. Comparar resultados contra `evidencias.md`.
