// // React Router Hooks
// import { Outlet, Link, useLocation } from "react-router-dom";

// // React Hooks
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// // Assets
// import Logo from "../../assets/images/logo.png";
// import DashboardIconWhite from "../dashboard/../../assets/images/icons/dashboard-icons/dashboard-icon-white.png";
// import ModulesIconWhite from "../../assets/images/icons/dashboard-icons/modules-icon-white.png";
// import QuizIconWhite from "../../assets/images/icons/dashboard-icons/quiz-icon-white.png";
// import MockIconWhite from "../../assets/images/icons/dashboard-icons/mock-icon-white.png";
// import NotificationIconWhite from "../../assets/images/icons/dashboard-icons/notification-icon-white.png";
// import ProfileIconWhite from "../../assets/images/icons/dashboard-icons/profile-icon-white.png";
// import CommunityIconWhite from "../../assets/images/icons/dashboard-icons/community-icon-white.png";
// import LogoutIconWhite from "../../assets/images/profile-images/logout-icon-white.png";

// import DashbboardIconGreen from "../../assets/images/icons/dashboard-icons/dashboard-icon-green.png";
// import ModulesIconGreen from "../../assets/images/icons/dashboard-icons/modules-icon-green.png";
// import QuizIconGreen from "../../assets/images/icons/dashboard-icons/quiz-icon-green.png";
// import MockIconGreen from "../../assets/images/icons/dashboard-icons/mock-icon-green.png";
// import NotificationIconGreen from "../../assets/images/icons/dashboard-icons/notification-icon-green.png";
// import ProfileIconGreen from "../../assets/images/icons/dashboard-icons/profile-icon-green.png";
// import CommunityIconGreen from "../../assets/images/icons/dashboard-icons/community-icon-green.png";

// // Component
// import NavBar from "../../components/navbar/NavBar";
// import { Menu } from "lucide-react"; // Install lucide-react or use your own icons

// // Clerk
// import { useClerk } from "@clerk/clerk-react";

// // ... Your Icon Imports (keep them as they are)

// const Dashboard = () => {
//   const { pathname } = useLocation();
//   const [currentPath, setCurrentPath] = useState(pathname);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // New state for mobile toggle
//   const { signOut } = useClerk(); // 2. Destructure signOut
//   const navigate = useNavigate();

//   useEffect(() => {
//     setCurrentPath(pathname);
//     setIsSidebarOpen(false); // Close sidebar automatically when navigating on mobile
//   }, [pathname]);

//   const handleLogout = async () => {
//     // 3. This clears Clerk cookies and local storage
//     await signOut();
//     navigate("/");
//   };

//   // Navigation Links helper to keep code clean
//   const navLinks = [
//     {
//       name: "Dashboard",
//       path: "/dashboard/home",
//       iconGreen: DashbboardIconGreen,
//       iconWhite: DashboardIconWhite,
//     },
//     {
//       name: "Modules",
//       path: "modules",
//       iconGreen: ModulesIconGreen,
//       iconWhite: ModulesIconWhite,
//     },
//     {
//       name: "Quizzes",
//       path: "quiz",
//       iconGreen: QuizIconGreen,
//       iconWhite: QuizIconWhite,
//     },
//     {
//       name: "Mock exams",
//       path: "mock-exam",
//       iconGreen: MockIconGreen,
//       iconWhite: MockIconWhite,
//     },
//     {
//       name: "Community",
//       path: "community",
//       iconGreen: CommunityIconGreen,
//       iconWhite: CommunityIconWhite,
//     },
//     {
//       name: "Profile",
//       path: "profile",
//       iconGreen: ProfileIconGreen,
//       iconWhite: ProfileIconWhite,
//     },
//     {
//       name: "Notification",
//       path: "notification",
//       iconGreen: NotificationIconGreen,
//       iconWhite: NotificationIconWhite,
//     },
//   ];

//   return (
//     <div className="flex min-h-screen bg-warm-white overflow-x-hidden">
//       {/* MOBILE OVERLAY */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-[40] lg:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* SIDEBAR */}
//       <aside
//         className={`
//                 fixed top-0 bottom-0 left-0 z-[50] w-[280px] bg-primary-green pt-[50px] transition-transform duration-300
//                 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
//                 lg:translate-x-0 lg:static
//             `}
//       >
//         <img
//           src={Logo}
//           alt="Isaac Learning Logo"
//           className="mb-[30px] pl-[36px]"
//         />

//         <nav className="flex flex-col justify-between h-[calc(100%-120px)]">
//           <div className="flex flex-col gap-2">
//             {navLinks.map((link) => {
//               const isActive =
//                 currentPath.includes(link.path) ||
//                 (link.path === "/dashboard/home" &&
//                   currentPath === "/dashboard");
//               return (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className={`flex gap-[16px] py-[12px] px-[20px] mx-6 transition-all ${
//                     isActive
//                       ? "bg-white text-primary-green rounded-[10px] font-bold"
//                       : "text-white hover:bg-white/10 rounded-[10px]"
//                   }`}
//                 >
//                   <img
//                     src={isActive ? link.iconGreen : link.iconWhite}
//                     alt={link.name}
//                     className="w-6 h-6"
//                   />
//                   {link.name}
//                 </Link>
//               );
//             })}
//           </div>

//           <div className="mb-10">
//             <button
//               onClick={handleLogout}
//               className="w-[calc(100%-48px)] flex gap-[16px] text-white py-[12px] px-[20px] mx-6 hover:bg-white/10 rounded-[10px] transition-colors"
//             >
//               <img src={LogoutIconWhite} alt="logout" className="w-6 h-6" />
//               Log out
//             </button>
//           </div>
//         </nav>
//       </aside>

