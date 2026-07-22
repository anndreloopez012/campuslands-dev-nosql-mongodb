# Modelo documental - Inventario ecommerce

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de carga con 5 vehículos icónicos iniciales. Incluye encargados de inventario con nombres poco comunes (Orestes, Cyrene, Balthazar, Melantho, Xanthos), sedes ubicadas en puntos de Guatemala (Cráter Azul, Laguna Lachúa, Quiriguá, Semuc Champey, Tikal) y vehículos de ficción (*Ghostbusters*, *Akira*, *Volver al Futuro*, *TRON*, *Batman*).
- `queries.mongodb.js`: Consultas enfocadas en la detección de alertas de reorden, comparación entre `stock_actual` y `stock_minimo`, filtrados por tipo/precio y actualización de inventario con `$inc`.

## 1. Identificación de Entidades y Atributos
- **Vehículo:** `codigo_sku`, `nombre_modelo`, `tipo_vehiculo`, `marca`, `referencia_popular`, `encargado_inventario`, `sede_almacen`, `pais`, `precio_usd`, `fecha_ingreso`.
- **Inventario (Subdocumento):** `stock_actual`, `stock_minimo`, `alerta_reorden`, `nivel_alerta`.
- **Especificaciones (Subdocumento):** `motor`, `combustible`, `transmision`.

## 2. Decisiones de Diseño
- **Embebido de Inventario y Especificaciones:** Los datos de stock y ficha técnica se leen constantemente junto al producto en un e-commerce. Embeber estos campos dentro de la colección `vehiculos` reduce lecturas y optimiza el rendimiento.
- **Comparación por `$expr`:** Permite evaluar dinámicamente si el stock actual cayó por debajo del mínimo definido.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `vehiculos`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "codigo_sku": "AUTO-ECTO-001",
  "nombre_modelo": "Ecto-1 Cazafantasmas Edition",
  "tipo_vehiculo": "Auto",
  "marca": "Miller-Meteor",
  "referencia_popular": "Ghostbusters",
  "encargado_inventario": "Orestes Vane",
  "sede_almacen": "Sede Cráter Azul",
  "pais": "Guatemala",
  "precio_usd": 85000.0,
  "inventario": {
    "stock_actual": 2,
    "stock_minimo": 5,
    "alerta_reorden": true,
    "nivel_alerta": "Critico"
  },
  "especificaciones": {
    "motor": "V8 6.4L",
    "combustible": "Gasolina / Capturador de Fotones",
    "transmision": "Automática"
  },
  "fecha_ingreso": "2026-02-15T00:00:00.000Z"
}
```
### Índices implementados
{ "inventario.alerta_reorden": 1 }: Para encontrar de golpe los productos que necesitan reabastecimiento urgente.

{ tipo_vehiculo: 1 }: Para buscar y filtrar rápidamente por tipo de vehículo (Auto o Moto).

{ sede_almacen: 1 }: Para ubicar al instante los vehículos guardados en una sede específica.

### Checklist
[x] Nombre de la colección en plural y minúsculas (vehiculos).

[x] Sin instrucción drop() en el script inicial.

[x] Nombres poco comunes de encargados, sedes de Guatemala y temática de autos/motos icónicos.

[x] Índices explicados de forma corta y entendible.

[x] Consultas con lógica de control de stock y actualización con $inc.

[x] Archivos ubicados únicamente en la carpeta de resolución personal.

## Explicación de las Consultas (`queries.mongodb.js`)

1. **Consulta General (`find({})`):**
   Muestra el listado completo de la colección para verificar la carga de datos.

2. **Detección de Bajo Stock (`$expr` y `$lte`):**
   Compara dinámicamente si el `stock_actual` es menor o igual al `stock_minimo` configurado para emitir alertas.

3. **Filtrado de Catálogo (`tipo_vehiculo` y `precio_usd`):**
   Obtiene motocicletas con un precio menor o igual a $50,000 USD.

4. **Reporte de Reabastecimiento (`alerta_reorden`):**
   Muestra las unidades que tienen activa la bandera de reorden junto al encargado de la sede.

5. **Entrada de Inventario (`updateOne` con `$inc`):**
   Aumenta el stock del DeLorean en 5 unidades y normaliza su estado de alerta.

6. **Registro de Nuevo Vehículo (`insertOne`):**
   Inserta el modelo Mach 5 asignado a la sede Semuc Champey.