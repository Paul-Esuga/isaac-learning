import { useEffect, useState } from "react"
import Modal from "../Modal/CompletionModal"
import { ModalDetails } from "../Modal/ModalDetails"

type Submittable = {
  canSubmit: boolean
}

export const IndividualForm = ({ canSubmit }: Submittable) => {
  const [isFormFilled, setIsFormFilled] = useState(false)


  return (
    <div>
      <button className={`bg-[#00A36C] p-[10px] rounded-[10px]! cursor-pointer w-full bottom-0 text-white text-[18px] font-bold mt-6 lg:w-[50%] self-center m-auto ${canSubmit ? '' : 'opacity-50'}`}
        disabled={!canSubmit}
        onClick={() => setIsFormFilled(true)}
      >Pay ₦20,000</button>
      <Modal isFormFilled={isFormFilled} >
        <ModalDetails setIsFormFilled={setIsFormFilled} />
      </Modal>
    </div>
  )
}

export const FamilyForm = ({ canSubmit }: Submittable) => {
  const emailValid = /(^(\w+)(@([a-z]|[0-9])+)(\.([a-z]|[0-9])+)(\.([a-z]|[0-9])+)?$)/i
  const [emailInput, setEmailInput] = useState(new Array(4).fill(""))
  const [isEmailValid, setIsEmailValid] = useState(new Array(4).fill(true))
  const isValid = (isEmailValid.every(el => el == true) && canSubmit)
  const [isFormFilled, setIsFormFilled] = useState(false)

  useEffect(() => {
    const updated = emailInput.map((email) => {
      return email ? emailValid.test(email) : true
    })
    setIsEmailValid(updated)
    console.log("Updated isEmailValids:", updated);
  }, [emailInput])


  return (
    <main >
      <div className="lg:w-[50%] self-center m-auto mb-8 ">
        <h1 className="text-2xl text-slate-gray font-bold mt-8">Add other users</h1>
        <p className="text-sub-gray text-[18px]">Enter the email address of the users you want to add on the family plan (You can add up to 4)</p>
      </div>
      <div className="flex flex-wrap justify-between ">
        {emailInput.map((email, index) =>
          <div className="sm:w-[46%] lg:w-[48%] ">
            <p className="text-sub-gray text-xs text-left mb-2">Email address</p>
            <input type="email"
              className={`border-1 px-4 py-[10px] mb-6 w-full rounded-[10px] focus:outline-primary-green  focus:outline-2  ${email ? 'outline-primary-green border-primary-green ' : 'border-sub-gray'}`}
              value={email}
              onChange={(e) => {
                setEmailInput([
                  ...emailInput.map((data, indx) => { return indx == index ? e.target.value : data; }
                  )])
              }
              }
            />
          </div>
        )}
        <button className={`bg-[#00A36C] p-[10px] rounded-[10px]! cursor-pointer w-full bottom-0 text-white  text-[18px] font-bold mt-6 lg:w-[50%] self-center m-auto ${isValid ? '' : 'opacity-50'}`}
          disabled={!isValid}
          onClick={() => { setIsFormFilled(true) }}
        >Pay ₦90,000</button>
      </div>
      <Modal isFormFilled={isFormFilled} >
        <ModalDetails setIsFormFilled={setIsFormFilled} />
      </Modal>
    </main>
  )
}
