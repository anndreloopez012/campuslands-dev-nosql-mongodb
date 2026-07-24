# Solución: Agenda de Tatuajes (Nivel Básico)

##  Descripción del Caso
Este caso implementa una solución en MongoDB para gestionar la agenda de un estudio de tatuajes (`campus_tattoo_agenda`). Se modelan las citas y los registros de los clientes utilizando documentos embebidos para mantener la información del diseño y la sesión organizada sin necesidad de consultas cruzadas complejas.

## Decisiones de Modelado NoSQL
- **Colección Principal**: `citas` haciendo referencia a lo que alamacena.
- **Subdocumentos**: Se embeben los detalles del cliente, del diseño del tatuaje y la sesión en un único documento por cita, ya que estos datos se consultan y modifican de forma conjunta.
- **Tipos de Datos**: Uso de fechas (`ISODate`), valores numéricos para el precio/depósito y arrays de etiquetas para clasificar estilos de tatuaje (ej. *realismo*, *tradicional*, *neotradicional*).