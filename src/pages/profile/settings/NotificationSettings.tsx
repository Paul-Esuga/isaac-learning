// Componenets
import NotificationSettingsCard from '../../../components/notification-settings-card/NotificationSettingsCard';

// Data
import NotificationSettingsData from '../../../static-data/NotificationSettingsData';

const NotificationSettings = () => {

    return(
        <div className={`bg-[#f8fcfc] h-screen  z-[1000] px-[80px]  absolute absolute top-0 left-[0] right-[0] pt-[30p]`}>
            <h1 className=' text-[32px] font-[700] mb-[24px]'>Notification Settings</h1>
            <div className='bg-[#fff] px-[20px] rounded-[10px]'>
                {
                    NotificationSettingsData.map(data => <NotificationSettingsCard key={data.id} title={data.Title} body={data.body}/>)
                }
            </div>
        </div>
    )
}

export default NotificationSettings;