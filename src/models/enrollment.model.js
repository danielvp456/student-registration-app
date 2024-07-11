import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';
import Student from './student.model.js';
import Subject from './subject.model.js';
import Professor from './professor.model.js';
import Program from './program.model.js';

const Enrollment = sequelize.define('Enrollment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Student,
            key: 'id',
        },
    },
    subject_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Subject,
            key: 'id',
        },
    },
    professor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Professor,
            key: 'id',
        },
    },
    program_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Program,
            key: 'id',
        },
    },
}, {
    tableName: 'Enrollment',
    timestamps: false,
});


Student.hasMany(Enrollment, { foreignKey: 'student_id' });
Enrollment.belongsTo(Student, { foreignKey: 'student_id' });

Subject.hasMany(Enrollment, { foreignKey: 'subject_id' });
Enrollment.belongsTo(Subject, { foreignKey: 'subject_id' });

Professor.hasMany(Enrollment, { foreignKey: 'professor_id' });
Enrollment.belongsTo(Professor, { foreignKey: 'professor_id' });

Program.hasMany(Enrollment, { foreignKey: 'professor_id' });
Enrollment.belongsTo(Program, { foreignKey: 'professor_id' });

export default Enrollment;