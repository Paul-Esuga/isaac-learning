import { useParams } from 'react-router-dom'
import Questions from '../../static-data/CommunityQuestions'
import Comments from '../../components/community/Comments'
import AdePFP from "../../assets/images/community-images/ade-pfp.png";
import Bookmark from '../../components/bookmark/Boomark';


function ViewComment() {
  const { id } = useParams()

  const query = id != undefined ? Questions[parseInt(id) - 1] : {
    id: "2",
    img: AdePFP,
    name: "Ade Johnson",
    time: "3h ago",
    title:
      "What's a fair turnaround time to respond to candidates after interviews?",
    body: "I work in a fast-paced startup and struggle to keep candidates updated post-interview. How long is considered acceptable before it feels disrespectful or damages our employer brand? Would love to hear how others handle this.",
    like_count: "225",
    comment_count: "225",
    isBookmarked: false,
  }

  return (
    <main
      className='overflow-y-scroll h-[80vh] lg:h-[80vh] sm:mt-8 lg:mt-0'
    >
      <div className='bg-[#fcfcfc] h-screen z-[1000] absolute top-0 left-[0] right-[0] pt-[30px] overflow-y-scroll px-5'>
        <Bookmark id={query.id} img={query.img} name={query.name} time={query.time} title={query.title} body={query.body} like_count={query.like_count} comment_count={query.comment_count} isBookmarked={query.isBookmarked} />
        <div className='my-6 flex justify-between'>
          <input type="text" className='p-5 rounded-[10px] bg-[#f0f0f0] text-black w-[80%] placeholder:text-black' placeholder='Add your comment' />
          <button className='px-5 py-2.5 bg-primary-green text-warm-white font-bold rounded-xl'>Comment</button>
        </div>
        <div>
          {query.comments != undefined ?
            query.comments.map((comment) =>
              <div>
                <Comments id={comment.id} img={comment.img} name={comment.name} time={comment.time} body={comment.body} like_count={comment.like_count} />
              </div>)
            : ''}
          hi
        </div>
      </div>
    </main>
  )
}

export default ViewComment