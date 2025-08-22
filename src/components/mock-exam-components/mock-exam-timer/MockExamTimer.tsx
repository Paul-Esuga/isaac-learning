// React Hooks
import { useState, useEffect } from 'react';

const initialSec = 59;
const initialMin = 59;
const initialHour = 1;

const MockExamTimer = () => {

    const [sec, setSec] = useState(initialSec)
    const [min, setMin] = useState(initialMin);
    const [hour, setHour] = useState(initialHour);



    const Timer = () => {
        setTimeout(() => {
            if (sec > 0) {
                setSec(sec - 1)
            } else {
                if (min > 0) {
                    setSec(initialSec);
                    setMin(min - 1)
                } else {
                    if (hour > 0) {
                        setSec(initialSec)
                        setMin(initialMin)
                        setHour(hour - 1)
                    }
                }
            }
        }, 1000)
    }

    useEffect(() => {
        Timer();
    }, [sec, min, hour])

    return (
        <div>
            <h2 className='font-[700] text-[#414d58] text-[26px]'>{`0${hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`}</h2>
            <p className='font-[400] text-[#7f8c8d] text-[#18px]'>Time remaining</p>
        </div>
    )
}

export default MockExamTimer