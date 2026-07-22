# Modelo documental - Agenda de tatuajes

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de carga con 5 citas iniciales agendadas, con clientes/tatuadores de nombres poco comunes (Orestes, Hesperio, Cyrene, Xanthos, etc.), sedes inspiradas en Guatemala (Antigua Guatemala, Panajachel, Quiriguá) y diseños de la cultura pop reconocidos (*El viaje de Chihiro*, *Star Wars*, *Ataque a los Titanes*, *Pokémon*).
- `queries.mongodb.js`: Consultas enfáticas en el control de la agenda por fechas (`ISODate`), filtrados por estados (`confirmada`, `pendiente`, `completada`) y actualización de fechas de citas.

## 1. Identificación de Entidades y Atributos
- **Cita de Tatuaje:** `cliente`, `tatuador`, `estudio_ubicacion`, `pais`, `estilo`, `diseno`, `zona_cuerpo`, `duracion_estimada_horas`, `precio_estimado_usd`, `deposito_pagado_usd`, `estado_cita` (`confirmada`, `pendiente`, `completada`, `cancelada`), `fecha_cita`.

## 2. Decisiones de Diseño
- **Documento Embebido Directo:** Para agendas de servicios en tiempo real, consolidar los datos del cliente, el artista, la tarifa y la fecha exacta en un solo documento facilita la renderización de la agenda del día sin requerir joins entre colecciones separadas.
- **Fechas Nativas con `ISODate`:** Permite realizar filtros por períodos semanales o mensuales utilizando operadores como `$gte` y `$lte`.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `citas`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "cliente": "Orestes Vane",
  "tatuador": "Hesperio Valdivia",
  "estudio_ubicacion": "Antigua Guatemala",
  "pais": "Guatemala",
  "estilo": "Anime / Blackwork",
  "diseno": "Dragón Haku - El viaje de Chihiro",
  "zona_cuerpo": "Antebrazo",
  "duracion_estimada_horas": 4,
  "precio_estimado_usd": 250.00,
  "deposito_pagado_usd": 50.00,
  "estado_cita": "confirmada",
  "fecha_cita": "2026-08-15T14:00:00.000Z"
}
```
### Índices implementados
{ fecha_cita: 1 }: Acelera la ordenación cronológica del calendario de citas del estudio.

{ estado_cita: 1 }: Permite filtrar rápidamente citas activas o canceladas.

{ tatuador: 1 }: Optimiza la consulta del itinerario de trabajo por artista.

### Checklist
[x] Nombre de la colección en plural y minúsculas (citas).

[x] Sin instrucción drop() en la semilla.

[x] Nombres de personas poco comunes, estudios en ubicaciones icónicas de Guatemala y temas populares.

[x] Manejo explícito de fechas con ISODate.

[x] Consultas por rangos de fechas y estados operacionales.

[x] Actualización directa mediante $set.

[x] Archivos creados únicamente dentro de la carpeta personal de resolución.

## Explicación de las Consultas

1. **Consulta General (`find({})`):**
   Demuestra el contenido global de la colección para validar la carga de datos inicial exigida por la plantilla base.

2. **Filtro de Agenda Mensual (`estado_cita: "confirmada"` con `$gte` y `$lte`):**
   Filtra todas las citas confirmadas programadas para el mes de agosto de 2026, proyectando detalles relevantes para la preparación previa de los artistas (cliente, diseño, fecha y estudio).

3. **Control Financiero de Reservas (`$in`):**
   Obtiene los montos estimados y anticipos cobrados para las citas que se encuentran activas (`confirmada` o `pendiente`).

4. **Reagendamiento y Confirmación (`updateOne` con `$set`):**
   Actualiza la cita de Cyrene Sterling, pasando su estado de "pendiente" a "confirmada", ajustando la fecha del turno y elevando el depósito pagado.

5. **Nueva Cita (`insertOne`):**
   Registra una nueva reserva confirmada en la agenda del estudio ubicado en Antigua Guatemala.