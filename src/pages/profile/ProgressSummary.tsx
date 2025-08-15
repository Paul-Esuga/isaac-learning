
// Data
import ProgressData from "../../static-data/ProgressData";
import BadgesData from "../../static-data/BadgesData";


// Components
import ProgressCard from "../../components/progress/ProgressCard";
import BadgesCard from "../../components/badges/BadgesCard";

const ProgressSummary = () => {

    return (
        <div className="">
            <div className="flex gap-[60px] w-[100%]">
                {
                    ProgressData.map(data => <ProgressCard key={data.id} image={data.image} title={data.title} body={data.body} />)
                }
            </div>

            <h2 className="font-[700] text-[20px] mb-[24px]">Badges earned</h2>

            <div className="flex justify-between w-[100%]">
                {
                    BadgesData.map(data => <BadgesCard key={data.id} image={data.image} body={data.body} />)
                }
            </div>
        </div>
    )
}

export default ProgressSummary;