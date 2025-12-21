import FrancisPFP from "../../assets/images/community-images/francis-pfp.png";
import { usePayment } from "../../context/PaymentContext";

function PostQuestion() {
  const { setQuestion } = usePayment();

  return (
    <div className="fixed inset-0 lg:left-[280px] bg-[#fcfcfc] z-[1000] pt-6 overflow-y-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto flex gap-3 md:gap-6 p-2.5">
        {/* Profile Picture - Restored and Responsive */}
        <div className="flex-shrink-0">
          <img
            src={FrancisPFP}
            alt="Profile"
            className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover border border-gray-100 shadow-sm"
          />
        </div>

        <div className="flex-1 min-w-0">
          {/* Tag / Category Badge */}
          <div className="inline-flex items-center justify-center border border-[#5DADE2] rounded-full text-[#5DADE2] px-4 py-1.5 md:px-6 md:py-2 h-auto w-auto text-center text-xs md:text-base font-bold mb-4 md:mb-6">
            Community
          </div>

          <div className="flex flex-col gap-4">
            {/* Question Title */}
            <input
              type="text"
              placeholder="What's your question?"
              className="border-[0.5px] border-sub-gray p-3 md:p-4 rounded-xl placeholder:text-slate-gray/50 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-[#5DADE2]/50 w-full transition-all"
              onChange={(e) => {
                setQuestion((prev) => ({ ...prev, title: e.target.value }));
              }}
            />

            {/* Question Body */}
            <textarea
              placeholder="Write your thoughts..."
              rows={10}
              className="border-[0.5px] border-sub-gray p-3 md:p-4 rounded-xl resize-none placeholder:text-slate-gray/50 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-[#5DADE2]/50 w-full transition-all"
              onChange={(e) => {
                setQuestion((prev) => ({ ...prev, body: e.target.value }));
              }}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostQuestion;
