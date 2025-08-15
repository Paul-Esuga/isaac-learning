// React Hooks
import { useState } from 'react';

// Assets
import DropDownIcon from '../../assets/images/icons/drop-down-icon.png';
import DropUpIcon from '../../assets/images/icons/drop-up-icon.png';

type FaqsCardProps = {
    heading: string,
    body: string
}

const FaqsCard = ( { heading, body }: FaqsCardProps ) => {

    const [showDropDownContent, setShowDropDownContent] = useState(false);

    return (
        <div className={`w-[600px] border-[1px] ${showDropDownContent ? "h-[150px]" : "h-[70px]"} rounded-[10px] px-[20px] pt-[20px] pb-[10px] flex flex-col justify-between`}>

            <div className='flex items-center justify-between mb-[20px]'>
                <h2 className='text-[#7f8c8d] text-[20px]'>{heading}</h2>
                <img src={ showDropDownContent ? DropUpIcon : DropDownIcon} className='w-[23px] h-[23px] cursor-pointer' onClick={() => setShowDropDownContent(prev => !prev)}/>
            </div>

            {
                showDropDownContent ?
                    <div>
                        {body}
                    </div>
                : ''
            }
        </div>
    )
}

export default FaqsCard