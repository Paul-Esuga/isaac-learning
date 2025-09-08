// React Router Hooks
import { Link } from 'react-router-dom';

// Assets
import Goto from '../../assets/images/icons/goto-icon.png';

type SettingsCardProps = {
    title: string,
    route: string,
    gotoLabel?: string
}

const SettingsCard = ({ title, route, gotoLabel }: SettingsCardProps) => {


    return (
        <div className='flex justify-between py-[16px] border-b-[1px] mb-[2px]'>
            <h3 className='font-[700] text-[20px] text-[#414d58]'>{title}</h3>
            <div className='flex items-center gap-[10px]'>
                <p className='text-[#7f8c8d] mt-[7px] mb-[10px] text-[20px]'>{gotoLabel}</p>
                <Link to={route}>
                    <img src={Goto} alt='go to icon' className='w-[15px] h-[20px]' />
                </Link>
            </div>
        </div>
    )
}

export default SettingsCard;