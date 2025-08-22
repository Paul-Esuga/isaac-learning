import FoundationalIcon from '../../assets/images/dashboard-images/foundational-logo.png'
import SecondaryIcon from '../../assets/images/dashboard-images/secondary-logo.png'
import TertiaryIcon from '../../assets/images/dashboard-images/tertiary-logo.png'
import FullBar from '../../assets/images/dashboard-images/full-bar.png'
import MostlyFullBar from '../../assets/images/dashboard-images/mostly-full-bar.png'
import HalfFullBar from '../../assets/images/dashboard-images/half-full-bar.png'
import EmptyBar from '../../assets/images/dashboard-images/empty-bar.png'
import FComplete from '../../assets/images/dashboard-images/foundational-complete.png'
import SComplete from '../../assets/images/dashboard-images/secondary-complete.png'
import InProgress from '../../assets/images/dashboard-images/in-progress.png'
import NotStart from '../../assets/images/dashboard-images/not-started.png'
import Badges3 from '../../assets/images/dashboard-images/3-badges.png'
import Badges2 from '../../assets/images/dashboard-images/2-badges.png'
import Badges1 from '../../assets/images/dashboard-images/1-badges.png'
import Locked2 from '../../assets/images/dashboard-images/2-locked.png'
import Available4 from '../../assets/images/dashboard-images/4-available.png'
import Available3 from '../../assets/images/dashboard-images/3-available.png'


function LearningModules() {
  const levels = [
    {
      borderColor: '#00A36C',
      icon: FoundationalIcon,
      name: 'Foundational',
      completion: '4 of 6 completed',
      bar: MostlyFullBar
    },
    {
      borderColor: '#5dbcf3',
      icon: SecondaryIcon,
      name: 'Secondary',
      completion: '2 of 4 completed',
      bar: HalfFullBar
    },
    {
      borderColor: '#FFD700',
      icon: TertiaryIcon,
      name: 'Tertiary',
      completion: 'Complete secondary level to start',
      bar: EmptyBar
    }
  ]


  const modules = [
    {
      name: 'Recruitment fundamentals',
      level: levels[0],
      status: FComplete,
      badges: Badges3,
      timing: 'Last accessed: May 18, 2025',
      bar: FullBar,
      button: 'Review module'
    },
    {
      name: 'The evolving workforce',
      level: levels[1],
      status: SComplete,
      badges: Badges2,
      timing: 'Last accessed: May 18, 2025',
      bar: FullBar,
      button: 'Review module'
    },
    {
      name: 'Recruitment fundamentals',
      level: levels[0],
      status: InProgress,
      badges: Badges1,
      timing: 'Last accessed: Today',
      bar: MostlyFullBar,
      button: 'Continue learning'
    },
    {
      name: 'HR analytics',
      level: levels[0],
      status: SComplete,
      badges: Locked2,
      timing: 'Due: June 24, 2025',
      bar: HalfFullBar,
      button: 'Continue learning'
    },
    {
      name: 'Nigerian Labor Law',
      level: levels[2],
      status: NotStart,
      badges: Available4,
      timing: 'Due: June 24, 2025',
      bar: EmptyBar,
      button: 'Start module'
    },
    {
      name: 'Performance management',
      level: levels[2],
      status: NotStart,
      badges: Available3,
      timing: 'Due: June 24, 2025',
      bar: EmptyBar,
      button: 'Start module'
    }
  ]
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
              levels.map((level) =>
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
            {modules.map((mod, key) =>
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
