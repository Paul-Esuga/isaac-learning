// React Router Hooks
import { NavLink, Outlet, useLocation } from "react-router-dom";

// React Hooks
import { useEffect, useState, useCallback } from "react";

// Components
import EditBioPopup from "./popup/EditBioPopup";
import UploadPhotoPopup from "./popup/UploadPhotoPopup";

// Assets
import Pfp from "../../assets/images/profile-images/pfp.png";
import ProfileIcon from "../../assets/images/profile-images/add-profile-icon.png";
import EditIcon from "../../assets/images/icons/dashboard-icons/Edit.png";

const Profile = () => {
  const { pathname } = useLocation();
  const [indexPath, setIndexPath] = useState(pathname);
  const [showEditBio, setShowEditBio] = useState(false);
  const [showUploadPhoto, setShowUploadPhoto] = useState(false);

  useEffect(() => {
    setIndexPath(pathname);
  }, [pathname]);

  const removeEditBio = useCallback(() => setShowEditBio(false), []);
  const removeUploadPhoto = useCallback(() => setShowUploadPhoto(false), []);

  document.title = "profile - Isaac Learning";
  const name = "John Adekola";

  // Standard class for nav links to reduce repetition
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-3 px-6 text-center text-nowrap transition-all font-semibold border-b-[3px] flex-shrink-0 ${
      isActive || (indexPath === "/dashboard/profile" && isActive)
        ? "text-primary-green border-primary-green"
        : "text-gray-500 border-transparent hover:text-gray-700"
    }`;

  return (
    <section className="min-h-screen w-full bg-[#f8fcfc] pb-20">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10 pt-6">
        <p className="font-bold mb-4 text-xl text-slate-gray">My Profile</p>

        {/* Hero Header Section */}
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-end bg-gradient-to-r from-[#00a36c] to-[#003d28] p-6 md:p-10 rounded-2xl mb-8 min-h-[200px] gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left">
            {/* Profile Picture Container */}
            <div className="relative flex-shrink-0">
              <img
                src={Pfp}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/20"
                alt="profile"
              />
              <img
                src={ProfileIcon}
                className="w-8 h-8 absolute bottom-0 right-0 cursor-pointer bg-white rounded-full p-1.5 shadow-md hover:scale-110 transition-transform"
                alt="edit profile"
                onClick={() => setShowUploadPhoto(true)}
              />
            </div>

            {/* Name and Bio */}
            <div className="flex flex-col">
              <h3 className="font-bold text-white text-2xl md:text-4xl mb-2">
                {name}
              </h3>
              <p className="max-w-[450px] text-white/90 text-sm md:text-base leading-relaxed">
                Aspiring HR professional, passionate about people, learning, and
                workplace impact. Exploring the future of HR one course at a
                time.
              </p>
            </div>
          </div>

          {/* Edit Button */}
          <button
            className="flex items-center justify-center gap-2 bg-white h-11 px-6 rounded-xl shadow-lg hover:bg-gray-50 transition-colors w-full md:w-auto"
            onClick={() => setShowEditBio(true)}
          >
            <span className="text-primary-green font-bold">Edit bio</span>
            <img src={EditIcon} className="w-5 h-5" alt="edit" />
          </button>
        </div>

        {/* Navigation Tabs - Horizontal Scroll on Mobile */}
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto no-scrollbar scroll-smooth">
            <NavLink to="progress-summary" className={navLinkClass}>
              Progress Summary
            </NavLink>
            <NavLink to="activity" className={navLinkClass}>
              Activity
            </NavLink>
            <NavLink to="bookmarks" className={navLinkClass}>
              Bookmarks
            </NavLink>
            <NavLink to="settings" className={navLinkClass}>
              Settings
            </NavLink>
          </nav>
        </div>

        {/* Popups */}
        {showEditBio && <EditBioPopup setShowEditBio={removeEditBio} />}
        {showUploadPhoto && (
          <UploadPhotoPopup setShowUploadPhoto={removeUploadPhoto} />
        )}

        {/* Sub-page Content */}
        <div className="pt-6">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Profile;
