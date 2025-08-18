// React Hooks
import { useState } from 'react';

// Assets
import Switched from '../../assets/images/switched.png';
import Unswitched from '../../assets/images/unswitched.png';

type NotificationSettingscardProps = {
    title: string,
    body: string
}

const NotificationSettingsCard = ( { title, body }: NotificationSettingscardProps ) => {

    const [isSwitched, setIsSwitched] = useState(false);

    return (
        <div className='flex items-center justify-between border-b-[1px] border-[#9e9e9e] p-[10px] mb-[30px]'>

            <div>
                <h3 className='text-[#424d58] text-[20px] font-[400] mb-[4px]'>{title}</h3>
                <p className='text-[#7f8c8d] mb-[10px]'>{body}</p>
            </div>

            <img src={isSwitched ? Switched : Unswitched} alt='switch image' onClick={() => setIsSwitched(prev => !prev)} className='cursor-pointer'/>
        </div>
    )
}

export default NotificationSettingsCard;