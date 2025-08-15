// React Router Hooks
import { Outlet } from 'react-router-dom';

// Componets
import SettingsCard from '../../../components/settings-card/SettingsCard';
import NotificationSettingsCard from '../../../components/notification-settings-card/NotificationSettingsCard';

const Privacy = () => {


    return (
        <div className={`bg-[#f8fcfc] h-screen z-[1000] px-[80px] absolute top-0 left-[0] right-[0] pt-[30px]`}>
        
            <h1 className=' text-[32px] font-[700] mb-[24px]'>Privacy Settings</h1>

            <div className='bg-[#fff] px-[20px] rounded-[10px]'>
                <SettingsCard title='Who can see my comment post' route='comment-boundaries' gotoLabel='Everyone' />
                <NotificationSettingsCard title='Allow comments on my post' body='' />
            </div>

            <div className='h-screen w-screen z-[1000]'>
                <Outlet />
            </div>
        </div>
    )
}

export default Privacy;