import { useParams } from 'react-router-dom'
import Questions from '../../static-data/CommunityQuestions'
import Comments from '../../components/community/Comments'
import AdePFP from "../../assets/images/community-images/ade-pfp.png";
import Bookmark from '../../components/bookmark/Boomark';
import { useEffect, useState } from 'react';
import CommunityQuestions from '../../static-data/CommunityQuestions';
import FrancisPFP from '../../assets/images/community-images/francis-pfp.png'
import { usePayment } from '../../context/PaymentContext';
import InputSection from '../../components/community/InputSection';


function ViewComment() {
  const { id } = useParams()
  const [newComment, setNewComment] = useState('')
  const [isFilled, setIsFilled] = useState(false)
  const { replyComment, isComment, setReplyComment } = usePayment()

  // my version of the the setComments lines
  // const [comments, setComments] = useState((id != undefined && CommunityQuestions[parseInt(id) - 1].comments != undefined) ? CommunityQuestions[parseInt(id) - 1].comments : [])

  const [comments, setComments] = useState(() => {
    const index = parseInt(id != undefined ? id : '1') - 1
    return CommunityQuestions[index]?.comments ?? []
  })

  useEffect(() => {
    newComment && !isComment ? (setComments((prev) => [...prev,
    {
      id: String((CommunityQuestions[parseInt(id ?? '1') - 1].comments?.length ?? 0) + 1),
      img: FrancisPFP,
      name: "The grazy",
      time: "2h ago",
      body: newComment,
      like_count: "2",
      replies: []
    }])
    ) : ''
    newComment && isComment ? setNewComment('') : ''
    console.log(comments)
  }, [isFilled])

  useEffect(() => {
    replyComment ? setNewComment('') : ''
  }, [replyComment])

  useEffect(() => {
    CommunityQuestions[parseInt(id != undefined ? id : '1') - 1].comments = comments
    setNewComment('')
  }, [comments])

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
      className='overflow-y-scroll h-[80vh] lg:h-[80vh] sm:mt-8 lg:mt-0 '
    >
      <div className={`bg-[#fcfcfc] cursor-pointer h-screen z-[1000] absolute top-0 left-[0] right-[0] pt-[30px] overflow-y-scroll px-5 pb-30 ${replyComment ? 'pb-70' : 'pb-30'}`}>
        <div onClick={() => {
          setReplyComment(false)
          setNewComment('')
        }}>
          <Bookmark id={query.id} img={query.img} name={query.name} time={query.time} title={query.title} body={query.body} like_count={query.like_count} comment_count={query.comment_count} isBookmarked={query.isBookmarked} />
        </div>
        {!replyComment ? <InputSection input={newComment} setInput={setNewComment} submitCheck={isFilled} setSubmitCheck={setIsFilled} /> : ''}
        <div>
          {
            comments.slice().reverse().map((comment) =>
              <div >
                <Comments bookmarkId={id} id={comment.id} img={comment.img} name={comment.name} time={comment.time} body={comment.body} like_count={comment.like_count} replies={comment.replies} />
              </div>)
          }
        </div>
        {replyComment ? <div className='fixed bottom-0 py-10 right-2 left-70 bg-[#fcfcfc] px-4'>
          <InputSection input={newComment} setInput={setNewComment} submitCheck={isFilled} setSubmitCheck={setIsFilled} />
        </div> : ''}
      </div>

    </main>
  )
}

export default ViewComment