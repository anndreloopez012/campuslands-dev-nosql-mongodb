# Modelo documental - Reservas de eventos campus

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de carga con 5 reservas deportivas iniciales. Incluye organizadores con nombres poco comunes (Zephyrine, Orestes, Balthazar, Cyrene, Melantho), recintos universitarios en Guatemala (Cráter Azul, Semuc Champey, Quiriguá, Tikal, Laguna Lachúa) y pagos en moneda local (GTQ).
- `queries.mongodb.js`: Consultas de validación, actualización de pagos con `$set`, inserción de nuevos eventos y operaciones de eliminación controlada (`deleteOne` y `deleteMany`).

## 1. Identificación de Entidades y Atributos
- **Reserva:** `codigo_reserva`, `nombre_evento`, `deporte`, `organizador`, `recinto`, `pais`, `asistentes_esperados`, `estado_reserva`, `fecha_evento`.
- **Detalles de Pago (Subdocumento):** `monto_gtq`, `pagado`, `metodo`.
- **Equipamiento Solicitado (Array):** Lista de materiales deportivos requeridos para el evento.

## 2. Decisiones de Diseño
- **Embebido de Detalles de Pago:** La información del pago está directamente ligada a la reserva y no cambia de contexto, por lo que embeberla agiliza la lectura de comprobantes y estados de cuenta.
- **Delete Controlado:** La eliminación se realiza filtrando explícitamente por `codigo_reserva` o por el campo `estado_reserva: "Cancelada"`, garantizando que no se eliminen eventos confirmados o activos por accidente.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `reservas`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "codigo_reserva": "RES-DEP-001",
  "nombre_evento": "Torneo Relámpago de Futsal Campus",
  "deporte": "Futsal",
  "organizador": "Zephyrine Valdivia",
  "recinto": "Complejo Deportivo Cráter Azul",
  "pais": "Guatemala",
  "asistentes_esperados": 120,
  "estado_reserva": "Confirmada",
  "detalles_pago": {
    "monto_gtq": 450.0,
    "pagado": true,
    "metodo": "Transferencia"
  },
  "equipamiento_solicitado": [
    "Balones",
    "Chalecos",
    "Cronómetro Digital"
  ],
  "fecha_evento": "2026-08-05T10:00:00.000Z"
}
```

### Índices implementados
{ estado_reserva: 1 }: Para consultar de inmediato las reservas según su estado.

{ recinto: 1 }: Para ubicar rápidamente la disponibilidad y eventos agendados en un recinto específico.

{ deporte: 1 }: Para filtrar de golpe las reservas registradas por disciplina deportiva.

### Checklist
[x] Nombre de la colección en plural y minúsculas (reservas).

[x] Sin instrucción drop() en el script inicial.

[x] Nombres poco comunes de organizadores, temática deportiva y recintos de Guatemala.

[x] Comentarios de índices explicados de forma corta y entendible.

[x] Implementación de delete controlado (deleteOne y deleteMany).

[x] Archivos ubicados únicamente en la carpeta de resolución personal.

## Explicación de las Consultas

1. **Consulta General (`find({})`):**
   Muestra todas las reservas registradas en la colección.

2. **Filtro de Reservas Confirmadas (`estado_reserva` y `detalles_pago.pagado`):**
   Obtiene los eventos confirmados que ya cuentan con pago registrado.

3. **Filtro de Capacidad (`$gt`):**
   Busca eventos con más de 50 asistentes esperados para la planificación de logística.

4. **Actualización de Estado (`updateOne` con `$set`):**
   Actualiza una reserva pendiente a confirmada y registra la recepción del pago.

5. **Registro de Nueva Reserva (`insertOne`):**
   Inserta un torneo de ajedrez agendado en la sede Tikal.

6. **Eliminación Controlada Individual (`deleteOne`):**
   Elimina del sistema una reserva cancelada específica mediante su código único (`RES-DEP-003`).

7. **Depuración Masiva Controlada (`deleteMany`):**
   Limpia automáticamente todas las reservas cuyo estado sea `"Cancelada"`.