type ActivityCardProps = {
  img: string;
  title: string;
  body?: string;
  date: string;
};

const ActivityCard = ({ img, title, body, date }: ActivityCardProps) => {
  return (
    /* CHANGE 1: Remove w-[70vw] and use w-full.
           We use flex-col on mobile and md:flex-row on desktop. */
    <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-[#fff] p-4 md:p-5 rounded-xl mb-4 shadow-sm border border-gray-100 w-full transition-all hover:shadow-md">
      <div className="flex gap-4 items-start md:items-center">
        {/* CHANGE 2: Responsive Image Size */}
        <img
          src={img}
          className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
          alt="activity icon"
        />

        <div className="flex flex-col gap-1 min-w-0">
          {/* CHANGE 3: Responsive Font Sizes */}
          <h2 className="font-semibold text-base md:text-lg text-slate-gray leading-tight">
            {title}
          </h2>
          {body && (
            <p className="text-[#7f8c8d] text-sm md:text-base leading-snug">
              {body}
            </p>
          )}
        </div>
      </div>

      {/* CHANGE 4: Date styling and mobile alignment */}
      <div className="mt-3 md:mt-0 md:ml-4">
        <p className="text-xs md:text-sm font-medium text-gray-400 md:text-right whitespace-nowrap">
          {date}
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
