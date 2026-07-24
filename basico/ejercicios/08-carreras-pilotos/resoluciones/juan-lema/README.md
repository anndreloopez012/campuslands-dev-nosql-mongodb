# Modelo documental — Ranking de pilotos

## Colecciones
- **`registros`**: colección única para los pilotos y su desempeño en carrera. Se usa un modelo embebido porque cada documento es autocontenido y las consultas del ejercicio (sort/limit para ranking) leen todos los campos juntos, sin necesidad de joins.

## Documentos
Cada documento representa un piloto con su escudería, categoría, puntos acumulados y estado de actividad. Un esquema flexible permite sumar campos (por ejemplo `vueltaRapida`) sin migraciones.

## Subdocumentos y Arrays
- **`etiquetas` (Array de Strings)**: clasificadores rápidos del piloto (ej. `["novato", "sprint"]`). Se mantiene como array simple porque la lista es corta y siempre se consulta junto al piloto.
- No se usan referencias: la escudería es un dato pequeño y estable que no se comparte a nivel de colección aparte, por lo que embeberlo evita lookups innecesarios.

## Índices sugeridos
- Índice descendente en `puntos` para acelerar los `sort` de ranking (`db.registros.createIndex({ puntos: -1 })`).

## Decisiones técnicas
El ejercicio se centra en `sort` y `limit`, por lo que el modelo prioriza que `puntos` sea un campo numérico simple y consultable directamente, evitando anidar el puntaje dentro de subdocumentos.
