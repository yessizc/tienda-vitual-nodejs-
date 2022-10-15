const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema ({
    referencia : {
        type: String
    },
    nombre : {
        type:String
    },
    descripcion : {
        type:String
    },
    precio : {
        type:Number},

    stock : {
        type:Number},
    //imagen : , //link
    habilitado : Boolean
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;