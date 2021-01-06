const { compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
//
module.exports = {
    //Metodo que nos permitira comparar las contraseñas
    comparePasswords: (password, hash) => compareSync(password, hash),
    //Metodo que nos permitira crear el token JWT
    createToken: ({

        id, username
    }) => {
        try {
            const payload = {
                id,
                username
            };
            const options = {
                expiresIn: '1hr',
            };
            //Creamos el JWToken en base a los datos del payload indicados anteriormente
            const token = jwt.sign(payload, process.env.JWT_SECRET, options);
            return token;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};