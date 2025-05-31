import sequelize from '../../config/db.pg.js';
import User from './User.js';
import Verification from './Verification.js';

User.hasOne(Verification, { foreignKey: 'partnerId' });
Verification.belongsTo(User, { foreignKey: 'partnerId' });

export { sequelize, User, Verification };
