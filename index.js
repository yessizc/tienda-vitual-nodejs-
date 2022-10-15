const express = require('express');
const app = express();
const PORT = process.env.PORT || 9030;
const rta = require('./routers/indexrutas');
const bodyparser= require('body-parser')
const path = require('path');

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use('/',rta);
app.use(express.static(__dirname +'/estilos'))
app.set('view engine','ejs');   
app.set('views',path.join(__dirname,'./views'));

app.listen(PORT,()=>{
    console.log("Servidor Iniciado:"+`${PORT}`)



});
    

