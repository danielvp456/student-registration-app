import ProgramService from "../services/program.service.js";

const programService = new ProgramService();

export const getAllPrograms = async (req, res) => {
    try {
        const programs = await programService.getAllPrograms();
        res.status(201).json(programs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProgram = async (req, res) => {
    try {
        const program = await programService.getProgram(req.params.id);
        if(program === null)
            return res.status(404).json({ message: "Program Not Found" });
        res.status(201).json(program);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createProgram = async (req, res) => {
    try {
        const program = await programService.create(req.body);
        res.status(201).json(program);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateProgram = async (req, res) => {
    try {
        const program = await programService.update(req.params.id, req.body);
        if(program === null)
            return res.status(404).json({ message: "program doesn't exists" });
        res.status(201).json(program);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteProgram = async (req, res) => {
    try {
        const response = await programService.delete(req.params.id);
        if(response == 0)
            return res.status(404).json({ message: "program doesn't exists" });
        res.status(201).json({message: "program deleted."});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}