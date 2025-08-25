// React Hooks
import { useState } from "react";

// Data
import mockExamQuestions from "../../static-data/MockExamQuestions"

// Components
import MockExamAnswerCard from "../../components/mock-exam-components/mock-exam-answer-card/MockExamAnswerCard";

const MockExamReview = () => {

    const [currentq, setCurrentq] = useState(0)

    

    return (
        <div className="bg-[#FCFCFC] h-screen flex flex-col gap-[60px]  z-[1000] absolute top-[15px] left-[0] right-[0] p-[24px]">
            <div>
                <h2 className="font-[700] text-[414d58] text-[24px]">Review your answers</h2>

                <div className="bg-[#fff] py-[20px] px-[10px] rounded-[10px] w-[75%] h-[fit-content] flex flex-col gap-[24px]">

                    <div className="bg-primary-green text-[#fff] w-[130px] p-[10px] rounded-[100px]">
                        Question {currentq + 1}/{mockExamQuestions.length}
                    </div>

                    <div>
                        {
                            <MockExamAnswerCard i={currentq}/>
                        }
                    </div>

                    <div className="bg-primary-green flex justify-between items-center w-[75%] px-[50px] py-[7px] rounded-[8px]">
                        {
                            mockExamQuestions.map((_, i) =>
                                <p key={i} className={`${currentq == i ? "bg-[#fff] font-[700] px-[17px] py-[9px] rounded-[8px] text-primary-green" : " text-[#fff] text-center"} cursor-pointer`} onClick={() => {setCurrentq(i)}}>{i + 1}</p>
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MockExamReview