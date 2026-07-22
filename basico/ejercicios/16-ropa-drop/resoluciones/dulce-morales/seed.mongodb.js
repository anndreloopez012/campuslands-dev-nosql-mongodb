use('campus_ropa_drop');

/* Insercion de 5 prendas del drop de ropa urbana */
db.prendas.insertMany([
{
nombre: "Hoodie Oversize Cyberpunk",
categoria: "hoodies",
precio: 180000,
disponible: true,
tallas: ["S", "M", "L", "XL"],
especificaciones: {
material: "Algodon Perchado",
corte: "Oversize",
coleccion: "Drop 01 - Neo Tokyo"
},
stock_total: 45
},
{
nombre: "Camiseta Graphic Acid Wash",
categoria: "camisetas",
precio: 95000,
disponible: true,
tallas: ["M", "L"],
especificaciones: {
material: "Algodon 100%",
corte: "Boxy Fit",
coleccion: "Drop 01 - Neo Tokyo"
},
stock_total: 30
},
{
nombre: "Pantalones Cargo Tactical",
categoria: "pantalones",
precio: 210000,
disponible: true,
tallas: ["S", "M", "L"],
especificaciones: {
material: "Ripstop Anti-rasgado",
corte: "Cargo Regular",
coleccion: "Drop 01 - Neo Tokyo"
},
stock_total: 20
},
{
nombre: "Chaqueta Windbreaker Reflective",
categoria: "chaquetas",
precio: 250000,
disponible: false,
tallas: ["L", "XL"],
especificaciones: {
material: "Poliester Impermeable",
corte: "Standard Fit",
coleccion: "Drop 01 - Neo Tokyo"
},
stock_total: 0
},
{
nombre: "Gorra Beanie Minimalist",
categoria: "accesorios",
precio: 60000,
disponible: true,
tallas: ["UNICA"],
especificaciones: {
material: "Lana Acrilica",
corte: "Ajustado",
coleccion: "Drop 01 - Neo Tokyo"
},
stock_total: 50
}
]);