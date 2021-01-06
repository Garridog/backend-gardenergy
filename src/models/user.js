const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//Veces que se aplicara el encubrimiento de la contraseña
const SALT_WORK_FACTOR = 10;

//Modelo del documento de Usuarios
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true,
    versionKey: false,
  });

//Antes del guardado ciframos la contraseña
userSchema.pre('save', async function (next) {
    try {
        const user = this;
        if (!user.isModified('password')) return next();
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        return next();
    } catch (error) {
        next(error);
    }
});

const user = mongoose.model('users', userSchema);

module.exports = user;

