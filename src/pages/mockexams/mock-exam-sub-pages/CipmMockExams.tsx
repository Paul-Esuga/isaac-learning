import { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

import { type Question, type Exam } from "../../../static-data/useExamStore";

// Zustand Store
import { useExamStore } from "../../../static-data/useExamStore";

// Components
import MockExamQuestionCard from "../../../components/mock-exam-components/mock-exam-question-card/MockExamQuestionCard";
import MocExamSubmitComponenet from "../../../components/mock-exam-components/mock-exam-submit-componenet/MockExamSubmitComponenet";
import BackButton from "../../../components/back-button/BackButton";

// Define this at the top of CipmMockExams.tsx or in a types file

const CipmMockExams = () => {
  const { examId } = useParams();
  const [showSubmitExam, setShowSubmitExam] = useState(false);

  // Zustand State
  const { questionIndex, setQuestionIndex, clickedQuestions, markAsClicked } =
    useExamStore();

  // TanStack Query: Fetching data from your new Node.js backend
  const {
    data: exam,
    isLoading,
    error,
  } = useQuery<Exam>({
    queryKey: ["exam", examId], // 3. Use examId here so Query refetches if the ID changes
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5000/api/exams/${examId}` // 4. Use template literals
      );
      return response.data;
    },
    enabled: !!examId, // 5. Only run the query if we actually have an ID
  });

  const handleSubmit = () => setShowSubmitExam(true);
  const removeSubmit = useCallback(() => setShowSubmitExam(false), []);

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        Loading Exam...
      </div>
    );
  if (error)
    return <div>Error loading exam. Please check if backend is running.</div>;

  const questions = exam?.questions || [];

  return (
    <div className="fixed inset-0 lg:left-[280px] bg-[#f8fcfc] z-[1000] overflow-y-auto p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="w-32">
          <BackButton />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
          {/* Main Question Area */}
          <div className="bg-white py-5 px-4 md:px-6 rounded-2xl shadow-sm w-full lg:w-[70%] h-fit flex flex-col gap-6">
            <div className="bg-primary-green text-white w-fit px-5 py-2 rounded-full font-semibold text-sm">
              Question {questionIndex + 1} of {questions.length}
            </div>

            <div className="min-h-[300px]">
              <MockExamQuestionCard
                question={questions[questionIndex]} // Now matches the interface!
                onAnswerSelect={() => markAsClicked(questionIndex + 1)}
              />
            </div>
          </div>

          {/* Right Side: Question Palette */}
          <div className="bg-white w-full lg:w-[30%] h-fit py-6 px-5 rounded-2xl shadow-sm flex flex-col gap-6">
            <p className="font-bold text-[#414d58] border-b pb-2">
              Question Palette
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {questions.map((_: Question, i: number) => (
                <div
                  key={i}
                  onClick={() => setQuestionIndex(i)}
                  className={`cursor-pointer text-sm font-bold flex items-center justify-center w-10 h-10 rounded-full transition-all
                    ${
                      clickedQuestions.includes(i + 1)
                        ? "bg-primary-green/10 border-2 border-primary-green text-primary-green"
                        : "bg-gray-100 text-gray-500"
                    }
                    ${
                      questionIndex === i
                        ? "ring-2 ring-offset-2 ring-primary-green"
                        : ""
                    }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <button
              className="bg-primary-green w-full py-3 text-white font-bold rounded-xl shadow-lg active:scale-95"
              onClick={handleSubmit}
            >
              Submit Exam
            </button>
          </div>
        </div>

        {/* Bottom Pagination */}
        <div className="bg-primary-green flex items-center gap-2 p-2 rounded-xl overflow-x-auto no-scrollbar shadow-lg">
          <div className="flex items-center gap-2 mx-auto">
            {questions.map((_: Question, i: number) => (
              <button
                key={i}
                className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg transition-all text-sm
                  ${
                    questionIndex === i
                      ? "bg-white text-primary-green font-bold scale-110 shadow-md"
                      : "text-white hover:bg-white/20"
                  }`}
                onClick={() => setQuestionIndex(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      {showSubmitExam && (
        <MocExamSubmitComponenet removeSubmit={removeSubmit} />
      )}
    </div>
  );
};

export default CipmMockExams;
