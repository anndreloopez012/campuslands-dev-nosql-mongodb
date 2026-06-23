# Evidencias Técnicas de Validación - MongoDB Compass

Este documento recopila las pruebas de funcionamiento de la solución NoSQL implementada para la base de datos `campus_taller_motos` a través de la interfaz interactiva de MongoDB Compass.

## 1. Estructura y Población de Documentos (Seed)
Se ejecutó de forma correcta el script por lote desde la terminal integrada Mongosh de Compass. A continuación se evidencia la colección pluralizada `motos` con los 5 documentos cargados de forma íntegra con sus subdocumentos de mantenimiento:



## 2. Validación de Consultas mediante Filtros y Proyecciones Visuales
Se comprobó el correcto comportamiento de la base de datos aplicando la manipulación y filtrado de salida de datos directo en los campos visuales de Compass:

* **Evidencia de Proyección de Trabajo:** Resultado en pantalla aplicando el filtro `{ "estado": { "$ne": "Entregado" } }` y seleccionando la proyección para ver solo los datos del vehículo en el taller.

* **Evidencia de Filtro por Subdocumento (Mecánico Asignado):** Captura que demuestra el escaneo sobre el subdocumento anidado utilizando la barra interactiva con `{ "historial_mantenimiento.mecanico_asignado": "Jorge Juárez" }`.

## 3. Ejecución de Actualizaciones Básicas (Update)
Evidencia en Compass del cambio de estado inmediato en el documento de la motocicleta seleccionada tras lanzar la instrucción de actualización, quedando lista para ser retirada por el propietario.

