# Solución NoSQL MongoDB: Operaciones de Paracaidismo (Validaciones Manuales)

Este proyecto implementa un modelo de datos en **MongoDB** enfocado en el control operacional y de seguridad para un centro de **Paracaidismo**, donde la verificación atómica de **Validaciones Manuales** es un requisito crítico previo a cada despegue.

---

## Criterios de Modelado NoSQL

| Colección | Campo | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `saltos` | `validacionesManuales` | **Subdocumento Embebido** | Lista de chequeo de seguridad de lectura constante y atómica. Si una sola validación manual falla, el estado del vuelo no se aprueba. |
| `paracaidistas` | `certificadoMedico` | **Subdocumento Embebido** | Datos médicos directamente asociados al paracaidista. Se leen juntos para confirmar su vigencia. |
| `saltos` | `equipamientoAdicional` | **Array Simple de Cadenas** | Lista accesorios de seguridad requeridos por salto (ej. "Altímetro Digital", "Cámara"). |
| `saltos` | `paracaidistaId` / `equipoId` | **Referencias Manuales** | Relaciona el salto con el atleta y el paracaídas asignado mediante claves legibles (`"PAR-001"`, `"EQP-001"`). |

---

## Explicación de las Consultas (`queries.mongodb.js`)

1. **Estado de Vuelo Directo:** Filtra los saltos que pasaron el protocolo de tierra y están en estado `"AUTORIZADO"`.
2. **Control de Seguridad por Subdocumento:** Accede a `"validacionesManuales.exencionResponsabilidadFirmada"` usando la notación de punto para detectar inmediatamente posibles faltas administrativas.
3. **Proyección Limpia:** Selecciona solo las métricas operativas del salto (altitud, tipo y oficial responsable) evitando sobrecargar el payload.
4. **Verificación de Experiencia (`$or`):** Identifica paracaidistas expertos calificados para saltos de demostración o instrucción.
5. **Mantenimiento de Equipos:** Detecta arneses y paracaídas con anomalías de inspección o sistemas de emergencia desactivados.

---

## Índices Recomendados para Producción

Para garantizar búsquedas instantáneas en el manifiesto de vuelo durante las operaciones en pista:

```javascript
use('paracaidismo_db');

// Índice compuesto para consultar saltos autorizados por tipo
db.saltos.createIndex({ estadoVuelo: 1, tipoSalto: 1 });

// Índice sobre la lista de chequeo de seguridad
db.saltos.createIndex({ "validacionesManuales.exencionResponsabilidadFirmada": 1 });
