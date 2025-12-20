import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
  const navigate = useNavigate();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically add your logic to update the database/state

    // Navigate back to the main settings list
    navigate("/dashboard/profile/settings");
  };

  return (
    <div className="fixed inset-0 lg:left-[280px] bg-[#f8fcfc] z-[1000] overflow-y-auto pt-6 md:pt-10">
      <div className="bg-white w-[95%] md:w-[90%] max-w-5xl mx-auto rounded-[16px] px-4 md:px-10 py-6 md:py-8 shadow-xl mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h2 className="text-2xl md:text-[32px] font-bold text-slate-gray">
            Personal Details
          </h2>

          <div className="flex gap-3 w-full md:w-auto">
            {/* Added a Cancel button for better UX */}
            <button
              onClick={() => navigate("/dashboard/profile/settings")}
              className="flex-1 md:flex-none px-6 py-3 text-gray-500 font-semibold hover:text-gray-700 transition-colors"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="flex-1 md:flex-none bg-primary-green rounded-xl px-6 py-3 text-white text-base md:text-lg font-semibold hover:bg-opacity-90 active:scale-95 transition-all shadow-md"
            >
              Save changes
            </button>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[#999999] text-sm font-medium">
                Full name
              </label>
              <input
                type="text"
                defaultValue="John Adekola"
                className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-primary-green/20 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#999999] text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                defaultValue="tommyjhay0326@gmail.com"
                className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-primary-green/20 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#999999] text-sm font-medium">Bio</label>
            <textarea
              defaultValue="Aspiring HR professional, passionate about people, learning, and workplace impact."
              rows={4}
              className="border border-gray-200 rounded-xl px-4 py-3 w-full resize-none text-base md:text-lg focus:ring-2 focus:ring-primary-green/20 outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
