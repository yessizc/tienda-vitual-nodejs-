const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    idusuario: Number,
    correo: String,
    contraseña: String,
    rol: String,
    habilitado: Boolean
});

const usuarios = mongoose.model('usuarios', usuariosSchema);

module.exports = usuarios;