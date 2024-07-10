import ProfessorRepository from "../repositories/professor.repository.js";

class ProfessorService {

    constructor(){
        this.professorRepository = new ProfessorRepository();
    }

    async getAll(){
        return await this.professorRepository.getAll();
    }

    async get(id){
        return await this.professorRepository.get(id);
    }

    async create(professor) {
        return await this.professorRepository.create(professor);
    }

    async update(id, professorData){
        return await this.professorRepository.update(id, professorData);
    }

    async delete(id){
        return await this.professorRepository.delete(id);
    }
}

export default ProfessorService;