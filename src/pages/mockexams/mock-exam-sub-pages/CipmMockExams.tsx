// React Hook
import { useContext, useState, useCallback } from "react";

// Data
import mockExamQuestions from "../../../static-data/MockExamQuestions";

// Components
import MockExamQuestionCard from "../../../components/mock-exam-components/mock-exam-question-card/MockExamQuestionCard";
import MocExamSubmitComponenet from "../../../components/mock-exam-components/mock-exam-submit-componenet/MockExamSubmitComponenet";
import BackButton from "../../../components/back-button/BackButton"; // Import added

// Context Apis
import { MockExamContext } from "../../../context/MockExamContext";

const CipmMockExams = () => {
  const [showSubmitExam, setShowSubmitExam] = useState(false);
  const MockContext = useContext(MockExamContext);

  const add_question_to_clicked_list = (i: number) => {
    MockContext?.setClicked_questions_list((prev) => {
      return prev.includes(i + 1) ? prev : [...prev, i + 1];
    });
  };

  const handleSubmit = () => {
    setShowSubmitExam(true);
  };

  const removeSubmit = useCallback(() => {
    setShowSubmitExam(false);
  }, []);

  return (
    <div className="fixed inset-0 lg:left-[280px] bg-[#f8fcfc] z-[1000] overflow-y-auto p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* --- BACK BUTTON ADDED HERE --- */}
        <div className="w-32">
          <BackButton />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
          {/* Main Question Area */}
          <div className="bg-white py-5 px-4 md:px-6 rounded-2xl shadow-sm w-full lg:w-[70%] h-fit flex flex-col gap-6">
            <div className="bg-primary-green text-white w-fit px-5 py-2 rounded-full font-semibold text-sm">
              Question {(MockContext?.questionIndex as number) + 1} of{" "}
              {mockExamQuestions.length}
            </div>

            <div className="min-h-[300px]">
              <MockExamQuestionCard
                index={MockContext?.questionIndex}
                func={() =>
                  add_question_to_clicked_list(
                    MockContext?.questionIndex as number
                  )
                }
              />
            </div>
          </div>

          {/* Right Side: Question Palette */}
          <div className="bg-white w-full lg:w-[30%] h-fit py-6 px-5 rounded-2xl shadow-sm flex flex-col gap-6">
            <p className="font-bold text-[#414d58] border-b pb-2">
              Question Palette
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {mockExamQuestions.map((_, i) => (
                <div
                  key={i}
                  onClick={() => MockContext?.setQuestionIndex(i)}
                  className={`cursor-pointer text-sm font-bold flex items-center justify-center w-10 h-10 rounded-full transition-all
                                    ${
                                      MockContext?.clicked_questions_list.includes(
                                        i + 1
                                      )
                                        ? "bg-primary-green/10 border-2 border-primary-green text-primary-green"
                                        : "bg-gray-100 text-gray-500"
                                    }
                                    ${
                                      MockContext?.questionIndex === i
                                        ? "ring-2 ring-offset-2 ring-primary-green"
                                        : ""
                                    }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <button
              className="bg-primary-green w-full py-3 text-white font-bold rounded-xl shadow-lg hover:bg-opacity-90 active:scale-95 transition-all"
              onClick={handleSubmit}
            >
              Submit Exam
            </button>
          </div>
        </div>

        {/* Bottom Swipable Pagination */}
        <div className="bg-primary-green flex items-center gap-2 p-2 rounded-xl overflow-x-auto no-scrollbar shadow-lg">
          <div className="flex items-center gap-2 mx-auto">
            {mockExamQuestions.map((_, i) => (
              <button
                key={i}
                className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg transition-all text-sm
                                    ${
                                      MockContext?.questionIndex === i
                                        ? "bg-white text-primary-green font-bold scale-110 shadow-md"
                                        : "text-white hover:bg-white/20"
                                    } cursor-pointer`}
                onClick={() => MockContext?.setQuestionIndex(i)}
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
