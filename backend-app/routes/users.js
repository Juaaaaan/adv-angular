// Ruta: /api/users

const { Router } = require("express");
const { getUsers, createUsers, updateUsers, deleteUsers } = require("../controllers/users");
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/fields-validator');
const { jwtValidate } = require("../middlewares/jwt-validate");

const router = Router();

router.get("/", jwtValidate, getUsers);

router.post("/", [

    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'El email es obligatorio ').isEmail(),
    ], createUsers);


router.put('/:id', [
    jwtValidate,
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'El email es obligatorio ').isEmail(),
    check('role', 'El rol es obligatorio').not().isEmpty(), 
    validateFields
], updateUsers);

router.delete('/:id', jwtValidate, deleteUsers);   

module.exports = router;
