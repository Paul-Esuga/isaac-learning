

import ILS from "../../assets/images/dashboard-images/dashboard-modal.png";
import close from "../../assets/images/dashboard-images/modal-close.png";
import { useNavigate } from "react-router-dom";
// 1. Import the hook
import { useUser } from "@clerk/clerk-react";

export const DashboardModalDetails = ({
  setIsFormFilled,
}: {
  setIsFormFilled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  
  // 2. Access the user object
  const { isLoaded, isSignedIn, user } = useUser();

  // 3. Determine the name to display (fallback to 'there' if not loaded)
  const nameDisplay = isLoaded && isSignedIn && user.firstName ? user.firstName : "there";

  return (
    <div className="relative">
      <div className="absolute -top-2 -right-2 md:top-0 md:right-0">
        <img
          src={close}
          className="cursor-pointer w-8 h-8 hover:opacity-80 transition-opacity"
          alt="Close"
          onClick={() => {
            setIsFormFilled(false);
            navigate("/dashboard/home");
          }}
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <img
          src={ILS}
          alt="Isaac Guide"
          className="w-full max-w-[220px] md:max-w-[300px] h-auto mb-6 md:mb-8"
        />

        <p className="text-slate-gray font-bold text-xl md:text-2xl leading-tight mb-4">
          {/* 4. Use the dynamic name here */}
          Hello {nameDisplay}, welcome. I am Isaac, your guide towards success. Every
          minute you learn today gets you closer to your dreams.
        </p>

        <p className="text-medium-emerald font-extrabold text-xl md:text-2xl italic">
          You've got this!
        </p>
      </div>
    </div>
  );
};
