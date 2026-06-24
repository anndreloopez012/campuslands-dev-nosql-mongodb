# Ejercicio 01: Inventario de Perfiles Gamer (Shooters)
**Estudiante:** José Rodríguez  
**Especialidad:** Full-Stack Development & AI  

## Decisión de Modelado (NoSQL vs SQL)
Para este caso de uso de videojuegos *shooters*, decidí utilizar una colección principal llamada `jugadores`. 

* **Datos Embebedos (Subdocumentos y Arrays):** Las `estadisticas` (KDA, precisión) y el `inventario_armas` se modelaron de forma embebida dentro de cada jugador. Esto se debe a que son datos que se leen constantemente al consultar el perfil de un usuario y no van a crecer de forma descontrolada.
* **Colección Principal:** `jugadores` almacena el núcleo de la información del perfil del usuario en el juego.

## Estructura de la Carpeta de Entrega

resoluciones/jose-rodriguez/
├── README.md
├── seed.mongodb.js
├── queries.mongodb.js
└── evidencias.md