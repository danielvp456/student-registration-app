import { Router } from "express";
import { getAllPrograms, getProgram, createProgram, updateProgram, deleteProgram } from "../controllers/program.controller.js";


const router = Router();

router.get('/programs', getAllPrograms);

router.get('/program/:id', getProgram);

router.post('/program', createProgram);

router.put('/program/:id', updateProgram);

router.delete('/program/:id', deleteProgram);


export default router;