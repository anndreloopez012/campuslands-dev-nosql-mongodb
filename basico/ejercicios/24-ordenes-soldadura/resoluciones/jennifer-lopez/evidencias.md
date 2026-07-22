# Modelo documental - Órdenes de soldadura

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de carga con 5 órdenes de trabajo iniciales. Incluye soldadores e inspectores de nombres poco comunes (Orestes, Cyrene, Balthazar, Melantho, Zephyrine), talleres ubicados en zonas de Guatemala (Cráter Azul, Laguna Lachúa, Quiriguá, Semuc Champey, Tikal) y proyectos inspirados en franquicias populares (*Star Wars*, *Marvel*, *The Mandalorian*, *The Matrix*).

- `queries.mongodb.js`: Consultas enfocadas en la inspección de calidad (`aprobado`, `rechazado`, `pendiente_ultrasonido`), control de fallas en subdocumentos y correcciones mediante updates técnicos.

## 1. Identificación de Entidades y Atributos
- **Órden de Soldadura:** `codigo_orden`, `soldador`, `inspector_qc`, `ubicacion_taller`, `pais`, `estructura_proyecto`, `referencia_popular`, `tipo_proceso`, `material_base`, `estado_inspeccion`, `horas_trabajo`, `fecha_inspeccion`.

- **Inspección Técnica:** Subdocumento embebido `inspeccion_tecnica` (`ensayo_no_destructivo`, `porosidad_detectada`, `grietas_superficiales`, `norma_aplicada`).

## 2. Decisiones de Diseño
- **Subdocumento Embebido de Inspección:** El dictamen técnico del ensayo no destructivo (porosidad, grietas, norma) pertenece de forma única e inmutable a la prueba de la junta soldada. Embeberlo agiliza las evaluaciones de control de calidad en un solo documento.

- **Indexación por Estado de Inspección:** Permite segregar rápidamente las soldaduras conformes de las no conformes para reproceso.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `ordenes`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "codigo_orden": "ORD-WELD-001",
  "soldador": "Orestes Vane",
  "inspector_qc": "Zephyrine Valdivia",
  "ubicacion_taller": "Cráter Azul",
  "pais": "Guatemala",
  "estructura_proyecto": "Chasis Caminante AT-AT",
  "referencia_popular": "Star Wars - Imperio Galáctico",
  "tipo_proceso": "TIG (GTAW)",
  "material_base": "Acero de Alta Resistencia",
  "estado_inspeccion": "aprobado",
  "inspeccion_tecnica": {
    "ensayo_no_destructivo": "Ultrasonido (UT)",
    "porosidad_detectada": false,
    "grietas_superficiales": false,
    "norma_aplicada": "AWS D1.1"
  },
  "horas_trabajo": 12.5,
  "fecha_inspeccion": "2026-05-20T00:00:00.000Z"
}
```
### Índices implementados
{ estado_inspeccion: 1 }: Acelera la segmentación de soldaduras aprobadas o rechazadas.

{ soldador: 1 }: Facilita la auditoría de desempeño por soldador técnico.

{ "inspeccion_tecnica.ensayo_no_destructivo": 1 }: Optimiza los filtros por técnica NDT aplicada.

### Checklist
[x] Nombre de la colección en plural y minúsculas (ordenes).

[x] Sin instrucción drop() en la semilla.

[x] Nombres de técnicos poco comunes, ubicaciones de Guatemala y franquicias icónicas.

[x] Índices ampliamente comentados en seed.mongodb.js.

[x] Consultas por estados de inspección y campos embebidos.

[x] Actualización directa de inspección e incremento de horas.

[x] Archivos agregados estrictamente en la carpeta de resolución personal.

## Explicación de las Consultas (`queries.mongodb.js`)

1. **Consulta General (`find({})`):**
   Retorna todos los registros de soldadura para verificar la semillación inicial pedida en la plantilla.

2. **Filtro por Soldaduras Conformes (`estado_inspeccion: "aprobado"`):**
   Muestra únicamente las órdenes que pasaron exitosamente los controles de calidad, con su respectiva norma aplicada.

3. **Monitoreo de Defectos y Rechazos (`$or` y Subdocumentos):**
   Localiza las órdenes rechazadas o aquellas donde el informe técnico arrojó porosidades para aplicar retrabajos inmediatos.

4. **Filtro por Proceso y Duración (`$gt`):**
   Filtra las piezas procesadas mediante técnica TIG que requirieron más de 10 horas de trabajo continuo.

5. **Actualización de Reparación de Soldadura (`updateOne` con `$set` e `$inc`):**
   Revisa la orden reprobada `ORD-WELD-003`, limpia los indicadores de porosidad/grietas, actualiza su estado a `"aprobado"` e incrementa en +4.5 las horas de retrabajo.

6. **Nueva Orden Creada (`insertOne`):**
   Inserta un nuevo registro de soldadura inspeccionada en el taller de Tikal, Guatemala.
