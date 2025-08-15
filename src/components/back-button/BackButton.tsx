// React Router Hooks
import { useNavigate } from 'react-router-dom';


// Assets
import BackArrow from '../../assets/images/icons/payment-icons/arrow-left.png';

const BackButton = () => {

    const navigate = useNavigate();

    return(
        <button onClick={() => navigate(-1)} className='flex text-slate-gray p-[10px] text-[14px] font-bold w-[91px] justify-between py-[15px] px-[10px]  bg-[#EBEBEB] rounded-xl cursor-pointer'>
            <img src={BackArrow} alt='back arrow'className='font-[700]'/>
            Back
        </button>
    )
}

export default BackButton