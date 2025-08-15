import Bookmark from '../../components/bookmark/Boomark'
// import { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import CommunityQuestions from '../../static-data/CommunityQuestions'

export const Community = () => {
    const navigate = useNavigate()

    // const [selectdQuestion, setSelectedQuestion] = useState('')

    document.title = "Dashboard | community";

    return (
        <main className='overflow-y-scroll overflow-x-hidden h-[83vh] lg:h-[85vh] sm:mt-8 lg:mt-0 '>
            <div>
                {CommunityQuestions.map((query) =>
                    <div className='cursor-pointer' onClick={() => {
                        // setSelectedQuestion(query.name)
                        navigate(`view-comment/${query.id}`)
                    }}>
                        <Bookmark id={query.id} img={query.img} name={query.name} time={query.time} title={query.title} body={query.body} like_count={query.like_count} comment_count={query.comment_count} isBookmarked={query.isBookmarked} />
                    </div>
                )}
            </div>
            <Outlet />

        </main>

    )
}

export default Community;