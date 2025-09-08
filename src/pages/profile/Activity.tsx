
// Componenets
import ActivityData from "../../static-data/ActivityData";
import ActivityCard from "../../components/activity/ActivityCard";
const Activity = () => {

    return (
        <div className="py-[10px]">
            <h2 className="font-[700] text-[32px] text-[#414d58] mb-[15px]">Recent activity</h2>
            <div className="overflow-y-scroll h-[300px] w-[fit-content] pt-[5px] pb-[30px]">
                {
                    ActivityData.map((activity) => (<ActivityCard key={activity.id} img={activity.img} title={activity.title} body={activity.body} date={activity.date} />))
                }
            </div>
        </div>
    )
}

export default Activity;