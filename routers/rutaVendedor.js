const express = require('express');
const router = express.Router();
const bcd = require('../config/connection');

const Vendedor = require('../models/vendedores');

router.get('/vendedor', async(req,res)=>{
    try{
        const arrayVendedorDB = await Vendedor.find()
        console.log(arrayVendedorDB)

        res.render("vendedor", {
            arrayVendedor : arrayVendedorDB
        })
    } catch(error){
        console.log(error)
    }
})

module.exports  = router