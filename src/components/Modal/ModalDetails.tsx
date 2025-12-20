import success from "../../assets/images/payment-images/success-modal-logo.png";
import { useNavigate } from "react-router-dom";

export const ModalDetails = ({
  setIsFormFilled,
}: {
  setIsFormFilled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-center">
      {/* CHANGE: Responsive image sizing */}
      <img src={success} alt="Success" className="w-24 md:w-32 h-auto mb-6" />

      {/* CHANGE: Responsive font size (text-2xl on mobile, text-3xl on desktop) */}
      <h2 className="text-black text-2xl md:text-3xl font-bold mb-3">
        Payment successful
      </h2>

      {/* CHANGE: Removed w-[80%] so text flows naturally within the modal padding */}
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
        You have successfully registered for the course:{" "}
        <span className="font-semibold">CIPM HR exam</span>. You can now proceed
        to your dashboard to start learning. Isaac is waiting, good luck!
      </p>

      {/* CHANGE: Added h-12 for a better mobile tap target and larger text */}
      <button
        className="bg-primary-green text-white text-base font-bold w-full h-12 rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
        onClick={() => {
          setIsFormFilled(false);
          navigate("/dashboard");
        }}
      >
        Proceed to dashboard
      </button>
    </div>
  );
};
