import { Router } from "express";
import { getAllStudents, getStudent, createStudent, updateStudent, deleteStudent } from "../controllers/student.controller.js";


const router = Router();

router.get('/students', getAllStudents);

router.get('/student/:id', getStudent);

router.post('/student', createStudent);

router.put('/student/:id', updateStudent);

router.delete('/student/:id', deleteStudent);


export default router;