// React Hooks
import { useEffect, useState } from 'react';


// Assets
import QuizTimerIcon from '../../assets/images/quiz-images/quiz-timer-icon.png';


type QuizTimerProps = {
    timerCount: string
}

const QuizTimer = ({timerCount}: QuizTimerProps) => {

    const [sec, setSec] = useState(59);
    const [min, setMin] = useState(parseInt(timerCount))

    useEffect(() => {
        setTimeout(() => {
            if(sec !== 0){
                setSec(prev => prev - 1);
            }else{
                if(min !== 0){
                    setMin(min - 1)
                    setSec(59)
                }else{
                    setMin(0);
                    setSec(0)
                }
            }
        }, 1000)
    }, [sec, min])

    return(
        <div className="flex items-center gap-[8px] text-[#ef4444]">
            <img src={QuizTimerIcon} className="w-[20px] h-[20px]"/>
            <h1 className='text-[18px] font-[600]'>{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}`: sec}</h1>
        </div>
    )
}

export default QuizTimer