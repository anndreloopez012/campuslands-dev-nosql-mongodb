# Modelo documental

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para crear la colección `equipos`, poblar los 5 documentos iniciales y definir índices.

- `queries.mongodb.js`: Script con consultas de lectura, proyecciones, ordenamientos y actualización.

## 1. Identificación de Entidades y Atributos
Para la liga de fútbol se identificaron las siguientes entidades y atributos:

- **Equipo:** `nombre`, `ciudad`, `fundado`, `activo`.

- **Estadísticas de Rendimiento:** `partidos_jugados`, `partidos_ganados`, `goles_favor`, `puntos`.

- **Plantilla y Categorías:** `jugadores_destacados` y `categorias`.

## 2. Decisiones de Diseño 
- **Estadísticas Embebidas:** Las métricas de torneo (puntos, goles, etc.) se consultan juntas constantemente para generar la tabla de posiciones. Se embeben en un subdocumento para agilizar las lecturas.

- **Jugadores y Categorías Embebidos:** Son listas cortas de strings asociadas directamente al equipo. No requieren una colección propia en esta fase básica.

- **Sin referencias:** La colección `equipos` concentra toda la información necesaria para los reportes de posiciones y rendimiento.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `equipos`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "nombre": "Lions FC",
  "ciudad": "Bucaramanga",
  "fundado": 2018,
  "activo": true,
  "estadisticas": {
    "partidos_jugados": 10,
    "partidos_ganados": 7,
    "goles_favor": 22,
    "puntos": 23
  },
  "jugadores_destacados": ["Carlos Valderrama", "Luis Díaz"],
  "categorias": ["Masculino", "Mayores"]
}
```
### Índices implementados
{ nombre: 1 }: Optimiza la búsqueda puntual de un equipo por su nombre.

{ "estadisticas.puntos": -1 }: Acelera la generación de la tabla de posiciones ordenada descendentemente por mayor puntaje.

### Checklist
[x] Nombre de la colección en plural y minúsculas (equipos).

[x] Inserción de al menos 5 documentos coherentes.

[x] Uso de subdocumento embebido para estadisticas.

[x] Uso de array embebido para jugadores_destacados y categorias.

[x] Consultas con proyecciones y ordenamiento (sort).

[x] Operación de actualización (updateOne con $inc).

[x] Creación de índices para optimización de búsquedas.

[x] Archivos ubicados únicamente dentro de la carpeta personal de resolución.