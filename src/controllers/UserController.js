const { UserService } = require('../services/index.js');
const APIError = require('../utils/error.js');
const auth = require('../utils/auth.js');

module.exports = {
  signup: async (req, res, next) => {
    try {
        //Desestructuracion del request para solo obtener el body
      const { body } = req;
      console.log(req.body);
      const userData = await UserService.create(body);
      userData.password = undefined;
      res.status(201).json({ message: 'User created', payload: userData });
    } catch (error) {
        console.trace(error);
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
        //Desestructuracion del body para solo obtener el usuario y contraseña de la peticion
      const { username, password } = req.body;
     
      let userData = await UserService.findOneByUserName(username);
      if (!userData) throw new APIError('Error on credentials.', 400);
      const isValid = auth.comparePasswords(password, userData.password);
      if (!isValid) throw new APIError('Error on credentials', 400);
      //Creamos el JWToken de la sesion
      const token = auth.createToken(userData);
      res.status(200).json({ message: 'Log in', payload: token });
    } catch (error) {
        console.trace(error)
        //El next se requiere para continuar al siguiente middleware.
        //Si no se da next, se queda atorado
        next(error);
    }
  }
};