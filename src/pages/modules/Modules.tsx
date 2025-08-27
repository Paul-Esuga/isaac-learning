import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Modules = () => {

  const { pathname } = useLocation();
  const [indexPath, setIndexPath] = useState(pathname);


  useEffect(() => {
    setIndexPath(pathname);
    console.log(indexPath)
  }, [pathname]);

  document.title = "DashBoard | modules";

  return (
    <>
      <div className=" overflow-x-hidden h-[83vh] lg:h-[85vh]  lg:mt-0">
        <div className="px-6 sm:py-8 ">
          <div className="flex justify-start flex-col mb-6">
            <h1 className="font-bold text-2xl/9 text-slate-gray mb-2">Learning modules</h1>
            <p className="text-sub-gray font-normal text-sm/5">Select a topic to learn John</p>
          </div>
          <div className='overflow-y-scroll h-full'>
            <nav className=' flex items-center  w-[100%] border-b-[0.5px] border-b-sub-gray py-2.5 transition-all'>

              <NavLink to='foundational' className={(indexPath == "/dashboard/modules" || indexPath == "/dashboard/modules/foundational") ? 'text-[#FCFCFC] text-center rounded-[100px] px-5 py-3 w-[134px] h-[24px] flex  items-stretch  bg-primary-green justify-center  mr-6' : ' w-[134px] h-[24px]  mr-6 text-center text-nowrap text-[#999999]'}>
                <p className=' font-[700] text-base/5 flex self-center '>Foundational</p>
              </NavLink>

              <NavLink to='secondary' className={({ isActive }) => isActive ? 'text-[#FCFCFC] text-center rounded-[100px] px-5 py-3 w-[115px] h-[24px] flex  items-center content-center bg-[#5DADE2] justify-center text-nowrap mr-6' : 'w-[115px] h-[24px] text-center text-nowrap mr-6 text-[#999999]'} >
                <p className='font-[700] text-base/5  self-center  '>Secondary</p>
              </NavLink>

              <NavLink to='tertiary' className={({ isActive }) => isActive ? 'text-[#FCFCFC] text-center rounded-[100px] px-5 py-3 w-[96px] h-[24px] flex  items-center content-center bg-[#CCAC00]    text-nowrap justify-centermb-2 ' : ' text-center text-nowrap mr-6 w-[96px] h-[24px] text-[#999999]'}>
                <p className=' font-[700] text-base/5  self-center justify-self-center text-center '>Tertiary</p>

              </NavLink>
            </nav>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default Modules;