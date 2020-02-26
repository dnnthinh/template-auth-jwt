const Sequelize = require('sequelize');
const sequelize = require('../../config/db-pg');

module.exports = sequelize.define('UsersWorkingDay', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    }
});