import mockExamQuestions from "../../../static-data/MockExamQuestions";

// React Hooks
import { useState } from "react";

// Assets
import Checkbox from '../../../assets/images/mock-exam-images/checkbox.png';
import Uncheckbox from '../../../assets/images/mock-exam-images/uncheckbox.png';

type MockExamQuestionCardProps = {
    index: number
    func: (i: number) => void
}

const MockExamQuestionCard = ( {index, func}: MockExamQuestionCardProps ) => {

    const [indexValue, setIndexValue] = useState(-1);


    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="text-[20px] text-[#414d58] font-[700]">{mockExamQuestions[index].question}</h2>
            {
                mockExamQuestions[index].options.map((q, i) =>
                    <div onClick={() => {setIndexValue(i), func(i)}} >
                        <OptionBox value={q}  indexValue={indexValue} index={i} />
                    </div>
                )
            }
        </div>
    )
}

export default MockExamQuestionCard



type OptionBoxProps = {
    value: string,
    indexValue: number,
    index: number
}

export const OptionBox = ({ value, indexValue, index }: OptionBoxProps) => {


    return (
        <div className="flex gap-[24px] border-[1px] rounded-[10px] p-[20px] mb-10px cursor-pointer">
            <img src={index == indexValue ? Checkbox : Uncheckbox} className="w-[24px] h-[24px]" />
            <p className="text-[#414d58] text-[18px]">{value}</p>
        </div>
    )
}
