import ProfessorModel from "../models/professor.model.js";

class ProfessorRepository {
    async getAll(){
        return await ProfessorModel.findAll();
    }

    async get(id){
        return await ProfessorModel.findByPk(id);
    }

    async create(professor) {
        return await ProfessorModel.create(professor);
    }

    async update(id, professorData) {
        const professor = await ProfessorModel.findByPk(id);
        if (!professor)
            return null;
        
        return await professor.update(professorData);
    }

    async delete(id){
        return await ProfessorModel.destroy({
            where:{
                id: id
            }
        });
    }
}

export default ProfessorRepository;