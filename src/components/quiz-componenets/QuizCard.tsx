// Assets
import BookImage from "../../assets/images/quiz-images/book.png";
import QuizQuestionImage from "../../assets/images/quiz-images/quiz-questions.png";
import QuizClock from "../../assets/images/quiz-images/quiz-clock.png";
import QuizCompletors from "../../assets/images/quiz-images/quiz-completors.png";

// Components
import { ProceedButton } from "../utils/ProceedButton";

export enum category_value {
  Tertiary = "Tertiary",
  Secondary = "Secondary",
  Foundational = "Foundational",
}

type QuizCardProps = {
  id: string;
  title: string;
  category:
    | category_value.Foundational
    | category_value.Secondary
    | category_value.Tertiary;
  topic: string;
  questionCount: string;
  quizDuration: string;
  completors: string;
};

const QuizCard = ({
  id,
  title,
  category,
  topic,
  questionCount,
  quizDuration,
  completors,
}: QuizCardProps) => {
  return (
    /* CHANGE 1: Flex-col on mobile, flex-row on desktop.
           Added 'gap-6' for spacing when items stack. */
    <div className="bg-white flex flex-col md:flex-row md:items-center justify-between p-4 md:px-[20px] md:py-[20px] rounded-xl w-full shadow-sm hover:shadow-md transition-shadow border border-gray-50 md:border-none gap-6">
      <div className="flex gap-4 items-start md:items-center">
        {/* CHANGE 2: Responsive Book Icon size */}
        <img
          src={BookImage}
          className="h-10 md:h-[50px] object-contain"
          alt="quiz icon"
        />

        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-primary-green font-bold text-base md:text-lg">
                {title}
              </h2>

              {/* CHANGE 3: Responsive Category Badge */}
              <p
                className={`${
                  category === "Foundational"
                    ? "bg-primary-green"
                    : category === "Secondary"
                    ? "bg-[#5DADE2]"
                    : "bg-[#B29600]"
                } text-white text-[10px] md:text-xs font-semibold rounded-full px-3 py-1 uppercase tracking-wider`}
              >
                {category}
              </p>
            </div>

            <p className="text-primary-green/80 text-sm font-medium">{topic}</p>
          </div>

          {/* CHANGE 4: Info Icons wrap on very small screens */}
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <div className="flex items-center gap-1.5">
              <img
                src={QuizQuestionImage}
                className="w-3.5 h-3.5"
                alt="questions"
              />
              <p className="text-[#999999] text-xs md:text-sm">
                {questionCount} questions
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <img src={QuizClock} className="w-3.5 h-3.5" alt="duration" />
              <p className="text-[#999999] text-xs md:text-sm">
                {quizDuration} min
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <img
                src={QuizCompletors}
                className="w-3.5 h-3.5"
                alt="completors"
              />
              <p className="text-[#999999] text-xs md:text-sm">
                {completors} completors
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CHANGE 5: Full-width button on mobile */}
      <div className="w-full md:w-auto">
        <ProceedButton
          style="bg-primary-green font-bold px-6 py-3 md:py-2.5 text-white rounded-xl w-full md:w-auto text-center block transition-transform active:scale-95"
          destination={`/dashboard/quiz/start-quiz/${id}`}
          value="Take quiz"
        />
      </div>
    </div>
  );
};

export default QuizCard;
