const jwt = require('jsonwebtoken');

const jwtValidate = (req, res, next) => {

    const token = req.header('x-token');

    // Verificar token

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.JWTSECRET);
        req.uid = uid;
        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }

}

module.exports = {
    jwtValidate
};
