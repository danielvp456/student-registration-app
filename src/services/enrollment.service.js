import EnrollmentRepository from "../repositories/enrollment.repository.js";

class EnrollmentService {

    constructor() {
        this.enrollmentRepository = new EnrollmentRepository();
    }

    async getAll() {
        return await this.enrollmentRepository.getAll();
    }

    async get(id) {
        return await this.enrollmentRepository.get(id);
    }

    async create(enrollment) {
        const { student_id, professor_id } = enrollment;
        const studentEnrollment = await this.enrollmentRepository.getByStudentId(student_id);
        console.log(studentEnrollment);
        if (studentEnrollment >= 3) {
            throw new Error('El estudiante ya tiene 3 materias inscritas.');
        }

        const existingEnrollment = await this.enrollmentRepository.getByProfessorAndStudent(student_id, professor_id);
        if (existingEnrollment) {
            throw new Error('El estudiante no puede tener clases con el mismo profesor en diferentes materias.');
        }

        return await this.enrollmentRepository.create(enrollment);
    }

    async update(id, enrollmentData) {
        return await this.enrollmentRepository.update(id, enrollmentData);
    }

    async delete(id) {
        return await this.enrollmentRepository.delete(id);
    }
}

export default EnrollmentService;