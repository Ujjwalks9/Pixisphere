import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.pg.js';

const Verification = sequelize.define('Verification', {
  partnerId: DataTypes.INTEGER,
  status: { type: DataTypes.ENUM('pending', 'verified', 'rejected'), defaultValue: 'pending' },
  comment: DataTypes.STRING
});

export default Verification;
