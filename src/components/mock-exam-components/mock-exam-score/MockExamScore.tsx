
// Data
import mockExamQuestions from "../../../static-data/MockExamQuestions";


const MockExamScore = () => {
    return(
        <div className="flex items-center gap-[10px]">
            <p className="text-[#7f8c8d]">Score:</p>
            <div className="text-[#414d58] text-[24px] font-[700]">0/<span>{mockExamQuestions.length}</span></div>
        </div>
    )
}

export default MockExamScore;