const { response } = require("express");
const User = require('../models/users');
const bcrypt = require("bcryptjs");
const { generateJwt } = require("../helpers/jwt");


const login = async (req, res = response) => { 
    const { email, password } = req.body;

    try {

        const userDb = await User.findOne({ email });

        // verificar mail
        if (!userDb) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        //Verificar contraseña

        const validPassword = bcrypt.compareSync(password, userDb.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }


        // Generar un JWT
        const token = await generateJwt(userDb.id);

        res.json({
            ok: true,
            token
        })
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
          ok: false,
          msg: "Hable con el administrador",
        });
        
    }

}

module.exports = {
    login
}