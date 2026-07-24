# Solución Ejercicio 27: Usuarios de Streaming

## Descripción del Caso
Construcción de una solución en MongoDB para la gestión de **usuarios de una plataforma de streaming** (películas y música). El modelo permite administrar perfiles de usuario, planes de suscripción mediante subdocumentos, listas de intereses musicales y cinematográficos mediante arrays, y estados de actividad de forma eficiente y limpia.

## Decisiones de Modelado NoSQL
- **Colección Principal**: Se utiliza una única colección en plural y minúsculas llamada `usuarios` para almacenar la información central de cada suscriptor.
- **Subdocumentos**: Se embebe un objeto `suscripcion` dentro de cada usuario para agrupar de forma lógica los datos del plan (tipo de plan, costo mensual, fecha de renovación), evitando uniones (joins) innecesarias ya que estos datos se leen y consultan siempre junto con el perfil del usuario.
- **Arrays**: Se emplean arrays para almacenar `generos_favoritos` (tanto de cine como de música), facilitando la consulta de coincidencias nativas mediante operadores de arreglos de MongoDB.