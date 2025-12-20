// React Router Hooks
import { useNavigate } from "react-router-dom";

// React Hooks
import { useState } from "react";

// Assets
import QuestionMark from "../../../assets/images/mock-exam-images/question-mark.png";

type MocExamSubmitComponenetProps = {
  removeSubmit: () => void;
};

const MocExamSubmitComponenet = ({
  removeSubmit,
}: MocExamSubmitComponenetProps) => {
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  return (
    /* CHANGE 1: Use fixed inset-0 and a high z-index.
           Removed absolute positioning and negative offsets. */
    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4">
      {/* Dark Backdrop Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={!showResult ? removeSubmit : undefined}
      />

      {/* Modal Body */}
      <div className="relative shadow-2xl flex flex-col items-center justify-center gap-6 bg-white py-8 px-6 md:px-12 rounded-2xl text-center w-full max-w-lg animate-in fade-in zoom-in duration-200">
        {showResult ? (
          <>
            {/* CHANGE 2: Removed fixed w-[450px]. Used max-w. */}
            <div className="bg-primary-green/10 p-4 rounded-full mb-2">
              <span className="text-4xl">🎉</span>
            </div>

            <p className="text-[#414d58] font-bold text-lg md:text-xl leading-relaxed">
              Dear John, well done! You have successfully completed your mock
              exam. You can now see your results or go back to the homepage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
              <button
                className="bg-[#F5F5F5] rounded-xl px-6 py-3.5 font-bold text-[#414d58] flex-1 transition-all active:scale-95"
                onClick={() => navigate("/dashboard/home")}
              >
                Back to homepage
              </button>
              <button
                className="bg-[#00A36C] rounded-xl px-6 py-3.5 font-bold text-white flex-1 transition-all active:scale-95 shadow-md"
                onClick={() => navigate("/dashboard/mock-exam/view-results")}
              >
                View results
              </button>
            </div>
          </>
        ) : (
          <>
            <img
              src={QuestionMark}
              alt="?"
              className="w-16 h-16 md:w-20 md:h-20"
            />

            <div className="flex flex-col gap-2">
              <h3 className="text-[#414d58] font-bold text-2xl md:text-3xl">
                Submit exam?
              </h3>
              <p className="text-gray-500">
                Are you sure you want to end your session and submit?
              </p>
            </div>

            {/* CHANGE 3: Stacked buttons on mobile for better UX */}
            <div className="flex flex-col-reverse sm:flex-row gap-4 w-full mt-2">
              <button
                className="bg-[#F5F5F5] rounded-xl px-6 py-3.5 font-bold text-[#414d58] flex-1 transition-all active:scale-95"
                onClick={removeSubmit}
              >
                Cancel
              </button>
              <button
                className="bg-[#00A36C] rounded-xl px-6 py-3.5 font-bold text-white flex-1 transition-all active:scale-95 shadow-md"
                onClick={() => setShowResult(true)}
              >
                Submit exam
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MocExamSubmitComponenet;
