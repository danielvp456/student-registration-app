import { Router } from "express";
import { getStudent, createStudent, updateStudent, deleteStudent } from "../controllers/student.controller.js";


const router = Router();

router.get('/student', getStudent);

router.post('/student', createStudent);

router.put('/student', updateStudent);

router.delete('/student', deleteStudent);


export default router;