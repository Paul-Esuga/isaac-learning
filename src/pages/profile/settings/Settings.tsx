// Data
import SettingsData from "../../../static-data/SettingsData";

// Components
import SettingsCard from "../../../components/settings-card/SettingsCard";

// React Router Hooks
import { Outlet, useLocation } from "react-router-dom";

const Settings = () => {
  const location = useLocation();

  // Check if we are viewing a sub-setting (like /settings/password)
  // This helps us hide the main list on mobile when a sub-setting is open
  const isSubSettingOpen = location.pathname.split("/").length > 4;

  return (
    <div className="w-full max-w-2xl">
      {/* Main Settings List */}
      {/* On mobile, we hide the list if a sub-setting is open to save space */}
      <div
        className={`${
          isSubSettingOpen ? "hidden md:block" : "block"
        } space-y-2 mb-10`}
      >
        {SettingsData.map((data) => (
          <SettingsCard key={data.id} title={data.title} route={data.route} />
        ))}
      </div>

      {/* Sub-Settings Detail View (Outlet) */}
      {/* CHANGE: Removed w-screen h-screen. 
                Using absolute or fixed only when necessary, 
                otherwise letting it flow in the layout. */}
      <div
        className={`${
          isSubSettingOpen ? "block" : "hidden md:block"
        } min-h-[300px]`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
