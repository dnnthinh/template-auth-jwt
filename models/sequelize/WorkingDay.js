const Sequelize = require('sequelize');
const sequelize = require('../../config/db-pg');

module.exports = sequelize.define('WorkingDay', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    weekDay: {
        type: Sequelize.STRING
    },
    workingDate: {
        type: Sequelize.DATE
    },
    isWorking: {
        type: Sequelize.BOOLEAN
    }
});