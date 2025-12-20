import { useParams } from 'react-router-dom'
import Modules from '../../static-data/LearningModules'
import moduleImg from '../../assets/images/modules/module-learning-image.svg'

function ModuleText() {

  const { id } = useParams()
  // const modData = ModuleData[parseInt(id ?? '0')]
  const modData = Modules[parseInt(id ?? '0')]

  return (
    <div className='bg-transparent overflow-y-scroll h-[70vh] '>
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
  )
}

export default ModuleText