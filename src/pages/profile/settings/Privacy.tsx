// React Router Hooks
import { Outlet } from "react-router-dom";

// Components
import SettingsCard from "../../../components/settings-card/SettingsCard";
import NotificationSettingsCard from "../../../components/notification-settings-card/NotificationSettingsCard";
import BackButton from "../../../components/back-button/BackButton";

const Privacy = () => {
  return (
    /* Using the established responsive container pattern */
    <div className="fixed inset-0 lg:left-[280px] bg-[#f8fcfc] z-[50] overflow-y-auto">
      <div className="max-w-3xl mx-auto px-4 md:px-10 py-6 md:py-10">
        {/* 1. Back Button - Restricted width so it doesn't stretch */}
        <div className="mb-6 w-32">
          <BackButton />
        </div>

        {/* 2. Responsive Heading */}
        <h1 className="text-2xl md:text-[32px] font-bold mb-6 text-slate-gray">
          Privacy Settings
        </h1>

        {/* 3. Settings Container */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <SettingsCard
            title="Who can see my comment post"
            route="comment-boundaries"
            gotoLabel="Everyone"
          />
          <div className="border-t border-gray-50">
            <NotificationSettingsCard
              title="Allow comments on my post"
              body="Enabling this allows community members to reply to your questions."
            />
          </div>
        </div>

        {/* 4. Sub-page Outlet */}
        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Privacy;
