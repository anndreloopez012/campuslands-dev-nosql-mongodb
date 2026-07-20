# 🏎️ Luxury Cars Collection - MongoDB Data Model

Este repositorio contiene la solución de modelado y consulta en MongoDB para un ecosistema de autos de lujo. El diseño está optimizado para responder a consultas complejas de rendimiento, tasación de mercado y personalizaciones exclusivas.

## 📊 Estrategia de Modelado (Criterio NoSQL)

Para este caso de uso, se optó por un enfoque **híbrido** (Embebido + Referenciado) basado en los patrones de acceso a datos:

* **Documento Principal (`cars`):** Contiene la entidad central del vehículo (marca, modelo, año, precio base).
* **Subdocumentos Objeto (`specs` y `performance`):** Datos que tienen una relación 1:1 con el auto y que rara vez cambian de forma independiente. Embeberlos evita *LOOKUPS* costosos y permite filtrar por rangos numéricos de velocidad o potencia de forma nativa.
* **Arrays de Objetos (`customizations`):** Las opciones de personalización (pintura, materiales interiores, rines) son intrínsecas a cada auto de lujo específico. Al estar embebidas, podemos usar el operador `$elemMatch` para buscar configuraciones exactas.
* **Referencias (`dealership_id`):** Los concesionarios (dealerships) se manejan mediante **Referencias (Normalización)**. Un concesionario puede tener cientos de autos; embeber el concesionario duplicaría información masivamente y dificultaría su actualización (ej. cambiar el teléfono del concesionario afectaría a miles de autos).

---

## 🔍 Índices Sugeridos para Producción

Para garantizar que los filtros numéricos y de texto corran en tiempo de ejecución óptimo ($O(\log N)$ en lugar de colapsar la base de datos con un *COLLSCAN*), se sugieren los siguientes índices:

```javascript
// 1. Índice Compuesto para Filtros de Rendimiento y Precio (Filtros Numéricos Comunes)
db.cars.createIndex({ "performance.horsepower": 1, "price.base_price": -1 });

// 2. Índice Multikey para búsquedas rápidas por componentes de personalización premium
db.cars.createIndex({ "customizations.cost": 1 });

// 3. Índice para la referencia del Concesionario y Disponibilidad
db.cars.createIndex({ "dealership_id": 1, "status": 1 });