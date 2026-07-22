# Modelo documental

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para crear la colección `heroes`, poblar los 5 documentos iniciales y definir índices.

- `queries.mongodb.js`: Script con consultas de lectura, filtros de subdocumentos/arrays y operación de actualización.

## 1. Identificación de Entidades y Atributos
Para el caso del videojuego MOBA se identificaron las siguientes entidades y sus atributos:
- **Héroe:** `nombre`, `rol`, `dificultad`, `activo_en_meta`.
- **Estadísticas Base:** `vida`, `ataque`, `defensa`, `velocidad_movimiento`.
- **Habilidades y Líneas:** `habilidades` (capacidades de combate) y `lineas` (posiciones en el mapa).

## 2. Decisiones de Diseño 
- **Estadísticas Base Embebidas:** Las estadísticas iniciales son datos fuertemente ligados a cada héroe y siempre se consultan al cargar la selección de personajes. Se embeben en un subdocumento.

- **Habilidades y Líneas Embebidas:** Son listas cerradas de valores strings. Se representan como arrays dentro del documento para consultar fácilmente qué héroes pueden ir a cierta línea o tienen ciertas habilidades.

- **Sin referencias externas:** El catálogo de héroes es autosuficiente y no requiere colecciones adicionales, optimizando la lectura rápida en el cliente del juego.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `heroes`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "nombre": "Astra",
  "rol": "Mago",
  "dificultad": "Alta",
  "activo_en_meta": true,
  "estadisticas_base": {
    "vida": 550,
    "ataque": 52,
    "defensa": 28,
    "velocidad_movimiento": 330
  },
  "habilidades": ["Explosión Estelar", "Escudo Cósmico", "Súper Nova"],
  "lineas": ["Mid"]
}
```

### Índices implementados
{ nombre: 1 }: Acelera las búsquedas por nombre exacto de héroe.

{ rol: 1, activo_en_meta: 1 }: Optimiza la búsqueda de héroes viables en el meta actual según el rol requerido por el equipo.

### Checklist
[x] Nombre de la colección en plural y minúsculas (heroes).

[x] Inserción de al menos 5 documentos coherentes.

[x] Uso de subdocumento embebido para estadisticas_base.

[x] Uso de array embebido para habilidades y lineas.

[x] Consultas con filtros sobre subdocumentos y arrays.

[x] Operación de actualización (updateOne con $inc y $push).

[x] Creación de índices para optimización de búsquedas.

[x] Archivos ubicados únicamente dentro de la carpeta personal de resolución.