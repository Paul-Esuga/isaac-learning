import type { CommentProps } from "../bookmark/Boomark"
import like from '../../assets/images/profile-images/like.png';

function Comments({ img, name, time, body, like_count }: CommentProps) {
  return (
    <div className='shadow-md px-[10px] py-[20px] rounded-[10px] mb-[20px]'>

      <div className='flex align-center gap-[20px] mb-[20px]'>
        <img src={img} className='w-[50px] h-[50px] mb-[20px]' alt='bookmark icon' />
        <div>
          <h3 className='font-[500] text-[20px]'>{name}</h3>
          <p className='text-[#7f8c8d]'>{time}</p>
        </div>
      </div>

      <div className='mx-[90px]'>

        <p className='text-[#7f8c8d] text-[25px] mb-[20px]'>
          {body}
        </p>

        <div className='flex gap-[16px] items-center'>

          <div className='flex items-center'>
            <img src={like} className='w-[20px] h-[20px]' alt='like icon' />
            <p>{like_count}</p>
          </div>

        </div>

      </div>


    </div>
  )
}

export default Comments