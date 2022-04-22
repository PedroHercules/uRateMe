const express = require('express');
const User = require('../database/User.js');
const router = express.Router();
const {Op} = require('sequelize')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

router.post('/register', async (req, res) => {
    try{
        let nickname = req.body.nickname;
        let email = req.body.email;
        let password = req.body.password;
        let isAdmin = false;
        if(email.includes("@") == false || password < 6){
            return res.status(400).send({error: 'dados inválidos'})
        }

        const existUsers = await User.findAll();
        if (Object.keys(existUsers).length == 0){
            isAdmin = true;
        }

        await User.findOne({where: {[Op.or]: [{nickname: nickname},{email: email}]}})
            .then(async user => {
                if (user == undefined){
                    const user = await User.create(
                        {
                            nickname: nickname,
                            email: email,
                            password: password,
                            isAdmin: isAdmin
                        }
                    );
                    user.password = undefined;
                    res.status(200).send({
                        user, 
                        token: generateToken({id: user.id})
                    });
                }else{
                    return res.status(400).send({error: 'Nome de usuário ou e-mail já existe'});
                }
        });
        
        
    }catch(err){
        return res.status(400).send({ error: 'o registro falhou!' });
    }
});

router.post('/authenticate', async (req, res) => {
    let {nickname, password} = req.body;
    const user = await User.findOne({
        where: {
            nickname: nickname
        }
    });

    if(!user) {
        return res.status(400).send({ error: 'Usuário não encontrado'})
    }

    if (!await bcrypt.compare(password, user.password)){
        return res.status(400).send({ error: 'Senha inválida'});
    }

    user.password  = undefined;


    return res.status(200).send({
        user, 
        token: generateToken({id: user.id})
    });
});

module.exports = app => app.use('/auth', router);