import BackButton from "../back-button/BackButton";
import SearchIcon from '../../assets/images/icons/Search.png';
import OnlineDot from '../../assets/images/online-dot.png';

// React Router Hook
import { useLocation } from 'react-router-dom';

// React Hooks
import { useState, useEffect } from 'react';

const NavBar = () => {

    const { pathname } = useLocation();

    const [currentPath, setCurrentPath] = useState(pathname);


    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);



    const username = "John";

    // const showBackButton = false;

    return (
        <nav className="flex justify-between items-center bg-[#ffffff] shadow-md fixed right-0 left-[280px] px-[24px] pt-[32px] pb-[20px]">
            <div>
                {currentPath.includes("personal-details") || currentPath.includes("notification-settings") || currentPath.includes("privacy") || currentPath.includes("help") || currentPath.includes("account-management") ? 
                <BackButton /> 
                : <h1 className="font-bold text-[20px]">Welcome back, {username}</h1>}
            </div>

            <div className="flex align-center gap-[20px]">

                <div className="flex gap-[8px] border-[1px] border-[#999999] px-[16px] py-[12px] rounded-[100px] w-[300px]">
                    <img src={SearchIcon} alt="search icon" />
                    <input type='search' placeholder="search here" className="text-[#99999] border-none outline-none" />
                </div>

                <div className="flex flex-col gap-[4px]">
                    <h3 className="font-[400] text-[20px]">Wednesday, May 21, 2025</h3>
                    <p className="text-[#7f8c8d]">10:45am</p>
                </div>

                <div className="flex items-center gap-[10px]">

                    <div className="rounded-[50%] bg-[#999999] pt-[13px] pl-[16px] w-[50px] h-[50px]">
                        <p className="font-[700] text-[#fff]">JA</p>
                    </div>

                    <div className="flex-col">
                        <h3 className="font-[400] text-[20px]">John Adekola</h3>

                        <div className="flex">
                            <p>Online </p>
                            <img src={OnlineDot} className="w-[10px] h-[10px]" />
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;