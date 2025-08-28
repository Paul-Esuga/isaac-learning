import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import Modules from '../../static-data/LearningModules'


// React Router Hooks
import { useNavigate } from 'react-router-dom';


// Assets
import BackArrow from '../../assets/images/icons/payment-icons/arrow-left.png';


function ViewModule() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [indexPath, setIndexPath] = useState(pathname);

  useEffect(() => {
    setIndexPath(pathname);
    console.log(indexPath)
  }, [pathname]);

  const { id } = useParams()
  // const modData = ModuleData[parseInt(id ?? '0')]
  const modData = Modules[parseInt(id ?? '0')]

  return (
    <div className="bg-[#fcfcfc] h-screen z-[1000] absolute top-5 left-[0] right-[0] pt-[30px] overflow-y-scroll px-5">
      <div className="px-6 pt-2 pb-40 text-left">
        <div className='flex justify-start mb-8'>
          <h1 className='font-bold text-2xl/9 text-slate-gray text-left'>{modData.title}</h1>
        </div>
        <nav className=' flex items-center  w-[100%] border-b-[0.5px] border-b-sub-gray py-2.5 transition-all mb-5 pb-5'>
          <NavLink to='text' className={`py-3 h-[24px] text-left pr-5 ${(indexPath == `/dashboard/modules/view-module/${id}` || indexPath == `/dashboard/modules/view-module/${id}/text`) ? 'text-black' : ' text-[#999999]'}`}>
            <p className=' font-[700] text-base/5 flex self-center '>Text</p>
          </NavLink>
          <NavLink to='audio' className={`py-3 h-[24px] text-left pr-5 ${(indexPath == `/dashboard/modules/view-module/${id}/audio`) ? 'text-black' : ' text-[#999999]'}`}>
            <p className=' font-[700] text-base/5 flex self-center '>Audio</p>
          </NavLink>
          <NavLink to='video' className={`py-3 h-[24px] text-left pr-5 ${(indexPath == `/dashboard/modules/view-module/${id}/video`) ? 'text-black' : ' text-[#999999]'}`}>
            <p className=' font-[700] text-base/5 flex self-center '>Video</p>
          </NavLink>
        </nav>
        <div className='overflow-y-scroll mt-3 h-[74vh]'>
          <Outlet />
        </div>
        <div className='flex justify-end'>
          <button onClick={() => navigate(-1)} className={`flex text-slate-gray text-[14px] font-bold w-[114px] justify-between p-2.5  bg-[#EBEBEB] rounded-[10px] cursor-pointer content-center mr-4 `}>
            <img src={BackArrow} alt='back arrow' className='font-[700] w-[32px] h-[18px] self-center' />
            <p className='self-center'>Previous</p>
          </button>
          <button className='bg-primary-green text-warm-white font-bold text-base/loose rounded-[10px] p-2.5'
            onClick={() => {
              navigate('/dashboard/modules')
            }}
          >Back to modules</button>
        </div>
      </div>


    </div>
  )
}

export default ViewModule
