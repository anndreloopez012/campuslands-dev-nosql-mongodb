# Modelo documental - Portafolio de dibujo

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de carga con 5 obras de ilustración iniciales. Incluye artistas con nombres poco comunes (Orestes, Cyrene, Balthazar, etc.), lugares de inspiración icónicos de Guatemala (Cráter Azul, Laguna Lachúa, Quiriguá, Semuc Champey) y franquicias populares (*Spider-Man*, *Harry Potter*, *Dragon Ball*, *Batman*, *Sailor Moon*).
- `queries.mongodb.js`: Consultas enfáticas en el filtrado sobre el arreglo de etiquetas (`etiquetas`) utilizando operadores como `$all`, `$in` y actualizaciones de arreglos con `$push`.

## 1. Identificación de Entidades y Atributos
- **Obra de Dibujo:** `titulo`, `artista`, `lugar_inspiracion`, `pais`, `tecnica`, `software_usado`, `etiquetas` (Array de strings), `likes_recibidos`, `destacado`, `fecha_publicacion`.

## 2. Decisiones de Diseño
- **Array de Etiquetas Embebido (`etiquetas`):** Las plataformas de portafolios de arte digital (como ArtStation o Behance) basan sus filtros en etiquetas. Embeber las etiquetas como un arreglo de cadenas aprovecha el motor Multikey de MongoDB para realizar búsquedas veloces sin tablas pivote intermedias.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `obras`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "titulo": "Spider-Man sobre el Horizonte Nocturno",
  "artista": "Orestes Vane",
  "lugar_inspiracion": "Cráter Azul",
  "pais": "Guatemala",
  "tecnica": "Digital Paint",
  "software_usado": "Procreate",
  "etiquetas": ["fanart", "spider-man", "marvel", "digital", "nocturno", "tendencia"],
  "likes_recibidos": 390,
  "destacado": true,
  "fecha_publicacion": "2026-05-10T00:00:00.000Z"
}
```
### Índices implementados
{ etiquetas: 1 }: Índice Multikey para acelerar la búsqueda por cualquier tag individual o combinado.

{ destacado: 1 }: Permite listar rápidamente la galería de ilustraciones destacadas en la página de inicio.

{ artista: 1 }: Optimiza la búsqueda de obras de un creador específico.

### Checklist
[x] Nombre de la colección en plural y minúsculas (obras).

[x] Sin instrucción drop() en la semilla.

[x] Nombres de artistas poco comunes, lugares de Guatemala y franquicias populares.

[x] Modelado optimizado para etiquetas mediante arrays.

[x] Consultas sobre arreglos con $all e $in.

[x] Actualización de arreglos con $push e incremento con $inc.

[x] Archivos creados únicamente dentro de la carpeta personal de resolución.

## 🔍 Explicación de las Consultas

1. **Consulta General (`find({})`):**
   Muestra la totalidad de los documentos insertados para verificar la carga inicial exigida por la plantilla base.

2. **Filtro por Etiqueta Individual (`etiquetas: "fanart"`):**
   Recupera todas las obras que contengan la etiqueta "fanart" dentro de su arreglo de etiquetas.

3. **Búsqueda Coincidente Múltiple (`$all`):**
   Filtra únicamente las ilustraciones que incluyan al mismo tiempo las etiquetas `"anime"` y `"digital"`.

4. **Búsqueda por Opciones (`$in`):**
   Retorna las obras que pertenezcan a franquicias específicas (que tengan la etiqueta `"marvel"` O `"dc-comics"`).

5. **Actualización de Etiquetas y Métricas (`updateOne` con `$push` e `$inc`):**
   Agrega una nueva etiqueta (`"tendencia"`) al arreglo de la ilustración de Spider-Man e incrementa en +50 su contador de likes recibidos.

6. **Nueva Publicación (`insertOne`):**
   Publica una nueva ilustración inspirada en Semuc Champey, Guatemala.