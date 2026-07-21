# Ejercicio 06: Gestion de Ordenar de servicio (mecanica de motos)

## Objetivo 
Modelar datos NoSQL, insertar documentos estructurados, realizar consultas enfocadas en actualizaciones basicas y documentar evidencias claras con criterio para decidir entre datos embebidos y referencias en un ecosistema de taller mecanico.

## Desiciones tecnicas de Modelado
Para la gestion de un taller de motocicletas, la velocidad para consultar el estado actual de una reparacion y el historial de lo que se le a hecho a un vehiculo especifico es crucial para la eficiencioa del negocio.

* **Coleccion Principal (motos):** Almacena el nucleo de cada motocicleta registrada en el taller (placa, marca, modelo, ano, propietarrio y estado actual en el taller).

* **Array Embedidos (respuestas_cambiados):** El listado de las piezas especificas que se sustituyeron durante la reparacion (por ejemplo, pastillas de freno, aceite, bujia) se manejan en un array de strings directo en el documento. Al ser un registro acotado por cada orden de trabajo que no crecera infinitamente, embeberlo evitar realizar JOINs costosos en la base de datos.

## Estructura de la Carpeta de Entrega
basico/ejercicios/06-motos/resoluciones/jose-rodriguez/
├── README.md
├── seed.mongodb.js
├── queries.mongodb.js
└── evidencias.md