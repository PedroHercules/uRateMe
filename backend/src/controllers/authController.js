const express = require('express');
const User = require('../database/User.js');
const router = express.Router();
const {Op} = require('sequelize')

router.post('/register', async (req, res) => {
    /* let nickname = req.body.nickname;
    let password = req.body.password;
    let email = req.body.email; */
    try{
        let nickname = req.body.nickname;
        let email = req.body.email;
        await User.findOne({where: {[Op.or]: [{nickname: nickname},{email: email}]}})
            .then(async user => {
                if (user == undefined){
                    const user = await User.create(req.body);
                    user.password = undefined;
                    return res.send({user});
                }else{
                    return res.send({error: 'Nome de usuário ou e-mail já existem'});
                }
        });
        
        
    }catch(err){
        return res.status(400).send({ error: 'o registro falhou!' });
    }
});

module.exports = app => app.use('/auth', router);