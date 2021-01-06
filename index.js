//Importar modulos
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./src/utils/mongoClient.js');

//Inicializaciones
const app = express();

//Configuraciones 
const port = process.env.PORT || 4001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Middleware

//Variables

//Routes
app.use(require('./src/routers/AuthRouter'));

//Iniciar Server
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${ port}`);
});