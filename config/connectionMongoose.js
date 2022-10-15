//gestionar la conexion a base de datos en mongo

const mongoose = require ('mongoose');

const url ='mongodb+srv://yessi:1020439983@cluster0ficha2364482.6co19r0.mongodb.net/TiendaVirtual?retryWrites=true&w=majority';





const connectionParams={
    useNewUrlParser:true,  // trae la conexion como json
    useUnifiedTopology:true
}

mongoose.connect(url,connectionParams)
.then(()=> {
    console.log ('connected to the database')
})
.catch((err)=>{
    console.error('eror connecting to the database')
})

module.exports={
    mongoose
}
