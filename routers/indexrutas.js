// aca se van a poner todas las rutas del proyecto


const express = require('express');
const modeloproducto = require('../modelos/productos');
const modelosusuarios= require('../modelos/usuarios');
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


router.get('/inicio', async (req, res) => {
   console.log(await dbc.findOne( ))
   res.render('pages/index');
  });


router.get('/formulario',  (req, res) => {
   
    res.render('pages/productos/insertarProductos');
   })


router.post('/registrar',async(req,res,next)=>{
    
  
    const productodb= new modeloproducto({
       referencia : req.body.Referencia,
       nombre: req.body.Nombre,
       descripcion: req.body.Descripcion,
       precio: req.body.Precio,
       stock: req.body.Stock,
       habilitado: true

    })
    await productodb.save()
    console.log(req.body.Referencia)
  res.render('pages/index')
});

router.post('/registrarUsuario',async(req,res,next)=>{
    
  
    const usuariosdb= new modelosusuarios({
        idusuario : req.body. idusuario,
        correo: req.body.correo,
        contraseña: req.body.contraseña,
        rol: req.body.rol,
        habilitado: true

    })
    await usuariosdb.save()
    console.log(req.body.rol)
  res.render('pages/index')
});


router.get('/loginprueba',  (req, res) => {
   
    res.render('pages/index');
   })



//router.get('/listarprodductos', rutaProducto)

module.exports=router;