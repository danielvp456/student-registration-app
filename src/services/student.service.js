import StudentRepository from "../repositories/student.repository.js";

class StudentService {

    constructor(){
        this.studentRepository = new StudentRepository();
    }

    async getAllStudents(){
        return await this.studentRepository.getAll();
    }

    async getStudent(id){
        return await this.studentRepository.get(id);
    }

    async create(student) {
        return await this.studentRepository.create(student);
    }

    async update(id, studentData){
        return await this.studentRepository.update(id, studentData);
    }

    async delete(id){
        return await this.studentRepository.delete(id);
    }
}

export default StudentService;