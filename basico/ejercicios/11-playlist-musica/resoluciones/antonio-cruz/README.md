# Playlist por energía

## Descripción

Se desarrolló una base de datos para administrar playlists musicales clasificadas según su nivel de energía.

El ejercicio se centra en el uso de **arrays** para almacenar múltiples canciones dentro de un mismo documento y realizar consultas sobre esos elementos.

## Colección utilizada

- **playlists**

## Modelo documental

Cada playlist se almacena como un documento independiente.

```javascript
{
    nombre,
    energia,
    genero,
    canciones: [],
    publica
}
```

En este caso **canciones** se modeló como un array porque las pistas pertenecen directamente a la playlist y normalmente siempre se consultan junto con ella.

No fue necesario utilizar referencias ya que el ejercicio no requiere reutilizar canciones entre diferentes colecciones.

## Índice implementado

```javascript
db.playlists.createIndex({
    energia: 1
})
```

Este índice optimiza las búsquedas cuando se filtran playlists según su nivel de energía.

## Archivos incluidos

- seed.mongodb.js
- queries.mongodb.js
- evidencias.md