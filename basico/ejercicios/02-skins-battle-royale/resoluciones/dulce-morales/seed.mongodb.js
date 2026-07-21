// Selección de la base de datos
use('campus_skins_battle_royale');

// Inserción de datos iniciales
db.skins.insertMany([
  {
    nombre: "Raven",
    precio_vbucks: 2000,
    rarity: { nombre: "Legendario", color: "Morado" }, 
    disponible_tienda: true,
    temporada_lanzamiento: 3,
    tags: ["oscuro", "popular", "pase-de-batalla"],
    styles: [
      { nombre: "Predeterminado", desbloqueado: true },
      { nombre: "Pluma Furia", desbloqueado: false }
    ],
    ventas_totales: 15400
  },
  {
    nombre: "Cuddle Team Leader",
    precio_vbucks: 2000,
    rarity: { nombre: "Legendario", color: "Rosa" }, 
    disponible_tienda: true,
    temporada_lanzamiento: 2,
    tags: ["rosado", "mascota", "clasico"],
    styles: [
      { nombre: "Rosa Original", desbloqueado: true }
    ],
    ventas_totales: 22100
  },
  {
    nombre: "Jonesy Fisgón",
    precio_vbucks: 800,
    rarity: { nombre: "Poco Común", color: "Verde" }, 
    disponible_tienda: false,
    temporada_lanzamiento: 1,
    tags: ["militar", "default", "clasico"],
    styles: [
      { nombre: "Camuflaje", desbloqueado: true }
    ],
    ventas_totales: 8900
  },
  {
    nombre: "Goku",
    precio_vbucks: 2000,
    rarity: { nombre: "Épico", color: "Morado" }, 
    disponible_tienda: true,
    temporada_lanzamiento: 21,
    tags: ["anime", "colaboracion", "dragon-ball"],
    styles: [
      { nombre: "Base", desbloqueado: true },
      { nombre: "Super Saiyan", desbloqueado: true },
      { nombre: "Super Saiyan Blue", desbloqueado: false }
    ],
    ventas_totales: 45000
  },
  {
    nombre: "Deriva (Drift)",
    precio_vbucks: 1500,
    rarity: { nombre: "Épico", color: "Morado" }, 
    disponible_tienda: false,
    temporada_lanzamiento: 5,
    tags: ["progreso", "pase-de-batalla", "neón"],
    styles: [
      { nombre: "Nivel 1", desbloqueado: true },
      { nombre: "Máscara Kitsune", desbloqueado: true },
      { nombre: "Poder Máximo", desbloqueado: false }
    ],
    ventas_totales: 31000
  }
]);