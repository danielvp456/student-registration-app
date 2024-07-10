import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

const Professor = sequelize.define('Professor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    tableName: 'Professor',
    timestamps: false,
});

export default Professor;