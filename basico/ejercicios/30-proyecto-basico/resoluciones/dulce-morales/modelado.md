# Proyecto Básico: Gestión de Proyectos de Videojuegos en Campus

## Objetivo
Diseñar e implementar una solución en MongoDB para un sistema de gestión de proyectos de videojuegos desarrollados en entornos de campus, aplicando modelado NoSQL básico (documentos principales con subdocumentos y arrays).

## Decisiones de Diseño (NoSQL)
- **Colección Principal**: Se utiliza `proyectos` en plural y minúsculas referenciando a lo que contendra.
- **Subdocumentos**: Se emplea un objeto embebido `detalles_campus` para agrupar la información relativa al campus y la cohorte, manteniendo la atomicidad y evitando referencias innecesarias.
- **Arrays**: Se utiliza el array `etiquetas` para clasificar los proyectos por tecnologías y géneros de forma eficiente mediante consultas nativas.
- **Operaciones Atómicas**: Se implementan operadores de actualización como `$set` y `$push` para modificar estados y añadir nuevas etiquetas sin reescribir todo el documento.