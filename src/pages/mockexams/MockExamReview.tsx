// React Hooks
import { useState } from "react";

// Data
import mockExamQuestions from "../../static-data/MockExamQuestions";

// Components
import MockExamAnswerCard from "../../components/mock-exam-components/mock-exam-answer-card/MockExamAnswerCard";
import BackButton from "../../components/back-button/BackButton";

const MockExamReview = () => {
  const [currentq, setCurrentq] = useState(0);

  return (
    /* CHANGE 1: Responsive container using fixed inset and lg:left for sidebar. */
    <div className="fixed inset-0 lg:left-[280px] bg-[#FCFCFC] z-[1000] overflow-y-auto">
      <div className="max-w-5xl mx-auto p-4 md:p-10 flex flex-col gap-6">
        {/* 1. Back Button */}
        <div className="w-32">
          <BackButton />
        </div>

        <h2 className="font-bold text-[#414d58] text-2xl md:text-[32px]">
          Review your answers
        </h2>

        {/* CHANGE 2: Removed fixed w-[75%]. Now uses w-full with max-width container. */}
        <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-8">
          {/* Question Indicator */}
          <div className="bg-primary-green text-white w-fit px-5 py-2 rounded-full font-semibold text-sm">
            Question {currentq + 1} of {mockExamQuestions.length}
          </div>

          {/* Answer Card Wrapper */}
          <div className="min-h-[200px]">
            <MockExamAnswerCard i={currentq} />
          </div>

          {/* CHANGE 3: Responsive Pagination.
                       Added overflow-x-auto so numbers can be swiped on small screens. */}
          <div className="bg-primary-green flex items-center gap-2 p-2 rounded-xl overflow-x-auto no-scrollbar shadow-inner">
            <div className="flex items-center gap-2 mx-auto">
              {mockExamQuestions.map((_, i) => (
                <button
                  key={i}
                  className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg transition-all text-sm md:text-base
                                        ${
                                          currentq === i
                                            ? "bg-white text-primary-green font-bold scale-110 shadow-md"
                                            : "text-white hover:bg-white/20"
                                        } cursor-pointer`}
                  onClick={() => setCurrentq(i)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockExamReview;
