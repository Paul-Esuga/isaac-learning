import { useEffect, useState } from "react";
import DashboardModal from "../../components/Modal/DashboardModal";
import { DashboardModalDetails } from "../../components/Modal/DashboardModalDetails";
import LearningProgress from "../../components/dashboard/LearningProgress";
import HRNugget from "../../components/dashboard/HRNugget";
import LearningModules from "../../components/dashboard/LearningModules";


const MainDashboard = () => {
    const [isFormFilled, setIsFormFilled] = useState(false)
    useEffect(() => {
        setIsFormFilled(true)
    }, [])

    document.title = "Dashboard ";

    return (
        <div className="overflow-y-scroll overflow-x-hidden h-[83vh] lg:h-[85vh]  lg:mt-0">
            <div className="px-6 sm:py-8 ">
                <DashboardModal isFormFilled={isFormFilled} >
                    <DashboardModalDetails setIsFormFilled={setIsFormFilled} />
                </DashboardModal>
                <LearningProgress />
                <HRNugget />
                <LearningModules />
            </div>
        </div>

    )
}

export default MainDashboard;