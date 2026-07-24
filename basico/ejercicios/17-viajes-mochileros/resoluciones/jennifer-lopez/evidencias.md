# Modelo documental - Viajes mochileros

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de inicialización de la colección `itinerarios` con mochileros de nombres poco comunes (Orestes Vane, Kassandra Solstice, Xanthos Sterling, etc.) hacia destinos populares en países no tan turísticos (Bolivia, Uzbekistán, Bután, Madagascar, Zambia).
- `queries.mongodb.js`: Consultas centradas en filtrado por rangos de fechas (`ISODate`), comparaciones de presupuesto (`$lte`, `$gte`) e incrementos de costos con `$inc`.

## 1. Identificación de Entidades y Atributos
- **Itinerario:** `viajero`, `destino_popular`, `pais`, `continente`, `presupuesto_usd`, `duracion_dias`, `fecha_inicio`, `fecha_fin`.
- **Gastos Estimados:** Subdocumento embebido con desglose (`hospedaje`, `transporte`, `comida`).
- **Etiquetas de Viaje:** Array simple de descriptores del tipo de ruta (`etiquetas`).

## 2. Decisiones de Diseño
- **Manejo Nativo de Fechas (`ISODate`):** Permite usar operadores de comparación temporal (`$gte`, `$lte`) de forma precisa para planificar la agenda del mochilero.
- **Gastos Embebidos:** Al consultar un itinerario, es indispensable conocer el desglose básico de gastos (hospedaje, comida, transporte), por lo que embeberlos dentro del documento optimiza las lecturas.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `itinerarios`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "viajero": "Orestes Vane",
  "destino_popular": "Lago Titicaca",
  "pais": "Bolivia",
  "continente": "América del Sur",
  "presupuesto_usd": 750.00,
  "gastos_estimados": {
    "hospedaje": 200.00,
    "transporte": 250.00,
    "comida": 180.00
  },
  "fecha_inicio": "2026-08-10T00:00:00.000Z",
  "fecha_fin": "2026-08-25T00:00:00.000Z",
  "duracion_dias": 15,
  "etiquetas": ["lago", "cultura", "mochilero"]
}
```
### Índices implementados
{ fecha_inicio: 1 }: Acelera la búsqueda de itinerarios según el calendario de salidas.

{ presupuesto_usd: 1 }: Permite ordenar o filtrar rápidamente viajes por tope de presupuesto mochilero.

{ pais: 1 }: Optimiza consultas de destino geográfico.

### Checklist
[x] Nombre de la colección en plural y minúsculas (itinerarios).

[x] Nombres de personas poco comunes y países poco tradicionales.

[x] Manejo correcto de fechas con ISODate.

[x] Consultas por presupuestos y períodos de tiempo.

[x] Actualización de valores numéricos con $inc.

[x] Definición e implementación de índices.

[x] Archivos creados únicamente dentro de la carpeta personal de resolución.