// React Router Hooks
import { useParams } from "react-router-dom";

// React Hooks
import { useCallback, useEffect, useState } from "react";

// Data
import QuizData from "../../static-data/QuizData";

// Components
import QuizTimer from "../../components/quiz-timer/QuizTimer";
import CorrectAnswerCard from "../../components/correct-answer-card/CorrectAnswerCard";

// Assets
import UncheckedRadio from "../../assets/images/quiz-images/unchecked-radio.png";
import CheckedRadio from "../../assets/images/quiz-images/checked-radio.png";
import SkipFlag from "../../assets/images/quiz-images/SkipFlag.png";

type questionType = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
};

const QuizQuestions = () => {
  const { id } = useParams();
  const [optionletters] = useState(["A", "B", "C", "D"]);
  const [question, setQuestion] = useState<questionType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  // FIX 1: Percentage-based progress bar calculation
  const progressPercentage =
    question.length > 0 ? (currentQuestion / question.length) * 100 : 0;

  const hideCorrectAnswer = useCallback(() => {
    setShowCorrectAnswer(false);
  }, []);

  useEffect(() => {
    const quiz = QuizData.find((q) => q.id === id);
    if (quiz) setQuestion(quiz.quizQuestions);
  }, [id]);

  const Skip = () => {
    if (currentQuestion < question.length) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  // State for tracking answers
  const [checkList, setCheckList] = useState<
    { questionId: string; optionId: string; ischecked: boolean }[]
  >([]);

  return (
    /* CHANGE 2: Responsive Container
           Removed absolute positioning and w-screen/h-screen conflicts.
           Using fixed inset to ensure it covers the dashboard properly. */
    <div className="fixed inset-0 lg:left-[280px] bg-[#FCFCFC] z-[1000] overflow-y-auto">
      <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-10 flex flex-col gap-6">
        <div className="bg-primary-green w-full rounded-xl p-5 md:p-8 flex flex-col gap-8 shadow-2xl">
          {/* Progress Bar Section */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[#f5f5f5] text-base md:text-lg font-semibold">
              Question {currentQuestion} of {question?.length}
            </h1>
            <div className="relative w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
              {/* FIX 3: Dynamic width based on percentage */}
              <div
                style={{ width: `${progressPercentage}%` }}
                className="bg-white h-full transition-all duration-500 ease-out rounded-full"
              />
            </div>
          </div>

          {/* Question Header */}
          <div className="flex flex-col gap-4 bg-[#27272A]/40 rounded-xl p-4 md:p-6">
            <div className="flex justify-between items-center gap-4">
              <h1 className="px-4 py-1.5 bg-white text-primary-green text-sm font-bold rounded-full">
                20 points
              </h1>
              <QuizTimer
                timerCount={
                  QuizData.find((q) => q.id == id)?.quizDuration as string
                }
              />
            </div>

            <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-bold leading-tight">
              {
                question.find((q) => q.id === currentQuestion.toString())
                  ?.question
              }
            </h1>
          </div>

          {/* Options Grid */}
          {/* CHANGE 4: Responsive Options Layout
                       1 Column on mobile, 2 columns on larger screens. Removed fixed w-[600px]. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question
              .find((q) => q.id === currentQuestion.toString())
              ?.options.map((option, i) => (
                <div
                  key={i}
                  onClick={() =>
                    setCheckList((prev) => {
                      const filtered = prev.filter(
                        (item) => item.questionId !== currentQuestion.toString()
                      );
                      return [
                        ...filtered,
                        {
                          questionId: currentQuestion.toString(),
                          optionId: i.toString(),
                          ischecked: true,
                        },
                      ];
                    })
                  }
                  className="flex justify-between items-center p-4 md:p-5 bg-black/20 hover:bg-black/30 border border-white/10 rounded-xl cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <p className="flex items-center justify-center font-bold bg-black text-white w-8 h-8 rounded-full text-sm">
                      {optionletters[i]}
                    </p>
                    <p className="text-white text-sm md:text-base">{option}</p>
                  </div>
                  <img
                    src={
                      checkList.find(
                        (item) =>
                          item.optionId === i.toString() &&
                          item.questionId === currentQuestion.toString()
                      )?.ischecked
                        ? CheckedRadio
                        : UncheckedRadio
                    }
                    className="w-6 h-6"
                    alt="radio"
                  />
                </div>
              ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-4">
            <button
              className="border-white/50 border rounded-xl px-6 py-2.5 flex items-center gap-3 text-white font-semibold hover:bg-white/10 transition-colors"
              onClick={Skip}
            >
              <img src={SkipFlag} alt="skip" className="w-4 h-4" />
              <span>Skip</span>
            </button>

            <button
              className="flex flex-col items-center group"
              onClick={() => setShowCorrectAnswer(true)}
            >
              <p className="text-white font-semibold group-hover:opacity-80">
                See answer
              </p>
              <div className="w-16 h-0.5 bg-white mt-1 transform scale-x-100 group-hover:scale-x-110 transition-transform" />
            </button>
          </div>

          {/* Pagination Numbers */}
          {/* CHANGE 5: Horizontal scroll for numbers if they exceed width on mobile */}
          <div className="bg-white/10 flex justify-start md:justify-center items-center gap-2 w-full max-w-lg mx-auto p-2 rounded-xl overflow-x-auto no-scrollbar">
            {question.map((_, i) => (
              <button
                key={i}
                className={`flex-shrink-0 w-10 h-10 rounded-lg font-bold transition-all ${
                  currentQuestion === i + 1
                    ? "bg-white text-primary-green scale-110 shadow-lg"
                    : "text-white hover:bg-white/20"
                }`}
                onClick={() => setCurrentQuestion(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {showCorrectAnswer && (
          <CorrectAnswerCard
            correctAnswer={question[currentQuestion - 1]?.correctAnswer}
            setShowCorrectAnswer={hideCorrectAnswer}
            Nosplit={true}
          />
        )}
      </div>
    </div>
  );
};

export default QuizQuestions;
