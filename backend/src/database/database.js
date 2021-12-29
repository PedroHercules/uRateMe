const Sequelize = require('sequelize');

const connection = new Sequelize('uratedb','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
