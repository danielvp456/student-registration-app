import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('spainuniversitydb', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
});