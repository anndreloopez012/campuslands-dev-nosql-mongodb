# Solución: Fórmulas de Laboratorio Químico (MongoDB - Nivel Básico)

## Objetivo
Construir una solución NoSQL aplicando criterios de diseño básicos (colecciones en plural, uso de arrays para componentes y subdocumentos para detalles técnicos de laboratorio) orientada a la gestión de fórmulas químicas.

## Decisiones de Diseño (Modelado de Datos)
- **Colección Principal**: Se usa `formulas` en plural y minúsculas debido a el estandar.
- **Datos Embebebidos**: Los detalles de laboratorio (como el pH, estado de agregación y el creador o responsable) se agrupan en un subdocumento llamado `detalles_laboratorio` ya que se consultan siempre junto con la fórmula.
- **Arrays**: Se utiliza el array `componentes` para almacenar de forma natural los elementos o reactivos que integran la fórmula química, permitiendo búsquedas directas sobre sus elementos.