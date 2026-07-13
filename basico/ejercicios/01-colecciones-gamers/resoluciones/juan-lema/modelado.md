# Modelo documental

### Colecciones
- **`registros`**: colección única de tipo plano para las partidas del shooter. Se optó por un modelo embebido (sin referencias) porque cada partida es una entidad autocontenida que no necesita relacionarse con otras colecciones, lo que favorece lecturas rápidas.

### Documentos
Cada documento representa una partida jugada, con su modo, estado y desempeño. Al no forzar un esquema rígido, se pueden agregar campos nuevos a futuro sin migraciones.

### Subdocumentos y Arrays
- **`armas` (Array de Strings)**: lista de armas usadas en la partida (ej. `["rifle", "pistola"]`). Se usa un array simple en vez de una colección aparte porque el dato siempre se consulta junto al documento padre y no se comparte entre partidas.