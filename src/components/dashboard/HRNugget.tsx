import QuizIcon from '../../assets/images/icons/dashboard-icons/quiz-icon-green.png'
import HrVideoIcon from '../../assets/images/icons/dashboard-icons/video-icon.png'
import CommunityIcon from '../../assets/images/icons/dashboard-icons/community-icon-blue.png'
import MockExamIcon from '../../assets/images/icons/dashboard-icons/mock-icon-green.png'
import IsaacILS from '../../assets/images/dashboard-images/dashboard-modal.png'
import ShareInsightsImg from '../../assets/images/dashboard-images/share-insights.png'
import Bookmark from '../../assets/images/icons/community-icons/bookmark-icon.png'
import { useState } from 'react'
import DashboardModal from "../../components/Modal/DashboardModal";
import { ShareNuggetDetails } from "../../components/Modal/ShareNuggetDetails";

function HRNugget() {
  const options = [
    {
      img: QuizIcon,
      text: 'Take a Quiz'
    },
    {
      img: HrVideoIcon,
      text: 'Watch HR pro tips'
    },
    {
      img: CommunityIcon,
      text: 'Ask the Community'
    },
    {
      img: MockExamIcon,
      text: 'Mock exam simulator'
    }
  ]
  const [isFormFilled, setIsFormFilled] = useState(false)
  const tip = "Recognition is a powerful motivator. Research shows that employees who receive regular recognition are 5x more likely to stay at their company. Try implementing a peer recognition program where team members can acknowledge each other's contributions. \nThis practice can boost team morale and create a positive workplace culture where achievements are and valued."


  return (
    <div className='flex sm:flex-col md:flex-col lg:flex-row justify-between flex-wrap lg:gap-8'>
      <div className="bg-[#5DADE2]/16 flex p-4 gap-4 w-[450px] flex-wrap sm:mb-6  h-[217px] lg:mr-10">
        {options.map((option, i) =>
          <div key={i} className="bg-white rounded-[10px] h-[80px] align-middle w-[190px] p-5 flex gap-2">
            <div className='w-[24px] h-[24px] self-center '><img src={option.img} alt="" /></div>
            <p className='self-center font-normal text-sm text-slate-gray'>{option.text}</p>
          </div>
        )}
      </div>

      <div className='lg:w-[55%] grow'>
        <h2 className='font-semibold text-xl text-slate-gray'>Today's HR nugget</h2>

        {/*image and write up starts here*/}
        <div className='flex mt-4 p-2.5 bg-white'>
          <div className='w-[220px]'>
            <img className='w-[100%]' src={IsaacILS} alt="" />
          </div>
          <div className='w-[65%]'>
            <h3 className='text-primary-green font-semibold text-base'>Employee Engagement Tip</h3>
            <p className='font-normal text-sm text-sub-gray my-3'>{tip}</p>
            <div className='flex gap-2.5'>
              <img src={ShareInsightsImg}
                onClick={() => {
                  setIsFormFilled(true)
                }}
                className='cursor-pointer' alt="" />
              <div className='bg-[#89B6C2]/10 flex content-center rounded-lg p-2 w-[140px] h-[40px]'>
                <img src={Bookmark} className='self-center w-[24px] h-[24px]' alt="" />
                <p className='min-w-[127px] self-center h-[40px] p-1.5'>Save for later</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashboardModal isFormFilled={isFormFilled} >
        <ShareNuggetDetails setIsFormFilled={setIsFormFilled} text={tip} />
      </DashboardModal>
    </div>
  )
}

export default HRNugget
