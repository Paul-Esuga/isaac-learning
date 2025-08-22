// React Hook
import { useContext, useState, useCallback } from "react";

// Data
import mockExamQuestions from "../../../static-data/MockExamQuestions"

// Componenets
import MockExamQuestionCard from "../../../components/mock-exam-components/mock-exam-question-card/MockExamQuestionCard";
import MocExamSubmitComponenet from "../../../components/mock-exam-components/mock-exam-submit-componenet/MockExamSubmitComponenet";

// Context Apis
import { MockExamContext } from "../../../context/MockExamContext";



const CipmMockExams = () => {

    const [showSubmitExam, setShowSubmitExam] = useState(false);

    const MockContext = useContext(MockExamContext)




    const add_question_to_clicked_list = (i: number) => {
        MockContext?.setClicked_questions_list(prev => {
            return prev.includes(i + 1) ? prev : [...prev, i + 1];
        });
    }

    const handleSubmit = () => {
        setShowSubmitExam(true);
    }

    const removeSubmit = useCallback(() => {
        setShowSubmitExam(false);
    }, [])

    return (
        <div className="bg-[#f8fcfc] h-screen flex flex-col gap-[60px]  z-[1000] absolute top-[15px] left-[0] right-[0] p-[30px]">

            <div className="flex gap-[60px]">
                <div className="bg-[#fff] py-[20px] px-[10px] rounded-[10px] w-[75%] h-[fit-content] flex flex-col gap-[24px]">

                    <div className="bg-primary-green text-[#fff] w-[130px] p-[10px] rounded-[100px]">
                        Question {(MockContext?.questionIndex as number) + 1}/{mockExamQuestions.length}
                    </div>

                    <MockExamQuestionCard index={MockContext?.questionIndex} func={() => add_question_to_clicked_list(MockContext?.questionIndex as number)} />

                </div>

                <div className="shadow-xs bg-[#fff] w-[20%] h-[fit-content] py-[20px] px-[10px] rounded-[10px] flex flex-col items-left gap-[24px]">
                    <p className="font-[600] ">Question pallete</p>
                    <div className="flex flex-wrap items-center">
                        {
                            mockExamQuestions.map((_, i) =>
                                <div key={i} className={`bg-[#f0f0f0] cursor-pointer text-[#414d58] font-[600] flex items-center justify-center w-[44px] h-[44px] rounded-[50%] m-[5px] ${MockContext?.clicked_questions_list.includes(i + 1) ? "border-[#00A36C] border-[3px]" : ""}`}>
                                    {i + 1}
                                </div>
                            )
                        }

                    </div>
                    {/* <ProceedButton style="bg-primary-green px-[56px] py-[12px] text-[#fff] font-[700] rounded-[100px]" value="submit exam" func={() => console.log('clicked')} /> */}
                    <button className="bg-primary-green px-[56px] py-[12px] text-[#fff] font-[700] rounded-[100px]" onClick={handleSubmit}>submit exam</button>
                </div>
            </div>

            <div className="bg-primary-green flex justify-between items-center w-[75%] px-[50px] py-[7px] rounded-[8px]">
                {
                    mockExamQuestions.map((_, i) =>
                        <p key={i} className={`${MockContext?.questionIndex == i ? "bg-[#fff] font-[700] px-[17px] py-[9px] rounded-[8px] text-primary-green" : " text-[#fff] text-center"} cursor-pointer`} onClick={() => MockContext?.setQuestionIndex(i)}>{i + 1}</p>
                    )
                }
            </div>

            {
                showSubmitExam &&  <MocExamSubmitComponenet removeSubmit={removeSubmit}/>
            }

        </div>
    )
}

export default CipmMockExams