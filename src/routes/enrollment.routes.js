import { Router } from "express";
import { getAllEnrollments, getEnrollment, createEnrollment, updateEnrollment, deleteEnrollment } from "../controllers/enrollment.controller.js";


const router = Router();

router.get('/enrollments', getAllEnrollments);

router.get('/enrollment/:id', getEnrollment);

router.post('/enrollment', createEnrollment);

router.put('/enrollment/:id', updateEnrollment);

router.delete('/enrollment/:id', deleteEnrollment);


export default router;