# Modelo documental - Usuarios streaming

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de carga con 5 usuarios iniciales. Incluye nombres poco comunes (Zephyrine, Orestes, Balthazar, Cyrene, Melantho), ubicación en Guatemala, planes en moneda local (GTQ) y preferencias orientadas a películas, anime y listas de música.
- `queries.mongodb.js`: Consultas enfocas en el estado de membresías, filtrado por géneros dentro de arreglos (`$in`), reportes de configuración de audio/subtítulos y actualización de estado con `$set` y `$push`.

## 1. Identificación de Entidades y Atributos
- **Usuario:** `codigo_usuario`, `nombre_completo`, `email`, `pais`, `fecha_registro`.
- **Membresía (Subdocumento):** `tipo_plan`, `precio_gtq`, `estado`, `dispositivos_permitidos`.
- **Preferencias (Subdocumento):** `generos_favoritos` (Array), `idioma_audio`, `subtitulos_activos`.
- **Listas Favoritas (Array de Subdocumentos):** `titulo`, `tipo`, `total_elementos`.

## 2. Decisiones de Diseño
- **Embebido de Membresía y Preferencias:** La información de suscripción y configuración de reproducción se consulta en cada inicio de sesión. Guardarla dentro del documento de usuario agiliza la lectura.
- **Uso de Arrays de Subdocumentos para Listas:** Permite relacionar las listas personalizadas de películas y canciones favoritas sin requerir colecciones externas para este nivel básico.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `usuarios`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "codigo_usuario": "USR-STR-001",
  "nombre_completo": "Zephyrine Valdivia",
  "email": "zephyrine.valdivia@campus.gt",
  "pais": "Guatemala",
  "membresia": {
    "tipo_plan": "Familiar Premium",
    "precio_gtq": 109.99,
    "estado": "Activo",
    "dispositivos_permitidos": 4
  },
  "preferencias": {
    "generos_favoritos": ["Anime", "Soundtracks", "Ciencia Ficción"],
    "idioma_audio": "Japonés",
    "subtitulos_activos": true
  },
  "listas_favoritas": [
    {
      "titulo": "Openings de Anime Populares",
      "tipo": "Música",
      "total_elementos": 25
    },
    {
      "titulo": "Maratón Assassination Classroom",
      "tipo": "Película/Serie",
      "total_elementos": 12
    }
  ],
  "fecha_registro": "2026-01-10T00:00:00.000Z"
}
```

### Índices implementados
{ "membresia.estado": 1 }: Para encontrar rápidamente a los usuarios según el estado de su suscripción.

{ "preferencias.generos_favoritos": 1 }: Para buscar al instante a los usuarios que escuchan o ven un género específico.

{ email: 1 }: Para consultar inmediatamente a un usuario por su correo sin revisar toda la base de datos.

### Checklist
[x] Nombre de la colección en plural y minúsculas (usuarios).

[x] Sin instrucción drop() en el script inicial.

[x] Nombres poco comunes de usuarios, temática de películas/música y contexto de Guatemala.

[x] Comentarios de índices explicados de forma corta y entendible.

[x] Consultas con actualización de arreglos ($push) y campos embebidos ($set).

[x] Archivos ubicados únicamente en la carpeta de resolución personal.

## Explicación de las Consultas (`queries.mongodb.js`)

1. **Consulta General (`find({})`):**
   Muestra todos los usuarios guardados para validar la inserción de datos.

2. **Filtro de Membresías Activas (`membresia.estado` y `tipo_plan`):**
   Obtiene los usuarios que poseen el plan "Familiar Premium" en estado activo.

3. **Búsqueda en Listas/Arreglos (`$in`):**
   Filtra a los usuarios que incluyeron géneros como "Anime" o "Soundtracks" dentro de sus preferencias.

4. **Reporte de Reproducción (`subtitulos_activos`):**
   Devuelve los usuarios con subtítulos activados junto con su idioma preferido de audio.

5. **Activación de Cuentas y Preferencias (`updateOne` con `$set` y `$push`):**
   Cambia el estado de membresía a "Activo" y añade un nuevo género a la lista de preferencias.

6. **Registro de Nuevo Usuario (`insertOne`):**
   Agrega a la base de datos a un nuevo usuario con plan Estudiante en Guatemala.
