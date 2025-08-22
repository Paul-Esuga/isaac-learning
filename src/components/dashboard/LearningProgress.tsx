import { useNavigate } from 'react-router-dom'
import progressBar1 from '../../assets/images/dashboard-images/progress-bar1.png'
import progressBar2 from '../../assets/images/dashboard-images/progress-bar2.png'

function LearningProgress() {
  const navigate = useNavigate()
  return (
    <div className='mb-10'>
      <h1 className="font-bold text-2xl text-slate-gray mb-6">DashBoard</h1>
      <div>
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl text-slate-gray mb-6">Your learning progress</h2>
          <p className="text-primary-green text-xl font-bold cursor-pointer transition-all"
            onClick={() => {
              navigate('/dashboard/index/progress')
            }}
          >See all</p>
        </div>
        <div className="bg-white rounded-[10px] p-2.5 text-left  mb-5 shadow-[0_0_4px_1px_rgba(137, 182, 194, 0.1)] shadow">
          <div className="flex justify-between">
            <p className="font-bold text-base text-slate-gray">Overall course completion</p>
            <p className="font-normal text-sm text-medium-emerald opacity-60">68%</p>
          </div>
          <img src={progressBar1} className="my-2 w-full" alt="" />
          <p className="font-normal text-sm text-sub-gray">Estimated completion: August 15, 2025 </p>
        </div>
        <div className="bg-white rounded-[10px] p-2.5 text-left shadow-[0_0_4px_1px_rgba(137, 182, 194, 0.1)] shadow">
          <div className="flex justify-between">
            <p className="font-bold text-base text-slate-gray">Quiz performance</p>
            <p className="font-normal text-sm text-medium-emerald opacity-60">82%</p>
          </div>
          <img src={progressBar2} className="my-2 w-full" alt="" />
          <p className="font-normal text-sm text-sub-gray">12 quizzes completed, 3 remaining </p>
        </div>
      </div>
    </div>
  )
}

export default LearningProgress