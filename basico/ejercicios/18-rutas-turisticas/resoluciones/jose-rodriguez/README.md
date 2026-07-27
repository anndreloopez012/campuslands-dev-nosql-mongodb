# Solución NoSQL MongoDB: Caso Turismo y Documentos Geográficos

Este proyecto implementa una arquitectura de base de datos en **MongoDB** enfocada en el sector de **Turismo y Geolocalización**, utilizando estándares nativos **GeoJSON** para búsquedas espaciales y de proximidad territorial.

---

## Criterios de Modelado de Datos NoSQL

El diseño aplica los patrones fundamentales de modelado NoSQL balanceando embebido, arrays y referencias manuales:

| Colección | Campo | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `sitios` | `ubicacion` | **Subdocumento GeoJSON (`Point`)** | Cumple con el estándar `GeoJSON` (`type`, `coordinates: [Longitud, Latitud]`). Permite indexación `2dsphere` y ejecución de operadores espaciales `$near` y `$geoWithin`. |
| `sitios` | `infoPractica` | **Subdocumento Embebido** | Atributos de consulta frecuente (precios, horarios, tiempo) que pertenecen 1:1 al sitio y no varían independientemente. |
| `sitios` | `atractivosPrincipales` / `serviciosDisponibles` | **Arrays de Cadenas y Subdocumentos** | Permite indexación multiclave (*Multikey Indexes*) para filtrado por servicios específicos (ej. "Tubing", "Guía Certificado"). |
| `sitios` | `regionId` | **Referencia Manual (1:N)** | Conecta el sitio con su región administrativa/geográfica, evitando replicar datos de la región si esta modifica sus atributos. |
| `rutas` | `puntosInteresIds` | **Array de Referencias Manuales (N:M)** | Asocia múltiples sitios turísticos en un itinerario ordenado sin duplicar los subdocumentos completos de los sitios. |

---

## Explicación de las Consultas Geográficas (`queries.mongodb.js`)

1. **Búsqueda Espacial de Proximidad (`$near` + `$geometry`):**  
   Calcula la distancia esférica real sobre la superficie terrestre (en metros) desde una coordenada dada hacia los puntos registrados, devolviendo el resultado ordenado automáticamente por cercanía.
2. **Filtro por Área Delimitada (`$geoWithin` + `$box`):**  
   Permite trazar un rectángulo de coordenadas (Bounding Box) para consultar únicamente los destinos dentro de una provincia, departamento o cuadrante geográfico.
3. **Filtro Combinado de Atributos y Arrays (`$elemMatch`):**  
   Demuestra cómo consultar colecciones geográficas aplicando restricciones económicas y de contenido de forma simultánea.
4. **Reconstrucción Geográfica de Rutas (`$lookup` + `$map`):**  
   Resuelve las referencias manuales de la ruta para extraer la secuencia exacta de coordenadas de cada parada del itinerario.
5. **Agregación Territorial y Métricas de Región (`$group` + `$lookup`):**  
   Consolida las tarifas de entrada y promedios de calificación agrupando puntos de interés geográficos por su región.

---

## Estrategia de Índices Geográficos e Históricos

Para habilitar las funciones de geolocalización es **estrictamente indispensable** contar con un índice espacial de tipo `2dsphere`:

```javascript
use('turismo_db');

// Índice Espacial para consultas GeoJSON ($near, $geoWithin,$nearSphere)
db.sitios.createIndex({ ubicacion: "2dsphere" });

// Índice compuesto para filtros por categoría y precio de entrada
db.sitios.createIndex({ categoria: 1, "infoPractica.precioEntradaQ": 1 });

// Índice para resolución ágil de referencias en regiones y rutas
db.sitios.createIndex({ regionId: 1 });
db.rutas.createIndex({ puntosInteresIds: 1 });
