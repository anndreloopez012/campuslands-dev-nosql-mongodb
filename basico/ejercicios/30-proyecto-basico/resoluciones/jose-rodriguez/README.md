# Solución NoSQL MongoDB: Liga de Videojuegos y Esports en Campus Universitario (Integración CRUD)

Este proyecto implementa una solución completa en **MongoDB** para la gestión operativa y analítica de la **Liga de Esports en Campus Universitario**, demostrando la integración total de operaciones **CRUD** (Create, Read, Update, Delete) y la toma de decisiones sobre modelado NoSQL.

---

## 1. Criterios de Modelado NoSQL

| Colección | Campo / Estructura | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `torneos_esports` | `organizacion` | **Subdocumento Embebido** | Datos atómicos del comité organizador (`responsable`, `cupoMaximoEquipos`, `requisitoCreditosMinimo`) que se leen en conjunto con el torneo. |
| `torneos_esports` | `equiposInscritos` | **Array de Subdocumentos** | Registra las escuadras de facultades representadas (`equipoId`, `nombreEquipo`, `facultad`, `victorias`). Elimina JOINs al consultar la tabla de posiciones. |
| `torneos_esports` | `plataformas` | **Array Simple de Cadenas** | Etiquetas de plataformas compatibles (`"PC Windows"`, `"PS5"`). indexable mediante *Multikey Index*. |
| `torneos_esports` | `metricas` | **Subdocumento Embebido** | Reúne indicadores clave (`bolsaPremiosUSD`, `duracionHorasEst`, `puntosRankingCampus`) para optimizar agregaciones analíticas. |
| `campus_sedes` | `_id` | **Referencia Manual (1:N)** | Catálogo maestro de instalaciones del campus (`"CMP-CENTRAL"`, `"CMP-Z10"`). Permite modificar datos de la sede sin duplicación. |

---

## 2. Ciclo de Vida CRUD e Integración de Operaciones

1. **CREATE (Inscripción y Carga Inicial):**
   * Creación mediante `insertMany` en la carga del *seed* y registro dinámico mediante `insertOne` para nuevos eventos competitivos.
2. **READ (Lectura y Agregación Analítica):**
   * Búsqueda con `.find().sort().limit()` para construir el leaderboard de torneos mejor premiados.
   * Agregación con `$group` y `$avg` para determinar presupuestos por género de videojuego (`MOBA`, `Tactical Shooter`).
   * Agregación con `$unwind` para auditar el desempeño y cantidad de equipos representantes por Facultad (`Ingeniería`, `Medicina`, `Arquitectura`).
3. **UPDATE (Gestión de Inscripciones y Estado):**
   * Inserción atómica en arrays mediante `updateOne` + `$push` para registrar un equipo sin sobreescribir el documento.
   * Modificación estructural con `updateMany` + `$set` para cambio de fases en el torneo.
4. **DELETE (Mantenimiento y Depuración):**
   * Eliminación puntual con `deleteOne` para eventos en estado `CANCELADO`.
   * Purga con `deleteMany` para limpiar registros obsoletos sin participación.

---

## 3. Estrategia de Índices Recomendados

Para garantizar consultas eficientes en la aplicación móvil del campus y durante transmisiones en vivo:

```javascript
use('campus_esports_db');

// Índice compuesto para acelerar el filtrado de torneos activos por bolsa de premios
db.torneos_esports.createIndex({ estado: 1, "metricas.bolsaPremiosUSD": -1 });

// Índice multiclave para la búsqueda de equipos dentro del array de inscritos
db.torneos_esports.createIndex({ "equiposInscritos.facultad": 1 });

// Índice para filtros por plataforma de videojuego
db.torneos_esports.createIndex({ plataformas: 1 });

// Índice de referencia para asociar torneos con sedes del campus
db.torneos_esports.createIndex({ campusId: 1 });
