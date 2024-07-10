import EnrollmentRepository from "../repositories/enrollment.repository.js";

class EnrollmentService {

    constructor(){
        this.enrollmentRepository = new EnrollmentRepository();
    }

    async getAll(){
        return await this.enrollmentRepository.getAll();
    }

    async get(id){
        return await this.enrollmentRepository.get(id);
    }

    async create(enrollment) {
        return await this.enrollmentRepository.create(enrollment);
    }

    async update(id, enrollmentData){
        return await this.enrollmentRepository.update(id, enrollmentData);
    }

    async delete(id){
        return await this.enrollmentRepository.delete(id);
    }
}

export default EnrollmentService;