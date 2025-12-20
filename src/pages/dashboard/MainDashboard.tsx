import { useEffect, useState } from "react";
import DashboardModal from "../../components/Modal/DashboardModal";
import { DashboardModalDetails } from "../../components/Modal/DashboardModalDetails";
import LearningProgress from "../../components/dashboard/LearningProgress";
import HRNugget from "../../components/dashboard/HRNugget";
import LearningModules from "../../components/dashboard/LearningModules";
import { Outlet } from "react-router-dom";

const MainDashboard = () => {
  const [isFormFilled, setIsFormFilled] = useState(false);
  useEffect(() => {
    setIsFormFilled(true);
  }, []);

  return (
    // Removed fixed height to prevent nested scrollbars on mobile
    <div className="w-full pb-10">
      <div className="px-4 md:px-8 py-4 md:py-8">
        <DashboardModal isFormFilled={isFormFilled}>
          <DashboardModalDetails setIsFormFilled={setIsFormFilled} />
        </DashboardModal>
        <LearningProgress />
        <HRNugget />
        <LearningModules />
      </div>
      <Outlet />
    </div>
  );
};
export default MainDashboard;
