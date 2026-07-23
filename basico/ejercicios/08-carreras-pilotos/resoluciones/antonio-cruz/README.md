# Ranking de pilotos

## Descripción

Este ejercicio implementa una base de datos sencilla para registrar pilotos de un campeonato de carreras utilizando MongoDB.

La solución fue diseñada pensando en consultas de clasificación, especialmente operaciones con `sort()` y `limit()` para construir rankings.

## Colección utilizada

- **pilotos**

## Modelo de datos

Cada piloto se almacena como un documento independiente.

```javascript
{
    nombre,
    escuderia,
    victorias,
    puntos,
    pais,
    activo
}
```

No se utilizaron subdocumentos ni referencias porque toda la información pertenece directamente al piloto y no existen relaciones con otras entidades.

## Índices

```javascript
db.pilotos.createIndex({
    puntos: -1
})
```

El índice sobre **puntos** mejora el rendimiento cuando se generan tablas de clasificación ordenadas de mayor a menor.

## Archivos entregados

- seed.mongodb.js
- queries.mongodb.js
- evidencias.md