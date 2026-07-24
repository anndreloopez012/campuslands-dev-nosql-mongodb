# Solución: Rutas Turísticas

## Contexto del Problema
Solución en MongoDB para la gestión de rutas turísticas, enfocada en la organización de información geográfica simple, puntos de interés embebidos y filtros orientados a la experiencia del viajero.

## Decisiones de Diseño 
- **Colección Principal**: Se utiliza `rutas` para almacenar cada itinerario o recorrido turístico de forma independiente.
- **Datos Embebidos**: Se integran campos como la ubicación inicial/final y un array de puntos de interés (`puntos_interes`) debido a que se leen en conjunto con la ruta principal y no requieren colecciones cruzadas complejas.
- **Enfoque Básico**: Se priorizan operaciones CRUD nativas, proyecciones limpias (`{ _id: 0 }`) y actualizaciones atómicas simples mediante operadores como `$set` y `$push`.
