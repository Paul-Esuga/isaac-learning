import type { ProgCard } from "../../components/dashboard/ProgressCard";
import ProgressCard from "../../components/dashboard/ProgressCard";
import NoModuleImg from "../../assets/images/dashboard-images/no-modules.png";
import { X } from "lucide-react"; // To add a close button
import { useNavigate } from "react-router-dom";

function ProgressTracker() {
  const navigate = useNavigate();

  const progress: ProgCard[] = [
    {
      title: "Overall course completion",
      bar: 68,
      timing: "Estimated completion: August 15, 2025",
    },
    {
      title: "Overall course completion",
      bar: 22,
      timing: "Estimated completion: August 15, 2025",
    },
    {
      title: "Overall course completion",
      bar: 90,
      timing: "Estimated completion: August 15, 2025",
    },
    {
      title: "Overall course completion",
      bar: 68,
      timing: "Estimated completion: August 15, 2025",
    },
    {
      title: "Overall course completion",
      bar: 0,
      timing: "Estimated completion: August 15, 2025",
    },
    {
      title: "Quiz completion",
      bar: 30,
      timing: "Estimated completion: August 15, 2025",
    },
    {
      title: "Quiz completion",
      bar: 90,
      timing: "Estimated completion: August 15, 2025",
    },
    {
      title: "Quiz completion",
      bar: 18,
      timing: "Estimated completion: August 15, 2025",
    },
    {
      title: "Quiz completion",
      bar: 68,
      timing: "Estimated completion: August 15, 2025",
    },
    {
      title: "Quiz completion",
      bar: 24,
      timing: "Estimated completion: August 15, 2025",
    },
  ];

  return (
    /* CHANGE 1: Use 'relative' or 'fixed' with proper inset. 
       If this is a "dropdown" or overlay, 'fixed' is safer for mobile. 
    */
    <div className="fixed inset-0 lg:left-[280px] bg-[#f8fcfc] z-[1100] p-4 md:p-8 overflow-y-auto animate-in fade-in slide-in-from-top duration-300">
      {/* Header Section with Close Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-slate-gray font-bold text-xl md:text-2xl">
          Your learning progress
        </h1>
        <button
          onClick={() => navigate("/dashboard/home")}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
        >
          <X size={28} className="text-slate-gray" />
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {progress.length > 0 ? (
          /* CHANGE 2: Use a grid for cards. 
             One column on mobile, two on desktop to save vertical space.
          */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
            {progress.map((card, index) => (
              <div key={index} className="w-full">
                <ProgressCard
                  timing={card.timing} // Note: Fixed passing card.timing instead of card.title twice
                  bar={card.bar}
                  title={card.title}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-20 text-center px-4">
            <img
              className="w-full max-w-[250px] mb-6"
              src={NoModuleImg}
              alt="No modules"
            />
            <h2 className="text-slate-gray font-bold text-xl">
              Oops!! John, you have not started learning yet.
            </h2>
            <p className="text-sub-gray mt-2">
              Start learning now to track your progress.
            </p>
            <button
              onClick={() => navigate("/dashboard/modules")}
              className="mt-6 bg-primary-green text-white px-6 py-3 rounded-xl font-bold"
            >
              Start Learning
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgressTracker;
