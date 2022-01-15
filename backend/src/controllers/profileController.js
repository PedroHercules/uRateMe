const express = require('express');
const User = require('../database/User.js');
const router = express.Router();

const Rate = require('../database/Rate.js');


router.get('/profile', async (req, res) => {

    try{
        const userId = req.body.id;
        const rates = await Rate.findAll({
            include: [
                {
                    model: User,
                    attributes: ["nickname", "email"],
                    where: {
                        id: userId
                    }
                }
            ]
        });

        res.send({rates});
    }catch (err) {
        res.status(400).send({error: err});
    }
    
});

module.exports = app => app.use('/user', router);