import StudentModel from '../models/student.model.js';

class StudentRepository {
    async getAll(){
        return await StudentModel.findAll();
    }

    async get(id){
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

    async delete(id){
        return await StudentModel.destroy({
            where:{
                id: id
            }
        });
    }
}

export default StudentRepository;