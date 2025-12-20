// Components
import ActivityData from "../../static-data/ActivityData";
import ActivityCard from "../../components/activity/ActivityCard";
const Activity = () => {
  return (
    <div className="w-full max-w-4xl">
      {/* CHANGE 1: Responsive Font Size 
                text-2xl on mobile, text-3xl on desktop */}
      <h2 className="font-bold text-2xl md:text-3xl text-[#414d58] mb-6">
        Recent activity
      </h2>

      {/* CHANGE 2: Remove fixed height and double scrollbar
                We use min-h to ensure it looks good empty, 
                but let it expand naturally. */}
      <div className="flex flex-col gap-4 pb-10">
        {ActivityData.length > 0 ? (
          ActivityData.map((activity) => (
            <div key={activity.id} className="w-full">
              <ActivityCard
                img={activity.img}
                title={activity.title}
                body={activity.body}
                date={activity.date}
              />
            </div>
          ))
        ) : (
          <div className="py-10 text-center text-gray-500 italic">
            No recent activity to show.
          </div>
        )}
      </div>
    </div>
  );
};

export default Activity;
