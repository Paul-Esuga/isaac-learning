import ILS from "../../assets/images/dashboard-images/dashboard-modal.png";
import close from "../../assets/images/dashboard-images/modal-close.png";
import { useNavigate } from "react-router-dom";

export const DashboardModalDetails = ({
  setIsFormFilled,
}: {
  setIsFormFilled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Close Button: Positioned absolutely for better layout control */}
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
        {/* CHANGE: Image is now responsive (max 300px, but shrinks on small phones) */}
        <img
          src={ILS}
          alt="Isaac Guide"
          className="w-full max-w-[220px] md:max-w-[300px] h-auto mb-6 md:mb-8"
        />

        {/* CHANGE: Responsive text size and centered spacing */}
        <p className="text-slate-gray font-bold text-xl md:text-2xl leading-tight mb-4">
          Hello John, welcome. I am Isaac, your guide towards success. Every
          minute you learn today gets you closer to your dreams.
        </p>

        <p className="text-medium-emerald font-extrabold text-xl md:text-2xl italic">
          You've got this!
        </p>
      </div>
    </div>
  );
};
