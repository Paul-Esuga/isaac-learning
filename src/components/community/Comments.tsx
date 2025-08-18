import type { CommentProps } from "../bookmark/Boomark"
import like from '../../assets/images/profile-images/like.png';

function Comments({ img, name, time, body, like_count }: CommentProps) {
  return (
    <div className='shadow-md px-[10px] py-[20px] rounded-[10px] mb-[20px] flex gap-8 lg:pr-25'>
      <img src={img} className='w-[60px] h-[60px] mb-[20px]' alt='bookmark icon' />
      <div className="text-left  justify-start">
        <div className='flex  gap-[20px] mb-[10px]'>
          <div className="flex gap-[10px] align-middle ">
            <h3 className='font-[500] text-[20px] '>{name}</h3>
            <p className='text-[#7f8c8d] mt-1'>{time}</p>
          </div>
        </div>
        <div className='  '>
          <p className='text-[#7f8c8d] text-[25px] mb-[20px]'>
            {body}
          </p>
          <div className='flex gap-[16px] items-center'>
            <div className='flex items-center'>
              <img src={like} className='w-[20px] h-[20px]' alt='like icon' />
              <p className="ml-2 font-[400] text-base text-[#1A1A1A]">{like_count}</p>
            </div>
            <p className="text-primary-green text-base">Reply</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Comments