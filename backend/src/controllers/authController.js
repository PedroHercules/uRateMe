const express = require('express');
const User = require('../database/User.js');
const router = express.Router();


router.post('/register', async (req, res) => {
    /* let nickname = req.body.nickname;
    let password = req.body.password;
    let email = req.body.email; */
    try{
        const user = await User.create(req.body);
        return res.send({user});
    }catch(err){
        return res.status(400).send({ error: 'o registro falhou!' });
    }
});

module.exports = app => app.use('/auth', router);