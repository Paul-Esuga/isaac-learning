import Goto from '../../assets/images/icons/goto-icon.png';

import { Link } from 'react-router-dom';

type SettingsCardProps = {
    title: string,
    route: string
}

const SettingsCard = ( {title, route}: SettingsCardProps ) => {


    return(
        <div className='flex justify-between py-[16px] border-b-[1px] mb-[15px]'>
            <h3 className='font-[700] text-[20px] text-[#414d58]'>{title}</h3>
            <Link to={route}>
                <img src={Goto} alt='go to icon' className='w-[15px] h-[20px]'/>
            </Link>
        </div>
    )
}

export default SettingsCard;