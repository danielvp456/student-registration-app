import StudentModel from '../models/student.model.js';

class StudentRepository {
    
    async create(student) {
        return await StudentModel.create(student);
    }
}

export default StudentRepository;