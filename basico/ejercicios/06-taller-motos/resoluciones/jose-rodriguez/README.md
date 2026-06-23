# Ejercicio 06: Gestion de Ordener de Servicio (Mecanica de Motos)

## Objetivo
Modelar datos NoSQL, insertar documentos estructurados, realizar consultas enfocadas en actualizaciones basicas y documentar evidencias claras con criterio para decidir entre datos embebidos y referencias en un ecosistema de taller mecanico.

## Decisiones tecnicas de modelado
Para la gestion de un taller de motocicletas, la velocidad para consultar el estado actual de una reparacion y el historial de lo que se le ha hecho a un vehiculo especifico es crucial para la eficiencia del negocio.

* **Coleccion Principal ('motos'):** Almacena el nucleo de cada motocicleta registrada en el taller (placa, marca, modelo, ano, propietario y estado actual en el taller).

* **Documentos Anidados / Subdocumentos ('historial_mantenimiento):** Datos resumidos del ultimo servicio como 'fecha-ingreso', 'mecanico_asignado' y 'diagnostico_inicial' se modelaron de forma anidada. Al ser atributos que se leen siempre que se busca la ficha de la moto ingresada, guardarlos aqui optimiza las lecturas.

* **Arrays Embedidos ('repuestos_cambiados'):** El listado de las piezas especificas que se sustituyeron durante la reparacion (por ejemplo, pastillas de freno, aciete, bujia) se manejan en un arrayy de stings directo en el documento. Al ser un registro acotado por cada orden de trabajo que no crecera infinitamente, embeberlo evita realizar JOINs costosos en la base de datos.

## Estructura de la Carpeta de Entrega
basico/ejercicios/06-motos/resoluciones/jose-rodriguez/
├── README.md
├── seed.mongodb.js
├── queries.mongodb.js
└── evidencias.md