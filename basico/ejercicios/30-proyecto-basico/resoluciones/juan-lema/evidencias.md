# Evidencias - Ejercicio 30

## 1. Carga inicial (seed.mongodb.js)
- Se insertan 6 documentos en `campus_proyecto_basico.registros`.
- `db.registros.countDocuments({})` retorna `6`.

## 2. Consulta general
Retorna los 6 documentos completos: Kevin Sanchez, Laura Ramirez, Andres Torres, Maria Gomez, Diego Fernandez y Sofia Herrera.

## 3. Jugadores activos con puntaje >= 70
Retorna 4 documentos (solo `nombre`, `juego`, `categoria`, `puntaje`):
- Kevin Sanchez (92, Valorant, shooter)
- Laura Ramirez (78, League of Legends, moba)
- Maria Gomez (88, Rocket League, deportivo)

Nota: Diego Fernandez (65) y Andres Torres/Sofia Herrera (inactivos o < 70) quedan excluidos.

## 4. Jugadores de shooter con nivel avanzado
Retorna 1 documento: Kevin Sanchez (Valorant, shooter, avanzado, puntaje 92).

## 5. Actualizacion de Laura Ramirez
- `modifiedCount: 1`.
- `puntaje` pasa de `78` a `88`.
- El array `partidas` ahora tiene 2 elementos, incluyendo la nueva victoria contra "Kernel FC" el `2026-03-01`.

## 6. Eliminacion de Sofia Herrera
- `deletedCount: 1`.
- Total de documentos tras la eliminacion: `5`.

## 7. Reporte: promedio de puntaje por categoria
Orden descendente por `promedioPuntaje` (con Sofia Herrera ya eliminada):
- `moba`: promedio = 88 (Laura Ramirez), 1 jugador.
- `shooter`: promedio ≈ 78.5 (Kevin Sanchez 92, Diego Fernandez 65), 2 jugadores.
- `deportivo`: promedio ≈ 66.5 (Andres Torres 45, Maria Gomez 88), 2 jugadores.
