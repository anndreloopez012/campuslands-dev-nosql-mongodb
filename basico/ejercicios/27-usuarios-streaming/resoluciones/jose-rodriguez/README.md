# Solución NoSQL MongoDB: Películas y Música (Documentos de Usuario)

Este proyecto implementa una arquitectura en **MongoDB** para una plataforma de entretenmiento multimedia (Películas y Música), enfocada en un modelo **Centrado en el Usuario** (*User-Centric Data Model*) para optimizar la personalización y analítica de consumo.

---

## 1. Criterios de Modelado NoSQL

| Colección | Campo / Estructura | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `usuarios` | `perfil` | **Subdocumento Embebido** | Atributos demográficos atómicos 1:1 (`nombreCompleto`, `pais`, `idioma`) que se leen siempre junto con la cuenta. |
| `usuarios` | `suscripcion` | **Subdocumento Embebido** | Datos de facturación y estado del plan (`VIP_PREMIUM`, `STANDARD`, `FREE`). Garantiza validación instantánea de derechos de acceso (*Entitlements*). |
| `usuarios` | `generosPreferidos` | **Array Simple de Cadenas** | Etiquetas de gusto personal. Permite recomendaciones inmediatas e indexación mediante *Multikey Index*. |
| `usuarios` | `favoritos` | **Array de Subdocumentos** | Colección mixta de películas y canciones guardadas por el usuario (`contenidoId`, `titulo`, `tipo`, `guardadoEn`). Evita JOINs al cargar la biblioteca personal. |
| `usuarios` | `historialReproduccion` | **Array de Subdocumentos** | Registro cronológico con métricas de consumo (`minConsumidos`, `calificacionUsuario`). Almacena interacciones sin saturar la BD. |
| `contenido_media` | `_id` | **Colección Independiente** | Catálogo maestro de referencia para películas y pistas de música. Sus IDs (`"MED-FILM-001"`) son enlazados dentro del documento del usuario. |

---

## 2. Explicación de las Consultas Avanzadas (`queries.mongodb.js`)

1. **Top de Usuarios por Consumo (`.sort()` + `.limit()`):**
   * Identifica los usuarios con mayor uso de la plataforma (`horasConsumidasTotales`) para campañas de fidelización o retención.
2. **Segmentación Financiera por Plan (`$group` + `$avg` + `$sum`):**
   * Agrupa a los usuarios según su tipo de suscripción para calcular el uso promedio en horas y el ingreso mensual recurrente (MRR).
3. **Mapeo de Tendencias de Géneros (`$unwind` + `$group` + `$addToSet`):**
   * Descompone los géneros preferidos por usuario para detectar patrones globales de demanda y mapear los países interesados.
4. **Ranking de Contenido Popular (`$match` + `$unwind` + `$group`):**
   * Filtra únicamente usuarios activos y desglosa sus colecciones de favoritos para hallar las películas o canciones más guardadas.
5. **Score de Satisfacción de Usuario (`$unwind` + `$group`):**
   * Analiza el historial individual de reproducción para obtener el promedio de calificación (*Rating*) asignado por cada perfil.

---

## 3. Estrategia de Índices Recomendados

Para garantizar lecturas en milisegundos durante picos de tráfico en la plataforma:

```javascript
use('streaming_media_db');

// Índice básico para autenticación rápida y búsquedas por correo
db.usuarios.createIndex({ email: 1 }, { unique: true });

// Índice compuesto para validación de permisos de acceso por plan y estado
db.usuarios.createIndex({ "suscripcion.estado": 1, "suscripcion.plan": 1 });

// Índice multiclave para el motor de recomendaciones por género
db.usuarios.createIndex({ generosPreferidos: 1 });

// Índice multiclave para consultas sobre contenidos en listas de favoritos
db.usuarios.createIndex({ "favoritos.contenidoId": 1 });
