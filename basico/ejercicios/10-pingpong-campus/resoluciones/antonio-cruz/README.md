# Liga de Pingpong Campus

## Descripción

Este ejercicio implementa una base de datos para administrar una liga de pingpong entre estudiantes del campus utilizando MongoDB.

El objetivo principal fue practicar consultas de búsqueda y operaciones de conteo sobre una colección de documentos.

## Colección utilizada

- **jugadores**

## Modelo documental

Cada jugador se almacena como un documento independiente.

```javascript
{
    nombre,
    facultad,
    victorias,
    derrotas,
    categoria,
    activo
}
```

No se utilizaron subdocumentos ni referencias porque el ejercicio solo requiere administrar información básica de cada participante.

## Índice implementado

```javascript
db.jugadores.createIndex({
    categoria: 1
})
```

Este índice facilita las búsquedas cuando se filtran jugadores por categoría.

## Archivos incluidos

- seed.mongodb.js
- queries.mongodb.js
- evidencias.md