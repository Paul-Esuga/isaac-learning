import React from 'react'
import { useParams } from 'react-router-dom'
import ModuleData from '../../static-data/ModuleData'
import Modules from '../../static-data/LearningModules'
import moduleImg from '../../assets/images/modules/module-learning-image.svg'
import BackButton from '../../components/back-button/BackButton'

// React Router Hooks
import { useNavigate } from 'react-router-dom';


// Assets
import BackArrow from '../../assets/images/icons/payment-icons/arrow-left.png';

type backButtonType = {
  name?: string
}



function ViewModule() {
  const navigate = useNavigate();

  const { id } = useParams()
  // const modData = ModuleData[parseInt(id ?? '0')]
  const modData = Modules[parseInt(id ?? '0')]

  return (
    <div className="bg-[#fcfcfc] h-screen z-[1000] absolute top-0 left-[0] right-[0] pt-[30px] overflow-y-scroll px-5">
      <div className="px-6 pt-2 pb-30 text-left">
        <div className='flex justify-start mb-8'>
          <h1 className='font-bold text-2xl/9 text-slate-gray text-left'>{modData.title}</h1>
        </div>
        <div className='mb-10'>
          <p className='font-normal text-[18px]/7 text-slate-gray mb-2'>1.1 Overview</p>
          <p className='font-normal text-base/6 text-slate-gray'>{modData.description}</p>
        </div>
        <div className='mb-10 flex justify-center'>
          <img src={moduleImg} alt="" />
        </div>
        <div className='mb-10'>
          <p className='font-normal text-[18px]/7 text-slate-gray mb-2'>Objectives of {modData.abbreviation}</p>
          <p className='font-normal text-base/6 text-slate-gray'>{
            modData.objectives?.map((obj) =>
              <li>{obj}</li>
            )
          }</p>
        </div>
        <div className='mb-10'>
          <p className='font-normal text-[18px]/7 text-slate-gray mb-2'>Evolution of {modData.abbreviation}</p>
          <p className='font-normal text-base/6 text-slate-gray'>{modData.evolution}</p>
        </div>
        <div className='mb-10'>
          <p className='font-normal text-[18px]/7 text-slate-gray mb-2'>Functions of {modData.abbreviation}</p>
          <p className='font-normal text-base/6 text-slate-gray'>{modData.functions}</p>
        </div>
        <div className='mb-10'>
          <p className='font-normal text-[18px]/7 text-slate-gray mb-2'>Strategic Importance of {modData.abbreviation}</p>
          <p className='font-normal text-base/6 text-slate-gray'>{modData.importance}</p>
        </div>
        <div className='mb-10'>
          <p className='font-normal text-[18px]/7 text-slate-gray mb-2'>Conclusion</p>
          <p className='font-normal text-base/6 text-slate-gray'>{modData.conclusion}</p>
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
