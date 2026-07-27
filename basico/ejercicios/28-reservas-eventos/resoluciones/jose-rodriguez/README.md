# Solución NoSQL MongoDB: Gestión Deportiva (Estrategia de Delete Controlado / Soft Delete)

Este proyecto implementa una arquitectura NoSQL en **MongoDB** para una federación o liga de **Deportes**, diseñada bajo el patrón de **Delete Controlado (*Soft Delete*) y Auditoría**, garantizando integridad histórica, trazabilidad disciplinaria y limpiezas programadas de datos.

---

## 1. Criterios de Modelado NoSQL

| Colección | Campo / Estructura | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `atletas` | `registroControl` | **Subdocumento de Auditoría** | Almacena el estado de borrado lógico (`eliminado`, `fechaEliminacion`, `motivoBaja`, `usuarioAuditoria`). Evita la pérdida accidental de datos históricos. |
| `atletas` | `rendimiento` | **Subdocumento Embebido** | Estadísticas deportivas 1:1 (`partidosJugados`, `puntosOGoles`, `calificacionPromedio`). Se leen de forma atómica con la ficha del deportista. |
| `atletas` | `equiposAnteriores` | **Array Simple de Cadenas** | Historial de clubes del atleta. Permite consultas por antecedentes mediante *Multikey Index*. |
| `atletas` | `torneoId` | **Referencia Manual (1:N)** | Conecta la ficha del atleta con la competición correspondiente (`"TOR-2026-01"`). |

---

## 2. El Patrón de Delete Controlado en 2 Fases

Para cumplir con la reglamentación de auditoría deportiva y normativas de retención de datos:

1. **Fase 1: Borrado Lógico (*Soft Delete*):** 
   * Se ejecuta una actualización (`updateOne`) estableciendo `"registroControl.eliminado": true`. El atleta queda fuera de las listas de juego sin destruir sus estadísticas históricas.
2. **Fase 2: Purga Física Programada (*Hard Delete*):** 
   * Mediante una tarea desatendida (*Cron Job*), se ejecuta `deleteMany()` únicamente sobre documentos cuyo flag `eliminado` sea verdadero y cuya `fechaEliminacion` haya superado el periodo legal de conservación (por ejemplo, más de 90 días).

---

## 3. Explicación de las Consultas Avanzadas (`queries.mongodb.js`)

1. **Lectura Operativa Activa:** Filtra con `"registroControl.eliminado": false` para garantizar que solo los atletas hábiles aparezcan en los listados del torneo.
2. **Transacción de Soft Delete:** Actualiza el subdocumento `registroControl` inhabilitando al atleta y adjuntando metadata de auditoría (motivo y usuario autorizador).
3. **Métricas de Rendimiento Limpias:** Agrupa estadísticas deportivas (`$group` + `$avg`) excluyendo los registros eliminados para no sesgar los promedios oficiales.
4. **Reporte Disciplinario de Bajas:** Analiza exclusivamente los atletas en estado `eliminado` para auditar las causales de salida (lesiones, sanciones, transferencias).
5. **Purga Definitiva de Datos:** Demuestra el uso seguro de `deleteMany()` con un rango de fechas sobre registros previamente marcados como eliminados.

---

## 4. Estrategia de Índices Recomendados

Para acelerar las lecturas diarias que excluyen registros eliminados y facilitar los trabajos nocturnos de purga:

```javascript
use('deportes_liga_db');

// Índice parcial/compuesto para consultas de atletas en competición activa
db.atletas.createIndex(
  { disciplina: 1, "rendimiento.calificacionPromedio": -1 },
  { partialFilterExpression: { "registroControl.eliminado": false } }
);

// Índice compuesto para acelerar tareas automáticas de purga física
db.atletas.createIndex({ "registroControl.eliminado": 1, "registroControl.fechaEliminacion": 1 });

// Índice para trazabilidad por torneo
db.atletas.createIndex({ torneoId: 1 });
