# Ejecicio 01: Inventario de Perfiles Gamer (Shooters)

## Desicion de Modelado 
Para este caso de uso de videojuegos *shooters* decidi utilizar una coleccion principal llamada 'jugadores'

* **Datos Embebedos (subdocumentos y arrays):** Las estadisticas (KDA, precision) y el 'inventario_armas' se modelaron de forma embebida entro de cada jugador. Esto se debe a que son datos que se leen constantemente al consultar el perfil de un usuario y no van a crecer de forma descontrolada.
* **Coleccion Principal:** 'jugadores almacena el nucleo de la informacion del perfil del usuario en el juego.

## Estructura de la Carpeta de Entrega

resoluciones/jose-rodriguez/
├── README.md
├── seed.mongodb.js
├── queries.mongodb.js
└── evidencias.md