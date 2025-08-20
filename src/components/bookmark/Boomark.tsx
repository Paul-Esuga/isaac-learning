import like from '../../assets/images/profile-images/like.png';
import comment from '../../assets/images/profile-images/comment.png';
import bookmarked from '../../assets/images/profile-images/bookmark-checked-icon.png';
import unbookmarked from '../../assets/images/profile-images/bookmark-unchecked-icon.png';
import { useEffect, useState } from 'react';

export type CommentProps = {
    bookmarkId?: string
    id: string
    img: string,
    name: string
    time: string,
    body: string,
    like_count: string,
    replies: string[]
}

export type BookmarkProps = {
    id: string
    img: string,
    name: string
    time: string,
    title: string,
    body: string,
    like_count: string,
    comment_count: string
    isBookmarked?: boolean
    comments?: CommentProps[]
}


const Bookmark = ({ img, name, time, title, body, like_count, comment_count, isBookmarked }: BookmarkProps) => {
    const [isChecked, setIsChecked] = useState(false)
    const [isBooked, setIsBooked] = useState(false)
    useEffect(() => {
        setIsBooked(!isBooked)
        // isBookmarked = 
    }, [isChecked])
    return (
        <div className='shadow-md px-[20px] py-[20px] rounded-[10px] mb-[20px] border-[0.5px] border-sub-gray flex gap-[10px] '>

            <div className='flex align-center w-[60px] mb-[20px] '>
                <img src={img} className='w-[50px] h-[50px] mb-[20px]' alt='bookmark icon' />

            </div>

            <div className='w-[83%] '>
                <div>
                    <h3 className='font-[500] text-[20px]'>{name}</h3>
                    <p className='text-[#7f8c8d]'>{time}</p>
                </div>
                <h3 className='font-[700] text-[34px] max-w-[1000px] mb-[10px]'>
                    {title}
                </h3>

                <p className='text-[#7f8c8d] text-[25px] mb-[20px]'>
                    {body}
                </p>

                <div className='flex gap-[16px] items-center'>

                    <div className='flex items-center'>
                        <img src={like} className='w-[20px] h-[20px] mr-1' alt='like icon' />
                        <p>{like_count}</p>
                    </div>

                    <div className='flex items-center'>
                        <img src={comment} className='w-[20px] h-[20px] mr-1' alt='comment icon' />
                        <p>{comment_count}</p>
                    </div>

                    <div
                        className=' cursor-pointer items-start '
                        onClick={() => {
                            setIsChecked(!isChecked)
                            console.log(isChecked)
                            console.log(isBooked)
                        }}>
                        {
                            isBooked ? <img src={bookmarked} className='w-[12px] h-[18px] ' alt='bookmarked icon' /> : <img src={unbookmarked} className='w-[12px] h-[18px] border-t-1 border-t-slate-gray ' alt='bookmarked icon' />
                        }
                    </div>

                </div>

            </div>


        </div>
    )

}

export default Bookmark;