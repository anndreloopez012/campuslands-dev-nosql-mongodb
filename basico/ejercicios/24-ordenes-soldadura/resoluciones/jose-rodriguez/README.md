# Solución NoSQL MongoDB: Control de Inspección de Soldadura (Análisis de Calidad y NDT)

Este proyecto implementa una arquitectura NoSQL en **MongoDB** para el área de **Aseguramiento de Calidad, Ensayos No Destructivos (NDT) e Ingeniería Estructural**. Está optimizado tanto para el control operativo en tiempo real de **Estados de Inspección** como para la generación de métricas analíticas mediante el **Framework de Agregación**.

---

## 1. Criterios de Modelado NoSQL

| Colección | Campo / Estructura | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `juntas_soldadas` | `estadoInspeccion` | **Atributo Escalar** | Cadena de control directo (`"APROBADO"`, `"RECHAZADO"`, `"PENDIENTE_INSPECCION"`, `"REPARACION_REQUERIDA"`) para filtrado rápido de calidad. |
| `juntas_soldadas` | `especificacionesTecnicas` | **Subdocumento Embebido** | Datos atómicos 1:1 de la junta (`espesorMM`, `tipoMaterial`, `posicion`) que no cambian de forma independiente. |
| `juntas_soldadas` | `detallesInspeccion` | **Subdocumento Embebido** | Consolida la información del ensayo NDT (`VT`, `UT`, `RT`, `PT`), la fecha y el dictamen técnico en un solo objeto. |
| `juntas_soldadas` | `defectosEncontrados` | **Array Simple de Cadenas** | Lista de discontinuidades halladas (`"Porosidad agrupada"`, `"Falta de penetración"`). Permite indexación multiclave (*Multikey Index*). |
| `juntas_soldadas` | `proyectoId` / `inspectorId` | **Referencias Manuales** | Relaciona la junta soldada con la obra estructural y el inspector CWI responsable usando IDs legibles (`"PRJ-W01"`, `"INS-001"`). |

---

## 2. Explicación de las Consultas Avanzadas (`queries.mongodb.js`)

Las consultas combinan lecturas directas y tuberías de agregación (*Aggregation Pipelines*) para responder preguntas clave de producción:

1. **Top de Juntas por Espesor (`.sort()` + `.limit()`):** 
   * Ordena descendentemente los documentos utilizando el campo anidado `especificacionesTecnicas.espesorMM` y limita el resultado a las 3 juntas más gruesas para priorizar inspecciones de alta severidad.

2. **Promedio de Espesor por Proceso de Soldadura (`$group` + `$avg` + `$sum`):** 
   * Agrupa los registros por tipo de proceso (`FCAW`, `SMAW`, `GTAW`) para calcular el espesor promedio en milímetros (`$avg`) y el volumen total de juntas fabricadas (`$sum`).

3. **Métricas Ejecutivas de Control de Calidad (`$group` + `$sort`):** 
   * Genera el resumen del semáforo de calidad, contabilizando la cantidad de juntas en cada estado (`APROBADO`, `RECHAZADO`, etc.) y ordenándolos por frecuencia.

4. **Auditoría de Desempeño por Soldador (`$match` + `$group` + `$push`):** 
   * Filtra las juntas pertenecientes a un soldador específico (`"WLD-08"`) y agrupa sus métricas para obtener su espesor promedio trabajado y construir un array cronológico (`$push`) con el historial de sus dictámenes de inspección.

5. **Análisis de Defectología por Método NDT (`$unwind` + `$group`):** 
   * Descompone (*unwind*) el array `defectosEncontrados` para realizar un conteo individual de cada tipo de defecto agrupado según el ensayo NDT que lo detectó.

---

## 3. Estrategia de Índices Recomendados

Para garantizar tiempos de respuesta en milisegundos sobre grandes volúmenes de juntas soldadas en taller o campo:

```javascript
use('soldadura_db');

// Índice básico para consultas por estado de inspección
db.juntas_soldadas.createIndex({ estadoInspeccion: 1 });

// Índice compuesto para ordenamientos por espesor según estado
db.juntas_soldadas.createIndex({ estadoInspeccion: 1, "especificacionesTecnicas.espesorMM": -1 });

// Índice para trazabilidad por soldador
db.juntas_soldadas.createIndex({ codigoSoldador: 1 });

// Índice multiclave para análisis de defectos recurrentes
db.juntas_soldadas.createIndex({ defectosEncontrados: 1 });
