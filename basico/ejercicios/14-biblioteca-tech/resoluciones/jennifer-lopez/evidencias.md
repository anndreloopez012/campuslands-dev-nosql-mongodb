# Modelo documental - Biblioteca tech

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para inicializar la colección `libros`, insertar 5 libros técnicos populares y definir índices de búsqueda.
- `queries.mongodb.js`: Script con consultas enfocadas en **proyecciones limpias** (`_id: 0`, selección específica de campos) y actualización de estados de disponibilidad.

## 1. Identificación de Entidades y Atributos
Para la gestión de la biblioteca tecnológica se estructuraron los siguientes atributos:
- **Libro:** `titulo`, `subtitulo`, `autor`, `anio_publicacion`, `paginas`, `disponible`.
- **Clasificación:** `etiquetas` (Array simple con tecnologías o temas).
- **Detalles de edición:** Subdocumento embebido con `idioma` y `editorial`.

## 2. Decisiones de Diseño
- **Proyecciones Limpias:** Al realizar las consultas, se omitió explícitamente el campo autogenerado `_id` y se seleccionaron únicamente los campos relevantes para responder a la pregunta de negocio (ej. consultar disponibilidad solo retorna el título y el autor). Esto reduce la transferencia de datos y limpia la salida en consola.
- **Etiquetas y Detalles Embebidos:** Un libro técnico se consulta normalmente junto con sus temas clave (etiquetas) y su editorial, por lo que embeber esta información es la opción más eficiente para evitar consultas adicionales a otras colecciones.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `libros`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "titulo": "Clean Code",
  "subtitulo": "A Handbook of Agile Software Craftsmanship",
  "autor": "Robert C. Martin",
  "anio_publicacion": 2008,
  "paginas": 464,
  "disponible": true,
  "etiquetas": ["buenas practicas", "arquitectura", "agile"],
  "detalles": {
    "idioma": "Inglés",
    "editorial": "Prentice Hall"
  }
}
```
### Índices implementados
{ titulo: 1 }: Optimiza la búsqueda directa por nombre del libro.

{ disponible: 1 }: Acelera los filtros de inventario para saber qué libros se pueden prestar.

{ etiquetas: 1 }: Índice Multikey para filtrar velozmente por temas (ej. "javascript", "python").

### Checklist
[x] Nombre de la colección en plural y minúsculas (libros).

[x] Inserción de 5 documentos coherentes sobre tecnología.

[x] Uso de subdocumentos (detalles) y arrays (etiquetas).

[x] Consultas utilizando proyecciones limpias (excluyendo el _id).

[x] Operación de actualización (updateOne con $set).

[x] Definición e implementación de índices.

[x] Archivos creados únicamente dentro de la carpeta personal de resolución.