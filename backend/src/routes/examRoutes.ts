import { Router } from "express";
import { getExamById } from "../controllers/examController.js";

const router = Router();

// Path: /api/exams/:id
router.get("/:id", getExamById);

export default router;
