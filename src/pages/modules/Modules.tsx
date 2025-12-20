import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Modules = () => {
  const { pathname } = useLocation();
  const [indexPath, setIndexPath] = useState(pathname);

  useEffect(() => {
    setIndexPath(pathname);
  }, [pathname]);

  document.title = "DashBoard | modules";

  // Shared styles for the NavLinks to keep the code clean
  const baseTabClass =
    "px-6 py-2 rounded-full font-bold text-sm md:text-base transition-all whitespace-nowrap flex items-center justify-center min-w-[100px]";
  const inactiveClass = "text-[#999999] hover:text-gray-600";

  return (
    <div className="w-full">
      <div className="px-4 md:px-6 py-4 md:py-8">
        {/* Header Section */}
        <div className="flex flex-col mb-6">
          <h1 className="font-bold text-xl md:text-2xl text-slate-gray mb-1">
            Learning modules
          </h1>
          <p className="text-sub-gray font-normal text-sm">
            Select a topic to learn, John
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b-[0.5px] border-b-sub-gray">
          <nav className="flex items-center gap-2 md:gap-4 py-3 overflow-x-auto no-scrollbar">
            {/* Foundational Link */}
            <NavLink
              to="foundational"
              className={({ isActive }) =>
                `${baseTabClass} ${
                  isActive || indexPath === "/dashboard/modules"
                    ? "bg-primary-green text-white"
                    : inactiveClass
                }`
              }
            >
              Foundational
            </NavLink>

            {/* Secondary Link */}
            <NavLink
              to="secondary"
              className={({ isActive }) =>
                `${baseTabClass} ${
                  isActive ? "bg-[#5DADE2] text-white" : inactiveClass
                }`
              }
            >
              Secondary
            </NavLink>

            {/* Tertiary Link */}
            <NavLink
              to="tertiary"
              className={({ isActive }) =>
                `${baseTabClass} ${
                  isActive ? "bg-[#CCAC00] text-white" : inactiveClass
                }`
              }
            >
              Tertiary
            </NavLink>
          </nav>
        </div>

        {/* Content Area */}
        <div className="mt-6 pb-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Modules;
