const jwt = require("jsonwebtoken");

const generateJwt = (uid) => {

    return new Promise((resolve, reject) => {
        const payload = {
            uid
        };
    
        jwt.sign(payload, process.env.JWTSECRET, {
            expiresIn: '12h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el JWT', err);
            } else {
                resolve(token);
            }
    
        });
    });


}

module.exports = {
    generateJwt
};
