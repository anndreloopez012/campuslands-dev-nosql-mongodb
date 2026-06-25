# Evidencias Técnicas de Validation - MongoDB Compass

Este documento recopila las pruebas de funcionamiento de la base de datos `campus_garaje_lujo` ejecutadas interactivamente en la interfaz de MongoDB Compass.

## 1. Poblamiento del Inventario de Autos (Seed)
Se corrió exitosamente el script de inserción masiva en la pestaña Mongosh de Compass. La colección pluralizada `autos` muestra los documentos anidados de ingeniería cargados con precisión numérica:



## 2. Validación de Consultas mediante Filtros Numéricos Visuales
Se evaluó el comportamiento del motor NoSQL aplicando filtros numéricos interactivos de rango y profundidad en la barra "Filter" de Compass:

* **Evidencia de Filtro por Rangos de Precio:** Captura de pantalla en Compass aplicando el filtro `{ "precio_usd": { "$gte": 300000, "$lte": 1000000 } }`.


* **Evidencia de Filtro Técnico de Profundidad (Caballos de Fuerza):** Resultado visual de la consulta al subdocumento utilizando operadores lógicos mayores que con `{ "rendimiento.caballos_fuerza": { "$gt": 800 } }`.


## 3. Actualización de Precios de Mercado (Update)
Evidencia de la reducción inmediata reflejada en el campo numérico `precio_usd` del vehículo seleccionado tras aplicar el operador de decremento incremental de MongoDB.
