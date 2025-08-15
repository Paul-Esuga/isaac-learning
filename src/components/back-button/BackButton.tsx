// React Router Hooks
import { useNavigate } from 'react-router-dom';


// Assets
import BackArrow from '../../assets/images/icons/payment-icons/arrow-left.png';

type backButtonType = {
    name?: string
}

const BackButton = ({ name = 'Back' }: backButtonType) => {

    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className={`flex text-slate-gray text-[14px] font-bold w-[100%] justify-between ${name != 'Back' ? 'py-[10px]' : 'py-[12px]'} px-[15px]  bg-[#EBEBEB] rounded-xl cursor-pointer `}>
            {name != "Back" ? "" : <img src={BackArrow} alt='back arrow' className='font-[700]' />}
            {name}
        </button>
    )
}

export default BackButton