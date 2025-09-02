// React Router Hooks
import { Outlet } from 'react-router-dom';

// Data
import SettingsData from '../../../static-data/SettingsData';

// Componenets
import SettingsCard from "../../../components/settings-card/SettingsCard";


const Settings = () => {

    return (
        <div className=''>
            <div>
                {
                    SettingsData.map(data => <SettingsCard key={data.id} title={data.title} route={data.route} />)
                }
            </div>


            <Outlet />
        </div>
    )
}

export default Settings;