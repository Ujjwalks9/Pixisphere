import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.pg.js';

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  role: { type: DataTypes.ENUM('client', 'partner', 'admin'), defaultValue: 'client' }
},
{
  tableName: 'Users' 
});

export default User;
