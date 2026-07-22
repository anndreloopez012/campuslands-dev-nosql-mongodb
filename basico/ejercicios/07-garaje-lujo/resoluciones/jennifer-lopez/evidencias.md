# Modelo documental

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para crear la colección `autos`, poblar los 5 documentos iniciales y definir índices.
- `queries.mongodb.js`: Script con consultas de lectura, filtros numéricos sobre objetos/arrays y actualización.

## 1. Identificación de Entidades y Atributos
Para la gestión del garaje de autos de lujo se identifican las siguientes entidades y sus atributos:
- **Auto de Lujo:** `marca`, `modelo`, `anio`, `precio_usd`, `disponible`.
- **Especificaciones Técnicas:** `potencia_hp`, `velocidad_max_kmh`, `aceleracion_0_100`.
- **Equipamiento y Colores:** `equipamiento` (características premium) y `colores_disponibles`.

## 2. Decisiones de Diseño 
- **Especificaciones Embebidas:** Las métricas de rendimiento (potencia, aceleración) son propiedades físicas inmutables del vehículo y se consultan junto con la ficha técnica del auto. Se embeben en un subdocumento.
- **Equipamiento y Colores Embebidos:** Listados cortos de características adicionales que no requieren una colección independiente para este ámbito básico.
- **Sin referencias externas:** La información necesaria para filtrar catálogo por precio o potencia se resuelve de manera eficiente en una única colección.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `autos`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "marca": "Ferrari",
  "modelo": "SF90 Stradale",
  "anio": 2023,
  "precio_usd": 524000,
  "disponible": true,
  "especificaciones": {
    "potencia_hp": 986,
    "velocidad_max_kmh": 340,
    "aceleracion_0_100": 2.5
  },
  "equipamiento": ["Frenos cerámicos", "Tracción integral", "Modo eDrive"],
  "colores_disponibles": ["Rojo Corsa", "Negro Daytona"]
}
```

### Índices implementados
{ marca: 1, modelo: 1 }: Acelera la búsqueda de autos por fabricante y línea de producto.

{ precio_usd: -1 }: Optimiza los filtros numéricos y ordenamientos por precio de venta.

{ "especificaciones.potencia_hp": -1 }: Permite consultas eficientes sobre el rendimiento de potencia de los superdeportivos.

### Checklist
[x] Nombre de la colección en plural y minúsculas (autos).

[x] Inserción de al menos 5 documentos coherentes.

[x] Uso de subdocumento embebido para especificaciones.

[x] Uso de array embebido para equipamiento y colores_disponibles.

[x] Consultas con filtros numéricos ($gt, $gte) sobre campos simples y subdocumentos.

[x] Operación de actualización (updateOne con $set, $inc y $push).

[x] Creación de índices para optimización de búsquedas.

[x] Archivos ubicados únicamente dentro de la carpeta personal de resolución.