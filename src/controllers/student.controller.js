import StudentService from "../services/student.service.js";

export const getStudent = (req, res) => {
    res.send("Get Student");
}

export const createStudent = async (req, res) => {
    try {
        const studentService = new StudentService();
        const student = await studentService.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateStudent = (req, res) => {
    res.send("update Student");
}

export const deleteStudent = (req, res) => {
    res.send("delete Student");
}