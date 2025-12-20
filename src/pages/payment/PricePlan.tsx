import Icons from '../../assets/images/payment-images/icon-banner.png'
import BackDrop from '../../assets/images/payment-images/price-backdrop.png'
import Individual from '../../assets/images/payment-images/individual-icon.png'
import Family from '../../assets/images/payment-images/family-icon.png'
import List1 from '../../assets/images/payment-images/list1-icon.png'
import '../../App.css'
import { usePayment } from '../../context/PaymentContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// function PricePlan() {
//   const navigate = useNavigate()

//   const { selectedPayment, setSelectedPayment } = usePayment()

//   useEffect(() => {
//     sessionStorage.setItem("paymentPlan", selectedPayment.type)
//     sessionStorage.setItem('paymentPrice', selectedPayment.price)
//   }, [selectedPayment])


//   const indiBenefits: string[] = ['Full access to course', 'Modules, quizzes and mock exams', 'Community and daily nuggets', 'No in-app purchases', 'Unlimited learning']
//   const famBenefits: string[] = ['Allows groups, team, families', 'Each user has full access to preferred course', 'Community and daily nuggets', 'No in-app purchases', 'Unlimited learning']

//   return (
//     <div className='flex min-h-screen bg-gradient-to-b from-white via-[#B4E4D4]  to-[#00A36C] py-8 lg:px-24 sm:px-12 text-center'>
//       <div className='w-full max-w-screen-xl mx-auto '>
//         <div className=' rounded-sm text-2xl text-black justify-center items-center justify-items-center '>

//           <div className='w-full'>

//             {/* <div className='max-h-[20%] lg:h-[140px] '> */}
//             <div className='mb-8'>
//               <h1 className='text-primary-green text-2xl md:text-4xl mb-2 font-bold'>Choose a price plan for CIPM Exam</h1>
//               <p className='text-[#7F8C8D] text-base! mb-10'>Select the payment plan that feel just right for you. Small investment, huge productivity.</p>
//               <img src={Icons} alt="" className='w-full  justify-self-center' />
//             </div>

//             <div className='flex flex-col lg:flex-row justify-center gap-6 self-center items-stretch '>
//               {/* remove justify -tems start */}
//               <div className='rounded-2xl h-full w-full bg-cover bg-center mt-10 flex flex-col content-start p-6 md:p-8 justify-items-start text-left basis-1/2 max-w-[470px] mx-auto' style={{ backgroundImage: `url(${BackDrop})` }}>
//                 <img src={Individual} alt="" className='mb-6' />
//                 <h2 className='mb-2 text-2xl font-bold' >Individual</h2>
//                 <p className='mb-6 text-[18px]' >For a single user</p>
//                 <h3 className='text-[#414D58] text-5xl font-extrabold mb-6'>₦20,000</h3>
//                 <hr className='my-8 border-[#7F8C8D] w-full' />
//                 <ul>{indiBenefits.map((benefit) => <li className='flex'><img src={List1} className='w-[32px] h-[32px] mr-2' /><p className='text-left text-base'>{benefit}</p></li>)}
//                 </ul>
//                 <button className='bg-[#00A36C] p-2 rounded-3xl! w-full bottom-0 text-white text-base mt-6 self-end cursor-pointer'
//                   onClick={() => {
//                     setSelectedPayment(prev => {
//                       return {
//                         ...prev,
//                         type: 'Individual',
//                         price: '₦20,000'
//                       }
//                     })
//                     navigate('/payment')
//                   }}
//                 >Choose Plan</button>
//               </div>
//               <div className='bg-gradient-to-b from-[#57DBAE] to-[#1F664E] rounded-xl bg-cover h-screeen bg-center mt-10 flex-col content-start p-8 justify-items-start basis-5/11 text-[#FDFEFE] lg:max-w-[470px]' >
//                 <img src={Family} alt="" className='mb-4' />
//                 <h2 className='mb-2 text-2xl font-bold' >Family</h2>
//                 <p className='mb-6 text-[18px]' >Users up to 5</p>
//                 <h3 className='text-5xl font-extrabold mb-6'>₦90,000</h3>
//                 <hr className='my-8 border-[#FDFEFE] w-full' />
//                 <ul>{famBenefits.map((benefit) => <li className='flex'><img src={List1} className='w-[32px] h-[32px] mr-2' /><p className='text-left text-base'>{benefit}</p></li>)}
//                 </ul>
//                 <button className='bg-[#FDFEFE] p-2 rounded-3xl! w-full bottom-0 text-[#00A36C] text-base mt-6 self-end cursor-pointer'
//                   onClick={() => {
//                     setSelectedPayment(prev => {
//                       return {
//                         ...prev,
//                         type: 'Family',
//                         price: '₦90,000'
//                       }
//                     })
//                     navigate('/payment')

