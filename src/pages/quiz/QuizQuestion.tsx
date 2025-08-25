// React Router Hooks
import { useParams } from "react-router-dom";

// React Hooks
import { useEffect, useState } from "react";

// Data
import QuizData from "../../static-data/QuizData";

// Components
import QuizTimer from "../../components/quiz-timer/QuizTimer";


type questionType = { id: string; question: string; options: string[]; correctAnswer: string; }

const QuizQuestions = () => {
    const { id } = useParams();

    const [optionletters] = useState(["A", "B", "C", "D"])

    const [question, setQuestion] = useState<questionType[] | []>();
    const [currentQuestion, setCurrentQuestion] = useState(1)

    useEffect(() => {
        setQuestion(QuizData.find(q => q.id == id)?.quizQuestions)
    })

    const width = 50

    return (
        <div className="bg-[#FCFCFC] h-screen flex flex-col gap-[60px]  z-[1000] absolute top-[15px] left-[0] right-[0] p-[24px]">

            <div className="bg-primary-green flex flex-col gap-[30px] w-[100%] rounded-[10px] px-[30px] py-[20px]">

                <div className="flex flex-col gap-[6px]">
                    <h1 className="text-[#f5f5f5] text-[18px] font-[600]">Question 1 of {question?.length}</h1>
                    <div className="relative">
                        <div className="bg-[#fefefe]/30 rounded-[10px] h-[10px] w-[100%]"></div>
                        <div className={`bg-[#fefefe] h-[10px]  absolute top-0 rounded-l-[10px] ${width >= 100 ? "w-[100%] rounded-r-[10px]" : "w-[50%]"}`}></div>
                    </div>
                </div>

                <div className="flex flex-col gap-[10px] bg-[#27272A]/50 rounded-[8px] px-[14px] py-[12px]">
                    <div className="flex justify-between items-center">
                        <h1 className="p-[10px] bg-[#ffffff] rounded-[100px]">20 points</h1>
                        <QuizTimer timerCount={QuizData.find(q => q.id == id)?.quizDuration as string} />
                    </div>

                    <h1 className="text-[24px] text-[#fff] font-[700]">
                        {
                            question?.filter(q => q.id == currentQuestion.toString()).map(q => q.question)
                        }
                    </h1>
                </div>

                <div className="flex flex-wrap gap-[24px]">
                    {
                        question?.filter(q => q.id == currentQuestion.toString()).map(q => q.options.map((q, i) =>
                            <div className="flex gap-[12px] items-center p-[20px] bg-[#27272A]/50 rounded-[8px] w-[600px] grow">
                                <p className="text-[#fff] flex items-center justify-center font-[700] bg-[#000] p-[10px] w-[30px] h-[30px] rounded-[50%]">
                                    {optionletters[i]}
                                </p>
                                <p className="text-[#fff]">{ q }</p>
                            </div>
                        ))
                    }
                    {/* <div className="flex gap-[12px] items-center p-[20px] bg-[#27272A]/50 rounded-[8px] w-[490px] grow">
                        <p className="text-[#fff] flex items-center justify-center font-[700] bg-[#000] p-[10px] w-[30px] h-[30px] rounded-[50%]">
                            { optionletters[0]}
                        </p>
                        <p className="text-[#fff]">
                           {
                            question?.filter(q => q.id == currentQuestion.toString()).map(q => q.options[1])
                        } 
                        </p>
                    </div> */}
                </div>



                <div className="bg-[#fdfefe]/30 flex justify-between  items-center w-[75%] px-[50px] py-[7px] rounded-[8px]">
                    {
                        question?.map((_, i) => <button key={i} className={`${currentQuestion == i + 1 ? "bg-[#fff] py-[10px] px-[20px] rounded-[10px]" : ""} cursor-pointer`} onClick={() => setCurrentQuestion(i + 1)}>{i + 1}</button>)
                    }
                </div>
            </div>
        </div>
    )
}

export default QuizQuestions