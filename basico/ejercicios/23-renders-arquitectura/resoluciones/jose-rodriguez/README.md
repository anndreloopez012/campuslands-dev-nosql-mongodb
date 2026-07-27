# Solución NoSQL MongoDB: Diseño 3D Arquitectura (Consultas por Cliente)

Este proyecto implementa una solución de base de datos en **MongoDB** diseñada para un estudio de **Diseño y Visualización 3D Arquitectónica (ArchViz)**, optimizada para responder consultas estructuradas en torno a **Clientes y sus Proyectos**.

---

## Criterios de Modelado NoSQL

| Colección | Campo | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `proyectos3d` | `clienteId` | **Referencia Manual (1:N)** | Asocia cada proyecto 3D con un cliente de la colección `clientes`. Permite consultar todos los renders/proyectos de una firma sin duplicar sus datos corporativos o fiscales. |
| `proyectos3d` | `especificacionesTecnicas` | **Subdocumento Embebido** | Modela el software (`Revit`, `3ds Max`), motor de render (`V-Ray`, `Corona`, `Unreal Engine`) y resolución. Es información técnica 1:1 de la entrega. |
| `proyectos3d` | `presupuesto` | **Subdocumento Embebido** | Consolida los datos financieros de la entrega (`montoTotalUSD`, `anticipoPagadoUSD`, `pagadoTotalmente`) para revisiones rápidas de facturación por cliente. |
| `proyectos3d` | `entregables` | **Array de Subdocumentos** | Mantiene el desglose de renders, animaciones o recorridos 360 solicitados por el cliente y su estado de avance. |
| `proyectos3d` | `etiquetas` | **Array Simple** | Permite categorizar el tipo de trabajo visual (`"Exterior"`, `"VR"`, `"Interior"`) para búsquedas rápidas. |

---

## Explicación de las Consultas (`queries.mongodb.js`)

1. **Historial por Cliente:** Recupera todos los trabajos encargados por un cliente específico (`"CLI-001"`).
2. **Control de Aprobaciones:** Identifica entregas pendientes de visto bueno por parte del cliente para coordinar correcciones.
3. **Auditoría Financiera por Cliente:** Consulta proyectos de un cliente con pagos o anticipos pendientes.
4. **Filtro Técnico Específico:** Busca proyectos de un cliente filtrando por subdocumentos de renderizado (`"especificacionesTecnicas.motorRender"`).
5. **Proyección del Portafolio:** Retorna un reporte limpio y ejecutivo de proyectos para enviar al cliente.

---

## Estrategia de Índices Recomendados

Para acelerar las búsquedas por cliente a medida que crece el catálogo de renders:

```javascript
use('archviz_3d_db');

// Índice básico indispensable para consultas por cliente
db.proyectos3d.createIndex({ clienteId: 1 });

// Índice compuesto para filtrar por cliente y estado de proyecto
db.proyectos3d.createIndex({ clienteId: 1, estadoProyecto: 1 });

// Índice para control financiero por cliente
db.proyectos3d.createIndex({ clienteId: 1, "presupuesto.pagadoTotalmente": 1 });
