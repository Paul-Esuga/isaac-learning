// React Router Hooks
import { Outlet } from 'react-router-dom';


// Assets
import MockExamTimeIcon from '../../assets/images/mock-exam-images/mock-exam-time-icon.png';
import MockExamQuestionIcon from '../../assets/images/mock-exam-images/mock-exam-question-icon.png';
import MockExamLikeICon from '../../assets/images/mock-exam-images/mock-exam-like-icon.png';
import MockExamTipIcon from '../../assets/images/mock-exam-images/mock-exam-tip-icon.png';

// Componenets
import MockExamDetailsCard from "../../components/mock-exam-components/mock-exam-details-card/MockExamDetailsCard";

// Utils
import { ProceedButton } from '../../components/utils/ProceedButton';

const MockExams = () => {

    document.title = "Dashboard | Mock Exam";

    return (
        <div className="bg-[#f8fcfc] overflow-auto h-[700px] w-[100%] px-[124px] py-[40px]">
            <div className='flex flex-col gap-[24px]'>

                <div>
                    <h1 className="text-[#414d58] font-[700] text-[30px]">Ready to excel?</h1>
                    <p className="text-[#7f8c8d]">Embrace CIPM exam without fear and prepare ahead john.</p>
                </div>

                <div className="bg-[#fff] p-[20px] flex flex-col gap-[24px] rounded-[10px]">

                    <div>
                        <h3 className="text-[#414d58] font-[700] text-[24px]">CIPM level 1 mock exam</h3>
                        <p className="font-[400] text-[18px] text-[#414d58] w-[90%]">
                            Think of this as your personal practice space, no pressure, just an opportunity to grow and learn as you prepare for your CIPM exam.
                            Every question brings you one step closer to mastery.
                            Remember, it’s not just about the destination, it is the progress you make along the way.
                        </p>
                    </div>

                    <div className='flex gap-[200px] justify-center items-center px-[80px]'>
                        <MockExamDetailsCard img={MockExamTimeIcon} text='Duration' duration='60 minutes' />
                        <MockExamDetailsCard img={MockExamQuestionIcon} text='Questions' duration='50 question' />
                    </div>

                    <div className='flex flex-col gap-[16px] rounded-[10px] bg-[#5DADE21A] p-[20px] w-[90%]'>

                        <div className='flex gap-[10px] items-center'>
                            <img src={MockExamLikeICon} />
                            <p className='text-[#414d58] text-[20px] font-[500]'>Quick tip for success</p>
                        </div>

                        <div className='flex flex-col gap-[10px] pl-[50px]'>
                            <Tip text='Take your time, the timer helps you pace yourself' />
                            <Tip text='Feel free to review and adjust your answers' />
                            <Tip text='Instant results to track your progress and achievements' />
                        </div>

                    </div>

                    <ProceedButton style='bg-primary-green w-[90%] px-[300px] py-[12px] text-[#fff] font-[700] rounded-[10px]' destination='cipm-mock-exam' value='start mock exam' />

                </div>

            </div>

            <div className='mt-[100px] '>
                <Outlet />
            </div>
        </div>
    )
}

export default MockExams;

type TipProps = {
    text: string
}

const Tip = ({ text }: TipProps) => {

    return (
        <div className='flex gap-[10px]'>
            <img src={MockExamTipIcon} />
            <p className='text-[#414d58]'>{text}</p>
        </div>
    )
}