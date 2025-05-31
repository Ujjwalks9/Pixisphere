import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.PG_URI, {
  dialect: 'postgres', // Explicitly specify PostgreSQL
  logging: false, // Optional: Disable logging
});

sequelize.authenticate()
  .then(() => console.log("PostgreSQL connected"))
  .catch(err => console.error("PostgreSQL connection error", err));

export default sequelize;