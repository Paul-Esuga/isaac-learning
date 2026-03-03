import Logo from "../../assets/images/createaccount-logo/ils.png";
import PassInfo from "../../assets/images/createaccount-logo/Info.png";
import NGN from "../../assets/images/createaccount-logo/flag-nigeria.png";
import Facebook from "../../assets/images/createaccount-logo/facebook.png";
import apple from "../../assets/images/createaccount-logo/apple.png";
import google from "../../assets/images/createaccount-logo/Google.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { Eye, EyeOff } from "lucide-react";

// --- Sub-Components ---

// interface EntryProps {
//   name: string;
//   placeholder: string;
//   value: string;
//   onChange: (val: string) => void;
// }
// Extend the standard HTML input attributes
// --- Sub-Components ---

interface EntryProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> {
  name: string;
  onChange: (value: string) => void;
}

function Entry({
  name,
  placeholder,
  value,
  onChange,
  type,
  ...props
}: EntryProps) {
  const [showPassword, setShowPassword] = useState(false);

  // Determine if this is a password field
  const isPasswordField = name.toLowerCase().includes("password");

  // Determine input type dynamically
  const inputType = isPasswordField
    ? showPassword
      ? "text"
      : "password"
    : type || (name.toLowerCase().includes("email") ? "email" : "text");

  return (
    <div className="w-full">
      <p className="text-gray-700 text-sm mb-2">{name}</p>
      <div className="relative">
        <input
          {...props}
          value={value}
          type={inputType}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="border border-gray-300 bg-gray-50 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all pr-12"
        />

        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

function PhoneEntry() {
  const [value, setValue] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 1. Remove all non-digits
    const val = e.target.value.replace(/\D/g, "");

    // 2. Validate first digit (7, 8, or 9)
    if (val.length >= 1) {
      const firstDigit = val[0];
      if (!["7", "8", "9"].includes(firstDigit)) {
        return; // Reject input if first digit isn't 7, 8, or 9
      }
    }

    // 3. Validate second digit (0 or 1)
    if (val.length >= 2) {
      const secondDigit = val[1];
      if (!["0", "1"].includes(secondDigit)) {
        return; // Reject input if second digit isn't 0 or 1
      }
    }

    // 4. Limit to 10 digits (Standard for +234 prefix)
    // Note: If you want 11 digits (e.g. 080...), change to .slice(0, 11)
    const finalVal = val.slice(0, 10);
    setValue(finalVal);
  };

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
          value={value}
          className="border border-gray-300 border-l-0 bg-gray-50 p-3 rounded-r-md flex-1 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
          onChange={handlePhoneChange}
          required
        />
      </div>
      {/* Optional helper text to guide the user */}
      {value.length > 0 && value.length < 10 && (
        <p className="text-gray-400 text-[10px] mt-1">
          Enter the remaining {10 - value.length} digits
        </p>
      )}
    </div>
  );
}
// --- Main Page ---

export default function CreateAccountPage() {
  const navigate = useNavigate();
  const [showPasswordError, setShowPasswordError] = useState(false);

  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
<<<<<<< HEAD
  
  
=======
>>>>>>> 11f83f856da6236a9e358e0e4353d4e77ef0ea58

  const { signUp, isLoaded } = useSignUp(); // Ensure you use both
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !signUp) return;

    setError("");

    // Validation check
    if (password.length < 8) {
      setShowPasswordError(true);
      return;
    }

    try {
      await signUp.create({
        emailAddress: email,
        password,
        firstName: fullName.split(" ")[0] || "",
        lastName: fullName.split(" ").slice(1).join(" ") || "",
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      navigate("/otp1");
    } catch (err: unknown) {
      console.error(err);

      // Cast the error to a type that matches Clerk's error structure
      const clerkError = err as { errors?: { longMessage: string }[] };

      setError(
        clerkError.errors?.[0]?.longMessage ||
          "An error occurred. Please try again.",
      );
    }
  };

  const signUpWith = (
    strategy: "oauth_google" | "oauth_facebook" | "oauth_apple",
  ) => {
    // Guard: If Clerk isn't ready or signUp is undefined, stop here
    if (!isLoaded || !signUp) return;

    return signUp.authenticateWithRedirect({
      strategy,
      redirectUrl: "/",
      redirectUrlComplete: "/",
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
            required
          />
          <Entry
            name="Email address"
            placeholder="Enter your email address"
            value={email}
            onChange={setEmail}
            required
          />
          <PhoneEntry />
          <div>
            <Entry
              name="Password"
              placeholder="Create password"
              value={password}
              onChange={(val) => {
                setPassword(val);
                // 4. Optional: clear the error once they fix the length
                if (val.length >= 8) setShowPasswordError(false);
              }}
            />

<<<<<<< HEAD
  <Entry
          name="Password"
          placeholder="Create password"
          value={password}
          required
          onChange={(val) => {
            setPassword(val);
            // 4. Optional: clear the error once they fix the length
            if (val.length >= 8) setShowPasswordError(false);
          }}
        />
  
  {/* <p className={`text-xs mt-1 flex items-center gap-1 transition-colors duration-200 ${
    password.length >= 8 ? 'text-green-500' : 'text-gray-500'
  }`}>
    {password.length < 8 && (
  <p className="text-gray-500 text-xs mt-1 flex items-center gap-1 transition-opacity duration-200">
    <img src={PassInfo} alt="info" className="w-3 h-3" />
    Password must be at least 8 characters
  </p>
)}
  </p> */}
{showPasswordError && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1 transition-opacity duration-200">
            <img src={PassInfo} alt="info" className="w-3 h-3" />
            Password must be at least 8 characters
          </p>
        )}
  
  

</div>

{/* <button
        type="submit"
        className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 rounded-md transition-colors mt-6 shadow-md active:scale-95"
      >
        Create account

            <div className="min-h-[20px] mt-1">
              {password.length > 0 && password.length < 8 ? (
                <p className="text-red-500 text-xs flex items-center gap-1 transition-opacity duration-200">
                  <img src={PassInfo} alt="info" className="w-3 h-3" />
                  Password must be at least 8 characters
                </p>
              ) : password.length >= 8 ? (
                <p className="text-green-600 text-xs flex items-center gap-1">
                  ✓ Password strength: Good
                </p>
              ) : null}
            </div>
            </button> */}
         
=======
            {showPasswordError && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1 transition-opacity duration-200">
                <img src={PassInfo} alt="info" className="w-3 h-3" />
                Password must be at least 8 characters
              </p>
            )}
          </div>
>>>>>>> 11f83f856da6236a9e358e0e4353d4e77ef0ea58
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
