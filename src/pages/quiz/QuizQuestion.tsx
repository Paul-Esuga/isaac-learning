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
import UncheckedRadio from '../../assets/images/quiz-images/unchecked-radio.png';
import CheckedRadio from '../../assets/images/quiz-images/checked-radio.png';
import SkipFlag from '../../assets/images/quiz-images/SkipFlag.png';


type questionType = { id: string; question: string; options: string[]; correctAnswer: string; }

const QuizQuestions = () => {
    const { id } = useParams();

    const [optionletters] = useState(["A", "B", "C", "D"])

    const [question, setQuestion] = useState<questionType[] | []>();
    const [currentQuestion, setCurrentQuestion] = useState(1)

    const [width, setWidth] = useState(0)

    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);


    const hideCorrectAnswer = useCallback(() => {
        setShowCorrectAnswer(false);
    }, [])

   



    useEffect(() => {
        setQuestion(QuizData.find(q => q.id == id)?.quizQuestions)
    })

     const Skip = () => {
        if(currentQuestion < (question ?? []).length){
            setCurrentQuestion(prev => prev + 1);
        }
    }



    const answered_options = (question ?? [])?.map(q => q)

    // Answered questions Object template to use to create to create an array to store answered questions.
    const answered_question_object = { questionId: "", optionId: "", ischecked: false }

    const [checkList, setCheckList] = useState(answered_options?.map(_ => answered_question_object))
    useEffect(() => {
        setWidth(prev => prev + 310)
    }, [checkList.length])
    
    useEffect(() => {setWidth(0)}, [])
  








    return (
        <div className="bg-[#FCFCFC] h-screen flex flex-col gap-[60px]  z-[1000] absolute top-[15px] left-[0] right-[0] p-[24px]">

            <div className="bg-primary-green overflow-y-scroll h-[700px] flex flex-col gap-[30px] w-[100%] rounded-[10px] px-[30px] py-[20px]">

                <div className="flex flex-col gap-[6px]">
                    <h1 className="text-[#f5f5f5] text-[18px] font-[600]">Question {currentQuestion} of {question?.length}</h1>
                    <div className="relative">
                        <div className="bg-[#fefefe]/30 rounded-[10px] h-[10px] w-[100%]"></div>
                        <div style={{ width: `${width}px`}} className={`bg-[#fefefe] h-[10px]  absolute top-0 rounded-l-[10px] ${width == 1550 && "rounded-r-[10px]"} `}></div>
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
                            <div key={i} className="flex justify-between items-center p-[20px] bg-[#27272A]/50 rounded-[8px] w-[600px] grow">
                                <div className="flex items-center gap-[12px]">
                                    <p className="text-[#fff] flex items-center justify-center font-[700] bg-[#000] p-[10px] w-[30px] h-[30px] rounded-[50%]">
                                        {optionletters[i]}
                                    </p>
                                    <p className="text-[#fff]">{q}</p>
                                </div>
                                <img src={checkList?.find(index => index.optionId == i.toString() && index.questionId == currentQuestion.toString())?.ischecked == true ? CheckedRadio : UncheckedRadio} className="cursor-pointer" onClick={() => setCheckList(prev => {
                                    const new_arr = [...prev];
                                    new_arr.splice(currentQuestion - 1, 1, { questionId: currentQuestion.toString(), optionId: i.toString(), ischecked: true })
                                    return new_arr;
                                })} />
                            </div>
                        ))
                    }
                </div>

                <div className="flex justify-between">

                    <button className="border-[#fff] border-[1px] rounded-[10px] w-[100px] px-[8px] py-[9px] flex items-center justify-center gap-[12px]" onClick={Skip}>
                        <img src={SkipFlag} alt="" />
                        <p className="text-[#fff] font-[600]">Skip</p>
                    </button>

                    <button className="flex flex-col items-center" onClick={() => setShowCorrectAnswer(true)}>
                        <p className="text-[#fff] font-[600]">See answer</p>
                        <div className="w-[80px] h-[1px] bg-[#fff]"/>
                    </button>
                </div>



                <div className="m-[auto] bg-[#fdfefe]/30 flex justify-between  items-center w-[75%] px-[50px] py-[7px] rounded-[8px]">
                    {
                        question?.map((_, i) => <button key={i} className={`${currentQuestion == i + 1 ? "bg-[#fff] py-[10px] px-[20px] rounded-[10px]" : ""} cursor-pointer`} onClick={() => setCurrentQuestion(i + 1)}>{i + 1}</button>)
                    }
                </div>

                {
                    showCorrectAnswer && <CorrectAnswerCard correctAnswer={(question ?? [])[currentQuestion - 1].correctAnswer} setShowCorrectAnswer={hideCorrectAnswer} Nosplit={true}/>
                }
            </div>
        </div>
    )
}

export default QuizQuestions