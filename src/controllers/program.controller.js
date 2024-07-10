//import StudentService from "../services/student.service.js";

//const studentService = new StudentService();

export const getAllPrograms = async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        res.status(201).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProgram = async (req, res) => {
    try {
        const student = await studentService.getStudent(req.params.id);
        if(student === null)
            return res.status(404).json({ message: "Student Not Found" });
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createProgram = async (req, res) => {
    try {
        const student = await studentService.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateProgram = async (req, res) => {
    try {
        const student = await studentService.update(req.params.id, req.body);
        if(student === null)
            return res.status(404).json({ message: "Student doesn't exists" });
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteProgram = async (req, res) => {
    try {
        const response = await studentService.delete(req.params.id);
        if(response == 0)
            return res.status(404).json({ message: "Student doesn't exists" });
        res.status(201).json({message: "Student deleted."});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}