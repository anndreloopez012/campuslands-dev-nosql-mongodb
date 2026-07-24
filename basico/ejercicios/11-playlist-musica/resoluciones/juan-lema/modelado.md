# Modelo documental — Playlist por energia

## Coleccion principal
`registros` dentro de la base `campus_playlist_musica`.

## Entidad
Cada documento representa una cancion de una playlist personal.

## Estructura del documento
```json
{
  "nombre": "string",
  "artista": "string",
  "genero": "string",
  "duracion_seg": "number",
  "energia": "number (1-10)",
  "activo": "boolean",
  "reproducciones": "number",
  "etiquetas": ["string"]
}
```

## Decisiones de diseno
- **Embebido, sin referencias**: cada cancion es autocontenida (artista y genero como strings simples), ya que en este caso no se comparten ni crecen de forma independiente. No se justifica una coleccion aparte de artistas para un ejercicio de este alcance.
- **Array simple (`etiquetas`)**: se embebe un array de strings para clasificar el estado de animo / momento de uso de la cancion (ej. `"gym"`, `"focus"`, `"chill"`). Es un array simple porque solo se lee y filtra junto al documento, sin necesidad de metadatos adicionales por etiqueta.
- **`energia` como numero (1-10)**: permite ordenar y filtrar canciones por intensidad sin depender de categorias fijas.
- **`activo`**: booleano para marcar si la cancion sigue en la playlist vigente, sin necesidad de borrarla fisicamente.

## Indices sugeridos
- Indice simple en `energia` para acelerar filtros/orden por intensidad.
- Indice simple en `etiquetas` (multikey) para acelerar busquedas por etiqueta.

```javascript
db.registros.createIndex({ energia: -1 })
db.registros.createIndex({ etiquetas: 1 })
```
