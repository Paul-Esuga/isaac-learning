import Logo from "../../assets/images/createaccount-logo/ils.png";
import PassInfo from "../../assets/images/createaccount-logo/Info.png"
import NGN from "../../assets/images/createaccount-logo/flag-nigeria.png"
import type { Entryprops } from "../../components/createaccount/EntryDetails";
import Facebook from "../../assets/images/createaccount-logo/facebook.png";
import apple from "../../assets/images/createaccount-logo/apple.png";
import google from "../../assets/images/createaccount-logo/Google.png";
import { useNavigate } from "react-router-dom";

function Entry(props: Entryprops) {
  return (
    <div className="w-full">
      <p className="text-gray-700 text-sm mb-2">{props.name}</p>
      <input 
        name="my" 
        placeholder={props.placeholder}
        type={props.name === "Password" ? "password" : props.name === "Email Address" ? "email" : "text"}
        className="border border-gray-300 bg-gray-50 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
      />
    </div>
  );
}

function PhoneEntry() {
  return (
    <div className="w-full">
      <p className="text-gray-700 text-sm mb-2">Phone number</p>
      <div className="flex">
        <div className="flex items-center bg-gray-50 border border-gray-300 rounded-l-md px-3">
          <span className="text-green-600 text-lg"><img src={NGN}/></span>
          <span className="ml-2 text-gray-700">+234</span>
        </div>
        <input 
          name="phone" 
          placeholder=""
          type="tel"
          className="border border-gray-300 border-l-0 bg-gray-50 p-3 rounded-r-md flex-1 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        />
      </div>
    </div>
  );
}

export default function CreateAccountPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      {/* Left section */}
      <div className="w-full lg:w-[45%] bg-white flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12">
        
        {/* Logo */}
        <img
          src={Logo}
          alt="App Logo"
          className="h-16 sm:h-20 lg:h-24 mb-8 object-contain"
        />

        {/* Headings */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center text-gray-900">
          Create account
        </h1>
        <p className="text-gray-600 text-center text-sm sm:text-base mb-8 max-w-md">
          Please kindly enter your correct details below to sign up with us and get started
        </p>

        {/* Form */}
        <div className="w-full max-w-md space-y-4">
          <Entry name="Full name" placeholder="Enter your full name" />
          <Entry name="Email address" placeholder="Enter your email address" />
          <PhoneEntry />
          <div className="relative">
            <Entry name="Password" placeholder="Create password" />
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <img src= {PassInfo}/>
              Password must be at least 8 characters
            </p>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-4 rounded-md transition-colors mt-6" onClick={() => navigate('/otp')}>
            Create account
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-green-500 hover:text-green-600 font-medium">
              Log in
            </a>
          </p>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">Or sign up with</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
              <img src= {apple} />
            </button>
            <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
              <img src= {google} />
            </button>
            <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
              <img src = {Facebook} />
            </button>
          </div>
        </div>
      </div>

      {/* Right section */}
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