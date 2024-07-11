import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

const Program = sequelize.define('Program', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    total_credits: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'Program',
    timestamps: false,
});

export default Program;