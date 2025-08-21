import mockExamQuestions from "../../../static-data/MockExamQuestions";

// React Hooks
import { useContext } from "react";

// Assets
import Checkbox from '../../../assets/images/mock-exam-images/checkbox.png';
import Uncheckbox from '../../../assets/images/mock-exam-images/uncheckbox.png';

// Context Apis
import { MockExamContext } from "../../../context/MockExamContext";

// Types
type MockExamQuestionCardProps = {
  index: number | undefined;
  func: (i: number) => void;
};

type QuestionsType = {
  questionIndex: number;
  optionChosen: string;
};

type OptionBoxProps = {
  value: string;
  questionIndex: number;
};

export const OptionBox = ({ value, questionIndex }: OptionBoxProps) => {
  const MockContext = useContext(MockExamContext);

  const isSelected = MockContext?.doneQuestions.some(
    item => item.questionIndex === questionIndex && item.optionChosen === value
  );

  return (
    <div className="flex gap-[24px] border-[1px] rounded-[10px] p-[20px] mb-10px cursor-pointer">
      <img
        src={isSelected ? Checkbox : Uncheckbox}
        className="w-[24px] h-[24px]"
        alt={isSelected ? "Selected" : "Unselected"}
      />
      <p className="text-[#414d58] text-[18px]">{value}</p>
    </div>
  );
};

const MockExamQuestionCard = ({ index, func }: MockExamQuestionCardProps) => {

  const MockContext = useContext(MockExamContext);

  const setDoneQuestions = (q: QuestionsType) => {
    MockContext?.setDoneQuestions(prev => {
      const updated = [...prev];
      const existingIndex = updated.findIndex(
        item => item.questionIndex === q.questionIndex
      );

      if (existingIndex !== -1) {
        updated[existingIndex] = q; 
      } else {
        updated.push(q);
      }

      return updated;
    });
    console.log(MockContext?.doneQuestions);
  };


  const questionData = mockExamQuestions[index ?? 0];

  return (
    <div className="flex flex-col gap-[24px]">
      <h2 className="text-[20px] text-[#414d58] font-[700]">
        {questionData.question}
      </h2>

      {questionData.options.map((option, i) => (
        <div
          key={i}
          onClick={() => {
            func(i);
            setDoneQuestions({
              questionIndex: index ?? 0,
              optionChosen: option,
            });
          }}
        >
          <OptionBox value={option} questionIndex={index ?? 0} />
        </div>
      ))}
    </div>
  );
};

export default MockExamQuestionCard;

