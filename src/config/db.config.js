import { Sequelize } from 'sequelize';
import {DB_NAME, DB_HOST, DB_USER, DB_PASSWORD} from '../config.js';

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
});