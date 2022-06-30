// Ruta: /api/auth

const { Router } = require("express");
const { login } = require("../controllers/auth")
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/fields-validator");

const router = Router();

router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validateFields
], login)


module.exports = router;