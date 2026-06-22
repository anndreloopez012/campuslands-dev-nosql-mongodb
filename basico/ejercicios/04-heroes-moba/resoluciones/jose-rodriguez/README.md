# Ejercicio 04: Catalogo de Heroes (MOBA)

## Objetivo 
Modelar datos NoSQ, insertar documentos estructurados, consultar informacion mediante filtros y documentar evidencias claras con criterio para decidir entre embedidos y referencias en un ecosistema MOBA.

## Desiciones tecnicas de Modelado
En los videojuegos tipo MOBA, la fase de seleccion de campeones requiere busquedas ultrarrapidas basadas en roles, tipos de dano yy estadisticas base para garantizar una sincronizacion perfecta antes de la partida.

* **Coleccion principal (Heroes):** Almacena el nucleo de cada campeon (nombre, costo_escencia y estado activo).

* **Documentos Anidados / Subdocumentos ('estadisticas_base'):** Atributos clave de rendimiento en partida como 'vida_inical', 'ataque_base' y 'velocidad_movimiento' se modelaron anidados dentro del heroe. Dado que son valores nativos de su dise;o que se leen en conjunto al inspeccionar el catalogo, el subdocumento evita hhacer JOINs innecesarios

## Estructura de la Carpeta de Entrega
basico/ejercicios/04-heroes-moba/resoluciones/jose-rodriguez/
├── README.md
├── seed.mongodb.js
├── queries.mongodb.js
└── evidencias.md