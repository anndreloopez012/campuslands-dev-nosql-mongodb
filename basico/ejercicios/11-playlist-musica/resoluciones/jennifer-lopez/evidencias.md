# Modelo documental - Playlist por energía

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para inicializar la colección `playlists`, insertar los 5 documentos de prueba y definir índices.
- `queries.mongodb.js`: Script con consultas de búsqueda sobre arrays simples (`$in`, `$all`), filtrados por nivel de energía y actualización con `$push`.

## 1. Identificación de Entidades y Atributos
Para la gestión de playlists por nivel de energía se definieron los siguientes atributos:
- **Playlist:** `nombre`, `nivel_energia` (Alta, Media, Baja), `activo`, `me_gusta`.
- **Listas de contenido (Arrays simples):** `generos` (géneros musicales), `canciones` (lista de temas), `etiquetas` (contextos de uso).

## 2. Decisiones de Diseño
- **Arrays Simples para Canciones y Géneros:** En un modelo de playlist, las canciones y los géneros pertenecen directamente a la lista y se leen de forma secuencial. Modelarlos como arrays de cadenas de texto permite realizar consultas Multikey de alto rendimiento sin sobrecomplicar la estructura.
- **Filtrado por Nivel de Energía:** Permite organizar el catálogo según la actividad del usuario (ejercicio, concentración o descanso).

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `playlists`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "nombre": "Workout Workout Ultra",
  "nivel_energia": "Alta",
  "activo": true,
  "me_gusta": 1250,
  "generos": ["EDM", "Trap", "Electronic"],
  "canciones": ["Till I Collapse", "Plan A", "Lucid Dreams", "Adrenalina"],
  "etiquetas": ["gym", "cardio", "fuerza"]
}
```
### Índices implementados
{ nombre: 1 }: Optimiza la búsqueda por título de la playlist.

{ nivel_energia: 1, activo: 1 }: Índice compuesto para filtrar velozmente listas activas por intensidad de energía.

{ canciones: 1 }: Índice Multikey que permite verificar en qué playlists se encuentra disponible un tema específico.

{ generos: 1 }: Índice Multikey para agilizar filtros por género musical.

### Checklist
[x] Nombre de la colección en plural y minúsculas (playlists).

[x] Inserción de al menos 5 documentos coherentes.

[x] Uso de arrays simples para canciones, generos y etiquetas.

[x] Consultas que operan sobre arrays ($in, $all y coincidencia exacta).

[x] Operación de actualización (updateOne con $push e $inc).

[x] Definición e implementación de índices Multikey.

[x] Archivos creados únicamente dentro de la carpeta personal de resolución.