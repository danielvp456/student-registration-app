import EnrollmentService from "../services/enrollment.service.js";

const enrollmentService = new EnrollmentService();

export const getAllEnrollments = async (req, res) => {
    try {
        const enrollment = await enrollmentService.getAll();
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getEnrollment = async (req, res) => {
    try {
        const enrollment = await enrollmentService.get(req.params.id);
        if(enrollment === null)
            return res.status(404).json({ message: "enrollment Not Found" });
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createEnrollment = async (req, res) => {
    try {
        const enrollment = await enrollmentService.create(req.body);
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateEnrollment = async (req, res) => {
    try {
        const enrollment = await enrollmentService.update(req.params.id, req.body);
        if(enrollment === null)
            return res.status(404).json({ message: "enrollment doesn't exists" });
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteEnrollment = async (req, res) => {
    try {
        const response = await enrollmentService.delete(req.params.id);
        if(response == 0)
            return res.status(404).json({ message: "enrollment doesn't exists" });
        res.status(201).json({message: "enrollment deleted."});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}