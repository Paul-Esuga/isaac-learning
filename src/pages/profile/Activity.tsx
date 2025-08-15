
// Componenets
import ActivityData from "../../static-data/ActivityData";
import ActivityCard from "../../components/activity/ActivityCard";

const Activity = () => {

    return (
        <div >
            <h2 className="font-[700] text-[32px] text-[#414d58] mb-[24px]">Recent activity</h2>
            <div className="overflow-y-scroll h-[350px] py-[20px]">
                {
                    ActivityData.map((activity) => (<ActivityCard key={activity.id} img={activity.img} title={activity.title} body={activity.body} date={activity.date} />))
                }
            </div>
        </div>
    )
}

export default Activity;