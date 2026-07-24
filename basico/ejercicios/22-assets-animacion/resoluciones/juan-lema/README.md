# Ejercicio 22 — Assets de animacion 3D

**Autor:** juan-lema

## Resumen
Se modela una coleccion unica `assets_animacion` en la base `campus_assets_animacion` para representar assets de un pipeline de animacion 3D (rigs, modelos, animaciones, texturas, props). La metadata tecnica y el historial de revisiones se embeben por documento, ya que se leen siempre junto al asset y no se comparten entre entidades.

## Archivos
- `modelado.md`: justificacion del diseno documental.
- `seed.mongodb.js`: creacion de la coleccion e insercion de 6 documentos originales.
- `queries.mongodb.js`: find general, dos find filtrados, updateOne, deleteOne y conteo, con verificaciones.
- `evidencias.md`: resultados esperados de cada consulta.

## Como ejecutar
1. Abrir `seed.mongodb.js` en MongoDB Shell/Compass y ejecutar todo el archivo.
2. Abrir `queries.mongodb.js` y ejecutar cada bloque en orden.
3. Contrastar resultados contra `evidencias.md`.
