// React Router Hooks
import { useParams } from "react-router-dom"



const QuizQuestions = () => {
    const { id } = useParams();

    return(
        <div className="bg-[#FCFCFC] h-screen flex flex-col gap-[60px]  z-[1000] absolute top-[15px] left-[0] right-[0] p-[24px]">
            <h1>Quiz Questions {id}</h1>
        </div>
    )
}

export default QuizQuestions