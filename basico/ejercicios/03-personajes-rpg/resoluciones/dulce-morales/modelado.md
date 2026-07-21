# Resolución: 03. Personajes RPG (Nivel Básico)

## Decisiones de Diseño de Datos

En este modelo orientado a un videojuego RPG, decidi utilizar lo siguiente:

* **Subdocumentos Embebidos (`atributos`, `clase`):** Atributos como `fuerza`, `agilidad`, `inteligencia` y `salud` pertenecen de manera predeterminada a cada personaje y siempre se leen junto con él.
* **Arrays Embebidos (`habilidades`, `equipamiento`):** Es decir que los personajes cuentan con una lista corta de habilidades especiales y objetos equipados. 
* **Valores Legibles:** Para mantener la semántica y legibilidad, los nombres de clases, elementos y nombres de colores/iconos de rareza son representados mediante cadenas descriptivas como: `"Guerrero"`, `"Legendario"`.
