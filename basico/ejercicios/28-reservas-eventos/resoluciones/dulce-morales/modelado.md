# Solución: Reservas de Eventos Deportivos

##  Descripción del Caso
Este módulo implementa una solución en MongoDB para gestionar las reservas de eventos y canchas deportivas dentro de un campus. El diseño prioriza la simplicidad y el rendimiento, utilizando documentos embebidos para agrupar la información de los usuarios, las instalaciones y las tarifas del evento.

## Modelo de Datos
Se utiliza una colección principal en plural y minúsculas:
- **`reservas`**: Almacena cada reserva realizada por los participantes. Cada documento incluye datos del cliente, detalles de la disciplina deportiva, horarios, costo y estado de la reserva.

##  Decisiones Técnicas
- **Subdocumentos**: Se emplean para agrupar atributos relacionales como `deporte` y `usuario`, evitando uniones complejas y optimizando las consultas de lectura.
- **Operaciones Atómicas**: Se utiliza `updateOne` con operadores como `$set` para modificar estados (por ejemplo, confirmar o cancelar reservas) de manera eficiente.
- **Eliminación Controlada**: Se implementa `deleteOne` o borrado lógico según el requerimiento de gestión del ciclo de vida de los registros.