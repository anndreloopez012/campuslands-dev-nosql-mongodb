# 02. Catálogo de Skins Battle Royale - Resolución

## Décisiones de Diseño y Modelado 

1. **Entidad Principal (`skins`)**: Se eligió una única colección principal para almacenar los datos de prueba.
2. **Uso de Documentos Embebidos**:
   - `rarity`: Contiene el nombre y el color hexadecimal representativo de la rareza para evitar *joins* en la interfaz.
   - `styles`: Un array de subdocumentos con los estilos desbloqueables para la skin.
3. **Uso de Arrays**:
   - `tags`: se utiliza para realizar búsquedas/filtros rápidos como: `"anime"`, `"pase-de-batalla"`, `"marvel"`.

Este enfoque busca maximizar el rendimiento de lectura, para el catálogo de tienda en un juego Battle Royale.