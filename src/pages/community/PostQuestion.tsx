import { useNavigate } from 'react-router-dom'
import FrancisPFP from '../../assets/images/community-images/francis-pfp.png'
import { useState } from 'react'
import CommunityQuestions from '../../static-data/CommunityQuestions'
import { usePayment } from '../../context/PaymentContext'


function PostQuestion() {
  const navigate = useNavigate()
  // const [question, setQuestion] = useState('')
  const { question, setQuestion } = usePayment()
  return (
    // <main
    //   className='overflow-y-scroll h-[80vh] lg:h-[80vh] sm:mt-8 lg:mt-0'
    // >
    <div className='bg-[#fcfcfc] h-screen z-[1000] absolute top-0 left-[0] right-[0] pt-[30px] overflow-y-scroll px-5'>
      <div className='flex gap-6   p-2.5 '>
        <div>
          <img src={FrancisPFP} alt="" className='w-[60px] h-[60px] rounded-full' />
        </div>
        <div className='lg:w-[96%] sm:w-[85%] '>
          <div className='border-1 border-[#5DADE2] rounded-[100px]! text-[#5DADE2] p-2.5 h-[50px] w-[144px] text-center text-xl font-bold mb-3'>Community</div>
          <input type="text" placeholder='Whats your question?' id="" className='border-[0.5px] border-sub-gray p-2.5 rounded-[10px] resize-none placeholder:text-slate-gray text-[18px] focus:outline-0 focus:border-2 focus:border-sub-gray w-[100%] mb-4'
            // value={question.title}
            onChange={(e) => {
              setQuestion((prev) => { return { ...prev, title: e.target.value } }
              )
            }}
          />
          <textarea placeholder='Write your thoughts...' cols={70} rows={5} className='border-[0.5px] border-sub-gray p-2.5 rounded-[10px] resize-none placeholder:text-slate-gray text-[18px] focus:outline-0 focus:border-2 focus:border-sub-gray w-[100%]'
            // value={question.body}
            onChange={(e) => {
              setQuestion((prev) => { return { ...prev, body: e.target.value } }
              )
            }}
          ></textarea>
        </div>
      </div>

    </div>
    // </main>
  )
}

export default PostQuestion