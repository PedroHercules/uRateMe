const sequelize = require('sequelize');
const connection = require('./database.js');

const Content = connection.define('movies', {
    id: {
        type: sequelize.INTEGER,
        allownull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },

    title: {
        type: sequelize.STRING,
        allownull: false
    },

    sinopse: {
        type: sequelize.TEXT,
        allownull: false
    },

    date: {
        type: sequelize.DATEONLY,
        allownull: false
    },

    rateApi: {
        type: sequelize.FLOAT,
        allownull: false
    },

    rateUsers: {
        type: sequelize.FLOAT,
        allownull: false,
        defaultValue: 0.0
    },
    
    photo: {
        type: sequelize.STRING,
        allownull: false
    },

    nSeasons: {
        type: sequelize.INTEGER,
        allownull: false,
        defaultValue: 0
    },

    nComments: {
        type: sequelize.INTEGER,
        allownull: false,
        defaultValue: 0
    }
});

Content.sync({force: false});
module.exports = Content;