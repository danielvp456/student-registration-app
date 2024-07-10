import ProgramModel from '../models/program.model.js';

class ProgramRepository {
    async getAll(){
        return await ProgramModel.findAll();
    }

    async get(id){
        return await ProgramModel.findByPk(id);
    }

    async create(student) {
        return await ProgramModel.create(student);
    }

    async update(id, programData) {
        const program = await ProgramModel.findByPk(id);
        if (!program)
            return null;
        
        return await program.update(programData);
    }

    async delete(id){
        return await ProgramModel.destroy({
            where:{
                id: id
            }
        });
    }
}

export default ProgramRepository;