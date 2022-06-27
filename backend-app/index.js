
require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');


//Crear servidor express

const app = express();
//Enable cors
app.use(cors());

dbConnection();

console.log(process.env)

//juan-adv-avanzado
//HermanosLL

//Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola'
    });
});






app.listen(process.env.PORT, () =>  {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});


