const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema ({
    nombre : String,
    tel : String,
    totalComprado : Number ,
    historicoCompras : Number,
    ubicacion : {longitud : Number,    
        latitud : Number,
        zoom :  Number}
});

const Cliente = mongoose.model('Cliente', clienteSchema); 

module.exports = Cliente;  