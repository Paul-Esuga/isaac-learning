import like from '../../assets/images/profile-images/like.png';
import comment from '../../assets/images/profile-images/comment.png';
import bookmarked from '../../assets/images/profile-images/bookmark-icon.png';

export type CommentProps = {
    id: string
    img: string,
    name: string
    time: string,
    body: string,
    like_count: string,
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


const Bookmark = ({ img, name, time, title, body, like_count, comment_count }: BookmarkProps) => {
    return (
        <div className='shadow-md px-[10px] py-[20px] rounded-[10px] mb-[20px]  lg:pr-[55px] sm:pr-[20px]'>

            <div className='flex align-center gap-[20px] mb-[20px] '>
                <img src={img} className='w-[50px] h-[50px] mb-[20px]' alt='bookmark icon' />
                <div>
                    <h3 className='font-[500] text-[20px]'>{name}</h3>
                    <p className='text-[#7f8c8d]'>{time}</p>
                </div>
            </div>

            <div className='mx-[90px]'>
                <h3 className='font-[700] text-[34px] max-w-[1000px] mb-[10px]'>
                    {title}
                </h3>

                <p className='text-[#7f8c8d] text-[25px] mb-[20px]'>
                    {body}
                </p>

                <div className='flex gap-[16px] items-center'>

                    <div className='flex items-center'>
                        <img src={like} className='w-[20px] h-[20px]' alt='like icon' />
                        <p>{like_count}</p>
                    </div>

                    <div className='flex items-center'>
                        <img src={comment} className='w-[20px] h-[20px]' alt='comment icon' />
                        <p>{comment_count}</p>
                    </div>

                    <img src={bookmarked} className='w-[20px] h-[20px]' alt='bookmarked icon' />

                </div>

            </div>


        </div>
    )

}

export default Bookmark;