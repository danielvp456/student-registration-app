import ProfessorService from "../services/professor.service.js";

const professorService = new ProfessorService();

export const getAllProfessors = async (req, res) => {
    try {
        const professor = await professorService.getAll();
        res.status(201).json(professor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProfessor = async (req, res) => {
    try {
        const professor = await professorService.get(req.params.id);
        if(professor === null)
            return res.status(404).json({ message: "professor Not Found" });
        res.status(201).json(professor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createProfessor = async (req, res) => {
    try {
        const professor = await professorService.create(req.body);
        res.status(201).json(professor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateProfessor = async (req, res) => {
    try {
        const professor = await professorService.update(req.params.id, req.body);
        if(professor === null)
            return res.status(404).json({ message: "professor doesn't exists" });
        res.status(201).json(professor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteProfessor = async (req, res) => {
    try {
        const response = await professorService.delete(req.params.id);
        if(response == 0)
            return res.status(404).json({ message: "professor doesn't exists" });
        res.status(201).json({message: "professor deleted."});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}