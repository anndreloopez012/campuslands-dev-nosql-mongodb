# Modelo documental - Validación básica de documentos

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de creación de la colección `dispositivos` con reglas de validación en esquema (`$jsonSchema`). Incluye 5 registros de tecnología con responsables (Zephyrine, Orestes, Balthazar, Cyrene, Melantho) y sedes de laboratorio en Guatemala (Cráter Azul, Semuc Champey, Quiriguá, Tikal, Laguna Lachúa).
- `queries.mongodb.js`: Consultas de validación de modelo, filtros por precio y etiquetas, reporte de activos operacionales y actualización mediante `$set`.

## 1. Identificación de Entidades y Atributos
- **Dispositivo (Colección principal):** `codigo_activo`, `nombre_equipo`, `categoria`, `responsable`, `sede_laboratorio`, `pais`, `precio_usd`, `estado`, `fecha_alta`.
- **Especificaciones (Subdocumento):** `procesador`, `ram_gb`.
- **Etiquetas (Array):** Lista de tags técnicos asociados (`docker`, `mongodb`, `strapi`, `typescript`, etc.).

## 2. Decisiones de Diseño y Esquema de Validación
- **Uso de `$jsonSchema`:** Garantiza la integridad de los datos desde la capa de la base de datos sin depender exclusivamente de la aplicación.
- **Validaciones aplicadas:**
  - `bsonType`: Fuerza tipos explícitos (`string`, `number`, `object`, `array`).
  - `required`: Exige campos críticos como `codigo_activo`, `nombre_equipo`, `categoria`, `responsable`, `sede_laboratorio`, `precio_usd` y `estado`.
  - `enum`: Restringe los valores de `categoria` a `["Servidor", "Laptop", "Redes", "Contenedor Docker", "Periférico"]` y de `estado` a `["Operativo", "En Mantenimiento", "Retirado"]`.
  - `minimum`: Impide precios negativos en `precio_usd`.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `dispositivos`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "codigo_activo": "DEV-SRV-001",
  "nombre_equipo": "Servidor Principal Strapi & MongoDB",
  "categoria": "Servidor",
  "responsable": "Zephyrine Valdivia",
  "sede_laboratorio": "Laboratorio Cráter Azul",
  "pais": "Guatemala",
  "precio_usd": 2400.0,
  "estado": "Operativo",
  "especificaciones": {
    "procesador": "AMD EPYC 16-Core",
    "ram_gb": 64
  },
  "etiquetas": [
    "docker",
    "backend",
    "strapi",
    "mongodb"
  ],
  "fecha_alta": "2026-01-15T00:00:00.000Z"
}
```

### Índices implementados
{ categoria: 1 }: Para consultar de forma rápida los equipos filtrados por categoría.

{ estado: 1 }: Para filtrar al instante los activos según su estado operativo.

{ codigo_activo: 1 } (único): Para garantizar que el código de activo sea único en todo el inventario.

### Checklist
[x] Nombre de la colección en plural y minúsculas (dispositivos).

[x] Sin instrucción drop() en el script inicial.

[x] Implementación formal de $jsonSchema para validación de documentos.

[x] Nombres poco comunes de responsables, temática tecnológica y laboratorios de Guatemala.

[x] Comentarios de índices explicados de forma corta y entendible.

[x] Archivos ubicados únicamente en la carpeta de resolución personal.

## Reglas de Validación Configuradas

La colección `dispositivos` aplica las siguientes reglas de esquema:
- **Campos Obligatorios:** `codigo_activo`, `nombre_equipo`, `categoria`, `responsable`, `sede_laboratorio`, `precio_usd` y `estado`.
- **Valores Permitidos (Enum):**
  - `categoria`: Servidor, Laptop, Redes, Contenedor Docker, Periférico.
  - `estado`: Operativo, En Mantenimiento, Retirado.
- **Reglas Numéricas:** `precio_usd` debe ser igual o mayor a 0.

## Explicación de las Consultas (`queries.mongodb.js`)

1. **Consulta General (`find({})`):**
   Muestra el listado completo de la colección de activos tecnológicos.

2. **Filtro de Equipos de Alto Valor (`precio_usd` y `estado`):**
   Filtra los dispositivos operativos con precio superior a $1,000 USD.

3. **Búsqueda por Tag de Tecnología (`etiquetas`):**
   Encuentra los activos que incluyen la etiqueta `"docker"`.

4. **Reporte de Disponibilidad:**
   Obtiene los dispositivos activos excluyendo los que han sido retirados.

5. **Actualización de Estado (`updateOne` con `$set`):**
   Cambia el estado de un equipo en mantenimiento a operativo.

6. **Inserción de Nuevo Activo Válido (`insertOne`):**
   Inserta un nuevo registro cumpliendo rigurosamente la validación de esquema.