import { useExamStore } from "../../../static-data/useExamStore";
import Checkbox from "../../../assets/images/mock-exam-images/checkbox.png";
import Uncheckbox from "../../../assets/images/mock-exam-images/uncheckbox.png";
import { type Question } from "../../../static-data/useExamStore";

interface MockExamQuestionCardProps {
  question: Question;
  onAnswerSelect: (index: number) => void;
}

// OptionBox with refined responsive styles
export const OptionBox = ({
  value,
  isSelected,
}: {
  value: string;
  isSelected: boolean;
}) => {
  return (
    <div
      className={`flex gap-4 md:gap-6 border rounded-xl p-4 md:p-5 mb-3 cursor-pointer transition-all duration-200 
      ${
        isSelected
          ? "border-primary-green bg-primary-green/5 ring-1 ring-primary-green"
          : "border-gray-200 hover:border-primary-green/50 hover:bg-gray-50"
      }`}
    >
      <img
        src={isSelected ? Checkbox : Uncheckbox}
        className="w-6 h-6 flex-shrink-0"
        alt={isSelected ? "Selected" : "Unselected"}
      />
      <p className="text-[#414d58] text-base md:text-lg font-medium">{value}</p>
    </div>
  );
};

const MockExamQuestionCard = ({
  question,
  onAnswerSelect,
}: MockExamQuestionCardProps) => {
  const { userAnswers, selectAnswer } = useExamStore();

  if (!question) return null;

  const handleSelect = (optionIndex: number) => {
    // 1. Update Zustand store with the question ID and the chosen index
    selectAnswer(question.id, optionIndex);
    // 2. Notify parent to update the palette list
    onAnswerSelect(optionIndex);
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <h2 className="text-xl md:text-2xl text-[#414d58] font-bold leading-tight">
        {question.text}
      </h2>

      <div className="flex flex-col mt-2">
        {question.options.map((option, i) => (
          <div key={`${question.id}-${i}`} onClick={() => handleSelect(i)}>
            <OptionBox
              value={option}
              isSelected={userAnswers[question.id] === i}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockExamQuestionCard;
