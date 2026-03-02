import Logo from "../../assets/images/createaccount-logo/ils.png";
import PassInfo from "../../assets/images/createaccount-logo/Info.png";
import NGN from "../../assets/images/createaccount-logo/flag-nigeria.png";
import Facebook from "../../assets/images/createaccount-logo/facebook.png";
import apple from "../../assets/images/createaccount-logo/apple.png";
import google from "../../assets/images/createaccount-logo/Google.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useSignUp } from "@clerk/clerk-react";

// --- Sub-Components ---

// interface EntryProps {
//   name: string;
//   placeholder: string;
//   value: string;
//   onChange: (val: string) => void;
// }
// Extend the standard HTML input attributes
// --- Sub-Components ---

interface EntryProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  name: string;
  onChange: (value: string) => void;
}

function Entry({ name, placeholder, value, onChange, type, ...props }: EntryProps) {
  // Determine input type dynamically if not explicitly provided
  const inputType = type || (
    name.toLowerCase().includes("password")
      ? "password"
      : name.toLowerCase().includes("email")
        ? "email"
        : "text"
  );

  return (
    <div className="w-full">
      <p className="text-gray-700 text-sm mb-2">{name}</p>
      <input
        {...props}
        value={value}
        type={inputType}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 bg-gray-50 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
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
          <span className="text-green-600 text-lg">
            <img src={NGN} alt="NG Flag" />
          </span>
          <span className="ml-2 text-gray-700">+234</span>
        </div>
        <input
          placeholder="8012345678"
          type="tel"
          className="border border-gray-300 border-l-0 bg-gray-50 p-3 rounded-r-md flex-1 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        />
      </div>
    </div>
  );
}

// --- Main Page ---

export default function CreateAccountPage() {
  const navigate = useNavigate();

  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const { signUp, isLoaded } = useSignUp(); // Ensure you use both

  const signUpWith = (
    strategy: "oauth_google" | "oauth_facebook" | "oauth_apple",
  ) => {
    // Guard: If Clerk isn't ready or signUp is undefined, stop here
    if (!isLoaded || !signUp) return;

    return signUp.authenticateWithRedirect({
      strategy,
      redirectUrl: "/dashboard",
      redirectUrlComplete: "/dashboard",
    });
  };

 

  // Carousel Data - Wrapped in useMemo to fix ESLint warning
  const mutAr = useMemo(
    () => ({
      pictures: ["/Learning-bg.png", "/building-bg.png", "/climbing-bg.png"],
      write: [
        "Your Gateway to Smarter Learning",
        "Grow Together, Lead Together",
        "Ace your exams with confidence",
      ],
      Text: [
        "Access a variety of curated courses across fields, from HR to Science and more. Learn at your pace, anytime, anywhere.",
        "Connect with fellow learners, gain real-world insights from experienced mentors in your field and grow with a network that supports your journey.",
        "You’re not just studying, you’re building a future. With Isaac by your side, you’ll gain the clarity, tools, and mindset to rise above challenges.",
      ],
    }),
    [],
  );

  const [indexval, setIndexval] = useState(0);

  // Carousel Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexval((prev) => (prev + 1) % mutAr.pictures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mutAr.pictures.length]);

  // Clerk Sign Up Logic
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !signUp) return;

    setError("");

    try {
      // 1. Create the user in Clerk's "Pending" database
      await signUp.create({
        emailAddress: email,
        password,
        // Optional: Clerk usually stores firstName/lastName separately
        firstName: fullName.split(" ")[0] || "",
        lastName: fullName.split(" ").slice(1).join(" ") || "",
      });

      // 2. Start the verification process (This sends the email)
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      // 3. Navigate to your OTP page
      // IMPORTANT: The user is NOT fully "created" in your active users list
      // until the OTP is verified on the next page.
      navigate("/otp1");
    } catch (err: any) {
      console.error(err);
      setError(err.errors?.[0]?.longMessage || "An error occurred");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left section */}
      <div className="w-full lg:w-[45%] bg-white flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 overflow-y-auto">
        <img
          src={Logo}
          alt="Logo"
          className="h-16 mb-8 object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />

        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center text-gray-900">
          Create account
        </h1>
        <p className="text-gray-600 text-center mb-8 max-w-md">
          Please kindly enter your correct details below to sign up.
        </p>

        <form onSubmit={handleSignUp} className="w-full max-w-md space-y-4">
          {error && (
            <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
              {error}
            </p>
          )}

          <Entry
            name="Full name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={setFullName}
          />
          <Entry
            name="Email address"
            placeholder="Enter your email address"
            value={email}
            onChange={setEmail}
          />
          <PhoneEntry />

          {/* <div className="relative">
            <Entry
              name="Password"
              placeholder="Create password"
              value={password}
              onChange={setPassword}
            />
            <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
              <img src={PassInfo} alt="info" className="w-3 h-3" />
              Password must be at least 8 characters
            </p>
          </div> */}
          <div>
  <Entry
    name="Password"
    placeholder="Create password"
    value={password}
    onChange={setPassword}
    type="password" // Ensure this is set for security!
  />
  
  <p className={`text-xs mt-1 flex items-center gap-1 transition-colors duration-200 ${
    password.length >= 8 ? 'text-green-500' : 'text-gray-500'
  }`}>
    {password.length < 8 && (
  <p className="text-gray-500 text-xs mt-1 flex items-center gap-1 transition-opacity duration-200">
    <img src={PassInfo} alt="info" className="w-3 h-3" />
    Password must be at least 8 characters
  </p>
)}
  </p>
</div>
          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 rounded-md transition-colors mt-6 shadow-md active:scale-95"
          >
            Create account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-green-500 hover:underline font-medium cursor-pointer"
          >
            Log in
          </span>
        </p>

        {/* Social Login */}
        <div className="flex items-center w-full max-w-md my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">Or sign up with</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <button onClick={() => signUpWith("oauth_apple")} className="...">
            <img src={apple} alt="apple" />
          </button>
          <button onClick={() => signUpWith("oauth_google")} className="...">
            <img src={google} alt="google" />
          </button>
          <button onClick={() => signUpWith("oauth_facebook")} className="...">
            <img src={Facebook} alt="facebook" />
          </button>
        </div>
      </div>

      {/* Right section (Carousel) */}
      <div className="hidden lg:flex w-[55%] relative overflow-hidden bg-black">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-60"
          style={{
            backgroundImage: `url(${mutAr.pictures[indexval]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute bottom-20 left-0 right-0 z-10 flex flex-col items-center text-white text-center p-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-pulse">
            {mutAr.write[indexval]}
          </h2>
          <p className="text-lg opacity-90 max-w-md">{mutAr.Text[indexval]}</p>

          <div className="flex space-x-2 mt-8">
            {mutAr.write.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  indexval === i ? "bg-green-500 w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

