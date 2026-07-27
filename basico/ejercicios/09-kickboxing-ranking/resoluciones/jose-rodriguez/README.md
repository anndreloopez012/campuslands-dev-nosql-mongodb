# Kickboxing match & fighter management system (MongoDB)

Bienvenido a la solucion de basede datos NoSQL diseñada para la gestion, analisis y consulta de datos en el entorno profesional del kickboxing. Este proyecto implementa un modelo de datos optimizado para responder a consultas criticas de rendimiento deportivo, categorias y emparejamientos utilizando **MongoDB**

---

## Contexto del problema 

El ecosistema del kickboxing profesional maneja un flujo constante de informacion reactiva: records de peleadores, cateforias de peso dinamicas, estilos de pelea y estadisticas de rendimiento.

El desafio principal consiste en contruir una solucion que no solo almacene estos datos, sino que permita a promotores, entrenadores y analistas realizar **consultas complejas mediante operadores logicos** (`$and`, `$or`, `$not`, `$nor`) sobre datos realistas para tomar decisiones estrategicas (ej. armar la cartelera ideal o analizar las debilidades de un oponente).

---

## Objetivos

* **Modelado NoSQL Eficiente:** Diseñar un esquema flexible y escalable aplicando criterios logicos de normalizacion frente a desnormalizacion.
* **Manipulaccion de Datos:** Insertar documentos estructurados con datos realistas del mundo del kickboxing.
* **Consltas avanzadas:** Explotar el potencial de los operadores logicos de MongoDB para responder preguntas de negocio utiles.
* **Evidencia de Criterio:** Justificar las decisiones de diseño (documentos embebidos vs. referencias).

---

## Modelo de Datos y Criterios de Diseño

Para este caso de uso, se opto por una colecccion principal llamada `luchadores`. A continuacion se detallan los criterios de estructuracion: 

* **Documernto Principal (`luchadores`):** Almacena los datos de identidad base del peleador (nombre, apodo, pais).
* **Subdocumentos Embebidos (`record`, `biometricos`):** Se utilizo esta estrategia para el record de peleas (ganadas, perdidas, KOs) y datos biometricos. **Criterio:** La informacion del record y la estructura pertenencen intrinsecamente al peleador y se consultan juntas el 99% de las veces. Embeber elimina la necesidad de hacer *joins* ($lookup) costosos.
* **Arrays (`styles`, `titles`):** Las disciplinas dominantes y cinturones ganados se manejan como arreglos de stings. **Criterio:** Permite un indexacion mutikey eficiente y flexibilidad para almacenar multiples elementos sin una estructura rigida.
* **Referencias (`gym_id`):** El gimnasio o equipo de entrenamiento se maneja mediante una referencia ID a otra posible coleccion. **Criterio:** Multiples peleadores pertenencen al mismo gimnasio: duplicar la informacion del gimnasio causaria problemas de consistencia si este cambia el nombre o ubicacion.



