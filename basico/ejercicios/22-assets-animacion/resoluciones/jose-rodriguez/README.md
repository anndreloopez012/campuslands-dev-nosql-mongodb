# Solución NoSQL MongoDB: Pipeline de Animación 3D (Documentos con Estado)

Este proyecto implementa una arquitectura de base de datos en **MongoDB** para un estudio de **Animación 3D y VFX**, diseñada para el seguimiento dinámico del **estado de las tomas (*shots*) a lo largo del pipeline de producción**.

---

## Criterios de Modelado NoSQL

| Colección | Campo | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `shots` | `estadoPipeline` | **Atributo Escalar con Cadena** | Permite transiciones de estado rápidas (`"BOCETO"`, `"ANIMACION"`, `"EN_RENDER"`, `"REVISION_REQUERIDA"`, `"APROBADO"`). |
| `shots` | `detallesTecnicos` | **Subdocumento Embebido** | Guarda parámetros técnicos estables del render (`software`, `motorRender`, `fps`, `totalFrames`) asociados 1:1 al shot. |
| `shots` | `historialRevisiones` | **Array de Subdocumentos** | Mantiene la bitácora de comentarios y versiones de directores sin requerir colecciones externas. |
| `shots` | `etiquetasTecnicas` | **Array Simple de Cadenas** | Facilita la indexación multiclave (*Multikey Index*) para buscar por tipo de pase visual (`"VFX"`, `"Grooming"`, `"FacialRig"`). |
| `shots` | `proyectoId` / `artistaId` | **Referencias Manuales** | Relaciona la toma con la producción principal y el artista responsable mediante IDs legibles (`"PRJ-001"`, `"ART-001"`). |

---

## Explicación de las Consultas (`queries.mongodb.js`)

1. **Control de Render:** Filtra shots que están consumiendo recursos de la granja de render (`"EN_RENDER"`).
2. **Control de Calidad (QC):** Localiza entregas pendientes de corrección (`"REVISION_REQUERIDA"`) dentro de un proyecto específico.
3. **Filtro Técnico en Subdocumento:** Consulta la herramienta de renderizado mediante notación de punto (`"detallesTecnicos.motorRender"`).
4. **Búsqueda por Etiqueta Especializada:** Evalúa coincidencias dentro del array `etiquetasTecnicas`.
5. **Proyección del Manifiesto:** Genera una vista compacta de tomas con su software asignado y la carga de trabajo en cuadros (*frames*).

---

## Estrategia de Índices Recomendados

Para acelerar los tableros Kanban de producción en el estudio:

```javascript
use('animacion_3d_db');

// Índice compuesto para filtrar por proyecto y estado del pipeline
db.shots.createIndex({ proyectoId: 1, estadoPipeline: 1 });

// Índice multiclave para búsquedas rápidas por etiquetas técnicas
db.shots.createIndex({ etiquetasTecnicas: 1 });
