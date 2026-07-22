use('campus_ropa_drop');

/* Busqueda de prendas disponibles en talla M */
db.prendas.find(
{ disponible: true, tallas: "M" },
{ nombre: 1, categoria: 1, precio: 1, tallas: 1, _id: 0 }
);

/* Filtrado de productos con precio superior a 150000 */
db.prendas.find(
{ precio: { $gt: 150000 } },
{ nombre: 1, precio: 1, "especificaciones.material": 1, _id: 0 }
);

/* Agregar una nueva talla disponible y descontar stock por venta */
db.prendas.updateOne(
{ nombre: "Camiseta Graphic Acid Wash" },
{
$push: { tallas: "XL" },
$inc: { stock_total: -1 }
}
);

/* Reporte de cantidad total de productos activos en stock */
db.prendas.countDocuments({ disponible: true });