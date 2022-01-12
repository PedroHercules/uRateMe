const Sequelize = require('sequelize');

const connection = new Sequelize('uratedb','pedro','abc123',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;
