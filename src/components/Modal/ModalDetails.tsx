import success from "../../assets/images/payment-images/success-modal-logo.png"

export const ModalDetails = ({ setIsFamily }: { setIsFamily: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className='align-middle items-center justify-center rounded-xl'>
      <img src={success} alt="" className='justify-self-center w-[42%] mb-10' />
      <h2 className='text-black text-[36px] w-full font-bold mb-2'>Payment successful</h2>
      <p className='text-gray-800 text-sm w-[80%] justify-self-center mb-8'>You have successfully registered for the course: CIPM  HR exam and you can now proceed to homepage to start learning. Isaac is waiting, good luck.</p>
      <button className='bg-primary-green text-[#FCFCFC] text-base font-bold w-[100%] rounded-md p-2 mt-2 mb-2 opacity-100 cursor-pointer' onClick={() => setIsFamily(false)}>Proceed to homepage</button>
    </div>
  )
}