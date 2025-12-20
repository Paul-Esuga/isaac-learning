// React Hooks
import { useState } from "react";

// Assets
import DropDownIcon from "../../assets/images/icons/drop-down-icon.png";
import DropUpIcon from "../../assets/images/icons/drop-up-icon.png";

type FaqsCardProps = {
  heading: string;
  body: string;
};

const FaqsCard = ({ heading, body }: FaqsCardProps) => {
  const [showDropDownContent, setShowDropDownContent] = useState(false);

  return (
    /* CHANGE 1: Use w-full instead of w-[600px].
           CHANGE 2: Use h-auto (or remove h) instead of fixed heights so it 
           can grow naturally based on the text length. */
    <div
      onClick={() => setShowDropDownContent((prev) => !prev)}
      className={`w-full h-auto border-[1px] border-gray-200 rounded-[10px] px-4 md:px-[20px] py-4 md:py-[20px] flex flex-col transition-all cursor-pointer bg-white hover:border-primary-green shadow-sm`}
    >
      <div className="flex items-center justify-between gap-4">
        {/* CHANGE 3: Use a smaller font size on mobile (text-sm/base) 
                   and let it wrap instead of pushing the width. */}
        <h2 className="text-[#414d58] font-medium text-sm md:text-[18px] leading-snug">
          {heading}
        </h2>

        <img
          src={showDropDownContent ? DropUpIcon : DropDownIcon}
          className="w-5 h-5 md:w-[23px] md:h-[23px] flex-shrink-0"
          alt="toggle icon"
        />
      </div>

      {/* CHANGE 4: Improved the dropdown logic with padding and text wrapping */}
      {showDropDownContent && (
        <div className="mt-4 pt-4 border-t border-gray-100 text-[#7f8c8d] text-xs md:text-sm leading-relaxed animate-fadeIn">
          {body}
        </div>
      )}
    </div>
  );
};

export default FaqsCard;
