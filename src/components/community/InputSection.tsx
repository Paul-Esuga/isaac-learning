import React from 'react'
import { usePayment } from '../../context/PaymentContext'
import CommunityQuestions from '../../static-data/CommunityQuestions'

type Input = {
  input: string,
  setInput: React.Dispatch<React.SetStateAction<string>>
  submitCheck: boolean
  setSubmitCheck: React.Dispatch<React.SetStateAction<boolean>>
}

function InputSection({ input, setInput, submitCheck, setSubmitCheck }: Input) {
  const { setReplyComment, commentId, questionId, replyComment, isComment, setIsComment } = usePayment()

  return (
    <div>
      <div className='my-6 flex justify-between'>
        <textarea rows={1} className='resize-none content-center p-5 rounded-[10px] bg-[#f0f0f0] text-black w-[75%] lg:w-[90%] placeholder:text-black focus:border-[#2ECC71] focus:border-1 focus:outline-0 overflow-hidden' placeholder='Add your comment'
          // value={!replyComment ? input : ''}
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            !replyComment ? setIsComment(false) : ''
          }}
        ></textarea>
        <button className='px-5 py-2.5 bg-[#2ECC71] text-warm-white font-bold rounded-xl disabled:opacity-50 w-[134px]'
          disabled={!input}
          onClick={() => {
            setSubmitCheck(!submitCheck)
            isComment ?
              (CommunityQuestions[parseInt(questionId)]
                ?.comments?.[parseInt(commentId)]
                ?.replies?.push(input)) : ''
            setReplyComment(false)
          }}

        >Comment</button>
      </div>
    </div>
  )
}

export default InputSection
