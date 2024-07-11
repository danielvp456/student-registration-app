import StudentRepository from "../repositories/student.repository.js";
import EnrollmentRepository from "../repositories/enrollment.repository.js";

import { getExchangeRate } from "../utils/exchangeRate.utils.js";

class StudentService {

    constructor() {
        this.studentRepository = new StudentRepository();
        this.enrollmentRepository = new EnrollmentRepository();
    }

    async getAllStudents() {
        return await this.studentRepository.getAll();
    }

    async getStudent(id) {
        return await this.studentRepository.get(id);
    }

    async create(student) {
        return await this.studentRepository.create(student);
    }

    async update(id, studentData) {
        return await this.studentRepository.update(id, studentData);
    }

    async delete(id) {
        return await this.studentRepository.delete(id);
    }

    async getStudentsAndProfessors(professors) {
        const professorDetails = await Promise.all(professors.map(async professor => {
            const { id, name, subject_id } = professor.dataValues;

            const enrollments = await this.enrollmentRepository.getByProfessorAndSubject(id, subject_id);

            const students = enrollments.map(enrollment => ({
                name: enrollment.Student.name
            }));

            return {
                professor_name: name,
                subject_id: subject_id,
                students: students
            };
        }));

        return professorDetails;
    }

    async getStudentClassmates(student_id) {
        return await this.studentRepository.getClassmates(student_id);
    }

    async getStudentEnrolledSubjects(student_id) {
        const subjects = await this.enrollmentRepository.getEnrolledSubjects(student_id);
        const totalCredits = subjects.reduce((total, subject) => total + subject.credits, 0);
        const totalCostUSD = totalCredits * 150;

        const exchangeRate = await getExchangeRate();

        const totalCostEUR = totalCostUSD / exchangeRate;
        return {
            subjects,
            totalCostUSD,
            totalCostEUR
        };
    }
}

export default StudentService;