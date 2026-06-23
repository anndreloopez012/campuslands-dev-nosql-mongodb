# Evidencias Técnicas de Validación - MongoDB Compass

Este documento recopila las pruebas de funcionamiento de la solución NoSQL implementada para la base de datos `campus_carreras_pilotos` a través de la interfaz interactiva de MongoDB Compass.

## 1. Estructura y Población del Campeonato (Seed)
Se corrió exitosamente el script de inicialización desde la consola interna Mongosh de Compass. La colección pluralizada `pilotos` muestra los documentos numéricos y estructurados listos para consultas competitivas:



## 2. Validación de Consultas mediante Ordenamientos y Límites Visuales
Se comprobó el correcto comportamiento del motor NoSQL aplicando filtros, ordenamiento estricto y delimitadores de salida directo en los campos visuales de Compass:

* **Evidencia del TOP 3 Mundial (Sort + Limit + Project):** Captura de pantalla que demuestra el uso simultáneo de la barra de filtros, proyecciones e introduciendo en las opciones avanzadas de Compass un Sort de `{ "estadisticas_temporada.puntos_totales": -1 }` y un Limit de `3`.


* **Evidencia de Escaneo en Historial (Arrays):** Resultado visual tras filtrar los pilotos que registran victorias recientes en el array de posiciones utilizando el query `{ "ultimos_resultados_posicion": 1 }`.


## 3. Actualización de Puntos y Podios (Update)
Evidencia en la interfaz gráfica del incremento del puntaje del piloto y la inyección en tiempo real de su nueva posición dentro de la estructura embebida tras aplicar el operador correspondiente.
