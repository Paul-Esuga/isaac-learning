type ModuleCardType = {
  border: string;
  title: string;
  description: string;
  progress: number;
  started: boolean;
};

// Note: Removed 'key' from props as it should be handled by the parent map function
function ModuleCard({
  border,
  title,
  description,
  progress,
  started,
}: ModuleCardType) {
  return (
    <div
      className="bg-white border-t-[3px] px-4 md:px-5 py-5 rounded-[20px] mb-4 w-full h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
      style={{ borderColor: border }}
    >
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-lg md:text-[18px] leading-tight text-slate-gray mb-3">
          {title}
        </h3>

        <p className="text-sub-gray font-medium text-sm md:text-base leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        <div className="mt-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[12px] font-bold text-slate-gray opacity-60">
              Progress
            </span>
            <span className="text-[12px] font-bold text-slate-gray">
              {progress}%
            </span>
          </div>
          {/* Responsive Progress Bar Container */}
          <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className="transition-all duration-700 h-full rounded-full"
              style={{
                width: `${progress}%`,
                backgroundColor: border, // Uses the dynamic border color for the bar too
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="cursor-pointer">
        {!started ? (
          <div className="bg-[#F5F5F5] text-slate-gray text-center font-semibold text-base py-3 rounded-[12px] w-full min-h-[48px] flex items-center justify-center transition-colors hover:bg-gray-200">
            Start Learning
          </div>
        ) : (
          <div className="bg-primary-green text-white text-center py-3 text-base font-bold rounded-[12px] w-full min-h-[48px] flex items-center justify-center transition-transform active:scale-95">
            Continue Learning
          </div>
        )}
      </div>
    </div>
  );
}

export default ModuleCard;
