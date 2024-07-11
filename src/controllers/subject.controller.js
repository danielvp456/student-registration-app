import SubjectService from "../services/subject.service.js";

const subjectService = new SubjectService();

export const getAllSubjects = async (req, res) => {
    try {
        const subjects = await subjectService.getAll();
        res.status(201).json(subjects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getSubject = async (req, res) => {
    try {
        const subject = await subjectService.get(req.params.id);
        if(subject === null)
            return res.status(404).json({ message: "subject Not Found" });
        res.status(201).json(subject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createSubject = async (req, res) => {
    try {
        const subject = await subjectService.create(req.body);
        res.status(201).json(subject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateSubject = async (req, res) => {
    try {
        const subject = await subjectService.update(req.params.id, req.body);
        if(subject === null)
            return res.status(404).json({ message: "subject doesn't exists" });
        res.status(201).json(subject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteSubject = async (req, res) => {
    try {
        const response = await subjectService.delete(req.params.id);
        if(response == 0)
            return res.status(404).json({ message: "subject doesn't exists" });
        res.status(201).json({message: "subject deleted."});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}