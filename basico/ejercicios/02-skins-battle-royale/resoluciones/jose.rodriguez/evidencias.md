# Evidencias Técnicas de Validación - MongoDB Compass

Este documento recopila las pruebas de funcionamiento de la base de datos `campus_skins_battle_royale` ejecutadas interactivamente a través de la interfaz gráfica de MongoDB Compass.

## 1. Poblamiento e Inserción de Datos (Seed)
Se ejecutó el script de inicialización en la consola integrada Mongosh de Compass. A continuación se evidencia el árbol de documentos creado exitosamente dentro de la colección pluralizada `skins`


## 2. Validación de Consultas mediante Filtros Visuales
Se comprobó la flexibilidad del modelo NoSQL aplicando consultas lógicas directamente en la barra superior de filtrado de Compass:

* **Filtro por Rango de Rareza Alta:** Visualización en Compass tras aplicar el filtro `{ "rareza": { "$in": ["Épica", "Legendaria"] } }`.

* **Filtro por Atributo Embebido (Estadísticas de Uso):** Evidencia de búsqueda exitosa accediendo al subdocumento de rendimiento con `{ "estadisticas_uso.victorias_con_skin": { "$gt": 200 } }`.


## 3. Ejecución de Modificaciones
Evidencia del documento actualizado en la interfaz gráfica, mostrando la alteración del estado de disponibilidad y el incremento del precio en créditos del ítem seleccionado de forma inmediata.