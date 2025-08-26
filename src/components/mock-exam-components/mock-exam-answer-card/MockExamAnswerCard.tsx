import { useCallback, useContext, useState } from 'react';

// Assets
import Checkedbox from '../../../assets/images/mock-exam-images/checkbox.png';
import Uncheckedbox from '../../../assets/images/mock-exam-images/uncheckbox.png';
import ErrorCheckedbox from '../../../assets/images/mock-exam-images/error-checkbox.png';
import Close from '../../../assets/images/Close.png';

// Componenets
import CorrectAnswerCard from '../../correct-answer-card/CorrectAnswerCard';

// Data
import mockExamQuestions from '../../../static-data/MockExamQuestions';

// Context
import { MockExamContext } from '../../../context/MockExamContext';

type OptionBoxProps = {
    value: string;
    i: number;
};

const OptionBox = ({ value, i }: OptionBoxProps) => {
    const MockContext = useContext(MockExamContext);

    const currentQuestion = mockExamQuestions[i];
    const userAnswer = MockContext?.doneQuestions.find(q => q.questionIndex === i);

    let checkboxImage = Uncheckedbox;

    if (userAnswer) {
        if (userAnswer.optionChosen === value) {
            checkboxImage = value === currentQuestion.correctAnswer ? Checkedbox : ErrorCheckedbox;
        }
    }

    return (
        <div className="flex gap-[24px] border-[1px] rounded-[10px] p-[20px] mb-10px cursor-pointer">
            <img src={checkboxImage} className="w-[24px] h-[24px]" />
            <p className="text-[#414d58] text-[18px]">{value}</p>
        </div>
    );
};


type MockExamAnswerCardProps = {
    i: number;
};

const MockExamAnswerCard = ({ i }: MockExamAnswerCardProps) => {
    const MockContext = useContext(MockExamContext);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

    const currentQuestion = mockExamQuestions[i];
    const userAnswer = MockContext?.doneQuestions.find(q => q.questionIndex === i);
    const isIncorrect = userAnswer && userAnswer.optionChosen !== currentQuestion.correctAnswer;

    const hideCorrectAnswerCard = useCallback(() => {
        setShowCorrectAnswer(false);
    }, [])

    return (
        <div className="flex flex-col gap-[24px] border p-[20px] rounded-[10px]">
            <h2 className="text-[20px] text-[#414d58] font-[700]">
                {currentQuestion.question}
            </h2>

            {currentQuestion.options.map((option, index) => (
                <OptionBox key={index} value={option} i={i} />
            ))}

            {isIncorrect ? (
                <div className="flex justify-between items-center mt-[20px]">
                    <p style={{ textDecoration: 'underline' }} className="text-red-500 text-[16px] text-line font-medium">
                        Wrong
                    </p>
                    <button
                        onClick={() => setShowCorrectAnswer(true)}
                        className="border-[1px] border-[#00A36C] text-[#00A36C] px-4 py-2 rounded-[10px] font-[700]"
                    >
                        See Correct Answer
                    </button>
                </div>
            )
                : <p style={{ textDecoration: 'underline' }} className="text-primary-green text-[16px] text-line font-medium">
                    Correct
                </p>
            }

            {showCorrectAnswer && isIncorrect && (
                <CorrectAnswerCard correctAnswer={currentQuestion.correctAnswer} setShowCorrectAnswer={hideCorrectAnswerCard}/>
            )}
        </div>
    );
};

export default MockExamAnswerCard;

