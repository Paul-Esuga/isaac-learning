import Logo from "../../assets/images/createaccount-logo/ils.png";
import { ChevronLeft, CheckCircle2 } from "lucide-react"; // Added CheckCircle2 for toast
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useSignUp } from "@clerk/clerk-react";

// --- Type Safety Fix ---
interface ClerkError {
  errors: Array<{
    longMessage: string;
    code: string;
  }>;
}

export default function Otp() {
  const { isLoaded, signUp } = useSignUp();
  const navigate = useNavigate();

  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [showToast, setShowToast] = useState(false); // Toast State

  const [timeLeft, setTimeLeft] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Timer Logic
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Toast Auto-hide logic
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleResend = async () => {
    if (!isLoaded || !signUp || timeLeft > 0) return;

    setResendLoading(true);
    setError("");

    try {
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setTimeLeft(60);
      setShowToast(true); // Trigger Toast
    } catch (err: unknown) {
      const clerkErr = err as ClerkError; // Fixed ESLint 'any' error
      setError(clerkErr.errors?.[0]?.longMessage || "Failed to resend code.");
    } finally {
      setResendLoading(false);
    }
  };

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.value !== "" && index < 5)
      inputRefs.current[index + 1]?.focus();
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
    const otpCode = otp.join("");
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
        navigate("/");
      }
    } catch (err: unknown) {
      const clerkErr = err as ClerkError; // Fixed ESLint 'any' error
      setError(
        clerkErr.errors?.[0]?.longMessage || "Invalid code. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white relative">
      {/* --- TOAST NOTIFICATION --- */}
      <div
        className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-500 ${showToast ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}
      >
        <CheckCircle2 className="w-5 h-5" />
        <span className="font-medium text-sm">
          Verification code resent successfully!
        </span>
      </div>

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
            Kindly enter the <b>6 digit code</b> we sent to your email.
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
            <p className="text-gray-600 text-sm">
              {
                timeLeft > 0 && (
                  <>
                    Resend code in{" "}
                    <span className="font-bold text-gray-800">
                      {formatTime(timeLeft)}
                    </span>
                  </>
                )
                // (
                //   <span className="text-red-500 font-medium italic">

                //   </span>
                // )
              }
            </p>
            <p className="text-gray-600 text-sm">
              Didn't get code?{" "}
              <button
                className={`font-bold transition-all ${timeLeft === 0 ? "text-green-700 hover:underline scale-105" : "text-green-200 cursor-not-allowed"}`}
                type="button"
                onClick={handleResend}
                disabled={timeLeft > 0 || resendLoading}
              >
                {resendLoading ? "Sending..." : "Resend code"}
              </button>
            </p>
          </div>

          <button
            className={`w-full rounded-xl py-4 mt-8 text-white font-bold transition-all shadow-lg active:scale-95 ${loading ? "bg-gray-400" : "bg-green-700 hover:bg-green-800"}`}
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
            Access a variety of curated courses across fields.
          </p>
        </div>
      </div>
    </div>
  );
}
