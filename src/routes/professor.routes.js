import { Router } from "express";
import { getAllProfessors, getProfessor, createProfessor, updateProfessor, deleteProfessor } from "../controllers/professor.controller.js";


const router = Router();

router.get('/professors', getAllProfessors);

router.get('/professor/:id', getProfessor);

router.post('/professor', createProfessor);

router.put('/professor/:id', updateProfessor);

router.delete('/professor/:id', deleteProfessor);


export default router;