// React Router Hooks
import { useNavigate } from 'react-router-dom';

// React Hooks
import { useState } from 'react';

// Assets
import QuestionMark from '../../../assets/images/mock-exam-images/question-mark.png';

type MocExamSubmitComponenetProps = {
    removeSubmit: () => void
}

const MocExamSubmitComponenet = ({ removeSubmit }: MocExamSubmitComponenetProps) => {

    const [showResult, setShowResult] = useState(false)

    const navigate = useNavigate();

    return (
        <div className="shadow-2xl backdrop-blur-xs h-screen w-screen absolute top-[-100px]  left-[-300px] flex items-center justify-center">

            {
                showResult ?

                    <div className='shadow-md flex flex-col items-center justify-center gap-[20px] bg-[#fff] py-[24px] px-[50px] rounded-[20px] text-center'>
                        <p className='w-[450px] text-[#414d58] font-[700] text-[20px]'>
                            Dear John, weldone. You have successfully completed your mock exam and you can now see results or go back to homepage to continue learning
                        </p>
                        <div className='flex gap-[24px]'>
                            <button className='bg-[#F5F5F5] rounded-[10px] px-[20px] py-[14px] font-[700] text-[#414d58]' onClick={() => navigate("/dashboard")}>Back to homepage</button>
                            <button className='bg-[#00A36C] rounded-[10px] px-[20px] py-[14px] font-[700] text-[#fff]' onClick={() => navigate('/dashboard/mock-exam/view-results')}>View results</button>
                        </div>
                    </div>

                    :
                    <div className='shadow-md flex flex-col items-center justify-center gap-[20px] bg-[#fff] py-[24px] px-[50px] rounded-[20px]'>
                        <img src={QuestionMark} />

                        <h3 className='text-[#414d58] font-[700] text-[24px]'>Submit exam?</h3>
                        <p className='text-[#414d58]'> Are you sure you want to submit your exam ?</p>

                        <div className='flex gap-[24px]'>
                            <button className='bg-[#F5F5F5] rounded-[10px] px-[20px] py-[14px] font-[700] text-[#414d58]' onClick={removeSubmit}>Cancel</button>
                            <button className='bg-[#00A36C] rounded-[10px] px-[20px] py-[14px] font-[700] text-[#fff]' onClick={() => setShowResult(true)}>Submit exam</button>
                        </div>
                    </div>


            }




        </div>
    )
}

export default MocExamSubmitComponenet