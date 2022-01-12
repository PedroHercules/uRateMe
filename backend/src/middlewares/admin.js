const User = require('../database/User.js');

module.exports = async (req, res, next) => {
    if (req.body.userId != undefined){
        const userId = req.body.userId;
        const user = await User.findOne({where: {id: userId}});
        if (user != undefined){
            if (user.isAdmin == 0){
                return res.status(401).send({error: 'Esse usuário não é admin'});
            }
            return next();
        }
    }
}