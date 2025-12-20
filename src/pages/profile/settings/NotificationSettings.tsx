// Components
import NotificationSettingsCard from "../../../components/notification-settings-card/NotificationSettingsCard";
import BackButton from "../../../components/back-button/BackButton"; // Adjust path as needed

// Data
import NotificationSettingsData from "../../../static-data/NotificationSettingsData";

const NotificationSettings = () => {
  return (
    <div className="fixed inset-0 lg:left-[280px] bg-[#f8fcfc] z-[1000] overflow-y-auto pt-6 md:pt-10">
      <div className="max-w-3xl mx-auto px-4 md:px-10 pb-20">
        {/* Back Button Container - Styled for mobile spacing */}
        <div className="mb-6 w-32">
          <BackButton />
        </div>

        <h1 className="text-2xl md:text-[32px] font-bold mb-6 text-slate-gray">
          Notification Settings
        </h1>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {NotificationSettingsData.map((data, index) => (
            <div
              key={data.id}
              className={index !== 0 ? "border-t border-gray-50" : ""}
            >
              <NotificationSettingsCard title={data.Title} body={data.body} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
