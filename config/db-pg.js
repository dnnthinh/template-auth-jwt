const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://oqdauslq:LngnSfflsuhacUiRt9nCr7lffTiyzpjx@john.db.elephantsql.com:5432/oqdauslq');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;