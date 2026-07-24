# Catálogo de películas de miedo

# Descripción

En este ejercicio se creó una base de datos para administrar un catálogo de películas de terror utilizando MongoDB.

La solución permite realizar búsquedas por texto, consultas utilizando el rating de las películas y una actualización sencilla sobre uno de los documentos.

# Colección utilizada

- **peliculas**

# Modelo documental

Cada película se almacena como un documento independiente.

```javascript
{
    titulo,
    director,
    anio,
    genero,
    rating,
    disponible
}
```

No se utilizaron subdocumentos ni arrays porque cada registro contiene únicamente información propia de la película. Tampoco fue necesario implementar referencias debido a que solo existe una entidad principal.

## Índice implementado

```javascript
db.peliculas.createIndex({
    genero: 1
})
```

El índice sobre **genero** mejora las búsquedas cuando el catálogo crece y se filtra por tipo de película.

## Archivos entregados

- seed.mongodb.js
- queries.mongodb.js
- evidencias.md