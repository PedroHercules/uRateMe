const express = require('express');
const Rate = require('../database/Rate.js');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();


router.post('/send/:id', authMiddleware, async (req, res) => {
    try {
        
        const id = req.params.id;
        let userId = req.body.user;
        
        const rate = await Rate.create({
            score: req.body.score,
            comment: req.body.comment,
            contentId: id,
            userId: userId
        });

        return res.send({rate});
    } catch (error) {
        return res.status(400).send({error: error});
    }
});


router.post('/update/:id', authMiddleware, async (req, res) => {
    try {
        const id = req.params.id;
        const rate = await Rate.update({
            score: req.body.score, 
            comment: req.body.comment}, 
            {where: 
                {id: id}
            }
        )
        res.send({rate});
    } catch (error) {
        return res.status(400).send({error: error});
    }
});

router.post('/delete', authMiddleware, async (req, res) => {
    try{
        const id = req.body.id;
        if(id != undefined) {
            if(!isNaN(id)) {
                Rate.destroy({
                    where: {id: id}
                }).then(() => {
                    return res.send('Avaliação deletada com sucesso');
                });
            }
        }else{
            return res.send('Id vazio')
        }
    }catch(err){
        return res.send({error: err});
    }
    
})

module.exports = app => app.use("/rate", router);