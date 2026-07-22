# Ejercicio 17 — Viajes mochileros

Solución en MongoDB para el caso de viajes mochileros, enfocado en fechas y presupuesto.

## Contenido
- `modelado.md` — diseño de la colección `registros` y justificación embebido vs referencia.
- `seed.mongodb.js` — crea `campus_viajes_mochileros` e inserta 6 viajes originales.
- `queries.mongodb.js` — find general, 2 finds filtrados, updateOne y deleteOne, cada uno con verificación.
- `evidencias.md` — resultados esperados de cada consulta.

## Cómo ejecutar
1. Abrir `mongosh` o Compass conectado a `mongodb://localhost:27017`.
2. Ejecutar `seed.mongodb.js` completo.
3. Ejecutar `queries.mongodb.js` bloque por bloque.
4. Comparar salidas contra `evidencias.md`.
