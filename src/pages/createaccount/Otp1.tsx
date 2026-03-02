import Logo from "../../assets/images/createaccount-logo/ils.png";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useSignUp } from "@clerk/clerk-react";

export default function Otp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const navigate = useNavigate();

  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    if (!isLoaded || !signUp) return;

    const otpCode = otp.join(""); // Convert array ["1","2"...] to string "123..."
    if (otpCode.length < 6) {
      setError("Please enter the full 6-digit code");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: otpCode,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        navigate("/dashboard");
      }
    } catch (err: any) {
      // Logic to extract Clerk error message safely
      console.error("Verification Error", err);
      setError(
        err.errors?.[0]?.longMessage || "Invalid code. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      <div className="w-full lg:w-[45%] flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12">
        <img src={Logo} alt="Logo" className="h-16 mb-12 object-contain" />

        <div className="w-full max-w-md">
          <button
            className="bg-gray-100 p-3 rounded-full mb-6 hover:bg-gray-200 transition-all"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Verify email address
          </h1>
          <p className="text-gray-500 mb-8">
            Kindly enter the <b>6 digit code</b> we sent to your email address.
          </p>

          {error && (
            <p className="text-red-500 text-sm mb-4 bg-red-50 p-2 rounded text-center">
              {error}
            </p>
          )}

          <div className="flex gap-2 sm:gap-4 mb-8 justify-center">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-10 h-12 sm:w-12 sm:h-14 border bg-gray-50 border-gray-300 rounded-lg text-center text-xl font-bold focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all"
              />
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-gray-600">
              Code expires in{" "}
              <span className="font-bold text-gray-800">2:59</span>
            </p>
            <p className="text-gray-600">
              Didn't get code?{" "}
              <button
                className="text-green-600 font-bold hover:underline"
                type="button"
              >
                Resend code
              </button>
            </p>
          </div>

          <button
            className={`w-full rounded-xl py-4 mt-8 text-white font-bold transition-all shadow-lg active:scale-95 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-700 hover:bg-green-800"
            }`}
            onClick={handleVerify}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </div>
      </div>

      <div className="hidden lg:flex w-[55%] relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('/Learning-bg.png')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-20 left-0 right-0 z-10 flex flex-col items-center text-white text-center p-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Your Gateway to Smarter Learning
          </h2>
          <p className="text-lg opacity-90 max-w-md">
            Access a variety of curated courses across fields. Learn at your
            pace, anytime, anywhere.
          </p>
        </div>
      </div>
    </div>
  );
}
