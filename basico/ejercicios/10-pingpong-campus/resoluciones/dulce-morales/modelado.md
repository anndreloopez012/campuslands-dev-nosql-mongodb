# Solución: 10. Liga de Pingpong Campus

## Decisiones del Modelo NoSQL

1. **Colección Principal:**  Se creó la colección `luchadores` siguiendo los estándares de campus.
2. **Subdocumento Embebido (`estadisticas`):**
   - Se ingresan atributos de rendimiento como `partidos_jugados`, `partidos_ganados`, `partidos_perdidos` y `puntos_ranking`. Estos datos pertenecen exclusivamente a cada jugador y se leen frecuentemente juntos.
3. **Array Embebido (`equipos_o_estilos` / `categoria`):**
   - Datos simples y cortos como categoría y mano hábil se embeben directamente en el documento.
