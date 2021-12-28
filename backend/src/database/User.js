const Sequelize = require('sequelize');
const connection = require('./database.js');
const bcrypt = require('bcryptjs');

const User = connection.define('users', {
    id: {
        type: Sequelize.INTEGER,
        allownull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    nickname: {
        type: Sequelize.STRING,
        allownull: false,
    },

    password: {
        type: Sequelize.STRING,
        allownull: false,
    },

    email: { 
        type: Sequelize.STRING,
        allownull: false,
    }
});

User.beforeCreate(async (user) => {
    const hash = await bcrypt.hash(user.password, 10)
    user.password = hash;
})

User.sync({force: false});
module.exports = User;