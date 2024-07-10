import EnrollmentModel from "../models/enrollment.model.js";

class ProfessorRepository {
    async getAll(){
        return await EnrollmentModel.findAll();
    }

    async get(id){
        return await EnrollmentModel.findByPk(id);
    }

    async create(enrollment) {
        return await EnrollmentModel.create(enrollment);
    }

    async update(id, enrollmentData) {
        const enrollment = await EnrollmentModel.findByPk(id);
        if (!enrollment)
            return null;
        
        return await enrollment.update(enrollmentData);
    }

    async delete(id){
        return await EnrollmentModel.destroy({
            where:{
                id: id
            }
        });
    }
}

export default ProfessorRepository;