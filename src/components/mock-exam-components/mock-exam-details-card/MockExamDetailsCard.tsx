// import MockExamQuestionICon from '../../assets/images/mock-exam-images/mock-exam-question-icon.png';

type MockExamDetailsCardProps = {
    img: string,
    text: string,
    duration: string
}

const MockExamDetailsCard = ( {img, text, duration}: MockExamDetailsCardProps ) => {
     return (
        <div className='flex flex-col gap-[16px] rounded-[10px] bg-[#5DADE21A] p-[20px] w-[350px]'> 
            <img src={img} className='w-[44px] h-[44px]'/>
            <p className='text-[#7f8c8d]'>{text}</p>
            <p className='text-[#414d58] font-[700]'>{duration}</p>
        </div>
     )
}

export default MockExamDetailsCard