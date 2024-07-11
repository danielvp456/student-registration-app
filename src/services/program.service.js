import ProgramRepository from "../repositories/program.repository.js";

class ProgramService {

    constructor(){
        this.programRepository = new ProgramRepository();
    }

    async getAllPrograms(){
        return await this.programRepository.getAll();
    }

    async getProgram(id){
        return await this.programRepository.get(id);
    }

    async create(program) {
        return await this.programRepository.create(program);
    }

    async update(id, programData){
        return await this.programRepository.update(id, programData);
    }

    async delete(id){
        return await this.programRepository.delete(id);
    }
}

export default ProgramService;