// import Logo from "../../assets/images/createaccount-logo/ils.png";
// import PassInfo from "../../assets/images/createaccount-logo/Info.png"
// //import NGN from "../../assets/images/createaccount-logo/flag-nigeria.png"
// import type { Entryprops } from "../../components/createaccount/EntryDetails";
// import Facebook from "../../assets/images/createaccount-logo/facebook.png";
// import apple from "../../assets/images/createaccount-logo/apple.png";
// import google from "../../assets/images/createaccount-logo/Google.png";
// import { useNavigate } from "react-router-dom";

// function Entry(props: Entryprops) {
//   return (
//     <div className="w-full">
//       <p className="text-gray-700 text-sm mb-2">{props.name}</p>
//       <input 
//         name="my" 
//         placeholder={props.placeholder}
//         type={props.name === "Password" ? "password" : props.name === "Email Address" ? "email" : "text"}
//         className="border border-gray-300 bg-gray-50 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
//       />
//     </div>
//   );
// }

// // function PhoneEntry() {
// //   return (
// //     <div className="w-full">
// //       <p className="text-gray-700 text-sm mb-2">Phone number</p>
// //       <div className="flex">
// //         <div className="flex items-center bg-gray-50 border border-gray-300 rounded-l-md px-3">
// //           <span className="text-green-600 text-lg"><img src={NGN}/></span>
// //           <span className="ml-2 text-gray-700">+234</span>
// //         </div>
// //         <input 
// //           name="phone" 
// //           placeholder=""
// //           type="tel"
// //           className="border border-gray-300 border-l-0 bg-gray-50 p-3 rounded-r-md flex-1 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// export default function Login() {
//   const navigate = useNavigate();
//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-white">
//       {/* Left section */}
//       <div className="w-full lg:w-[45%] bg-white flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12">
        
//         {/* Logo */}
//         <img
//           src={Logo}
//           alt="App Logo"
//           className="h-16 sm:h-20 lg:h-24 mb-8 object-contain"
//         />

//         {/* Headings */}
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center text-gray-900">
//           Welcome back
//         </h1>
//         <p className="text-gray-600 text-center text-sm sm:text-base mb-8 max-w-md">
//             Enter your details to log in your account
//         </p>

//         {/* Form */}
//         <div className="w-full max-w-md space-y-4">
//           <Entry name="Email address" placeholder="Email address or phone number" />
//           <div className="relative">
//             <Entry name="Password" placeholder="Create password" />
//             <p className="text-red-500 text-xs mt-1 flex items-center">
//               <img src= {PassInfo}/>
//               Password must be at least 8 characters
//             </p>
//           </div>

//           {/* Submit Button */}
//           <button className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-4 rounded-md transition-colors mt-6" onClick={() => navigate('/dashboard')}>
//             Log in
//           </button>

//           {/* Login Link */}
//           <p className="text-center text-sm text-gray-600 mt-4">
//             Don't have an account?{' '}
//             <a href="/create-account" className="text-green-500 hover:text-green-600 font-medium">
//               sign up
//             </a>
//           </p>

//           {/* Divider */}
//           <div className="flex items-center my-6">
//             <div className="flex-1 border-t border-gray-300"></div>
//             <span className="px-4 text-gray-500 text-sm">Or sign up with</span>
//             <div className="flex-1 border-t border-gray-300"></div>
//           </div>

//           {/* Social Login Buttons */}
//           <div className="flex justify-center space-x-4">
//             {/* implemented a re-routing to an external link for the Apple button to test smth*/}
//             <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors" onClick={() => window.location.href = "https://apple.com"}>
//               <img src= {apple} />
//             </button>
//             {/* implemented a re-routing to an external link for the Google button  */}
//             <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors" onClick={() => window.location.href = "https://google.com"}>
//               <img src= {google} />
//             </button>
//             {/* implemented a re-routing to an external link for the Facebook button  */}
//             <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors" onClick={() => window.location.href = "https://facebook.com"}>
//               <img src = {Facebook} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Right section */}
//       <div className="hidden lg:flex w-[55%] bg-[linear-gradient(180deg,rgba(0,0,0,0)_19.64%,rgba(0,0,0,0.6)_87.08%)] relative overflow-hidden">
        
//         <div className="absolute inset-0 bg-[url('Learning-bg.png')] bg-opacity-20"></div>
        
//         {/* Content */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white text-center p-12">
          
          
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//             Your Gateway to Smarter Learning
//           </h2>
//           <p className="text-lg lg:text-xl opacity-90 max-w-md">
//             Access a variety of curated courses across fields, from HR to Science and more. Learn at your pace, anytime, anywhere.
//           </p>
          
//           {/* Progress dots */}
//           <div className="flex space-x-2 mt-8">
//             <div className="w-3 h-3 bg-white rounded-full"></div>
//             <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
//             <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Logo from "../../assets/images/createaccount-logo/ils.png";
import PassInfo from "../../assets/images/createaccount-logo/Info.png";
import Facebook from "../../assets/images/createaccount-logo/facebook.png";
import apple from "../../assets/images/createaccount-logo/apple.png";
import google from "../../assets/images/createaccount-logo/Google.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Entryprops } from "../../components/createaccount/EntryDetails";

