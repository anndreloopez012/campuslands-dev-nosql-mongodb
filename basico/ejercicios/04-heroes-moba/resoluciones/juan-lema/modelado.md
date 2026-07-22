# Modelo documental — Heroes MOBA por rol

## Base de datos
`campus_heroes_moba`

## Coleccion principal
`registros`: un documento por heroe.

## Estructura del documento
```json
{
  "nombre": "string",
  "rol": "tank | mago | tirador | soporte | asesino",
  "region": "string",
  "dificultad": "facil | media | dificil",
  "activo": "boolean",
  "estadisticas": {
    "vida": "number",
    "dano": "number",
    "velocidad": "number"
  },
  "habilidades": ["string"],
  "sinergias": ["string"]
}
```

## Decisiones de modelado
- **Documentos, no coleccion aparte para heroes por rol:** un heroe pertenece a un solo rol, por lo que `rol` es un campo simple filtrable en vez de una coleccion separada por cada rol.
- **`estadisticas` como subdocumento embebido:** vida, dano y velocidad siempre se leen junto con el heroe, nunca de forma independiente, asi que se embeben en vez de referenciarse.
- **`habilidades` como array embebido:** cada heroe tiene pocas habilidades (3-5), son propias del heroe y se consultan siempre en conjunto con el; no justifican una coleccion aparte.
- **`sinergias` como array de nombres (referencia ligera por valor):** se referencian por nombre en vez de por `_id` porque el catalogo de heroes es pequeno y estable en este ejercicio; evita un `$lookup` innecesario para un caso tan simple.
- **No se usan referencias por `ObjectId`:** el volumen de datos y la relacion 1 heroe -> pocas sinergias no justifica normalizar; embeber reduce la cantidad de consultas necesarias para leer el perfil completo de un heroe.

## Indices sugeridos
- `{ rol: 1 }` — acelera filtros por rol, la consulta mas comun del caso de uso.
- `{ activo: 1, dificultad: 1 }` — indice compuesto para reportes de heroes activos por dificultad.
