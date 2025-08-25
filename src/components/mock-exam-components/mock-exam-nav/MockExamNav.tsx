// Componenets
import MockExamTimer from '../mock-exam-timer/MockExamTimer'
import MockExamProgressBar from "../mock-exam-progress-bar/MockExamProgressBar";
import MockExamScore from '../mock-exam-score/MockExamScore';



const MockExamNav = () => {


    return(
        <div className="flex flex-col w-[90%] gap-[10px] pt-[10px] pb-[10px] mt-[-30px] z-[1000]">
            <div className='flex justify-between items-center'>
                <h1 className="text-[24px] text-[#414d58] font-[700]">CIPM MOCK EXAM</h1>
                <MockExamTimer/>
                {/* <MockExamScore/> */}
            </div>
            <MockExamProgressBar/>
        </div>
    )
}

export default MockExamNav