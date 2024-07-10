import { Router } from "express";
import { getAllSubjects, getSubject, createSubject, updateSubject, deleteSubject } from "../controllers/subject.controller.js";


const router = Router();

router.get('/subjects', getAllSubjects);

router.get('/subject/:id', getSubject);

router.post('/subject', createSubject);

router.put('/subject/:id', updateSubject);

router.delete('/subject/:id', deleteSubject);


export default router;