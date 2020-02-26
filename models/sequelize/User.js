const Sequelize = require('sequelize');
const sequelize = require('../../config/db-pg');

module.exports = sequelize.define('User', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    companyId: {
        type: Sequelize.INTEGER
    }
});