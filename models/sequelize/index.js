const Company = require('./Company');
const User = require('./User');
const WorkingDay = require('./WorkingDay');
const UsersWorkingDay = require('./UsersWorkingDay');

User.belongsTo(Company, {
    foreignKey: 'companyId',
    as: 'company'
});

User.belongsToMany(WorkingDay, {
    through: 'UsersWorkingDays',
    foreignKey: 'userId',
    as: 'days'
});
UsersWorkingDay.belongsTo(User, {
    foreignKey: 'userId'
});
UsersWorkingDay.belongsTo(WorkingDay, {
    foreignKey: 'workingDayId'
});
WorkingDay.belongsToMany(User, {
    through: 'UsersWorkingDays',
    foreignKey: 'workingDayId',
    as: 'employes'
});

module.exports = {
    Company,
    User,
    WorkingDay,
    UsersWorkingDay
};