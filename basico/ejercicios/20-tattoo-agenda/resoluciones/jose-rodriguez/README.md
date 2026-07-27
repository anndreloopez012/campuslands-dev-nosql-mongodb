# Solución NoSQL MongoDB: Estudio de Tatuajes (Estados y Fechas)

Este proyecto implementa una solución de base de datos en **MongoDB** orientada a la administración de un **Estudio de Tatuajes**, enfocada en el control de **estados de agenda** y la trazabilidad de **fechas operativas**.

---

## Criterios de Modelado NoSQL

| Colección | Campo | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `citas` | `estado` | **Atributo Escalar Simple** | Permite filtrar rápidamente la agenda por valores de control: `"PENDIENTE"`, `"CONFIRMADA"`, `"COMPLETADO"`, `"CANCELADO"`. |
| `citas` | `fechas` | **Subdocumento Embebido** | Consolida la cronología completa del servicio (`fechaReserva`, `fechaCita`, `fechaFinalizacion`, `fechaRevisionCuracion`) en un solo objeto. |
| `citas` | `detallesTatuaje` | **Subdocumento Embebido** | Guarda la especificación técnica del trabajo (`zonaCuerpo`, `estilo`, `tamanioCm`) vinculada directamente a la sesión. |
| `citas` | `instruccionesCuracion` | **Array Simple** | Guarda la lista de cuidados médicos posteriores entregados al cliente. |
| `citas` | `clienteId` / `artistaId` | **Referencias Manuales** | Relaciona la cita con el cliente y el tatuador asignado mediante identificadores legibles (`"CLI-001"`, `"ART-001"`). |

---

## Explicación de las Consultas (`queries.mongodb.js`)

1. **Filtro por Estado:** Consulta directa de citas en estado `"CONFIRMADA"` para organización de agenda diaria.
2. **Rango Temporal (`$gte`, `$lte`):** Búsqueda de citas dentro de un rango de fechas usando objetos nativos `ISODate`.
3. **Control Post-Tatuaje:** Filtra tatuajes terminados (`"COMPLETADO"`) cuya cita de control de curación vence en una fecha específica.
4. **Búsqueda por Subdocumento (`$or`):** Localiza registros analizando subdocumentos embebidos (`"detallesTatuaje.estilo"`).
5. **Proyección Selectiva:** Devuelve campos clave de presupuesto, fecha y estado, evitando traer el documento completo.

---

## Estrategia de Índices Recomendados

Para acelerar las búsquedas por agenda y estado en la aplicación web del estudio:

```javascript
use('estudio_tatuajes_db');

// Índice compuesto para filtrar por estado y ordenar por fecha de cita
db.citas.createIndex({ estado: 1, "fechas.fechaCita": 1 });

// Índice para consultas de revisión de curación
db.citas.createIndex({ "fechas.fechaRevisionCuracion": 1 });
