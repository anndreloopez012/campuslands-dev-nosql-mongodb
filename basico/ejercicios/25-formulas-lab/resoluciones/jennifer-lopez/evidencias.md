# Modelo documental - Formula lab

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de carga con 5 fórmulas químicas iniciales. Incluye químicos principales con nombres poco comunes (Orestes, Zephyrine, Balthazar, Cyrene, Melantho), laboratorios ubicados en puntos de Guatemala (Cráter Azul, Laguna Lachúa, Quiriguá, Semuc Champey, Tikal) y fórmulas icónicas de ficción (*Capitán América*, *Harry Potter*, *Las Chicas Superpoderosas*, *Limitless*).
- `queries.mongodb.js`: Consultas enfocadas en la manipulación y filtrado del array `componentes`, evaluación con `$elemMatch` y adición de nuevos ingredientes mediante `$push`.

## 1. Identificación de Entidades y Atributos
- **Fórmula Química:** `codigo_formula`, `nombre_formula`, `quimico_principal`, `laboratorio_origen`, `pais`, `referencia_popular`, `nivel_riesgo`, `requiere_autorizacion`, `densidad_g_cm3`, `fecha_elaboracion`.
- **Componente (Array embebido):** Array `componentes` conteniendo objetos con `elemento`, `concentracion_porcentaje`, `pureza` y `funcion`.

## 2. Decisiones de Diseño
- **Array de Subdocumentos para Componentes:** Se optó por embeber la lista de reactivos en un array dentro del documento de la fórmula. Dado que cada componente no existe de forma independiente fuera de la receta química y se lee siempre junto con la fórmula, esta estructura es altamente eficiente en MongoDB.
- **Indexación Multikey:** Permite buscar fórmulas basándose en componentes específicos de manera directa.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `formulas`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "codigo_formula": "FORM-LAB-001",
  "nombre_formula": "Suero del Súper Soldado Vita",
  "quimico_principal": "Orestes Vane",
  "laboratorio_origen": "Laboratorio Cráter Azul",
  "pais": "Guatemala",
  "referencia_popular": "Marvel - Capitan América",
  "nivel_riesgo": "Alto",
  "requiere_autorizacion": true,
  "componentes": [
    {
      "elemento": "Dióxido de Radio-Vita",
      "concentracion_porcentaje": 45.0,
      "pureza": "99.9%",
      "funcion": "Agente mutagénico base"
    },
    {
      "elemento": "Estabilizador Potásico",
      "concentracion_porcentaje": 30.0,
      "pureza": "98.5%",
      "funcion": "Prevención de choque celular"
    }
  ],
  "densidad_g_cm3": 1.42,
  "fecha_elaboracion": "2026-03-10T00:00:00.000Z"
}
```

## Índices implementados
- `{ nivel_riesgo: 1 }`: Para filtrar rápidamente las fórmulas según su peligrosidad.
- `{ "componentes.elemento": 1 }`: Para buscar fórmulas que contengan un ingrediente o reactivo específico.
- `{ quimico_principal: 1 }`: Para encontrar de golpe todas las fórmulas creadas por un mismo químico.

### Checklist
[x] Nombre de la colección en plural y minúsculas (formulas).

[x] Sin instrucción drop() en el script inicial.

[x] Nombres poco comunes de científicos, ubicaciones de Guatemala y temáticas populares.

[x] Índices explicados con comentarios en seed.mongodb.js.

[x] Consultas sobre arrays utilizando $elemMatch y $push.

[x] Archivos agregados estrictamente en la carpeta de resolución personal.

## Explicación de las Consultas (`queries.mongodb.js`)

1. **Consulta General (`find({})`):**
   Muestra el listado de todos los documentos para corroborar la siembra inicial requerida.

2. **Consulta por Pureza en Componentes (`componentes.pureza`):**
   Busca las fórmulas que poseen componentes con grado de pureza extremo (`99.9%`), proyectando solo los datos del químico y componentes.

3. **Filtro por Bioseguridad (`nivel_riesgo` y `requiere_autorizacion`):**
   Obtiene las fórmulas clasificadas como riesgo "Alto" que requieren permisos especiales antes de su uso.

4. **Búsqueda Avanzada en Arrays con `$elemMatch`:**
   Evalúa elementos dentro del array `componentes` que cumplan dos condiciones simultáneamente: una concentración igual o superior al 40.0% y una función catalogada como "Base".

5. **Actualización del Array con `$push`:**
   Inyecta un nuevo subdocumento al array `componentes` de la fórmula `FORM-LAB-003` para agregar un modificador de reacción, ajustando su nivel de riesgo y fecha.

6. **Inserción de Nueva Fórmula (`insertOne`):**
   Agrega una nueva receta química producida en Quiriguá, Guatemala.