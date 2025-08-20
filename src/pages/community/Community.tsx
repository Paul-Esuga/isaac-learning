import Bookmark from '../../components/bookmark/Boomark'
import { useNavigate, Outlet } from 'react-router-dom'
import CommunityQuestions from '../../static-data/CommunityQuestions'
import Postquestion from '../../assets/images/icons/community-icons/add-comment-icon.png'
import { usePayment } from '../../context/PaymentContext'

export const Community = () => {
    const navigate = useNavigate()
    const { setQuestionId } = usePayment()
    const CommunityQuestion = CommunityQuestions.slice().reverse()


    document.title = "Dashboard | community";

    return (

        <div className='overflow-y-scroll overflow-x-hidden h-[83vh] lg:h-[85vh] sm:mt-8 lg:mt-0 '>
            <div className='px-6'>
                {CommunityQuestion.map((query) =>
                    <div className='cursor-pointer' onClick={() => {
                        navigate(`view-comment/${query.id}`)
                        setQuestionId(String(parseInt(query.id) - 1))
                    }}>
                        <Bookmark id={query.id} img={query.img} name={query.name} time={query.time} title={query.title} body={query.body} like_count={query.like_count} comment_count={query.comment_count} isBookmarked={query.isBookmarked} />
                    </div >
                )}
            </div >
            <div className='fixed bottom-25 right-30  rounded-full'>
                <img src={Postquestion} alt="" className='rounded-[100px] w-[60px] h-[60px] cursor-pointer'
                    onClick={() => {
                        navigate('post-question')
                    }}
                />
            </div>
            <Outlet />
        </div >

    )
}

export default Community;