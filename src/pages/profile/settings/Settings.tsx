// Data
import SettingsData from '../../../static-data/SettingsData';

// Componenets
import SettingsCard from "../../../components/settings-card/SettingsCard";

// React Router Hooks
import { Outlet } from 'react-router-dom';

const Settings = () => {

    return (
        <div>
            <div className='mb-[20px]'>
                {
                    SettingsData.map(data => <SettingsCard key={data.id} title={data.title} route={data.route} />)
                }
            </div>

            

            <div className='h-screen w-screen z-[1000]'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Settings;