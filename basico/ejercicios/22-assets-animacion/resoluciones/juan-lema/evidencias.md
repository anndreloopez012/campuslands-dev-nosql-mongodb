# Evidencias — Assets de animacion 3D

## 1. Find general
Retorna los 6 documentos insertados en `assets_animacion`.

## 2. Find filtrado (tipo "animacion" + activo)
Retorna 2 documentos:
- `Ciclo_Caminata_Robot` — duracionSegundos: 3
- `Explosion_Magica_VFX_Animacion` — duracionSegundos: 2

## 3. Find filtrado (metadata.pesoMB > 50)
Retorna 1 documento:
- `Bosque_Nocturno_Entorno` — pesoMB: 340

## 4. UpdateOne
`Textura_Piedra_Musgosa` pasa de `activo: false` a `activo: true` y suma una segunda entrada en `revisiones` (version 2). La verificacion muestra el documento con ambos campos actualizados.

## 5. DeleteOne
`Cofre_Magico_Prop` se elimina de la coleccion. La verificacion sobre `categoria: "utileria"` retorna solo 1 documento restante: `Textura_Piedra_Musgosa`.

## 6. Conteo final
`countDocuments({})` retorna **5** (6 insertados − 1 eliminado).
