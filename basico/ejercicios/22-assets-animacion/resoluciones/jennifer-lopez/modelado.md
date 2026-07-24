# Modelo documental - Assets de animación 3D

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de carga con 5 assets 3D iniciales. Incluye modeladores de nombres poco comunes (Orestes, Cyrene, Balthazar, etc.), ambientaciones inspiradas en Guatemala (Cráter Azul, Laguna Lachúa, Quiriguá, Semuc Champey, Tikal) y películas populares (*Toy Story*, *Shrek*, *Kung Fu Panda*, *Spider-Verse*, *Avatar*).
- `queries.mongodb.js`: Consultas centradas en el seguimiento del flujo y estados de producción 3D (`aprobado`, `en_revision`, `modelado`, `texturizado`), control de polígonos y actualización de versiones.

## 1. Identificación de Entidades y Atributos
- **Asset 3D:** `nombre_asset`, `modelador`, `proyecto_pelicula`, `lugar_ambientacion`, `pais`, `tipo` (`Personaje`, `Escenario`, `Prop`, `Vehículo`, `Criatura`), `poligonos_count`, `software`, `estado_produccion`, `version`, `fecha_actualizacion`.

- **Detalles Técnicos:** Subdocumento embebido `detalles_tecnicos` (`texturizado`, `rigged`, `formato`).

## 2. Decisiones de Diseño
- **Subdocumentos Embebidos para Especificaciones Técnicas:** Los atributos como formato de archivo (`FBX`, `OBJ`, `USD`) y si el modelo posee armado de huesos (`rigged`) o mapas de textura forman parte de las propiedades fijas del asset, por lo que embeberlos garantiza lecturas inmediatas en la pipeline del motor gráfico.
- **Flujo Basado en Estados:** El campo `estado_produccion` modela el ciclo de vida del modelo en el estudio 3D.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `assets`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "nombre_asset": "Nave Espacial Buzz Lightyear",
  "modelador": "Orestes Vane",
  "proyecto_pelicula": "Toy Story",
  "lugar_ambientacion": "Cráter Azul",
  "pais": "Guatemala",
  "tipo": "Vehículo",
  "poligonos_count": 45000,
  "software": "Blender / Maya",
  "estado_produccion": "aprobado",
  "detalles_tecnicos": {
    "texturizado": true,
    "rigged": true,
    "formato": "FBX"
  },
  "version": 2.1,
  "fecha_actualizacion": "2026-06-10T00:00:00.000Z"
}
```

### Índices implementados
{ estado_produccion: 1 }: Permite filtrar instantáneamente los assets según su fase en el pipeline.

{ tipo: 1 }: Optimiza la búsqueda de modelos por categoría (Props, Escenarios, Personajes).

{ modelador: 1 }: Agiliza la revisión del volumen de trabajo entregado por artista.

### Checklist
[x] Nombre de la colección en plural y minúsculas (assets).

[x] Sin instrucción drop() en la semilla.

[x] Nombres de artistas poco comunes, lugares de Guatemala y películas populares.

[x] Control de estados de producción claramente delimitado.

[x] Consultas por estados, volumen de polígonos y subdocumentos.

[x] Operación de actualización mediante $set e $inc.

[x] Archivos creados únicamente dentro de la carpeta personal de resolución.

## Explicación de las Consultas

1. **Consulta General (`find({})`):**
   Obtiene todos los registros insertados para cumplir con la verificación inicial solicitada en la plantilla base.

2. **Filtro de Assets Listos para Producción (`estado_produccion: "aprobado"`):**
   Filtra únicamente los modelos que ya han sido aprobados por los directores de arte para pasar al departamento de renderizado o animación.

3. **Seguimiento de Trabajos en Proceso (`$in`):**
   Lista los assets que se encuentran en fases intermedias de desarrollo (`"en_revision"`, `"modelado"`, `"texturizado"`).

4. **Filtro de Complejidad Geométrica (`$gt`):**
   Localiza los modelos de alta densidad poligonal (más de 80,000 polígonos) para auditar el rendimiento.

5. **Actualización de Pipeline (`updateOne` con `$set` e `$inc`):**
   Promueve la casa de Shrek al estado `"aprobado"`, marca el rigging como completado e incrementa en +0.1 su número de versión.

6. **Nuevo Asset (`insertOne`):**
   Registra una nueva utilería 3D en la base de datos inspirada en Tikal, Guatemala.
