
// Assets
import Close from '../../assets/images/Close.png';

type CorrectAnswerCardProps = {
    correctAnswer: string,
    setShowCorrectAnswer: () => void,
    Nosplit?: boolean
}

const CorrectAnswerCard = ( {correctAnswer, setShowCorrectAnswer, Nosplit}: CorrectAnswerCardProps ) => {

    return (
        <div className="shadow-2xl backdrop-blur-xs h-screen w-screen absolute top-[-100px]  left-[-300px] flex items-center justify-center">
            <div className='shadow-md flex flex-col gap-[20px] bg-[#fff] py-[24px] px-[50px] rounded-[20px]'>

                <div className='flex justify-between gap-[100px]'>
                    <p className="mt-[10px] text-green-600 text-[16px] font-semibold">
                        Correct Answer: {Nosplit ? correctAnswer : correctAnswer.split("")[0]}
                    </p>
                    <img src={Close} onClick={setShowCorrectAnswer} className='cursor-pointer' />
                </div>

                <p className='text-[#414d58] font-[700]'>
                    {Nosplit ? correctAnswer : correctAnswer.split("").slice(3,)}
                </p>

                <p className='font-[400] w-[400px]'>
                    <span className='text-[#414d58] font-[700]'>Explanation: </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem recusandae eius aliquam molestias praesentium placeat consectetur consequuntur obcaecati illo nihil et eligendi, maxime officiis dicta quisquam. Aliquam, provident nesciunt.
                </p>
            </div>
        </div>
    )
}

export default CorrectAnswerCard