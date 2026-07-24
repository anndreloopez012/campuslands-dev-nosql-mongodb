# Modelo documental - Renders arquitectura 3D

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de carga con 5 proyectos de visualización 3D arquitectónica. Incluye clientes y arquitectos de nombres poco comunes (Orestes, Cyrene, Balthazar, Melantho, Zephyrine), ubicaciones emblemáticas de Guatemala (Cráter Azul, Laguna Lachúa, Quiriguá, Semuc Champey, Tikal) e inspiraciones de la cultura pop (*Iron Man*, *El Señor de los Anillos*, *Ataque a los Titanes*, *Star Wars*, *Batman*).

- `queries.mongodb.js`: Consultas focalizadas en la búsqueda por cliente, filtrado por estados de entrega, presupuestos elevados y actualización de subdocumentos técnicos.

## 1. Identificación de Entidades y Atributos
- **Render Arquitectónico:** `proyecto`, `cliente`, `arquitecto_lead`, `ubicacion_terreno`, `pais`, `estilo_arquitectonico`, `inspiracion_popular`, `software_render`, `presupuesto_obra_usd`, `estado_proyecto` (`en_proceso`, `revision_cliente`, `entregado`), `fecha_solicitud`.

- **Especificaciones Taller:** Subdocumento embebido `especificaciones` (`renders_interiores`, `renders_exteriores`, `recorrido_virtual_360`, `resolucion_final`).

## 2. Decisiones de Diseño
- **Embebido de Especificaciones Técnicas:** Los atributos como cantidad de renders interiores/exteriores y si cuenta con recorrido 360 forman parte del entregable contractual de cada render, por lo que embeberlos garantiza lecturas rápidas sin realizar joins.

- **Enfoque en Cliente:** Se modela el campo `cliente` como un atributo indexado de nivel superior para resolver de forma óptima las consultas de proyectos asignados por cliente.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `renders`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "proyecto": "Residencia Estilo Mansión Malibú",
  "cliente": "Orestes Vane",
  "arquitecto_lead": "Zephyrine Valdivia",
  "ubicacion_terreno": "Cráter Azul",
  "pais": "Guatemala",
  "estilo_arquitectonico": "Futurista / Cladismo Glass",
  "inspiracion_popular": "Iron Man - Stark Tower & Mansion",
  "software_render": "V-Ray / Unreal Engine 5",
  "presupuesto_obra_usd": 850000.00,
  "estado_proyecto": "en_proceso",
  "especificaciones": {
    "renders_interiores": 8,
    "renders_exteriores": 4,
    "recorrido_virtual_360": true,
    "resolucion_final": "4K"
  },
  "fecha_solicitud": "2026-05-12T00:00:00.000Z"
}
```

### Índices implementados
{ cliente: 1 }: Optimiza la búsqueda de proyectos y renders contratados por un cliente en específico.

{ estado_proyecto: 1 }: Acelera la filtración de proyectos según su avance en la oficina de visualización.

{ presupuesto_obra_usd: -1 }: Permite ordenar y filtrar rápidamente los encargos de mayor presupuesto.

### Checklist
[x] Nombre de la colección en plural y minúsculas (renders).

[x] Sin instrucción drop() en la semilla.

[x] Nombres de clientes poco comunes, ubicaciones de Guatemala e inspiraciones de películas populares.

[x] Índices explicados mediante comentarios en el script seed.mongodb.js.

[x] Consultas orientadas a clientes, rangos presupuestarios y subdocumentos.

[x] Operaciones de actualización e inserción ejecutadas correctamente.

[x] Archivos ubicados exclusivamente en la carpeta personal del estudiante.

## Explicación de las Consultas

1. **Consulta General (`find({})`):**
   Retorna todos los proyectos registrados en la colección para verificar el seed inicial solicitado por la plantilla base.

2. **Filtro de Proyectos por Cliente (`cliente: "Orestes Vane"`):**
   Obtiene todos los encargo de renders contratados por un cliente en particular, proyectando únicamente el nombre del proyecto, estilo, presupuesto y estado.

3. **Filtro de Entregables Activos con Recorrido Virtual (`$in` y Subdocumentos):**
   Busca los proyectos que están en desarrollo o revisión que incluyen experiencia interactiva 360°.

4. **Filtro de Alto Presupuesto de Obra (`$gt`):**
   Identifica los encargos con presupuestos de construcción superiores a $800,000 USD para atención prioritaria del taller.

5. **Actualización de Estado de Entrega (`updateOne` con `$set`):**
   Actualiza el proyecto de Balthazar Nightshade a estado `"entregado"` y habilita la casilla de recorrido virtual 360°.

6. **Registro de Nuevo Encargo (`insertOne`):**
   Inserta un nuevo encargo de visualización 3D para la zona de Tikal, Guatemala.
