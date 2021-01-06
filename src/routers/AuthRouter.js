const express = require('express');
const router = express.Router();

const { UserValidator } = require('../validators/index.js');
const { UserController } = require('../controllers/index.js');

//Usamos middlewares que serviran para procesar los datos de la peticion hasta el final de la solicitud
//concluyendo con la respuesta
/* #1 Recibimos peticion de tipo post a la ruta signup
#2 Validamos los datos
#3 Registramos y devolvemos respuesta al cliente
 */
router.post('/signup', UserValidator.signup, UserController.signup);
/* #1 Recibimos peticion de tipo post a la ruta login
#2 Validamos los datos
#3 Comprobamos credenciales y devolvemos respuesta al cliente
 */
router.post('/login', UserValidator.login, UserController.login);

module.exports = router;
