import QuizIcon from "../../assets/images/icons/dashboard-icons/quiz-icon-green.png";
import HrVideoIcon from "../../assets/images/icons/dashboard-icons/video-icon.png";
import CommunityIcon from "../../assets/images/icons/dashboard-icons/community-icon-blue.png";
import MockExamIcon from "../../assets/images/icons/dashboard-icons/mock-icon-green.png";
import IsaacILS from "../../assets/images/dashboard-images/dashboard-modal.png";
import ShareInsightsImg from "../../assets/images/dashboard-images/share-insights.png";
import Bookmark from "../../assets/images/icons/community-icons/bookmark-icon.png";
import { useState } from "react";
// import DashboardModal from "../../components/Modal/DashboardModal";
// import { ShareNuggetDetails } from "../../components/Modal/ShareNuggetDetails";

function HRNugget() {
  const options = [
    {
      img: QuizIcon,
      text: "Take a Quiz",
    },
    {
      img: HrVideoIcon,
      text: "Watch HR pro tips",
    },
    {
      img: CommunityIcon,
      text: "Ask the Community",
    },
    {
      img: MockExamIcon,
      text: "Mock exam simulator",
    },
  ];
  const [isFormFilled, setIsFormFilled] = useState(false);
  const tip =
    "Recognition is a powerful motivator. Research shows that employees who receive regular recognition are 5x more likely to stay at their company. Try implementing a peer recognition program where team members can acknowledge each other's contributions. \nThis practice can boost team morale and create a positive workplace culture where achievements are and valued.";

  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-8">
      {/* Options Grid: Responsive grid instead of fixed width wrap */}
      <div className="bg-[#5DADE2]/10 grid grid-cols-2  sm:grid-cols-2 gap-3 p-4 rounded-2xl w-full lg:w-[400px]">
        {options.map((option, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-3 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 shadow-sm text-center sm:text-left h-[100px] sm:h-[80px]"
          >
            <img src={option.img} alt="" className="w-6 h-6" />
            <p className="text-[13px] font-semibold text-slate-gray leading-tight">
              {option.text}
            </p>
          </div>
        ))}
      </div>

      {/* Nugget Section: Fixes the overlap seen in your image */}
      <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h2 className="font-bold text-xl text-slate-gray mb-4">
          Today's HR nugget
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {/* Isaac Image: Scale down on mobile, stay fixed on desktop */}
          <div className="w-full sm:w-1/3 flex justify-center">
            <img
              className="max-w-[140px] md:max-w-[200px] object-contain"
              src={IsaacILS}
              alt="Isaac"
            />
          </div>

          {/* Text Container */}
          <div className="w-full sm:w-2/3">
            <h3 className="text-primary-green font-bold text-base mb-2">
              Employee Engagement Tip
            </h3>
            <p className="text-sm text-sub-gray leading-relaxed mb-6">{tip}</p>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setIsFormFilled(true)}
                className="hover:opacity-80 transition-opacity"
              >
                <img src={ShareInsightsImg} alt="Share" className="h-10" />
              </button>
              <div className="bg-[#89B6C2]/10 flex items-center gap-2 rounded-lg px-4 py-2 cursor-pointer">
                <img src={Bookmark} className="w-5 h-5" alt="Save" />
                <span className="text-sm font-semibold text-slate-gray">
                  Save for later
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HRNugget;
