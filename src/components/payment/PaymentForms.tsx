import { useEffect, useState } from "react";
import Modal from "../Modal/CompletionModal";
import { ModalDetails } from "../Modal/ModalDetails";

type Submittable = {
  canSubmit: boolean;
};

export const IndividualForm = ({ canSubmit }: Submittable) => {
  const [isFormFilled, setIsFormFilled] = useState(false);

  return (
    <div className="flex flex-col items-center w-full">
      {/* CHANGE 1: Used responsive width (full on mobile, 50% on desktop) and better padding */}
      <button
        className={`bg-[#00A36C] p-4 rounded-xl cursor-pointer w-full lg:w-[50%] text-white text-lg font-bold mt-6 transition-all active:scale-95 ${
          canSubmit ? "hover:bg-[#008156]" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!canSubmit}
        onClick={() => setIsFormFilled(true)}
      >
        Pay ₦20,000
      </button>
      <Modal isFormFilled={isFormFilled}>
        <ModalDetails setIsFormFilled={setIsFormFilled} />
      </Modal>
    </div>
  );
};

export const FamilyForm = ({ canSubmit }: Submittable) => {
  const emailValid =
    /(^(\w+)(@([a-z]|[0-9])+)(\.([a-z]|[0-9])+)(\.([a-z]|[0-9])+)?$)/i;
  const [emailInput, setEmailInput] = useState(new Array(4).fill(""));
  const [isEmailValid, setIsEmailValid] = useState(new Array(4).fill(true));
  const isValid = isEmailValid.every((el) => el === true) && canSubmit;
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    const updated = emailInput.map((email) => {
      return email ? emailValid.test(email) : true;
    });
    setIsEmailValid(updated);
  }, [emailInput]);

  return (
    <main className="w-full">
      {/* CHANGE 2: Better text alignment and responsive widths for the header section */}
      <div className="w-full lg:w-[60%] mx-auto mb-8 text-left md:text-center">
        <h1 className="text-2xl text-slate-gray font-bold mt-8">
          Add other users
        </h1>
        <p className="text-sub-gray text-base md:text-lg">
          Enter the email address of the users you want to add on the family
          plan (You can add up to 4)
        </p>
      </div>

      {/* CHANGE 3: Used a Grid instead of flex-wrap for cleaner spacing on small screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
        {emailInput.map((email, index) => (
          <div key={index} className="w-full">
            <p className="text-sub-gray text-xs text-left mb-2">
              Email address {index + 1}
            </p>
            <input
              type="email"
              placeholder="user@example.com"
              className={`border px-4 py-3 mb-4 w-full rounded-[10px] focus:outline-primary-green focus:outline-2 transition-colors ${
                !isEmailValid[index]
                  ? "border-red-500"
                  : email
                  ? "border-primary-green outline-primary-green"
                  : "border-sub-gray"
              }`}
              value={email}
              onChange={(e) => {
                setEmailInput((prev) =>
                  prev.map((data, indx) =>
                    indx === index ? e.target.value : data
                  )
                );
              }}
            />
          </div>
        ))}
      </div>

      {/* CHANGE 4: Centered the button properly and ensured it takes full width on small screens */}
      <div className="flex justify-center w-full mt-4">
        <button
          className={`bg-[#00A36C] p-4 rounded-xl cursor-pointer w-full lg:w-[50%] text-white text-lg font-bold transition-all active:scale-95 ${
            isValid ? "hover:bg-[#008156]" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isValid}
          onClick={() => {
            setIsFormFilled(true);
          }}
        >
          Pay ₦90,000
        </button>
      </div>

      <Modal isFormFilled={isFormFilled}>
        <ModalDetails setIsFormFilled={setIsFormFilled} />
      </Modal>
    </main>
  );
};
