# Solución: Catálogo de Películas de Miedo

## Información General
- **Ejercicio:** 12. Catálogo de películas de miedo
- **Dificultad:** Básico
- **Base de Datos:** `campus_peliculas_terror`
- **Colección Principal:** `peliculas`

## Diseño del Modelo

### Decisión de Modelado:
1. **Atributos Principales (`titulo`, `director`, `anio_estreno`, `duracion_min`):** Datos escalares indispensables para la identificación directa.
2. **Subdocumento `clasificacion` (`rating_imdb`, `clasificacion_edad`):** Agrupa las métricas y restricciones para facilitar consultas numéricas por evaluación/rating.
3. **Arrays simples (`generos`, `subgeneros`):** Permiten la búsqueda nativa de etiquetas temáticas (ej. "posesión", "slasher", "psicológico") sin requerir tablas/colecciones relacionales.
4. **Subdocumento `recaudacion` (`presupuesto_usd`, `taquilla_usd`):** Contiene las cifras monetarias asociadas a la película.
