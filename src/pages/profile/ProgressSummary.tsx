// Data
import ProgressData from "../../static-data/ProgressData";
import BadgesData from "../../static-data/BadgesData";

// Components
import ProgressCard from "../../components/progress/ProgressCard";
import BadgesCard from "../../components/badges/BadgesCard";

const ProgressSummary = () => {
  return (
    <div className="w-full">
      {/* CHANGE 1: Responsive Grid for Progress Cards 
                1 column on mobile, 2 on tablets, 3 on desktops */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {ProgressData.map((data) => (
          <ProgressCard
            key={data.id}
            image={data.image}
            title={data.title}
            body={data.body}
          />
        ))}
      </div>

      <h2 className="font-bold text-xl text-slate-gray mb-6">Badges earned</h2>

      {/* CHANGE 2: Responsive Badges Layout
                We use flex-wrap so badges drop to the next line on small screens
                instead of squishing together. */}
      <div className="flex flex-wrap gap-4 md:gap-8 justify-start">
        {BadgesData.map((data) => (
          <div
            key={data.id}
            className="flex-shrink-0 w-[calc(50%-1rem)] sm:w-auto"
          >
            <BadgesCard image={data.image} body={data.body} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSummary;
