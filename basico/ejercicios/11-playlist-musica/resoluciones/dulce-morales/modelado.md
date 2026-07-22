# Solución: 11. Playlist por Energía

## Contexto y Análisis del Problema
El objetivo principal es gestionar canciones clasificadas por sus características de audio (energía, tempo, duración) y etiquetas de géneros musicales, permitiendo realizar consultas dinámicas para generar playlists personalizadas según el estado de ánimo o nivel de actividad del usuario.

## Decisiones de Diseño 

### 1. Base de Datos y Colección
- **Base de Datos:** `campus_playlist_musica` 
- **Colección Principal:** `canciones` siguiendo los estandares principales

### 2. Criterio de Embebido y Referencia
- **Arrays Simples (`generos`):** Se decidió embeber los géneros musicales directamente dentro de cada documento de canción mediante un array de cadenas de texto (`["synthwave", "pop"]`). Dado que los géneros son etiquetas descriptivas propias de la pista y no superarán unas pocas decenas por canción, el patrón de embebido evita realizar uniones innecesarias y optimiza las lecturas masivas.
- **Subdocumentos (`parametros`):** Los parámetros métricos de audio (`energia`, `tempo`, `duracion_seg`) se agrupan en un subdocumento para mantener el documento ordenado y estructurado semánticamente.
