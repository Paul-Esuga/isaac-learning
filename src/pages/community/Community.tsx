import Bookmark from "../../components/bookmark/Boomark";
import { useNavigate, Outlet } from "react-router-dom";
import CommunityQuestions from "../../static-data/CommunityQuestions";
import Postquestion from "../../assets/images/icons/community-icons/add-comment-icon.png";
import { usePayment } from "../../context/PaymentContext";

export const Community = () => {
  const navigate = useNavigate();
  const { setQuestionId } = usePayment();
  const CommunityQuestion = CommunityQuestions.slice().reverse();

  document.title = "Dashboard | community";

  return (
    /* CHANGE 1: Remove fixed heights like h-[83vh]. 
           Use flex-1 and let the main dashboard container handle the scroll 
           to avoid "double scrollbars" on mobile. */
    <div className="relative w-full min-h-screen pb-24">
      <div className="px-4 md:px-6 lg:px-8 space-y-4">
        {CommunityQuestion.map((query, i) => (
          <div
            key={i}
            className="cursor-pointer transition-transform active:scale-[0.98]"
            onClick={() => {
              navigate(`view-comment/${query.id}`);
              setQuestionId(String(parseInt(query.id) - 1));
            }}
          >
            {/* Ensure your Bookmark component is also responsive internally */}
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
        ))}
      </div>

      {/* CHANGE 2: Responsive Floating Action Button (FAB)
                Using standard Tailwind spacing (bottom-6 right-6) ensures it 
                stays visible on all mobile devices. */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
        <button
          onClick={() => navigate("post-question")}
          className="group relative transition-transform hover:scale-110 active:scale-95"
        >
          <img
            src={Postquestion}
            alt="Post Question"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg border-2 border-white"
          />
          {/* Optional: Tooltip for desktop */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            Ask a question
          </span>
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default Community;
