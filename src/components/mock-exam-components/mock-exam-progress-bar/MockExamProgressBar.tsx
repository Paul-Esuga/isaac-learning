// React Hooks
import {useContext } from 'react';



// Context Api
import { MockExamContext } from '../../../context/MockExamContext';

const MockExamProgressBar = () => {

    const MockContext = useContext(MockExamContext)





    return(
        <div className="relative">
            <div className="w-[100%] h-[8px] bg-[#2ECC712E] rounded-tl-[5px]  rounded-bl-[5px] rounded-tr-[10px] rounded-br-[10px]"></div>
            <div style={{width: `${MockContext?.clicked_questions_list.length as number * 10}%`}} className={`h-[10px] bg-primary-green rounded-tl-[10px]  rounded-bl-[10px] rounded-tr-[10px] rounded-br-[10px] absolute top-[-1px]`}></div>
        </div>
    )
}

export default MockExamProgressBar