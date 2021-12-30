const Sequelize = require('sequelize');

const connection = new Sequelize('uratedb','user','root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
