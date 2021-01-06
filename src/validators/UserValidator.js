//Celebrate es la libreria que ayudara para validar
const { celebrate, Joi, Segments } = require('celebrate');
//Exportamos las validaciones que vamos a ocupar para el usuario
/* 
Tipos de Segments:
BODY: 'body',
COOKIES: 'cookies',
HEADERS: 'headers',
PARAMS: 'params',
QUERY: 'query',
SIGNEDCOOKIES: 'signedCookies' */

module.exports = {
  signup: celebrate({
    [Segments.BODY]: Joi
      .object()
      .keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
      }),
  }),
  login: celebrate({
    [Segments.BODY]: Joi
      .object()
      .keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
      }),
  }),
  findOne: celebrate({
    [Segments.PARAMS]: Joi
      .object()
      .keys({
        id: Joi.string().required(),
      }),
  }),
};