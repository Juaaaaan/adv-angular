const User = require("../models/users");
const { response } = require("express");
const bcryptjs = require("bcryptjs");
const { generateJwt } = require("../helpers/jwt");

const getUsers = async (req, res) => {
  const users = await User.find({}, "name email role google");
  res.json({
    ok: true,
    users,
    uid: req.uid
  });
};

const createUsers = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const existsEmail = await User.findOne({ email: email });
    if (existsEmail) {
      return res.status(400).json({
        ok: false,
        msg: "Correo ya existe...",
      });
    }

    const user = new User(req.body);

    // encriptar contraseña
    const salt = bcryptjs.genSaltSync(); // Número aleatorio
    user.password = bcryptjs.hashSync(password, salt);
    
    //Guardamos el usuario. El .save() es una promise
    await user.save();
    const token = await generateJwt(user.id);

    res.json({
      ok: true,
      user,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado. Revisar logs",
    });
  }
};

const updateUsers = async (req, res = response) => {
    // TODO: validar token y validar si el usuario es correcto
  try {
    const uid = req.params.id;

    const userDb = await User.findById(uid);

    if (!userDb) {
        return res.status(404).json({
            ok: false,
            msg: 'No existe ese usuario por el id'
        })
    }


    const { password, google, email, ...fieldsUserDb } = req.body;


    if (userDb.email !== email) {
        // La persona no esta actualizando el email
        const mailExists = await User.findOne({email: email});
        if (mailExists) {
            // No voy a poder actualizar
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese email'
            })
        }
    }

    fieldsUserDb.email = email;

    // Actualizar usuario de la db
    const updateUser = await User.findByIdAndUpdate(uid, fieldsUserDb, {new: true});

    res.json({
        ok: true,
        updateUser
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado. Revisar logs",
    });
  }
};

const deleteUsers = async (req, res = response) => {
    try {
        const uid = req.params.id;

        const userDb = await User.findById(uid);
    
        if (!userDb) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe ese usuario por el id'
            })
        }


        await User.findByIdAndDelete(uid);

        res.json({
            ok: true,
            msg: 'Usuario eliminado'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
          ok: false,
          msg: "Error inesperado. Revisar logs",
        });
    }

}

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers
};
