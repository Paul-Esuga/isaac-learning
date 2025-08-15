// React Router Hooks
import { Outlet, Link, useLocation } from 'react-router-dom';


// React Hooks
import { useEffect, useState } from 'react';


// Assets
import Logo from '../../assets/images/logo.png';
import DashboardIconWhite from '../dashboard/../../assets/images/icons/dashboard-icons/dashboard-icon-white.png';
import ModulesIconWhite from '../../assets/images/icons/dashboard-icons/modules-icon-white.png';
import QuizIconWhite from '../../assets/images/icons/dashboard-icons/quiz-icon-white.png'
import MockIconWhite from '../../assets/images/icons/dashboard-icons/mock-icon-white.png';
import NotificationIconWhite from '../../assets/images/icons/dashboard-icons/notification-icon-white.png';
import ProfileIconWhite from '../../assets/images/icons/dashboard-icons/profile-icon-white.png';
import CommunityIconWhite from '../../assets/images/icons/dashboard-icons/community-icon-white.png';

import DashbboardIconGreen from '../../assets/images/icons/dashboard-icons/dashboard-icon-green.png';
import ModulesIconGreen from '../../assets/images/icons/dashboard-icons/modules-icon-green.png';
import QuizIconGreen from '../../assets/images/icons/dashboard-icons/quiz-icon-green.png';
import MockIconGreen from '../../assets/images/icons/dashboard-icons/mock-icon-green.png';
import NotificationIconGreen from '../../assets/images/icons/dashboard-icons/notification-icon-green.png';
import ProfileIconGreen from '../../assets/images/icons/dashboard-icons/profile-icon-green.png';
import CommunityIconGreen from '../../assets/images/icons/dashboard-icons/community-icon-green.png';

// Component
import NavBar from '../../components/navbar/NavBar';

const Dashboard = () => {


    const { pathname } = useLocation();
    const [currentPath, setCurrentPath] = useState(pathname);

    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);





    return (
        <>
            <section className='flex gap-[2000px]'>

               

                <div className='w-[280px] h-[1000px] bg-primary-green pt-20 fixed top-0 bottom-0 h-screen'>

                    <img src={Logo} alt='Isaac Lerning Logo' className='mb-[50px] pl-[36px]' />

                    <nav className='flex flex-col gap-[20px]'>

                        <Link to='/dashboard' className={`flex gap-[16px] text-[#fff] py-5 pl-[10px] mx-10 ${currentPath.includes("/dashboard") && pathname == "/dashboard" ? "bg-[#fff] text-primary-green rounded-[10px]" : ""}`} onClick={() => setCurrentPath(pathname)}>
                            <img src={currentPath.includes("/dashboard") && pathname == "/dashboard" ? DashbboardIconGreen : DashboardIconWhite} alt='module icon' />
                            Dashboard
                        </Link>

                        <Link to='modules' className={`flex gap-[16px] text-[#fff] py-5 pl-[10px] mx-10 ${currentPath == "/dashboard/modules" ? "bg-[#fff] text-primary-green rounded-[10px]" : ""}`} onClick={() => setCurrentPath(pathname)}>
                            <img src={currentPath == "/dashboard/modules" ? ModulesIconGreen : ModulesIconWhite} alt='module icon' />
                            Modules
                        </Link>

                        <Link to='quiz' className={`flex gap-[16px] text-[#fff] py-5 pl-[10px] mx-10 ${currentPath == "/dashboard/quiz" ? "bg-[#fff] text-primary-green rounded-[10px]" : ""}`} onClick={() => setCurrentPath(pathname)}>
                            <img src={currentPath == "/dashboard/quiz" ? QuizIconGreen : QuizIconWhite} alt='module icon' />
                            Quizzes
                        </Link>

                        <Link to='mock-exam' className={`flex gap-[16px] text-[#fff] py-5 pl-[10px] mx-10 ${currentPath == "/dashboard/mock-exam" ? "bg-[#fff] text-primary-green rounded-[10px]" : ""}`} onClick={() => setCurrentPath(pathname)}>
                            <img src={currentPath == "/dashboard/mock-exam" ? MockIconGreen : MockIconWhite} alt='module icon' />
                            Mock exams
                        </Link>

                        <Link to='community' className={`flex gap-[16px] text-[#fff] py-5 pl-[10px] mx-10 ${currentPath == "/dashboard/community" ? "bg-[#fff] text-primary-green rounded-[10px]" : ""}`} onClick={() => setCurrentPath(pathname)}>
                            <img src={currentPath == "/dashboard/community" ? CommunityIconGreen : CommunityIconWhite} alt='module icon' />
                            Community
                        </Link>

                        <Link to='profile' className={`flex gap-[16px] text-[#fff] py-5 px-[10px] w-50 mx-10 ${currentPath.includes("/dashboard/profile")  ? "bg-[#fff] text-primary-green rounded-[10px]" : ""}`} onClick={() => setCurrentPath(pathname)}>
                            <img src={currentPath.includes("/dashboard/profile")  ? ProfileIconGreen : ProfileIconWhite} alt='module icon' />
                            Profile
                        </Link>

                        <Link to='notification' className={`flex gap-[16px] text-[#fff] py-5 pl-[10px] mx-10 ${currentPath == "/dashboard/notification" ? "bg-[#fff] text-primary-green rounded-[10px]" : ""}`} onClick={() => setCurrentPath(pathname)}>
                            <img src={currentPath == "/dashboard/notification" ? NotificationIconGreen : NotificationIconWhite} alt='module icon' />
                            Notification
                        </Link>
                    </nav>
                </div>

                <div>
                     <NavBar/>
                     <div className='mt-[100px] fixed left-[280px] px-[80px] pt-[16px] right-0'>
                        <Outlet />
                     </div>
                </div>
            </section>
        </>
    )

}


export default Dashboard;