// React Router Hooks
import { NavLink, Outlet, useLocation } from 'react-router-dom';

// React Hooks
import { useEffect, useState } from 'react';


// Assets
import Pfp from '../../assets/images/profile-images/pfp.png';
import ProfileIcon from '../../assets/images/profile-images/add-profile-icon.png';
import EditIcon from '../../assets/images/icons/dashboard-icons/Edit.png';

const Profile = () => {

    const { pathname } = useLocation();
    const [indexPath, setIndexPath] = useState(pathname);

    useEffect(() => {
        setIndexPath(pathname);
    },[pathname]);



    document.title = "profile - Isaac Learning";

    const name = "John Adekola";

    return (
        <section className="h-screen w-[100%]">

            <p className="font-[700] mb-[15px] text-[20px]">My Profile</p>


            <div className='flex justify-between items-center pt-20 bg-gradient-to-r from-[#00a36c] to-[#003d28] pt-10 px-20 rounded-tl-[20px] rounded-tr-[20px] mb-[32px] w-[100%] h-[230px]'>

                <div className='flex align-center gap-[20px]'>

                    <div className='relative'>
                        <img src={Pfp} className='mb-20 w-[130px] h-[130px]' alt='profile image cursor-pointer' />
                        <img src={ProfileIcon} className='w-[30px] h-[30px] absolute right-[-10px] top-[60px]' alt='pick profile image icon cursor-pointer' />
                    </div>

                    <div>
                        <h3 className='font-[700] text-[#fff] text-[32px] '>{name}</h3>
                        <p className='max-w-[423px] text-[#fff]'>
                            Aspiring HR professional, passionate about people, learning,
                            and workplace impact. Exploring the future of HR one course
                            at a time.
                        </p>
                    </div>

                </div>

                <button className='flex align-center justify-center gap-[8px] bg-[#fcfcfc]  h-[50px] w-[137px] py-[15px] rounded-[10px] cursor-pointer'>
                    <p className='text-[#00a36cff] font-bold'>Edit bio</p>
                    <img src={EditIcon} className='w-[25px] h-[25px]' alt='edit icon' />
                </button>

            </div>

            <nav className=' flex align-center w-[100%] border-b-[1px] w-[70vw]'>

                <NavLink to='progress-summary' className={indexPath == "/dashboard/profile" || indexPath == "/dashboard/profile/progress-summary" ? 'text-primary-green text-center w-[100%] py-[13px] border-primary-green border-b-[5px] font-[700] text-nowrap' : 'py-[13px] px-[100px] text-center text-nowrap'}>
                    Progress Summary
                </NavLink>

                <NavLink to='activity' className={({ isActive }) => isActive ? 'text-primary-green text-center w-[100%] py-[13px] border-primary-green border-b-[5px] font-[700]' : 'py-[13px] px-[100px] text-center text-nowrap'} >
                    Activity
                </NavLink>

                <NavLink to='bookmarks' className={({ isActive }) => isActive ? 'text-primary-green text-center w-[100%] py-[13px] border-primary-green border-b-[5px] font-[700]' : 'px-[150px] py-[13px] text-center text-nowrap'}>
                    Bookmarks
                </NavLink>

                <NavLink to='settings' className={({ isActive }) => isActive ? 'text-primary-green text-center w-[100%]   py-[13px] border-primary-green  border-b-[3px] font-[700]' : 'px-[150px] py-[13px] text-center text-nowrap'}>
                    Settings
                </NavLink>
            </nav>

            <div className='pt-[24px]'>
                <Outlet />
            </div>
        </section>
    )
}

export default Profile