//                   }}
//                 >Choose Plan</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

function PricePlan() {
  const navigate = useNavigate()
  const { selectedPayment, setSelectedPayment } = usePayment()

  useEffect(() => {
    sessionStorage.setItem("paymentPlan", selectedPayment.type)
    sessionStorage.setItem('paymentPrice', selectedPayment.price)
  }, [selectedPayment])

  const indiBenefits: string[] = ['Full access to course', 'Modules, quizzes and mock exams', 'Community and daily nuggets', 'No in-app purchases', 'Unlimited learning']
  const famBenefits: string[] = ['Allows groups, team, families', 'Each user has full access to preferred course', 'Community and daily nuggets', 'No in-app purchases', 'Unlimited learning']

  return (
    // CHANGE 1: Changed h-[100vh] to min-h-screen and py-12 to py-8
    // This allows the page to grow if the content is longer than the screen
    <div className='flex min-h-screen bg-gradient-to-b from-white via-[#B4E4D4] to-[#00A36C] py-8 px-4 lg:px-24 sm:px-12 text-center'>
      <div className='w-full max-w-screen-xl mx-auto'>
        <div className='rounded-sm text-2xl text-black flex flex-col items-center'>
          
          {/* Header Section */}
          <div className='w-full'>
            <div className='mb-8'>
              {/* CHANGE 2: Used responsive text sizes (text-2xl on mobile, text-4xl on desktop) */}
              <h1 className='text-primary-green text-2xl md:text-4xl mb-2 font-bold'>Choose a price plan for CIPM Exam</h1>
              <p className='text-[#7F8C8D] text-sm md:text-base mb-6'>Select the payment plan that feels just right for you. Small investment, huge productivity.</p>
              <img src={Icons} alt="" className='w-full max-w-md mx-auto justify-self-center' />
            </div>

            {/* CHANGE 3: flex-col for mobile, flex-row for desktop. Added gap-6 */}
            <div className='flex flex-col lg:flex-row justify-center gap-6 items-stretch self-center'>
              
              {/* Individual Card */}
              {/* CHANGE 4: Removed h-screen, added h-full and w-full */}
              <div className='rounded-2xl bg-cover bg-center flex flex-col p-6 md:p-8 text-left basis-1/2 w-full max-w-[470px] mx-auto' style={{ backgroundImage: `url(${BackDrop})` }}>
                <img src={Individual} alt="" className='mb-4 w-12 h-12' />
                <h2 className='mb-1 text-xl md:text-2xl font-bold'>Individual</h2>
                <p className='mb-4 text-base'>For a single user</p>
                <h3 className='text-[#414D58] text-4xl md:text-5xl font-extrabold mb-4'>₦20,000</h3>
                <hr className='my-6 border-[#7F8C8D] w-full' />
                <ul className='flex-grow'>
                  {indiBenefits.map((benefit, i) => (
                    <li key={i} className='flex items-start mb-3'>
                      <img src={List1} className='w-5 h-5 mr-2 mt-1' alt="check" />
                      <p className='text-sm md:text-base'>{benefit}</p>
                    </li>
                  ))}
                </ul>
                <button className='bg-[#00A36C] p-3 rounded-full w-full text-white text-base mt-6 cursor-pointer hover:bg-[#008156] transition-colors'
                  onClick={() => {
                    setSelectedPayment({ type: 'Individual', price: '₦20,000' });
                    navigate('/payment');
                  }}
                >Choose Plan</button>
              </div>

              {/* Family Card */}
              <div className='bg-gradient-to-b from-[#57DBAE] to-[#1F664E] rounded-2xl flex flex-col p-6 md:p-8 text-left basis-1/2 text-[#FDFEFE] w-full max-w-[470px] mx-auto'>
                <img src={Family} alt="" className='mb-4 w-12 h-12' />
                <h2 className='mb-1 text-xl md:text-2xl font-bold'>Family</h2>
                <p className='mb-4 text-base'>Users up to 5</p>
                <h3 className='text-4xl md:text-5xl font-extrabold mb-4'>₦90,000</h3>
                <hr className='my-6 border-[#FDFEFE] w-full' />
                <ul className='flex-grow'>
                  {famBenefits.map((benefit, i) => (
                    <li key={i} className='flex items-start mb-3'>
                      <img src={List1} className='w-5 h-5 mr-2 mt-1' alt="check" />
                      <p className='text-sm md:text-base'>{benefit}</p>
                    </li>
                  ))}
                </ul>
                <button className='bg-[#FDFEFE] p-3 rounded-full w-full text-[#00A36C] text-base mt-6 cursor-pointer hover:bg-gray-100 transition-colors'
                  onClick={() => {
                    setSelectedPayment({ type: 'Family', price: '₦90,000' });
                    navigate('/payment');
                  }}
                >Choose Plan</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricePlan

