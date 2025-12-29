import { Router } from "express";
import { getExamById, submitExam } from "../controllers/examController.js";

const router = Router();

router.get("/:id", getExamById);
router.post("/submit", submitExam); // NEW

export default router;
