# Evidencias

## Datos cargados

Se insertaron cinco pilotos pertenecientes a diferentes escuderías, todos con puntajes y cantidad de victorias distintos para que las consultas de ranking tengan resultados reales.

## Consultas verificadas

- Consulta general de pilotos.
- Proyección mostrando únicamente nombre, escudería y puntos.
- Consulta de pilotos activos.
- Ranking completo utilizando `sort()`.
- Top 3 del campeonato utilizando `sort()` y `limit()`.

## Actualización aplicada

Se actualizó el piloto **Alex Vega**, incrementando una victoria y sumando **25 puntos** para simular el resultado de una carrera.

## Observaciones

El modelo documental es suficiente para este escenario porque el sistema únicamente administra información de pilotos. Si el proyecto creciera podrían agregarse colecciones para escuderías, carreras o circuitos utilizando referencias entre documentos.