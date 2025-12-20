import BackButton from "../back-button/BackButton";
import MockExamNav from "../mock-exam-components/mock-exam-nav/MockExamNav";
import SearchIcon from "../../assets/images/icons/Search.png";
import OnlineDot from "../../assets/images/online-dot.png";
// import CommunityQuestions from "../../static-data/CommunityQuestions";
// import { usePayment } from "../../context/PaymentContext";
// import FrancisPFP from '../../assets/images/community-images/francis-pfp.png'
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const PathList = [
  "personal-details",
  "notification-settings",
  "privacy",
  "help",
  "account-management",
  "view-comment",
  "cipm-mock-exam",
  "view-results",
  "mock-exam-review",
  "start-quiz",
  "view-module",
];

const NavBar = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  // const { question } = usePayment()
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const username = "John";

  return (
    // CHANGE 1: Removed fixed left-[280px]. The NavBar now fills the available space next to the sidebar.
    // CHANGE 2: Added z-index and reduced top padding for mobile.
    <nav className="flex justify-between items-center bg-white shadow-sm fixed top-0 right-0 left-0 lg:left-[280px] px-4 md:px-6 py-3 z-30 min-h-[70px]">
      <div className="flex items-center gap-3">
        {/* CHANGE: Add the Menu button here for mobile only */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-primary-green active:bg-gray-100 rounded-lg"
        >
          <Menu size={24} />
        </button>

        {currentPath.includes("post-question") ? (
          <BackButton name="Cancel" />
        ) : PathList.some((path) => currentPath.includes(path)) ? (
          <BackButton />
        ) : (
          <h1 className="font-bold text-lg md:text-xl truncate max-w-[120px] xs:max-w-none">
            {currentPath.includes("modules")
              ? "What to learn?"
              : `Hi, ${username}`}
          </h1>
        )}
      </div>

      {/* RIGHT SECTION: Search, Date, Profile */}
      <div className="flex items-center gap-3 md:gap-6">
        {currentPath.includes("cipm-mock-exam") ? (
          <MockExamNav />
        ) : (
          <>
            {/* CHANGE 3: Hidden Post Button logic moved inside main nav flow */}
            {currentPath.includes("post-question") && (
              <button
                className="bg-primary-green text-white font-medium text-sm md:text-base px-4 py-2 rounded-[10px]"
                onClick={() => {
                  // ... your push logic
                  navigate("community");
                }}
              >
                Post
              </button>
            )}

            {/* CHANGE 4: Search bar - Hidden on very small screens, or scaled down */}
            <div className="hidden sm:flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-full w-[180px] lg:w-[250px]">
              <img src={SearchIcon} alt="search" className="w-4 h-4" />
              <input
                type="search"
                placeholder="Search..."
                className="text-sm border-none outline-none w-full"
              />
            </div>

            {/* CHANGE 5: Date - Hidden on mobile/tablet to save space */}
            <div className="hidden xl:flex flex-col border-l pl-6 border-gray-200">
              <h3 className="font-medium text-sm">Wednesday, May 21</h3>
              <p className="text-[#7f8c8d] text-xs text-right">10:45am</p>
            </div>

            {/* CHANGE 6: Profile - Simplified on mobile (Avatar only) */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="rounded-full bg-gray-400 flex items-center justify-center w-10 h-10 text-white font-bold text-sm">
                  JA
                </div>
                <img
                  src={OnlineDot}
                  className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full"
                />
              </div>
              <div className="hidden md:flex flex-col">
                <h3 className="font-medium text-sm whitespace-nowrap">
                  John Adekola
                </h3>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
