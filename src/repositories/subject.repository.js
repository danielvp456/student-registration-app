import SubjectModel from '../models/subject.model.js';

class SubjectRepository {
    async getAll() {
        return await SubjectModel.findAll({
            attributes: ['id', 'name', 'credits']
        });
    }

    async get(id) {
        return await SubjectModel.findByPk(id, {
            attributes: ['id', 'name', 'credits']
        });
    }

    async create(subject) {
        return await SubjectModel.create(subject);
    }

    async update(id, subjectData) {
        const subject = await SubjectModel.findByPk(id, {
            attributes: ['id', 'name', 'credits']
        });
        if (!subject)
            return null;

        return await subject.update(subjectData);
    }

    async delete(id) {
        return await SubjectModel.destroy({
            where: {
                id: id
            }
        });
    }
}

export default SubjectRepository;