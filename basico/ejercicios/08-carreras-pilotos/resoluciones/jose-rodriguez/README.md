# Racing Champions Collection - MongoDB Data model 

Este repositorio contine el diseno de datos y el banco de consultas para gestionar campeonatios de automovilismo de alta velocidad. Esta optimizado para resolver ordenamientos complejos de tiempos, clasificaciones de platos y pilotos y limites de registros de telemetria.

## Criterio de modelado NoSQL

El diseno de la coleccion races (Carreras) aplica un patron hibrido basaado en atomicidad y los patrones de lectura en tiempo real:

* **Documento Principal (races):** Representa un eveneto de carrera unnico (Gran Premio, Circuito, Fecha).
* **Subdocumento objeto (circuit):** Informacion estatica del circuito (nombre, longitud, curvas). Al estar embebido, se recupera en una sola operacion de lectura junto a la carrera, evitando joins innecesarios.
* ** Array de Objetos (results):** Contiene la clasificacion final de la carrera (piloto, equipo, tiemppo, puntos). Embeber los resultados es ideal porque una veaz terminada la carrera, estos datos son **inmutables** y su tamano esta acotado (ej. 20 pilotos en F1). Esto permite ordeenar y paginar los resultados internamente de forma ultra rapida.
* **Referencias (driver_id / team_id):** Los pilotos y equipos se manejan con IDs referenciales externos en un entorno real para evitar la duplicacion de perfiles biograficos o patrocinioos que cambian entre temporadas.

---

# Estrategia de indexacion para sort() y limit()

En MongoDB, usar sort() en colecciones grandes sin un indice adecuado puede causar que la consulta falle si excede el limite de 32mb en memoria (RAM). Para optimizar los ordenamientos del ejercicio, se sugieren:

```javascript
// 1. Índice compuesto para encontrar los resultados más rápidos por año de campeonato
db.races.createIndex({ "year": 1, "results.fastest_lap.duration_secs": 1 });

// 2. Índice para la paginación e histórico de eventos cronológicos
db.races.createIndex({ "date": -1, "status": 1 });