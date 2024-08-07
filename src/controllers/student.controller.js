import StudentService from "../services/student.service.js";
import ProfessorService from '../services/professor.service.js';

const studentService = new StudentService();
const professorService = new ProfessorService();

export const getAllStudents = async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        res.status(201).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getStudent = async (req, res) => {
    try {
        const student = await studentService.getStudent(req.params.id);
        if(student === null)
            return res.status(404).json({ message: "Student Not Found" });
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createStudent = async (req, res) => {
    try {
        const student = await studentService.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateStudent = async (req, res) => {
    try {
        const student = await studentService.update(req.params.id, req.body);
        if(student === null)
            return res.status(404).json({ message: "Student doesn't exists" });
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const response = await studentService.delete(req.params.id);
        if(response == 0)
            return res.status(404).json({ message: "Student doesn't exists" });
        res.status(201).json({message: "Student deleted."});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProfessorsDetails = async (req, res) => {
    try {
        const professors = await professorService.getAll();
        if(professors.length != 0){
            const list = await studentService.getStudentsAndProfessors(professors);
            res.status(201).json(list);
        }else{
            res.status(404).json({ message: "No hay profesores disponibles" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getStudentClassmates = async (req, res) => {
    try {
        const response = await studentService.getStudentClassmates(req.params.id);
        if(response == 0)
            return res.status(404).json({ message: "Student doesn't exists" });
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getStudentEnrolledSubjects = async (req, res) => {
    try {
        const response = await studentService.getStudentEnrolledSubjects(req.params.id);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}