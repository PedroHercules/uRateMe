const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).send({error: 'O token não foi informado'})
    }

    // o token começa com Bearer seguido com um hash

    const parts = authHeader.split(' ');
    if(!parts.length === 2) {
        return res.status(401).send({error: 'Token error'});
    }

    const [scheme, token] = parts;
    console.log(token)
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({error: 'Erro no formato do token'});
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({error: 'Token inválido'});
        req.userId = decoded.id;
        return next();
    })

}