import Logo from "../../assets/images/createaccount-logo/ils.png";
// import Lshift from "../../assets/images/createaccount-logo/left-move.png";
import { ChevronLeft } from 'lucide-react';
import {Mail, Phone} from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function Otp() {
  const navigate = useNavigate();

  return (
    //page divider
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      {/* Left section */}
      <div className="w-full lg:w-[45%] mt-[100px] bg-white flex flex-col items-center justify-start p-6 sm:p-8 lg:p-12">
        {/* Logo */}
        <img
          src={Logo}
          alt="App Logo"
          className="h-16 sm:h-20 lg:h-24 mb-8 object-contain"
        />
        
        {/* <button className="bg-gray-100 px-4 py-4 rounded-full self-start">
          <img src={Lshift} alt= "previous page button" className="w-5 h-5 text-gray-600"></img>
        </button>  */}
        <button className="bg-gray-100 px-4 py-4 rounded-full self-start" onClick={() => navigate('/create-account')}>
          < ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Choose verification method</h1>
        <p className="text-gray-600 mb-6">Kindly select how you want to receive OTP code to verify your identity</p>

        {/* <button>
          <span>
            <Mail className="w-6 h-6 inline mr-2" />
          </span>
          OTP via email
        </button> */}
        
        <div className="w-full max-w-md space-y-4">
          <button className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded mb-4 w-full">
            <Mail className="w-6 h-6 inline mr-2" />
            OTP via email
          </button>
          
          <button className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded w-full">
            <Phone className="w-6 h-6 inline mr-2" />
            OTP via phone
          </button>
        </div>
        </div>
        <div className="hidden lg:flex w-[55%] bg-[linear-gradient(180deg,rgba(0,0,0,0)_19.64%,rgba(0,0,0,0.6)_87.08%)] relative overflow-hidden">
        
        <div className="absolute inset-0 bg-[url('Learning-bg.png')] bg-opacity-20"></div>
        
        {/* Content */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white text-center p-12">
          
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Your Gateway to Smarter Learning
          </h2>
          <p className="text-lg lg:text-xl opacity-90 max-w-md">
            Access a variety of curated courses across fields, from HR to Science and more. Learn at your pace, anytime, anywhere.
          </p>
          
          {/* Progress dots */}
          <div className="flex space-x-2 mt-8">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
            <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
          </div>
        </div>
      </div>
      </div>
  );
}
