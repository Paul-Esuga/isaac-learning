import Logo from "../../assets/images/createaccount-logo/ils.png";
import { ChevronLeft, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useSignIn } from "@clerk/clerk-react"; // Use useSignIn for Forgot Password

// --- Type Safety Fix ---
interface ClerkError {
  errors: Array<{
    longMessage: string;
    code: string;
  }>;
}

export default function FpOtp1() {
  const { isLoaded, signIn} = useSignIn();
  const navigate = useNavigate();

  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState("");
  
  const [resendLoading, setResendLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

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
    if (!isLoaded || !signIn || timeLeft > 0) return;

    setResendLoading(true);
    setError("");

    try {
      // In Forgot Password, we restart the first factor (email_code)
      await signIn.create({
        strategy: "reset_password_email_code",
        identifier: signIn.identifier || "", // Uses the email entered in the previous step
      });
      setTimeLeft(60);
      setShowToast(true);
    } catch (err: unknown) {
      const clerkErr = err as ClerkError;
      setError(clerkErr.errors?.[0]?.longMessage || "Failed to resend code.");
    } finally {
      setResendLoading(false);
    }
  };

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

//   const handleVerify = async () => {

//   if (!isLoaded || !signIn || !setActive) return;

//   const otpCode = otp.join("");
//   if (otpCode.length < 6) {
//     setError("Please enter the full 6-digit code");
//     return;
//   }
//   navigate("/reset-password", { state: { code: otpCode } });

//   setLoading(true);
//   setError("");

//   try {
//     // 1. We attempt the factor to check if the code is valid
//     const result = await signIn.attemptFirstFactor({
//       strategy: "reset_password_email_code",
//       code: otpCode,
//     });

//     // 2. If Clerk says we need a new password, we go to that page
//     // and we PASS the otpCode in the navigation state
//     if (result.status === "needs_new_password") {
//       navigate("/reset-password", { state: { code: otpCode } }); 
//     } 
//     else if (result.status === "complete") {
//       await setActive({ session: result.createdSessionId });
//       navigate("/");
//     }
//   } catch (err: unknown) {
//     const clerkErr = err as ClerkError;
//     setError(clerkErr.errors?.[0]?.longMessage || "Invalid code. Please try again.");
//   } finally {
//     setLoading(false);
//   }
// };

const handleVerify = () => {
  // 1. Join the OTP array into a string
  const otpCode = otp.join("");

  // 2. Simple frontend validation
  if (otpCode.length < 6) {
    setError("Please enter the full 6-digit code");
    return;
  }

  // 3. Move to the next page immediately, taking the code with you.
  // We don't call Clerk here because we do it on the Reset Password page.
  navigate("/reset-password", { state: { code: otpCode } });
};

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white relative">
      {/* Toast Notification */}
      <div
        className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-500 ${
          showToast ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        <CheckCircle2 className="w-5 h-5" />
        <span className="font-medium text-sm">Verification code resent!</span>
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

          <h1 className="text-2xl font-bold text-gray-800 mb-2">Verify email address</h1>
          <p className="text-gray-500 mb-8">
            Kindly enter the <b>6 digit code</b> sent to your email.
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
                ref={(el) => { inputRefs.current[index] = el; }}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-10 h-12 sm:w-12 sm:h-14 border bg-gray-50 border-gray-300 rounded-lg text-center text-xl font-bold focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all"
              />
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-gray-600 text-sm">
              {timeLeft > 0 ? (
                <>Resend code in <span className="font-bold text-gray-800">{formatTime(timeLeft)}</span></>
              ) : (
                <span className="text-red-500 font-medium">Code expired</span>
              )}
            </p>
            <p className="text-gray-600 text-sm">
              Didn't get code?{" "}
              <button
                className={`font-bold transition-all ${
                  timeLeft === 0 ? "text-green-700 hover:underline" : "text-green-200 cursor-not-allowed"
                }`}
                type="button"
                onClick={handleResend}
                disabled={timeLeft > 0 || resendLoading}
              >
                {resendLoading ? "Sending..." : "Resend code"}
              </button>
            </p>
          </div>
          <button
  className="w-full rounded-xl py-4 mt-8 text-white font-bold transition-all shadow-lg active:scale-95 bg-green-700 hover:bg-green-800"
  onClick={handleVerify}
>
  Verify
</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex w-[55%] relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('/Learning-bg.png')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-20 left-0 right-0 z-10 flex flex-col items-center text-white text-center p-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Your Gateway to Smarter Learning</h2>
          <p className="text-lg opacity-90 max-w-md">Access a variety of curated courses across fields.</p>
        </div>
      </div>
    </div>
  );
}