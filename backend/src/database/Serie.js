const sequelize = require('sequelize');
const connection = require('./database.js');


const Serie = connection.define('series', {

    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
    },

    title: {
        type: sequelize.STRING,
        allownull: false
    },

    sinopse: {
        type: sequelize.TEXT,
        allownull: false
    },

    genre: {
        type: sequelize.STRING,
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
    backdrop_path: {
        type: sequelize.STRING,
        allownull: false
    },
    nSeasons: {
        type: sequelize.INTEGER,
        allownull: false
    },

    nComments: {
        type: sequelize.INTEGER,
        allownull: false,
        defaultValue: 0
    }
});


Serie.sync({force: false});
module.exports = Serie;