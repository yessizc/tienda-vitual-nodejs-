// aca se van a poner todas las rutas del proyecto


const express = require('express');
const modeloproducto = require('../modelos/productos');
const modelosusuarios= require('../modelos/usuarios');
const modelocliente= require('../modelos/cliente');
const modelovendedores= require('../modelos/vendedores');
const modelosventas= require('../modelos/ventas');
const  conexion= require('../config/connectionMongoose')
const router = express.Router();



router.get('/', (req,res)=>{
    res.send ("Inicio desde el index")
});




router.get('/about', (req,res)=>{
    res.send ("Inicio desde el about")
});

router.get('/conectar', (req,res)=>{
    dbc.mongoose;
});


/*router.get('/inicio', async (req, res) => {
   console.log(await dbc.findOne( ))
   res.render('pages/index');
  });*/


router.get('/formulario',  (req, res) => {
   
    res.render('pages/productos/insertarProductos');
   })


router.post('/registrar',(req,res)=>{
    
  
    const productodb= new modeloproducto({
       referencia : req.body.Referencia,
       nombre: req.body.Nombre,
       descripcion: req.body.Descripcion,
       precio: req.body.Precio,
       stock: req.body.Stock,
       habilitado: true

    })
     productodb.save()
    console.log(req.body.Referencia)
    res.render('pages/index')
});

router.get('/registarUser',(req, res) => {
   
    res.render('pages/usuarios/insertarUsuario');
   })

router.post('/registrarUsuario',(req,res)=>{
    
    console.log(req.body.rol);
    const usuariosdb= new modelosusuarios({
        idusuario : req.body.idusuario,
        nombre:req.body.Nombre,
        correo: req.body.Correo,
        clave: req.body.Clave,
        rol: req.body.rol,
        habilitado: true

    })
    usuariosdb.save()
   
  res.render('../views/pages/usuarios/loginprueba.ejs')
});


/*router.get('/loginprueba',  (req, res) => {
   
    res.render('pages/index');
   })*/



//router.get('/listarprodductos', rutaProducto)

module.exports=router;