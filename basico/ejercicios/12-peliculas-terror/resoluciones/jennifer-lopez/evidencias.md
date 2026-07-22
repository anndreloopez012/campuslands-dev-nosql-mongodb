# Modelo documental - Catálogo de películas de miedo

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para insertar los 5 documentos de prueba (películas populares de terror) y definir índices sin eliminar colecciones previas.
- `queries.mongodb.js`: Script con consultas de filtro por rating, búsquedas por índice de texto (`$text`), subdocumentos y actualización.

## 1. Identificación de Entidades y Atributos
Para la gestión del catálogo de películas de miedo se estructuraron los siguientes atributos:
- **Película:** `titulo`, `titulo_original`, `estreno`, `clasificacion`, `rating`, `director`, `sinopsis`.
- **Subgéneros:** Array de clasificaciones (`Slasher`, `Sobrenatural`, `Terror Psicológico`).
- **Detalles Técnicos:** Subdocumento embebido con `duracion_min`, `presupuesto_usd` y `disponible_streaming`.

## 2. Decisiones de Diseño
- **Inclusión de Índices de Texto (`$text`):** Permite ejecutar consultas de búsqueda por palabras clave en los campos `titulo` y `sinopsis` de forma optimizada.
- **Detalles Embebidos:** Al consultar una película, los datos técnicos de duración y disponibilidad streaming se necesitan juntos con el perfil de la cinta, por lo que se embeben.
- **Estructura Conservadora de Carga:** Se omitió el comando de eliminación previo (`drop`) para preservar la persistencia de datos solicitada.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `peliculas`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "titulo": "El Exorcista",
  "titulo_original": "The Exorcist",
  "estreno": 1973,
  "clasificacion": "R",
  "rating": 8.1,
  "director": "William Friedkin",
  "subgeneros": ["Terror Posesión", "Sobrenatural"],
  "detalles": {
    "duracion_min": 122,
    "presupuesto_usd": 12000000,
    "disponible_streaming": true
  },
  "sinopsis": "Una niña de doce años es poseída por una entidad demoníaca y dos sacerdotes intentan salvarla."
}
```
### Índices implementados
{ titulo: 1 }: Optimiza la búsqueda por nombre exacto de la película.

{ rating: -1 }: Índice ordenado descendentemente para agilizar rankings y filtros de mejores películas.

{ titulo: "text", sinopsis: "text" }: Índice Textual para permitir búsquedas por palabras clave en descripciones.

### Checklist
[x] Nombre de la colección en plural y minúsculas (peliculas).

[x] Inserción de al menos 5 documentos coherentes de películas populares.

[x] Conservación de datos sin ejecutar .drop().

[x] Uso de subdocumentos embebidos para detalles y arrays para subgeneros.

[x] Consultas con filtros de rating y búsqueda por texto ($text).

[x] Operación de actualización (updateOne con $set).

[x] Definición e implementación de índices.

[x] Archivos creados únicamente dentro de la carpeta personal de resolución.