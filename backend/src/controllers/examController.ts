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
