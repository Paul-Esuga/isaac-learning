import { useParams } from "react-router-dom";
import Questions from "../../static-data/CommunityQuestions";
import Comments from "../../components/community/Comments";
import Bookmark from "../../components/bookmark/Boomark";
import { useEffect, useState } from "react";
import CommunityQuestions from "../../static-data/CommunityQuestions";
import FrancisPFP from "../../assets/images/community-images/francis-pfp.png";
import { usePayment } from "../../context/PaymentContext";
import InputSection from "../../components/community/InputSection";

function ViewComment() {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const { replyComment, setReplyComment } = usePayment();

  // Initialize comments from your static data
  const [comments, setComments] = useState(() => {
    const index = parseInt(id ?? "1") - 1;
    return CommunityQuestions[index]?.comments ?? [];
  });

  // Handle Submission Logic
  useEffect(() => {
    if (isFilled && newComment.trim() !== "") {
      const postIndex = parseInt(id ?? "1") - 1;

      const newUserComment = {
        id: String(comments.length + 1),
        img: FrancisPFP,
        name: "The grazy",
        time: "Just now",
        body: newComment,
        like_count: "0",
        replies: [],
      };

      // 1. Update local state for immediate UI feedback
      setComments((prev) => [newUserComment, ...prev]);

      // 2. Sync back to your "Database" (Static Data)
      if (CommunityQuestions[postIndex]) {
        CommunityQuestions[postIndex].comments = [
          newUserComment,
          ...(CommunityQuestions[postIndex].comments ?? []),
        ];
      }

      // 3. Reset input states
      setNewComment("");
      setIsFilled(false);
      if (replyComment) setReplyComment(false);
    }
  }, [isFilled, id]); // Only trigger when the "Submit" check is true

  const query = id != undefined ? Questions[parseInt(id) - 1] : Questions[0];

  return (
    <div className="fixed inset-0 lg:left-[280px] bg-[#fcfcfc] z-[100] flex flex-col h-full overflow-hidden">
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-4 md:px-6 pt-6 pb-32">
        <div className="max-w-3xl mx-auto">
          {/* Main Question Post */}
          <div onClick={() => setReplyComment(false)}>
            <Bookmark
              id={query.id}
              img={query.img}
              name={query.name}
              time={query.time}
              title={query.title}
              body={query.body}
              like_count={query.like_count}
              comment_count={query.comment_count}
              isBookmarked={query.isBookmarked}
            />
          </div>

          {/* Input for New Comments */}
          <div className="my-6">
            {!replyComment && (
              <InputSection
                input={newComment}
                setInput={setNewComment}
                submitCheck={isFilled}
                setSubmitCheck={setIsFilled}
              />
            )}
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id}>
                <Comments
                  bookmarkId={id}
                  id={comment.id}
                  img={comment.img}
                  name={comment.name}
                  time={comment.time}
                  body={comment.body}
                  like_count={comment.like_count}
                  replies={comment.replies}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reply Input Bar (Fixed to bottom) */}
      {replyComment && (
        <div className="border-t border-gray-100 bg-white p-4 md:p-6 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
          <div className="max-w-3xl mx-auto">
            <InputSection
              input={newComment}
              setInput={setNewComment}
              submitCheck={isFilled}
              setSubmitCheck={setIsFilled}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default ViewComment;
