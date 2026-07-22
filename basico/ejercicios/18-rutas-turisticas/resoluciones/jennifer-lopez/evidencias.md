# Modelo documental - Rutas turísticas

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de carga con 5 rutas turísticas geolocalizadas, guías con nombres poco comunes (Hesperio, Cirene, Amador, Tiberio, Kaelen) y lugares pintorescos pero no masivos.
- `queries.mongodb.js`: Consultas con filtrados geográficos embebidos, niveles de dificultad, búsquedas dentro de arreglos y actualización de estados operacionales.

## 1. Identificación de Entidades y Atributos
- **Ruta Turística:** `nombre_ruta`, `guia_encargado`, `lugar_destacado`, `region`, `pais`, `dificultad`, `duracion_horas`, `precio_usd`, `activa`.
- **Ubicación Geográfica:** Subdocumento GeoJSON `ubicacion` (`type`, `coordinates` -> `[longitud, latitud]`).
- **Puntos de Interés:** Array de strings (`puntos_interes`).

## 2. Decisiones de Diseño
- **Geolocalización Embebida (GeoJSON `Point`):** Embeber las coordenadas en formato estándar GeoJSON (`Point`) dentro del mismo documento de la ruta permite realizar consultas geoespaciales avanzadas (como encontrar rutas cercanas a un punto determinado) mediante un índice `2dsphere`.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `rutas`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "nombre_ruta": "Sendero de la Laguna Verde de Chiliques",
  "guia_encargado": "Hesperio Valdivia",
  "lugar_destacado": "Laguna Verde de Chiliques",
  "region": "Antofagasta",
  "pais": "Chile",
  "dificultad": "moderada",
  "duracion_horas": 6,
  "precio_usd": 75.00,
  "ubicacion": {
    "type": "Point",
    "coordinates": [-67.8725, -23.6392]
  },
  "puntos_interes": ["Mirador del Volcán", "Aguas Termales", "Ecosistema de Flamingos"],
  "activa": true
}
```
### Índices implementados
{ ubicacion: "2dsphere" }: Índice especializado para realizar búsquedas geográficas por proximidad o delimitación espacial.

{ pais: 1 }: Optimiza la búsqueda de rutas por ubicación nacional.

{ dificultad: 1 }: Acelera los filtros según la capacidad física del turista.

### Checklist
[x] Nombre de la colección en plural y minúsculas (rutas).

[x] Guías con nombres poco comunes y destinos turísticos originales.

[x] Documentos geográficos embebidos utilizando el formato GeoJSON.

[x] Consultas que acceden a subdocumentos y arreglos.

[x] Operación de actualización mediante $set e $inc.

[x] Creación del índice 2dsphere.

[x] Archivos creados únicamente dentro de la carpeta personal de resolución.