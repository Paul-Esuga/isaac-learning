import ILS from "../../assets/images/dashboard-images/dashboard-modal.png"
import close from "../../assets/images/dashboard-images/modal-close.png"
import { useNavigate } from "react-router-dom"

export const DashboardModalDetails = ({ setIsFormFilled }: { setIsFormFilled: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigate = useNavigate()
  return (
    <div className="">
      <div className="flex justify-end">
        {/* <button className='bg-sub-gray text-black text-base font-bold rounded- p-2 mt-2 mb-2 opacity-100 cursor-pointer ' onClick={() => { setIsFormFilled(false), navigate('/dashboard') }}>
          X
        </button> */}
        <img src={close}
          className="cursor-pointer"
          alt="" onClick={() => { setIsFormFilled(false), navigate('/dashboard') }} />

      </div>
      <div className='align-middle items-center justify-center rounded-xl'>
        <img src={ILS} alt="" className='justify-self-center w-[300px] h-[300px] mb-10' />
        <p className='text-slate-gray font-[700] text-2xl w-[100%] justify-self-center mb-1 text-center'>Hello John, welcome. I am Isaac, your guide towards success. Every minute you learn today gets you closer to your dreams</p>
        <p className="text-medium-emerald font-bold text-2xl text-center self-baseline">You've got this!</p>

      </div>
    </div>
  )
}