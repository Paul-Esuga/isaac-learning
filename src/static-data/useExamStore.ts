import { create } from "zustand";

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Exam {
  id: string;
  title: string;
  questions: Question[];
}

interface ExamState {
  questionIndex: number;
  clickedQuestions: number[]; // Track visited/answered questions
  userAnswers: Record<string, number>; // { questionId: selectedOptionIndex }

  setQuestionIndex: (index: number) => void;
  markAsClicked: (id: number) => void;
  selectAnswer: (questionId: string, optionIndex: number) => void;
  resetExam: () => void;
}

export const useExamStore = create<ExamState>((set) => ({
  questionIndex: 0,
  clickedQuestions: [],
  userAnswers: {},

  setQuestionIndex: (index) => set({ questionIndex: index }),

  markAsClicked: (num) =>
    set((state) => ({
      clickedQuestions: state.clickedQuestions.includes(num)
        ? state.clickedQuestions
        : [...state.clickedQuestions, num],
    })),

  selectAnswer: (questionId: string, optionIndex: number) =>
    set((state) => ({
      userAnswers: { ...state.userAnswers, [questionId]: optionIndex },
    })),

  resetExam: () =>
    set({ questionIndex: 0, clickedQuestions: [], userAnswers: {} }),
}));
