import SubjectRepository from "../repositories/subject.repository.js";

class SubjectService {

    constructor(){
        this.subjectRepository = new SubjectRepository();
    }

    async getAll(){
        return await this.subjectRepository.getAll();
    }

    async get(id){
        return await this.subjectRepository.get(id);
    }

    async create(subject) {
        return await this.subjectRepository.create(subject);
    }

    async update(id, subjectData){
        return await this.subjectRepository.update(id, subjectData);
    }

    async delete(id){
        return await this.subjectRepository.delete(id);
    }
}

export default SubjectService;