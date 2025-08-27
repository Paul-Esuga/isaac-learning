import React from 'react'
import { useParams } from 'react-router-dom'
import ModuleData from '../../static-data/ModuleData'
import Modules from '../../static-data/LearningModules'
import moduleImg from '../../assets/images/modules/module-learning-image.svg'

function ViewModule() {
  const { id } = useParams()
  // const modData = ModuleData[parseInt(id ?? '0')]
  const modData = Modules[parseInt(id ?? '0')]

  return (
    <div className="bg-[#fcfcfc] h-screen z-[1000] absolute top-0 left-[0] right-[0] pt-[30px] overflow-y-scroll px-5">
      <div className="px-6 pt-2 pb-20 text-left">
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
      </div>
    </div>
  )
}

export default ViewModule
