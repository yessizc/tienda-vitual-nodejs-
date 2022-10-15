const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ventaSchema = new Schema({
    productoVendido : String,
    subtotalVenta : Number,
    fechaVenta : Date,
    impuestoVenta : Number,
    totalVenta : Number,
    clienteCompra : String,
    vendedorVende : String

});

const Venta = mongoose.model('Venta', ventaSchema);

module.exports = Venta;