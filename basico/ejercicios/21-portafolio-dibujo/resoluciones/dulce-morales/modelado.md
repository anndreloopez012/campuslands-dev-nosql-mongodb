# Solución: Portafolio de Dibujo (MongoDB - Nivel Básico)

## Contexto del Problema
Este proyecto implementa una solución en MongoDB para gestionar un portafolio de dibujo digital o tradicional. Se enfoca en el manejo de colecciones flexibles, almacenamiento de metadatos de las obras, filtrado por categorías y uso de arrays para etiquetas (*tags*), facilitando consultas rápidas y eficientes.

##  Decisiones de Diseño 
- **Base de Datos**: `campus_portafolio_dibujo` se utiliza así ya va acorde a el ejercicio
- **Colección Principal**: `dibujos` se utiliza así debido a lo que contiene
- **Estrategia de Embebido**: Se decide embeber la información técnica de cada dibujo (como dimensiones, técnica y resolución) en un subdocumento llamado `detalles`, ya que estos atributos se consultan y muestran siempre junto con la obra principal.
- **Uso de Arrays**: El campo `etiquetas` se modela como un array de strings para permitir búsquedas dinámicas por múltiples tópicos (ej. "retrato", "digital", "tinta").