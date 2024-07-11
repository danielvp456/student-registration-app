import { Op } from 'sequelize';

import StudentModel from '../models/student.model.js';
import SubjectModel from '../models/subject.model.js';
import EnrollmentModel from '../models/enrollment.model.js';
import ProfessorModel from '../models/professor.model.js';

class StudentRepository {
    async getAll() {
        return await StudentModel.findAll();
    }

    async get(id) {
        return await StudentModel.findByPk(id);
    }

    async create(student) {
        return await StudentModel.create(student);
    }

    async update(id, studentData) {
        const student = await StudentModel.findByPk(id);
        if (!student)
            return null;

        return await student.update(studentData);
    }

    async delete(id) {
        return await StudentModel.destroy({
            where: {
                id: id
            }
        });
    }

    async getClassmates(student_id) {
        const enrollments = await EnrollmentModel.findAll({
            where: { student_id: student_id },
            include: [
                {
                    model: SubjectModel,
                    attributes: ['id', 'name']
                }
            ]
        });

        const subjectIds = enrollments.map(enrollment => enrollment.subject_id);

        const classmates = await EnrollmentModel.findAll({
            where: {
                subject_id: subjectIds,
                student_id: { [Op.ne]: student_id } // Excluir al estudiante actual
            },
            include: [
                {
                    model: StudentModel,
                    attributes: ['id', 'name']
                }
            ]
        });

        const classmatesGroupedBySubject = classmates.reduce((acc, enrollment) => {
            const subjectId = enrollment.subject_id;
            const studentName = enrollment.Student.name;

            if (!acc[subjectId]) {
                acc[subjectId] = [];
            }

            acc[subjectId].push(studentName);

            return acc;
        }, {});

        return classmatesGroupedBySubject;
    }
}

export default StudentRepository;