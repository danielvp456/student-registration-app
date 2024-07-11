import { Router } from "express";
import { getAllStudents, getStudent, createStudent, updateStudent, deleteStudent, getProfessorsDetails, getStudentClassmates, getStudentEnrolledSubjects } from "../controllers/student.controller.js";


const router = Router();

router.get('/students', getAllStudents);

router.get('/student/:id', getStudent);

router.post('/student', createStudent);

router.put('/student/:id', updateStudent);

router.delete('/student/:id', deleteStudent);

router.get('/student/details/professors', getProfessorsDetails);

router.get('/student/details/classmates/:id', getStudentClassmates);

router.get('/student/details/enrolledSubjects/:id', getStudentEnrolledSubjects);


export default router;