import { useEffect, useState } from "react";
import Pass from "../../assets/images/createaccount-logo/password.png";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const mutAr = {
    pictures: ["/Learning-bg.png", "/building-bg.png", "/climbing-bg.png"],
    write: [
      "Your Gateway to Smarter Learning",
      "Grow Together, Lead Together",
      "Ace your exams with confidence",
    ],
    Text: [
      "Access a variety of curated courses across fields, from HR to Science and more. Learn at your pace, anytime, anywhere.",
      "Connect with fellow learners, gain real-world insights from experienced mentors in your field and grow with a network that supports your journey.",
      "You’re not just studying , you’re building a future. With Isaac by your side, you’ll gain the clarity, tools, and mindset to rise above challenges and succeed where it matters most.",
    ],
  };

  const [indexval, setIndexval] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexval((prev) => (prev + 1) % mutAr.pictures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mutAr.pictures.length]);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white overflow-hidden">
      {/* Left section - Removed mt-[100px] to fix height alignment */}
      <div className="w-full lg:w-[45%] bg-white flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12">
        <div className="flex flex-col items-center justify-center w-full max-w-[480px]">
          <div className="mb-8">
            <img src={Pass} alt="Reset Password Icon" />
          </div>
          
          <h1 
            className="font-poppins text-3xl font-bold mb-2 text-center" 
            style={{ color: "#414D58" }}
          >
            Forgot Password
          </h1>
          
          <p className="mt-0 text-[#8A949D] mb-8 text-center">
            Enter your email address to proceed
          </p>

          <form 
  className="flex flex-col w-full"
  onSubmit={(e) => {
    e.preventDefault(); // Prevents page reload
    navigate("/reset-password");
  }}
>
  <input
    className="w-full rounded-lg bg-[#F3F4F6] px-6 py-4 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
    placeholder="Enter your email address"
    type="email"
    required // This will now work!
  />
  
  <button 
    type="submit" // Triggers the form's onSubmit and validation
    className="w-full mt-6 rounded-lg bg-green-700 px-10 py-4 text-white font-bold hover:bg-green-800 transition-colors shadow-lg"
  >
    Proceed
  </button>
</form>
        </div>
      </div>

      {/* Right section - Hero Carousel */}
      <div className="hidden lg:flex w-[55%] relative overflow-hidden">
        {/* Background Image with Smooth Transition placeholder */}
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            backgroundImage: `url(${mutAr.pictures[indexval]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white text-center w-full px-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 drop-shadow-md">
            {mutAr.write[indexval]}
          </h2>
          <p className="text-lg opacity-90 max-w-md drop-shadow-sm">
            {mutAr.Text[indexval]}
          </p>

          {/* Progress dots */}
          <div className="flex space-x-2 mt-8">
            {mutAr.write.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  indexval === i ? "bg-green-600 w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}