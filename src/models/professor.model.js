import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';
import Subject from './subject.model.js';

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
    subject_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Subject,
            key: 'id',
        },
    }
}, {
    tableName: 'Professor',
    timestamps: false,
});

Professor.hasMany(Subject, { foreignKey: 'subject_id' });
Subject.belongsTo(Professor, {foreignKey: 'subject_id' });

export default Professor;