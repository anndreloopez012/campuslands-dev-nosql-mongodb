# Modelo documental

Describe colecciones, documentos, subdocumentos, arrays, referencias e indices sugeridos.

# Modelo documental

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para crear la colección `personajes`, poblar los documentos e crear índices.

- `queries.mongodb.js`: Script con consultas de lectura, filtros y actualización.

## 1. Identificación de Entidades y Atributos
Para el videojuego RPG se identifican las siguientes entidades y atributos:
- **Personaje:** `nombre`, `clase`, `nivel`, `activo`, `equipamiento_actual`.
- **Atributos de Combate:** `fuerza`, `destreza`, `inteligencia`, `vitalidad`.
- **Habilidades:** Set de poderes o ataques desbloqueados.

## 2. Decisiones de Diseño 
- **Atributos embebidos:** Los atributos numéricos (fuerza, destreza, etc.) pertenecen intrínsecamente a un personaje y siempre se leen cuando el jugador carga la partida. Por tanto, se modelan como un subdocumento.

- **Habilidades embebidas:** Como el árbol de habilidades activas es un listado moderado de textos que el motor del juego necesita rápido durante el combate, se modelan como un array dentro del mismo documento.

- **Sin referencias:** Al ser un inventario base de personajes, no hay crecimiento descontrolado de datos que justifique dividir la información en múltiples colecciones, lo que maximiza la velocidad de lectura.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `personajes`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "nombre": "Lyra",
  "clase": "Pícaro",
  "nivel": 38,
  "activo": true,
  "atributos": {
    "fuerza": 30,
    "destreza": 95,
    "inteligencia": 40,
    "vitalidad": 50
  },
  "habilidades": ["Sigilo", "Apuñalar", "Evasión"],
  "equipamiento_actual": "Dagas Gemelas Venenosas"
}
```

## Índices implementados
{ nombre: 1 }: Optimiza la búsqueda directa al iniciar sesión con un personaje específico.

{ clase: 1, nivel: -1 }: Acelera la búsqueda de personajes para clasificaciones (leaderboards) o para buscar jugadores según su rol y rango de nivel.

### Checklist
[x] Nombre de la colección en plural y minúsculas.

[x] Inserción de al menos 5 documentos coherentes.

[x] Uso de subdocumento embebido.

[x] Uso de array embebido.

[x] Consultas con filtros sobre subdocumentos y arrays.

[x] Operación de actualización (updateOne).

[x] Creación de índices para optimización de búsquedas.

[x] Archivos ubicados únicamente dentro de la carpeta personal de resolución.