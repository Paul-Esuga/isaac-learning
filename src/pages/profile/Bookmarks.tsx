// Components
import Bookmark from "../../components/bookmark/Boomark";

// Data
import BookMarksData from "../../static-data/BookMarks";

const Bookmarks = () => {
  return (
    <div className="w-full">
      {/* CHANGE 1: Responsive Title 
                Scales from 24px on mobile to 32px on desktop */}
      <h2 className="font-bold text-2xl md:text-[32px] text-[#414d58] mb-6">
        Saved Discussions
      </h2>

      {/* CHANGE 2: Layout and Scroll 
                Removed fixed h-[350px] to allow the list to grow naturally.
                Used a vertical flex gap to separate cards. */}
      <div className="flex flex-col gap-6 pb-20">
        {BookMarksData.length > 0 ? (
          BookMarksData.map((data, index) => (
            <div key={data.id || index} className="w-full">
              <Bookmark
                id={data.id}
                img={data.img}
                name={data.name}
                time={data.time}
                title={data.title}
                body={data.body}
                like_count={data.like}
                comment_count={data.comment}
                isBookmarked={true} // Since they are in the bookmarks tab
              />
            </div>
          ))
        ) : (
          <div className="py-20 text-center">
            <p className="text-gray-400 text-lg italic">
              No saved discussions yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
