# Modelo documental

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para inicializar la colección `peleadores`, insertar los 5 documentos de prueba y definir índices.
- `queries.mongodb.js`: Script con consultas que aplican operadores lógicos (`$and`, `$or`, `$nor`), búsquedas en subdocumentos y actualización.

## 1. Identificación de Entidades y Atributos
Para la gestión del ranking de kickboxing se identificaron las siguientes entidades y sus atributos:
- **Peleador:** `nombre`, `apodo`, `categoria_peso`, `activo`.
- **Récord Profesional:** `victorias`, `derrotas`, `nocauts`.
- **Especialidades y Palmarés:** `estilos` (disciplinas de combate) y `titulos` (campeonatos ganados).

## 2. Decisiones de Diseño 
- **Récord Embebido:** El historial de victorias, derrotas y nocauts constituye la métrica principal de rendimiento del atleta y se consulta junto a su perfil. Se empaqueta en un subdocumento.
- **Estilos y Títulos Embebidos:** Listados de disciplinas y cinturones ganados que pertenecen exclusivamente al atleta.
- **Uso de Operadores Lógicos:** Permite responder preguntas complejas de matchmaking (por ejemplo, filtrar peleadores en activo de divisiones específicas excluyendo ciertas categorías).

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `peleadores`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "nombre": "Rico Verhoeven",
  "apodo": "The King of Kickboxing",
  "categoria_peso": "Pesado",
  "activo": true,
  "record": {
    "victorias": 60,
    "derrotas": 10,
    "nocauts": 20
  },
  "estilos": ["Dutch Kickboxing", "Muay Thai"],
  "titulos": ["GLORY Heavyweight Champion"]
}
```
### Índices implementados
{ nombre: 1 }: Acelera la búsqueda por el nombre del deportista.

{ categoria_peso: 1, activo: 1 }: Índice compuesto para filtrar velozmente competidores activos según su división de peso.

{ "record.victorias": -1 }: Optimiza la ordenación del ranking según la cantidad de victorias acumuladas.

### Checklist
[x] Nombre de la colección en plural y minúsculas (peleadores).

[x] Inserción de al menos 5 documentos coherentes.

[x] Uso de subdocumento embebido para record.

[x] Uso de array embebido para estilos y titulos.

[x] Consultas con operadores lógicos ($and, $or, $nor).

[x] Operación de actualización (updateOne con $inc).

[x] Creación de índices para optimizar rendimiento de lectura.

[x] Archivos ubicados exclusivamente en la carpeta personal de resolución.