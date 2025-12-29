import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

export default function PhoneEntry() {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value: string, country: any) => {
    if (country.countryCode === "ng") {
      const localNumber = value.replace("234", "");

      // Restrict first digit to 7, 8, or 9
      if (localNumber.length > 0 && !["7", "8", "9"].includes(localNumber[0])) {
        return;
      }

      // Restrict total length to 13 digits (234 + 10)
      if (value.length > 13) {
        return;
      }
    }
    setPhone(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, country: any) => {
    if (country.countryCode === "ng") {
      const localNumber = phone.replace("234", "");

      // First digit rule
      if (localNumber.length === 0) {
        if (!/[789]/.test(e.key) && !["Backspace", "Delete", "Tab"].includes(e.key)) {
          e.preventDefault();
        }
      }

      // Block if already maxed out
      if (phone.length >= 13 && !["Backspace", "Delete", "Tab"].includes(e.key)) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className="w-full">
      <p className="text-gray-700 text-sm mb-2">Phone number</p>
      <PhoneInput
        country={"ng"}
        value={phone}
        onChange={handlePhoneChange}
        inputProps={{
          onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) =>
            handleKeyPress(e, { countryCode: "ng" }),
        }}
        inputStyle={{
          width: "100%",
          height: "48px",
          borderRadius: "0.5rem",
          border: "1px solid #d1d5db", // gray-300
          backgroundColor: "#f9fafb", // gray-50
          fontSize: "14px",
        }}
        buttonStyle={{
          borderTopLeftRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
          border: "1px solid #d1d5db",
          backgroundColor: "#f9fafb",
        }}
        containerStyle={{ width: "100%" }}
      />
    </div>
  );
}