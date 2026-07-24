# Solución Ejercicio 23: Renders de arquitectura 3D

## Descripción
Solución desarrollada para el almacenamiento y gestión de proyectos y renders de arquitectura 3D utilizando MongoDB, aplicando un modelo orientado a documentos con subdocumentos para las especificaciones técnicas del diseño y arrays para etiquetas descriptivas.

## Decisiones de Diseño NoSQL
- **Colección Principal**: Se utiliza `renders` en plural y minúsculas para almacenar la información de los trabajos de arquitectura.
- **Embebidión (Subdocumentos)**: Se agrupan los detalles técnicos del render (`detalles_tecnicos` como resolución, tiempo de render y software utilizado) dentro del mismo documento principal, ya que se consultan y visualizan de manera conjunta.
- **Arrays**: Se usa el campo `etiquetas` para clasificar los estilos arquitectónicos o características de la escena (ej. "minimalista", "exterior", "nocturno").