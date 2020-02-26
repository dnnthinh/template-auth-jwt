const Sequelize = require('sequelize');
const sequelize = require('../../config/db-pg');

module.exports = sequelize.define('Company', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    }
});