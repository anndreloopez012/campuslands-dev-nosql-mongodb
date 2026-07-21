# Solución: Liga de Fútbol Campus

## 💡 Decisiones de Diseño (NoSQL)

1. **Patrón de Embebido:**
   - **Estadísticas y Rendimiento:** Se integran en subdocumentos dentro de cada equipo (`estadisticas`), ya que representan información intrínseca del equipo que siempre se lee junta en las tablas de posiciones.
   - **Jugadores Destacados:** Se incluyeron como un array de subdocumentos (`jugadores_clave`)

2. **Colección Principal:**
   - `equipos`: Se utilizó un nombre plural y en minúsculas conforme a las buenas prácticas de MongoDB.

3. **Proyecciones y Ordenamiento:**
   - La estructura facilita consultas eficientes de tablas de clasificación ordenando por puntos (`estadisticas.puntos`) y goles a favor (`estadisticas.goles_favor`), usando proyecciones para ocultar el `_id` e información no relevante en vistas generales.