# Ejercicio 04: Catalogo de Heroes (MOBA)

## Objetivo 
Modelar datos NoSQL, insertar documentos estructurados, consultar informacion mediante filtros y documentar evidencias claras con criterio para decidir entre embedidos y referencias en un ecosistema MOBA.

## Desiciones Tecnicas de Modelado 
En los videojuegos tipo MOBA, la fase de seleccion de campeones requiere busquedas ultrarapidas basadas en roles, tipod de dano y estadisticas base para garantizar una sincronizacion perfecta antes de la partida.

* **Coleccion Principal (Heroes):** Almacena el nucleo de cada campeon (nombre, costo_esencia y estado activo).
* **Documentos Anidados / Subdocumentos('estadisticas_base'):** Atributos clave de rendimiento en partida como 'vida_inicial', 'ataque_base' y 'velocidad_movimiento' se modelaron anidados dentro del heroe. Dado que son valores nativos de su diseno que se leen en conjunto al inspeccionar el catalogo, el subdocumento evita hacer JOINs innecesarios 

# Estructuras de la carpeta de Entrega 
basico/ejercicios/04-heroes-moba/resoluciones/jose-rodriguez/
├── README.md
├── seed.mongodb.js
├── queries.mongodb.js
└── evidencias.md