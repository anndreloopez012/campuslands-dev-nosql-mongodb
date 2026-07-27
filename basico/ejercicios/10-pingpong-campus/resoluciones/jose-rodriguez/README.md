# Arquitectura de Datos NoSQL en MongoDB: Sistema de Ping Pong

Este proyecto contiene una solución completa basada en **MongoDB** para gestionar la información de jugadores, torneos y partidos de tenis de mesa (Ping Pong). 

---

## Justificación del Modelado de Datos

El diseño aplica los patrones fundamentales de modelado NoSQL priorizando rendimiento en lecturas y agregaciones:

| Colección | Campo | Estrategia | Razón Técnica |
| :--- | :--- | :--- | :--- |
| `jugadores` | `_id` | **Identificador Clave (String)** | Se usaron IDs en formato texto (ej. `"JUG-001"`) para simplificar relaciones nativas sin dependencia de wrappers `ObjectId`. |
| `jugadores` | `estiloJuego` | **Subdocumento Embebido** | Información de relación 1:1 que siempre se recupera junto con la ficha del jugador. |
| `jugadores` | `etiquetas` | **Array de Cadenas** | Permite realizar búsquedas exactas utilizando índices de tipo `multikey`. |
| `torneos` | `jugadoresInscritosIds` | **Referencias Acotadas** | Relación N:M delimitada. Evita duplicación de datos de perfil. |
| `partidos` | `sets` | **Array de Subdocumentos** | Los sets pertenecen exclusivamente a un partido y están limitados a un número máximo (máximo 7 sets por partido). |

---

## Explicación de las Consultas (`queries.mongodb.js`)

1. **Búsqueda Filtrada y Proyección:** Filtra jugadores por propiedades internas del subdocumento (`estiloJuego.agarre`) y elementos del array `etiquetas`.
2. **Conteo Simples (`countDocuments`):** Cuenta cuántos partidos corresponden a un ID de torneo específico de manera óptima.
3. **Análisis de Remontadas con `$expr`:** Compara directamente el ganador del primer set contra el ganador global del partido utilizando lógica nativa de agregación.
4. **Resumen de Victorias con `$lookup`:** Realiza un *JOIN* nativo entre la colección `partidos` y `jugadores` para calcular partidos ganados y tiempo promedio consumido.
5. **Métricas de Torneos por País:** Agrupa torneos según la ubicación geográfica y calcula cuántos participantes han sido registrados.
