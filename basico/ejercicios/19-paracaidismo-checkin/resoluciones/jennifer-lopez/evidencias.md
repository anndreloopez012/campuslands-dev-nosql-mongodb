# Modelo documental - Check-in de paracaidismo

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de carga con 5 registros de check-in usando personas de nombres poco comunes (Orestes, Cyrene, Balthazar, etc.) y zonas de salto poco conocidas e inspiradas en Guatemala (Puerto San José, Atitlán, Semuc Champey, Cráter Azul).

- `queries.mongodb.js`: Consultas enfáticas en las validaciones manuales de seguridad (waivers, arneses, altímetros, revisiones médicas) y actualización del estado del participante.

## 1. Identificación de Entidades y Atributos
- **Checkin:** `saltador`, `zona_salto`, `pais`, `modalidad`, `peso_kg`, `altura_salto_pies`, `instruccion_completada`, `estado_checkin`, `fecha`.

- **Validaciones Manuales:** Subdocumento embebido `validaciones_manuales` (`firma_waiver`, `revision_medica`, `inspeccion_arnes`, `validado_por`).

- **Equipamiento:** Subdocumento embebido `equipamiento` (`codigo_paracaidas`, `altimetro_verificado`).

## 2. Decisiones de Diseño
- **Subdocumentos Embebidos para Validaciones y Equipo:** Dado que el personal de tierra e instructores validan el arnés, el altímetro y el waiver de forma simultánea antes del abordaje, consolidar estas validaciones dentro del documento del check-in garantiza lecturas en tiempo real sin joins.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `checkins`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "saltador": "Orestes Vane",
  "zona_salto": "Puerto San José",
  "pais": "Guatemala",
  "modalidad": "Tandem",
  "peso_kg": 74.5,
  "altura_salto_pies": 10000,
  "instruccion_completada": true,
  "validaciones_manuales": {
    "firma_waiver": true,
    "revision_medica": true,
    "inspeccion_arnes": true,
    "validado_por": "Instructor Hesperio"
  },
  "equipamiento": {
    "codigo_paracaidas": "PARA-GT-01",
    "altimetro_verificado": true
  },
  "estado_checkin": "aprobado",
  "fecha": "2026-07-22T10:00:00.000Z"
}
```

### Índices implementados
{ estado_checkin: 1 }: Acelera la generación de manifiestos de vuelo aprobados.

{ "validaciones_manuales.revision_medica": 1 }: Permite filtrar participantes pendientes de verificación de salud.

### Checklist
[x] Nombre de la colección en plural y minúsculas (checkins).

[x] Sin instrucción drop() en la semilla.

[x] Nombres de participantes poco comunes y sitios geográficos poco comunes / de Guatemala.

[x] Subdocumentos estructurados para validaciones manuales y equipo.

[x] Consultas con $or para monitoreo de seguridad.

[x] Actualización directa mediante $set.

[x] Archivos creados únicamente dentro de la carpeta personal de resolución.

[x] Archivos creados únicamente dentro de la carpeta personal de resolución.

##  Explicación de las Consultas (`queries.mongodb.js`)

1. **Consulta General (`find({})`):**
   Muestra la totalidad de los registros de la colección para verificar la carga completa de datos exigida por la plantilla base.

2. **Filtro de Manifiesto de Vuelo (`estado_checkin: "aprobado"`):**
   Obtiene únicamente a los saltadores que han completado todas sus validaciones y están autorizados para abordar la aeronave, proyectando solo el nombre, la zona, la modalidad y el código del paracaídas.

3. **Verificación de Seguridad Pendiente (`$or`):**
   Evalúa los subdocumentos de `validaciones_manuales` para detectar a cualquier saltador que tenga pendiente su revisión médica o la inspección de su arnés antes de permitirle saltar.

4. **Actualización de Estado (`updateOne` con `$set`):**
   Simula el momento en que un instructor valida manualmente a un participante (Balthazar Nightshade), cambiando el estado de su revisión médica, altímetro y pasando su `estado_checkin` a "aprobado".

5. **Nuevo Registro (`insertOne`):**
   Inserta en tiempo real una nueva ficha de check-in para una zona de salto en Guatemala (Cráter Azul).