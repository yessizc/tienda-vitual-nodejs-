const express = require('express');
const router = express.Router();
const bcd = require('../config/connection');

const Producto = require('../models/producto');

router.get('/producto', async(req,res)=>{
    try{
        const arrayProductoDB = await Producto.find()
        console.log(arrayProductoDB)

        res.render("productos", {
            arrayProducto : arrayProductoDB
        })
    
    }catch (error){
        console.log(error)
    }
})

module.exports = router;