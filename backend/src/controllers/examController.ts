import { type Request, type Response } from "express";
import prisma from "../lib/prisma.js";

export const getExamById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Exam ID is required" });
    }

    const exam = await prisma.exam.findUnique({
      where: { id },
      include: {
        questions: true, // This joins the Question table automatically
      },
    });

    if (!exam) {
      return res.status(4404).json({ message: "Exam not found" });
    }

    res.status(200).json(exam);
  } catch (error) {
    res.status(500).json({ message: "Error fetching exam", error });
  }
};

export const submitExam = async (req: Request, res: Response) => {
  try {
    const { examId, userId, userAnswers } = req.body;
    // userAnswers shape: { "uuid-1": 2, "uuid-2": 0 }

    // 1. Fetch the exam with correct answers from DB
    const exam = await prisma.exam.findUnique({
      where: { id: examId },
      include: { questions: true },
    });

    if (!exam) return res.status(404).json({ message: "Exam not found" });

    // 2. Calculate Score
    let correctCount = 0;
    const totalQuestions = exam.questions.length;

    exam.questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / totalQuestions) * 100);
    const accuracy = parseFloat(
      ((correctCount / totalQuestions) * 100).toFixed(2)
    );

    // 3. Save to Database
    const result = await prisma.result.create({
      data: {
        score,
        accuracy,
        timeSpent: req.body.timeSpent || "00:00", // We can pass this from frontend
        userId,
        examId,
      },
    });

    // 4. Return the result ID so frontend can redirect
    res.status(201).json({ resultId: result.id, score, accuracy });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting exam" });
  }
};
