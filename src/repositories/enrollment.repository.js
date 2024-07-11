import EnrollmentModel from "../models/enrollment.model.js";
import StudentModel from "../models/student.model.js";
import SubjectModel from "../models/subject.model.js";
import ProfessorModel from "../models/professor.model.js";

class EnrollmentRepository {
    async getAll() {
        return await EnrollmentModel.findAll();
    }

    async get(id) {
        return await EnrollmentModel.findByPk(id);
    }

    async getByStudentId(id) {
        return await EnrollmentModel.count({ where: { student_id: id } });
    }

    async getByProfessorAndStudent(student_id, professor_id) {
        return await EnrollmentModel.findOne({ where: { student_id, professor_id } });
    }

    async getByProfessorAndSubject(professor_id, subject_id) {
        return await EnrollmentModel.findAll({ where: { professor_id, subject_id }, include: [StudentModel] });
    }

    async getEnrolledSubjects(student_id) {

        const enrollments = await EnrollmentModel.findAll({
            where: { student_id: student_id },
            include: [
                {
                    model: SubjectModel,
                    attributes: ['id', 'name', 'credits']
                }
            ]
        });

        const subjects = enrollments.map(enrollment => enrollment.Subject);

        return subjects;
    }

    async create(enrollment) {
        const { professor_id, subject_id } = enrollment;
        const professor = await ProfessorModel.findOne({ where: { id: professor_id, subject_id: subject_id } });

        if (!professor) {
            throw new Error('El profesor no está inscrito para dictar esa materia');
        }
        return await EnrollmentModel.create(enrollment);
    }

    async update(id, enrollmentData) {
        const enrollment = await EnrollmentModel.findByPk(id);
        if (!enrollment)
            return null;

        return await enrollment.update(enrollmentData);
    }

    async delete(id) {
        return await EnrollmentModel.destroy({
            where: {
                id: id
            }
        });
    }
}

export default EnrollmentRepository;