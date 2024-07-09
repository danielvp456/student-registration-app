import StudentRepository from "../repositories/student.repository.js";

class StudentService {
    async create(student) {
        const studentRepository = new StudentRepository(); 
        return await studentRepository.create(student);
    }
}

export default StudentService;