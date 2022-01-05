const sequelize = require('sequelize');
const connection = require('./database.js');
const User = require("./User.js");

const Rate = connection.define('rates', {

    date: {
        type: sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW
    },

    score: {
        type: sequelize.FLOAT,
        allowNull: false
    },

    comment: {
        type: sequelize.TEXT,
        allowNull: false
    },

    contentId: {
        type: sequelize.INTEGER,
        allowNull: false
    }

});

User.hasMany(Rate);
Rate.belongsTo(User);

Rate.sync({force: false});
module.exports = Rate;