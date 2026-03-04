import Logo from "../../assets/images/createaccount-logo/ils.png";
import PassInfo from "../../assets/images/createaccount-logo/Info.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSignIn } from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";

const mutAr = {
  pictures: ["/Learning-bg.png", "/building-bg.png", "/climbing-bg.png"],
  write: [
    "Secure Your Account",
    "Back to Learning",
    "Success Starts with Safety",
  ],
  Text: [
    "Choose a strong password to keep your progress and personal data safe.",
    "Once updated, you'll be redirected straight to your dashboard.",
    "We use industry-leading encryption to ensure your data stays yours.",
  ],
};

export default function ResetPassword() {
  const navigate = useNavigate();
  const { signIn, isLoaded, setActive } = useSignIn();
  const { state } = useLocation(); // Grab the state
  const otpCode = state?.code;    // Get the code passed from OTP page


  // State
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [indexval, setIndexval] = useState(0);

  // Carousel Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexval((prev) => (prev + 1) % mutAr.pictures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleReset = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!isLoaded || !signIn) return;

  // Safety check: if user refreshed the page and lost the code from state
  if (!otpCode) {
    setError("Session expired. Please start the reset process again.");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  setLoading(true);
  setError("");

  try {
    // FINAL STEP: Include the 'code' property to satisfy the TypeScript error
    const result = await signIn.attemptFirstFactor({
      strategy: "reset_password_email_code",
      code: otpCode,     // <--- ADD THIS LINE
      password: password, 
    });

    if (result.status === "complete") {
      await setActive({ session: result.createdSessionId });
      navigate("/dashboard");
    } else {
      console.log("Status check:", result.status);
    }
  } catch (err: unknown) {
    const clerkErr = err as { errors: { longMessage: string }[] };
    setError(clerkErr.errors?.[0]?.longMessage || "Failed to reset password");
  } finally {
    setLoading(false);
  }
};

  

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      <div className="w-full lg:w-[45%] bg-white flex flex-col items-center justify-center p-6 sm:p-10 lg:p-12">
        <img src={Logo} alt="Logo" className="h-16 mb-6 object-contain" />

        <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-center text-gray-900">
          Create New Password
        </h1>
        <p className="text-gray-600 text-center text-sm mb-6 max-w-md">
          Please enter your new password below to secure your account.
        </p>

        <form onSubmit={handleReset} className="w-full max-w-md space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm flex items-center">
              <img src={PassInfo} alt="Info" className="w-4 h-4 mr-2" />
              {error}
            </div>
          )}

          <div>
            <p className="text-gray-700 text-sm mb-2">New Password</p>
            <input
              type="password"
              placeholder="Min 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 bg-gray-50 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              required
            />
          </div>

          <div>
            <p className="text-gray-700 text-sm mb-2">Confirm New Password</p>
            <input
              type="password"
              placeholder="Repeat new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-300 bg-gray-50 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading || password.length < 8}
            className={`w-full font-semibold py-3 px-4 rounded-md transition-all mt-4 text-white shadow-lg active:scale-95 ${
              loading || password.length < 8
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-700 hover:bg-green-800"
            }`}
          >
            {loading ? "Updating..." : "Reset Password"}
          </button>
        </form>
      </div>

      {/* Right Carousel Section */}
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {mutAr.write[indexval]}
          </h2>
          <p className="text-lg opacity-90">{mutAr.Text[indexval]}</p>
        </div>
      </div>
    </div>
  );
}