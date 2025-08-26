// React Router Hooks
import { NavLink, Outlet, useLocation } from 'react-router-dom';

// React Hooks
import { useState, useEffect } from 'react';


const Notification = () => {

    const { pathname } = useLocation();
    const [indexPath, setIndexPath] = useState(pathname);


    useEffect(() => {
        setIndexPath(pathname);
    }, [pathname]);

    document.title = "Dashboard | Notificatios";

    return (
        <div className='flex flex-col gap-[20px] bg-[#fff]'>

            <div className='w-[95%] m-[auto]'>
                <h1 className="font-[700] text-[24px] mb-[24px]">Notifications</h1>

                <nav className='flex gap-[41px] mb-[24px] border-b-[1px] pb-[10px]'>
                    <NavLink to="all" className={indexPath == "/dashboard/notification" || indexPath == "/dashboard/notification/all" ? "text-primary-green font-[700]" : ""}>All</NavLink>
                    <NavLink to="unread" className={({ isActive }) => isActive ? "text-primary-green font-[700]" : ""}>Unread</NavLink>
                    <NavLink to="read" className={({ isActive }) => isActive ? "text-primary-green font-[700]" : ""}>Read</NavLink>
                </nav>

                <Outlet />
            </div>

        </div>
    )
}

export default Notification;