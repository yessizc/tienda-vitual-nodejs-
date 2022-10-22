const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    idusuario: {
        type:Number
    },
    nombre: { 
        type:String
    },
    correo:{
        type:String
    },
    clave: {
        type:String
    },
    rol: {
        type:String
    },
    habilitado: {
    type: Boolean
    }

});

const usuarios = mongoose.model('usuarios', usuariosSchema);

module.exports = usuarios;