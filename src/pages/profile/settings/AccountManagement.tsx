// React Hooks
import { useState, useEffect } from "react";

// Components
import BackButton from "../../../components/back-button/BackButton";

const AccountManagement = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    /* Using the fixed inset pattern to respect the sidebar on desktop */
    <div className="fixed inset-0 lg:left-[280px] bg-[#f8fcfc] z-[1000] overflow-y-auto">
      <div className="max-w-3xl mx-auto px-4 md:px-10 py-6 md:py-10">
        {/* 1. Back Button */}
        <div className="mb-6 w-32">
          <BackButton />
        </div>

        {/* 2. Responsive Heading */}
        <h1 className="text-2xl md:text-[32px] font-bold text-slate-gray mb-8">
          Account Management
        </h1>

        {/* 3. Account Actions Container */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="flex flex-col gap-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-lg text-red-600">
                Danger Zone
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Deleting your account will permanently remove all your data and
                progress.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <p className="text-sm text-gray-600">
                Once you delete your account, there is no going back. Please be
                certain.
              </p>
              <button className="w-full md:w-auto px-6 py-3 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-all active:scale-95 text-center">
                Delete Account
              </button>
            </div>
          </div>
        </div>

        {/* 4. Additional Account Info */}
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-slate-gray mb-2">Account Status</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <p className="text-sm text-gray-600">
              Your account is currently active.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
