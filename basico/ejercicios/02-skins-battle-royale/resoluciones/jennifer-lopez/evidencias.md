# Modelo documental

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para crear la colección `skins`, poblar 5 documentos y crear índices.
- `queries.mongodb.js`: Script con consultas de lectura, filtros de subdocumentos/arrays y actualización.

## 1. Identificación de Entidades y Atributos
Para el catálogo de skins del battle royale se encuentran las siguientes entidades:

- Skin: `nombre`, `rareza`, `precio_monedas`, `disponible`.
- Detalles de Temporada/Estilo: `temporada`, `estilo`, `puntos_popularidad`.
- Estilos y Categorías: `estilos_desbloqueables`, `etiquetas`.

## 2. Decisiones de Diseño

- Los detalles de la skin (`temporada`, `estilo`, `puntos_popularidad`) son datos fijos vinculados a un único ítem visual. Se embeben en un subdocumento para permitir lecturas rápidas sin consultas adicionales.

- Los estilos desbloqueables y las etiquetas son listas pequeñas de texto, por lo que se modelan como arrays embebidos dentro del documento principal.

- No se requieren referencias externas en este nivel, manteniendo una estructura autosuficiente de alta velocidad para la tienda del juego.

## 3. Estructura de la Colección y Documentos

- Nombre de la colección: `skins`.

### Ejemplo de documento:

```json
{
  "_id": "ObjectId",
  "nombre": "Cuervo Legendario",
  "rareza": "Legendario",
  "precio_monedas": 2000,
  "disponible": true,
  "detalles": {
    "temporada": 4,
    "estilo": "Sombrío",
    "puntos_popularidad": 95
  },
  "estilos_desbloqueables": ["Sombra", "Tóxico", "Neón"],
  "etiquetas": ["battle-pass", "exclusivo", "popular"]
}
```
### Índices implementados
{ nombre: 1 }: Optimiza la búsqueda directa por el nombre de la skin.

{ disponible: 1, rareza: 1 }: Acelera el filtrado en la tienda por disponibilidad y rareza.

### Checklist
[x] Nombre de la colección en plural y minúsculas (skins).

[x] Inserción de al menos 5 documentos coherentes.

[x] Uso de subdocumento embebido para detalles.

[x] Uso de array embebido para estilos_desbloqueables y etiquetas.

[x] Consultas con filtros sobre subdocumentos y arrays.

[x] Operación de actualización (updateOne con $set e $inc).

[x] Creación de índices para optimización de búsquedas.

[x] Archivos ubicados únicamente dentro de la carpeta personal de resolución.