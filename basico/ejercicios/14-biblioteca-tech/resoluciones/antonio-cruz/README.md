# Biblioteca Tech

## Descripción

Se desarrolló una base de datos para administrar un pequeño catálogo de libros relacionados con tecnología y desarrollo de software.

El ejercicio está enfocado en realizar **proyecciones limpias**, mostrando únicamente los campos necesarios durante las consultas.

## Colección utilizada

- **libros**

## Modelo documental

Cada libro se almacena como un documento independiente.

```javascript
{
    titulo,
    autor,
    categoria,
    anio,
    disponible
}
```

El modelo se mantuvo simple porque toda la información pertenece al libro. No fue necesario utilizar arrays, subdocumentos o referencias.

## Índice implementado

```javascript
db.libros.createIndex({
    categoria: 1
})
```

Este índice mejora el rendimiento cuando se consultan libros según su categoría.

## Archivos incluidos

- seed.mongodb.js
- queries.mongodb.js
- evidencias.md