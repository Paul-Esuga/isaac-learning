// import { useNavigate } from "react-router-dom"; importing the navigating hook


import Pass from "../../assets/images/createaccount-logo/password.png";


export default function ForgotPassword() {
    // const navigate = useNavigate();

    return (
    //page divide
    <div className="flex flex-col lg:flex-row h-screen bg-[#FFFFFF]">
      {/* Left section */}
      <div className="w-full lg:w-[45%] mt-[100px] bg-white flex flex-col items-center justify-start p-6 sm:p-8 lg:p-12">
        <div className="flex flex-col -translate-y-20 items-center justify-center">
            <div className="mt-16"><img src={Pass} alt="Background"/></div>
            <h1 className="font-poppins text-3xl font-bold mb-1 mt-12 text-color-[#414D58]" style={{color: "rgba(65, 77, 88, 1"}}>Forgot Password</h1>
            <p className="mt-0 text-color-[#F5F5F5]">Enter your email address to proceed</p>
            {/* <p className="text-[10px] font-lato">Click button below to start your HR journey and ace your<span className="block ml-10">CIPM exam Isaac is waiting for you.</span></p></div> */}
            </div>
          <div className="flex flex-col">
            <button className="w-[480px] rounded-lg bg-green- px-10 py-4 bg-[#7F8C8D] text-white font-bold hover:bg-green-900 transition-colors">Enter your email address</button>
            <button className="w-[480px] mt-6 rounded-lg bg-green-700 px-10 py-4 text-white font-bold hover:bg-green-900 transition-colors">Proceed</button>
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



   
