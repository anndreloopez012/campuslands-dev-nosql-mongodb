# Solución: Sagas de Ciencia Ficción 

## Contexto y Diseño NoSQL

Este proyecto modela un sistema para gestionar sagas de ciencia ficción, sus entregas (películas/libros) y sus personajes/elementos icónicos.

### Decisiones de Modelado
1. **Colección Principal `sagas`**: Almacena los datos maestros de cada franquicia/saga (nombre, creador, universo) e incluye embebidas sus entregas principales (películas/libros) como subdocumentos ya que son acopladas e invariables.
2. **Colección `personajes` (Referencias Manuales)**: Los personajes principales se separan en su propia colección y hacen referencia manual al `_id` de la saga a la que pertenecen (`saga_id`). Esto satisface el enfoque de **referencias manuales** permitiendo reutilizar y consultar personajes de manera independiente sin inflar el documento de la saga.
