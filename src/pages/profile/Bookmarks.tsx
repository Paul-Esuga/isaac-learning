
// Components
import Bookmark from "../../components/bookmark/Boomark";

// Data
import BookMarksData from "../../static-data/BookMarks";

const Bookmarks = () => {

    return (
        <div>
            <h2 className="font-[700] text-[32px] text-[#414d58] mb-[15px]">Saved Discussions</h2>
            <div className="overflow-y-scroll h-[350px]">
                {
                    BookMarksData.map((data, index) => <Bookmark id={data.id} key={index} img={data.img} name={data.name} time={data.time} title={data.title} body={data.body} like_count={data.like} comment_count={data.comment} />)
                }
            </div>

        </div>
    )
}

export default Bookmarks;