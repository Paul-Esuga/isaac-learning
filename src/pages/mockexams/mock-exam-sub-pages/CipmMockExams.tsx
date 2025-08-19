// React Hook
import { useState } from "react";

// Data
import mockExamQuestions from "../../../static-data/MockExamQuestions"

// Componenets
import { ProceedButton } from "../../../components/utils/ProceedButton";
import MockExamQuestionCard from "../../../components/mock-exam-components/mock-exam-question-card/MockExamQuestionCard";

const CipmMockExams = () => {

    const [clicked_questions_list, setClicked_questions_list] = useState<number[]>([])

    const [questionIndex, setQuestionIndex] = useState(0)


    const add_question_to_clicked_list = (i: number) => {
        setClicked_questions_list(prev => [...prev, i + 1])
    }

    const handleSubmit = () => {

    }

    return (
        <div className="bg-[#f8fcfc] h-screen flex flex-col gap-[60px]  z-[1000] absolute top-[15px] left-[0] right-[0] p-[30px]">

            <div className="flex gap-[60px]">
                <div className="bg-[#fff] py-[20px] px-[10px] rounded-[10px] w-[75%] h-[fit-content] flex flex-col gap-[24px]">

                    <div className="bg-primary-green text-[#fff] w-[130px] p-[10px] rounded-[100px]">
                        Question {questionIndex + 1}/{mockExamQuestions.length}
                    </div>

                    <div className="">
                        <MockExamQuestionCard index={questionIndex} func={() => add_question_to_clicked_list(questionIndex)} />
                    </div>

                </div>

                <div className="shadow-xs bg-[#fff] w-[20%] h-[fit-content] py-[20px] px-[10px] rounded-[10px] flex flex-col items-left gap-[24px]">
                    <p className="font-[600] ">Question pallete</p>
                    <div className="flex flex-wrap items-center">
                        {
                            mockExamQuestions.map((_, i) =>
                                <div className={`bg-[#f0f0f0] cursor-pointer text-[#414d58] font-[600] flex items-center justify-center w-[44px] h-[44px] rounded-[50%] m-[5px] ${clicked_questions_list.includes(i + 1) ? "border-[#00A36C] border-[3px]" : ""}`}>
                                    {i + 1}
                                </div>
                            )
                        }
                        {/* {
                            mockExamQuestions.length > 5 &&
                                <div className={`bg-[#f0f0f0] cursor-pointer text-[#414d58] text-center font-[600] flex items-center justify-center w-[44px] h-[44px] rounded-[50%] m-[5px]`}>
                                    ...
                                </div>
                         
                        } */}
                    </div>
                    <ProceedButton style="bg-primary-green px-[56px] py-[12px] text-[#fff] font-[700] rounded-[100px]" value="submit exam" func={handleSubmit} />
                </div>
            </div>

            <div className="bg-primary-green flex justify-between items-center w-[75%] px-[50px] py-[7px] rounded-[8px]">
                {
                    mockExamQuestions.map((_, i) =>
                        <p className={`${questionIndex == i ? "bg-[#fff] font-[700] px-[17px] py-[9px] rounded-[8px] text-primary-green" : " text-[#fff] text-center"} cursor-pointer`} onClick={() => setQuestionIndex(i)}>{i + 1}</p>
                    )
                }
            </div>

        </div>
    )
}

export default CipmMockExams