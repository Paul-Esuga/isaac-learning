// Assets
import HelpGuy from "../../../assets/images/help-guy.png";
import SearchIcon from "../../../assets/images/icons/Search.png";

// Components
import FaqsCard from "../../../components/faqs-card/FaqsCard";
import BackButton from "../../../components/back-button/BackButton";

// Data
import FAQsData from "../../../static-data/FAQSData";

const Help = () => {
  return (
    /* FIX 1: inset-0 with lg:left ensures it fits the dashboard.
           overflow-x-hidden prevents the horizontal scroll bug.
        */
    <div className="fixed inset-0 lg:left-[280px] bg-[#fefefe] z-[1000] overflow-y-auto overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-10 py-6 md:py-10 flex flex-col gap-6">
        {/* Back Button */}
        <div className="w-28 md:w-32">
          <BackButton />
        </div>

        {/* Welcome Header */}
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <img
            src={HelpGuy}
            alt="Mascot"
            className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0"
          />
          <div className="min-w-0">
            <h3 className="font-bold text-lg md:text-xl text-slate-gray truncate">
              Hello, John
            </h3>
            <p className="text-gray-500 text-xs md:text-base">
              I'm here to help you
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex gap-3 border border-gray-200 px-4 py-3 rounded-full w-full bg-white focus-within:ring-2 focus-within:ring-primary-green/20 transition-all">
          <img
            src={SearchIcon}
            alt="search"
            className="w-5 h-5 opacity-40 self-center"
          />
          <input
            type="search"
            placeholder="Search for help..."
            className="w-full bg-transparent border-none outline-none text-slate-gray text-sm md:text-base"
          />
        </div>

        {/* Most Asked Questions - CAROUSEL FIX */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-base md:text-lg text-slate-gray">
            Most asked questions
          </h3>

          {/* FIX 2: Remove the 1500px width. 
                        Use 'w-full' and 'flex-nowrap' with 'overflow-x-auto' 
                    */}
          <div className="flex flex-nowrap gap-3 md:gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="bg-primary-green min-w-[200px] md:min-w-[260px] p-5 rounded-xl shadow-sm flex-shrink-0"
              >
                <h3 className="text-white font-medium text-sm md:text-base leading-snug">
                  Can I access my courses offline?
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-base md:text-lg text-slate-gray">
            FAQs
          </h3>

          {/* FIX 3: Ensure the FAQ container is 100% width.
                        The cards inside should not have fixed widths.
                    */}
          <div className="flex flex-col gap-3 md:gap-4 mb-10">
            {FAQsData.map((data) => (
              <FaqsCard key={data.id} heading={data.heading} body={data.body} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
