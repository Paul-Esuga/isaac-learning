import Levels from '../../static-data/DashboardLevels'
import Modules from '../../static-data/DashboardModules'


function LearningModules() {
  return (

    <div>
      <div className='mt-8'>
        <div className="flex justify-between">
          <h2 className="text-slate-gray font-semibold text-xl mb-6">Learning modules</h2>
          <h3 className="text-primary-green font-bold text-xl">View all modules</h3>
        </div>
        <div>
          <div className='flex justify-between mt-2 sm:flex-col lg:flex-row'>
            {
              Levels.map((level) =>
                <div className={`bg-white border-t-3 p-2.5 pb-3.5 rounded-[20px] sm:mb-4 lg:w-[31.2%]`} style={{ borderColor: level.borderColor }}>
                  <div className='flex justify-start gap-4 cursor-pointer'>
                    <div className='rounded-[100px] justify-center content-center w-[48px] h-[48px]'>
                      <img className='' src={level.icon} alt="" />
                    </div>
                    <div className='mb-3'>
                      <p className='font-medium text-sm text-slate-gray mb-2'>{level.name} level</p>
                      <p className='text-sub-gray font-normal text-[12px]'>{level.completion}</p>
                    </div>
                  </div>
                  <img src={level.bar} className='w-full my-2' />
                </div>
              )
            }
          </div>
          <div className='flex flex-wrap justify-between'>
            {Modules.map((mod, key) =>
              <div className={`bg-white border-t-3 px-2.5 py-5 rounded-[20px] lg:mb-8 sm:mb-4 sm:w-[95%] lg:w-[31.2%]`} style={{ borderColor: mod.level.borderColor }}>
                <div>
                  <div className='justify-start gap-8 mb-4 flex'>
                    <h3 className='font-medium text-base text-slate-gray'>{mod.name}</h3>
                    <div className={`py-0.5 px-1.5 rounded-[10px] text-[12px] max-w-[190px] justify-center flex align-middle ${mod.level.name == 'Foundational' ? 'bg-[#2ECC71]/20' : (mod.level.name == 'Secondary' ? 'bg-[#5DADE2]/20' : 'bg-[#FCF300]/20')}`} style={{ color: mod.level.borderColor }}><p className='self-center '>{mod.level.name}</p></div>
                  </div>
                  <div className=''>
                    <div className='flex w-[50%] mb-2'>
                      <img src={mod.status} className='h-[20px] w-[33%] mr-2' alt="" />
                      <img src={mod.badges} className='h-[20px]w-[33%]' alt="" />
                    </div>
                    <p className='text-sub-gray font-normal text-xs'>{mod.timing}</p>
                  </div>
                  <div>
                    <img src={mod.bar} className='w-full my-[17px]' alt="" />
                  </div>
                </div>
                <div className='mb-2 cursor-pointer'>
                  {key < 2 ?
                    <div className='bg-[#F5F5F5] text-slate-gray  text-center font-normal text-base p-2.5 rounded-[10px] w-full min-h-[44px]'>{mod.button}</div>
                    :
                    <div className='bg-primary-green text-warm-white text-center p-2.5 text-base font-bold rounded-[10px] w-full min-[44px]'>{mod.button}</div>
                  }
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningModules
