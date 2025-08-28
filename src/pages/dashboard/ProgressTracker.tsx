import type { ProgCard } from "../../components/dashboard/ProgressCard"
// import ProgressBar from '../../assets/images/Close.png';
import ProgressCard from "../../components/dashboard/ProgressCard"
import NoModuleImg from '../../assets/images/dashboard-images/no-modules.png'


function ProgressTracker() {
  const progress: ProgCard[] = [
    {
      title: 'Overall course completion',
      bar: 68,
      timing: 'Estimated completion: August 15, 2025'
    },
    {
      title: 'Overall course completion',
      bar: 22,
      timing: 'Estimated completion: August 15, 2025'
    },
    {
      title: 'Overall course completion',
      bar: 90,
      timing: 'Estimated completion: August 15, 2025'
    },
    {
      title: 'Overall course completion',
      bar: 68,
      timing: 'Estimated completion: August 15, 2025'
    },
    {
      title: 'Overall course completion',
      bar: 0,
      timing: 'Estimated completion: August 15, 2025'
    },
    {
      title: 'Quiz completion',
      bar: 30,
      timing: 'Estimated completion: August 15, 2025'
    },
    {
      title: 'Quiz completion',
      bar: 90,
      timing: 'Estimated completion: August 15, 2025'
    },
    {
      title: 'Quiz completion',
      bar: 18,
      timing: 'Estimated completion: August 15, 2025'
    },
    {
      title: 'Quiz completion',
      bar: 68,
      timing: 'Estimated completion: August 15, 2025'
    },
    {
      title: 'Quiz completion',
      bar: 24,
      timing: 'Estimated completion: August 15, 2025'
    },
  ]
  // const progress: ProgCard[] = []
  return (
    <>
      <div className="bg-[#f8fcfc] h-screen flex flex-col gap-[60px]  z-[1000]  absolute top-[15px] left-[0] right-[0] p-[30px]">

        <div className="">
          {progress.length > 0 ?
            <div>
              <div className="  ">
                <h1 className="text-slate-gray w-full font-bold text-2xl mb-5  ">Your learning progress</h1>
              </div>
              <div className="overflow-y-scroll h-[720px]  pb-35">
                {progress.map((card) =>
                  <div><ProgressCard timing={card.title} bar={card.bar} title={card.title} /></div>
                )}
              </div>
            </div>
            :
            <div className=" justify-center flex flex-col mt-10">
              <img className="self-center flex " src={NoModuleImg} alt="" />
              <h2 className="text-slate-gray font-bold text-xl text-center">Oops!! John, you have not started learning  so there is nothing to show.</h2>
              <h2 className="text-slate-gray font-bold text-xl text-center"> Start learning now to track your progress.</h2>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default ProgressTracker