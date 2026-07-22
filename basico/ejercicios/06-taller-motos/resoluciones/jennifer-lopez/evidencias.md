# Modelo documental

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para crear la colección `ordenes`, poblar los 5 documentos e índices.
- `queries.mongodb.js`: Script con consultas de lectura, filtros y operación de actualización.

## 1. Identificación de Entidades y Atributos
Para la gestión del taller de motos se identifican las siguientes entidades y atributos:
- **Órden de Servicio:** `codigo_orden`, `cliente`, `estado`, `costo_total`.
- **Información de la Moto:** `placa`, `marca`, `modelo`, `cilindraje`.
- **Mantenimiento:** `servicios_realizados` y `repuestos`.

## 2. Decisiones de Diseño 
- **Datos de la Moto Embebidos:** La información de la moto en reparación está directamente relacionada a una orden de trabajo específica. Se embebe en un subdocumento para evitar uniones innecesarias.
- **Servicios y Repuestos Embebidos:** Son listas cortas de strings que representan los trabajos efectuados en esa revisión particular. Se embeben en arrays dentro del documento principal.
- **Sin referencias externas:** El modelo atiende la necesidad de consulta rápida del estado actual de cada mantenimiento en una única colección.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `ordenes`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "codigo_orden": "ORD-101",
  "cliente": "Carlos Pérez",
  "estado": "En Proceso",
  "costo_total": 150000,
  "moto": {
    "placa": "XYZ123",
    "marca": "Yamaha",
    "modelo": "MT-03",
    "cilindraje": 321
  },
  "servicios_realizados": ["Cambio de aceite", "Ajuste de cadena"],
  "repuestos": ["Filtro de aceite", "Aceite Yamalube"]
}
```

### Índices implementados
{ codigo_orden: 1 } (único): Acelera la búsqueda de la orden por su identificador de ticket.

{ estado: 1, "moto.placa": 1 }: Optimiza el filtrado del panel de trabajo para ver qué motos están en proceso o pendientes según su placa.

### Checklist
[x] Nombre de la colección en plural y minúsculas (ordenes).

[x] Inserción de al menos 5 documentos coherentes.

[x] Uso de subdocumento embebido para moto.

[x] Uso de array embebido para servicios_realizados y repuestos.

[x] Consultas con filtros sobre subdocumentos y arrays.

[x] Operación de actualización (updateOne con $set, $inc y $push).

[x] Creación de índices para optimización de búsquedas.

[x] Archivos ubicados únicamente dentro de la carpeta personal de resolución.