//       {/* MAIN CONTENT AREA */}
//       <main className="flex-1 flex flex-col min-w-0 relative">
//         {/* MOBILE HEADER BAR */}
//         <div className="lg:hidden flex items-center justify-between p-4 bg-white shadow-sm sticky top-0 z-30">
//           <img src={Logo} alt="Logo" className="h-8" />
//           <button onClick={() => setIsSidebarOpen(true)} className="p-2">
//             <Menu size={28} className="text-primary-green" />
//           </button>
//         </div>

//         <NavBar onMenuClick={() => setIsSidebarOpen(true)} />

//         {/* The fix: This padding-top (pt-20) ensures content starts AFTER the fixed NavBar */}
//         <div className="pt-12 pb-10 px-4 md:px-8 lg:px-10 overflow-y-auto">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useClerk } from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";

// Assets
import Logo from "../../assets/images/logo.png";
import DashboardIconWhite from "../../assets/images/icons/dashboard-icons/dashboard-icon-white.png";
import ModulesIconWhite from "../../assets/images/icons/dashboard-icons/modules-icon-white.png";
import QuizIconWhite from "../../assets/images/icons/dashboard-icons/quiz-icon-white.png";
import MockIconWhite from "../../assets/images/icons/dashboard-icons/mock-icon-white.png";
import NotificationIconWhite from "../../assets/images/icons/dashboard-icons/notification-icon-white.png";
import ProfileIconWhite from "../../assets/images/icons/dashboard-icons/profile-icon-white.png";
import CommunityIconWhite from "../../assets/images/icons/dashboard-icons/community-icon-white.png";
import LogoutIconWhite from "../../assets/images/profile-images/logout-icon-white.png";

import DashbboardIconGreen from "../../assets/images/icons/dashboard-icons/dashboard-icon-green.png";
import ModulesIconGreen from "../../assets/images/icons/dashboard-icons/modules-icon-green.png";
import QuizIconGreen from "../../assets/images/icons/dashboard-icons/quiz-icon-green.png";
import MockIconGreen from "../../assets/images/icons/dashboard-icons/mock-icon-green.png";
import NotificationIconGreen from "../../assets/images/icons/dashboard-icons/notification-icon-green.png";
import ProfileIconGreen from "../../assets/images/icons/dashboard-icons/profile-icon-green.png";
import CommunityIconGreen from "../../assets/images/icons/dashboard-icons/community-icon-green.png";

// Component
import NavBar from "../../components/navbar/NavBar";

const Dashboard = () => {
  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { signOut } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    setIsSidebarOpen(false); // Close sidebar automatically on navigation
  }, [pathname]);

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  const navLinks = [
    {
      name: "Dashboard",
      path: "/dashboard/home",
      iconGreen: DashbboardIconGreen,
      iconWhite: DashboardIconWhite,
    },
    {
      name: "Modules",
      path: "modules",
      iconGreen: ModulesIconGreen,
      iconWhite: ModulesIconWhite,
    },
    {
      name: "Quizzes",
      path: "quiz",
      iconGreen: QuizIconGreen,
      iconWhite: QuizIconWhite,
    },
    {
      name: "Mock exams",
      path: "mock-exam",
      iconGreen: MockIconGreen,
      iconWhite: MockIconWhite,
    },
    {
      name: "Community",
      path: "community",
      iconGreen: CommunityIconGreen,
      iconWhite: CommunityIconWhite,
    },
    {
      name: "Profile",
      path: "profile",
      iconGreen: ProfileIconGreen,
      iconWhite: ProfileIconWhite,
    },
    {
      name: "Notification",
      path: "notification",
      iconGreen: NotificationIconGreen,
      iconWhite: NotificationIconWhite,
    },
  ];

  return (
    <div className="flex h-screen bg-[#f8fcfc] overflow-hidden">
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 bottom-0 left-0 z-[70] w-[280px] bg-[#00a36c] pt-[40px] transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:block
        `}
      >
        <div className="flex items-center justify-between mb-[30px] px-[30px]">
          <img src={Logo} alt="Logo" className="h-10" />
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col justify-between h-[calc(100%-120px)]">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = 
                pathname.includes(link.path) || 
                (link.path === "/dashboard/home" && pathname === "/dashboard");
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-[16px] py-[14px] px-[20px] mx-4 transition-all ${
                    isActive
                      ? "bg-white text-[#00a36c] rounded-[12px] font-bold shadow-md"
                      : "text-white/80 hover:bg-white/10 rounded-[12px] hover:text-white"
                  }`}
                >
                  <img 
                    src={isActive ? link.iconGreen : link.iconWhite} 
                    alt={link.name} 
                    className="w-5 h-5" 
                  />
                  <span className="text-[15px]">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="mb-6 px-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-[16px] text-white/80 py-[14px] px-[20px] hover:bg-white/10 rounded-[12px] transition-colors"
            >
              <img src={LogoutIconWhite} alt="logout" className="w-5 h-5" />
              <span className="text-[15px]">Log out</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* MOBILE HEADER */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-100 z-50">
          <button 
            onClick={() => setIsSidebarOpen(true)} 
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} className="text-[#00a36c]" />
          </button>
          <img src={Logo} alt="Logo" className="h-7" />
          <div className="w-10" /> 
        </div>

        {/* Content Wrapper */}
        <div className="flex-1 overflow-y-auto relative">
          <div className="hidden lg:block">
            <NavBar onMenuClick={() => setIsSidebarOpen(true)} />
          </div>

          <div className="p-4 md:p-8 lg:p-10">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;