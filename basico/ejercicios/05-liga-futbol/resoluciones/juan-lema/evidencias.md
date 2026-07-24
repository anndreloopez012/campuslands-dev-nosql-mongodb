# Evidencias - Ejercicio 5

## 1. Find all (proyeccion nombre, equipo, goles)
Retorna los 6 jugadores insertados, sin el campo `_id`, mostrando solo nombre, equipo y goles.

## 2. Activos con mas de 5 goles, ordenados por goles desc
Resultado esperado (orden descendente):
1. Kevin Ramirez - Halcones FC - 14 goles
2. Jorge Paredes - Tiburones SC - 11 goles
3. Mateo Suarez - Leones United - 7 goles

## 3. Mediocampistas ordenados por asistencias desc
1. Mateo Suarez - 10 asistencias
2. Luis Cardenas - 8 asistencias

## 4. Ordenamiento compuesto (equipo asc, goles desc)
Los jugadores aparecen agrupados por equipo en orden alfabetico (Halcones FC, Leones United, Tiburones SC) y dentro de cada equipo ordenados de mayor a menor goleador.

## 5. Update - tarjeta a Diego Fernandez
El documento de Diego Fernandez ahora contiene un array `tarjetas` con un objeto `{ tipo: "amarilla", partido: 15 }`.

## 6. Delete - baja de Andres Villa
El jugador "Andres Villa" ya no aparece en el `find` final; la coleccion queda con 5 jugadores.

## Notas
- Se probaron todas las consultas en `mongosh` conectado a `campus_liga_futbol` antes de la entrega.
- El campo `_id` se excluye en las proyecciones para mantener las salidas legibles.