function Entry(props: Entryprops & { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onBlur?: () => void; error?: boolean }) {
  return (
    <div className="w-full">
      <p className="text-gray-700 text-sm mb-2">{props.name}</p>
      <input
        name="my"
        placeholder={props.placeholder}
        type={
          props.name === "Password"
            ? "password"
            : props.name === "Email address"
            ? "email"
            : "text"
        }
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={`border ${props.error ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-3 rounded-md w-full focus:outline-none focus:ring-2 ${props.error ? 'focus:ring-red-400' : 'focus:ring-green-400'} focus:border-transparent`}
      />
    </div>
  );
}

export default function Login() {
  const navigate = useNavigate();
  
  // State Management
  const [indexval, setIndexval] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  // Email Validation Logic
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const mutAr = {
    pictures: ["/Learning-bg.png", "/building-bg.png", "/climbing-bg.png"],
    write: ["Your Gateway to Smarter Learning", "Grow Together, Lead Together", "Ace your exams with confidence"],
    Text: [
      "Access a variety of curated courses across fields, from HR to Science and more. Learn at your pace, anytime, anywhere.",
      "Connect with fellow learners, gain real-world insights from experienced mentors in your field and grow with a network that supports your journey.",
      "You’re not just studying , you’re building a future. With Isaac by your side, you’ll gain the clarity, tools, and mindset to rise above challenges and succeed where it matters most.",
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexval((prev) => (prev + 1) % mutAr.pictures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail(email);
    
    // Only proceed if there are no errors and fields aren't empty
    if (!emailError && email && password.length >= 8) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left section */}
      <div className="w-full lg:w-[45%] bg-white flex flex-col items-center justify-center p-6 sm:p-10 lg:p-12">
        <img src={Logo} alt="App Logo" className="h-12 sm:h-16 lg:h-20 mb-6 object-contain" />

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-center text-gray-900">Welcome back</h1>
        <p className="text-gray-600 text-center text-sm sm:text-base mb-6 max-w-md">Enter your details to log in your account</p>

        <form onSubmit={handleLogin} className="w-full max-w-md space-y-4">
          {/* Email Section with Validation */}
          <div className="relative">
            <Entry 
              name="Email address" 
              placeholder="Enter your email" 
              value={email} 
              error={!!emailError}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) validateEmail(e.target.value); // Real-time fix after error appears
              }}
              onBlur={() => validateEmail(email)}
            />
            <div className="min-h-[20px]">
              {emailError && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <img src={PassInfo} alt="Error" className="mr-1 w-3 h-3" />
                  {emailError}
                </p>
              )}
            </div>
          </div>
          
          <div className="relative">
            <Entry 
              name="Password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <div className="min-h-[20px]">
                {password.length > 0 && password.length < 8 && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                    <img src={PassInfo} alt="Password Info" className="mr-1 w-3 h-3" />
                    Password must be at least 8 characters
                </p>
                )}
            </div>
            <div className="flex justify-end mt-1">
                <a href="/forgot-password" className="text-xs text-green-500 hover:text-green-600 font-medium">Forgot Password?</a>
            </div>
          </div>

          <button
            type="submit"
            disabled={!!emailError || password.length < 8}
            className={`w-full font-semibold py-3 px-4 rounded-md transition-colors mt-4 text-white ${
              (!!emailError || !email || password.length < 8) 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-green-400 hover:bg-green-500'
            }`}
          >
            Log in
          </button>
        </form>

        {/* ... Rest of social buttons and divider ... */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account? <a href="/create-account" className="text-green-500 hover:text-green-600 font-medium">Sign up</a>
        </p>

        <div className="flex items-center my-6 w-full max-w-md">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">Or log in with</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="flex justify-center space-x-4 pb-6 lg:pb-0">
          <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors" onClick={() => (window.location.href = "https://apple.com")}>
            <img src={apple} alt="Apple" />
          </button>
          <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors" onClick={() => (window.location.href = "https://google.com")}>
            <img src={google} alt="Google" />
          </button>
          <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors" onClick={() => (window.location.href = "https://facebook.com")}>
            <img src={Facebook} alt="Facebook" />
          </button>
        </div>
      </div>

      {/* Right section - desktop only */}
      <div className="hidden lg:flex w-[55%] relative overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${mutAr.pictures[indexval]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white text-center p-8 w-full max-w-xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{mutAr.write[indexval]}</h2>
          <p className="text-lg opacity-90">{mutAr.Text[indexval]}</p>
          <div className="flex space-x-2 mt-8">
            {mutAr.write.map((_, i) => (
              <div key={i} className={`w-3 h-3 rounded-full transition-colors duration-300 ${indexval === i ? "bg-green-500" : "bg-white/50"}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}