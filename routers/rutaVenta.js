const express = require('express');
const router = express.Router();
const bcd = require('../config/connection');

const Venta = require('../models/venta');

router.get('/venta', async(req,res)=>{
    try{
        const arrayVentaDB = await Venta.find()
        console.log(arrayVentaDB)

        res.render("venta", {
            arrayVenta : arrayVentaDB
        })
    } catch(error){
        console.log(error)    
    }
})

module.exports = router;