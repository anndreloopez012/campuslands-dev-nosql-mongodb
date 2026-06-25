# Ejercicio 07: Catalogo de Autos Exoticos (Garaje de lujo)

## Objetivo
Modelar datos NoSQL, insertar documentos estructurados, realizar consultas enfocadas en filtros numericos de alto rendimiento y documentar claras con criterio para decidir entre datos embebidos y referencias en un ecosistema de vehiculos de alta gama.

## Desiciones Tecnicas de Modelado 
Para un sistema de gestio de un garaja o consesionario de hiperdeportivos, las busquedas mas frecuentes se basan en rangos de precios, potencia, especificaciones tecnicas de velocidad y disponibilidad.

* **Coleccion Principal (autos):** Almacena la entidad principal de cada vehiculo (marca, modelo, aniop, precio_usd, disponible_venta)
* **Documentos Anidados / Subdocumentos (rendimiento):** Metricas tecnicas esenciales basadas en numeros como caballos_fuerza, velocidad_maxima_kmh y aceleracion_0_100 se modelaron dentro de un subdocumento. Al ser datos de ingenieria que siempre se consultan al ver la ficha tecnica del auto, embeberlos reduce drasticamente los tiempos de lectura.
* **Arrays Embebedos (caracteristicas_premium): Componentes y extras exclusivos (por ejemplo: frenos ceramicos, interior de fibra de carbono, aleron activo) se manejan en un array de string directo en el documento. Al estar limitados a las opciones de fabrica y no crecer indefinidamente, se evita el uso de JOINs relacionales costosos.

## Estructura de la Carpeta de Entrega
basico/ejercicios/07-autos-lujo/resoluciones/jose-rodriguez/
├── README.md
├── seed.mongodb.js
├── queries.mongodb.js
└── evidencias.md