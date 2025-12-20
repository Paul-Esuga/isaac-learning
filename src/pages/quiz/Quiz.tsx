// React Router Hooks
import { Outlet } from "react-router-dom";

// React Hooks
import { useState, useEffect } from "react";

// Components
import QuizCard from "../../components/quiz-componenets/QuizCard";

// Assets
import FilterIcon from "../../assets/images/quiz-images/filter-icon.png";
import DropUpIcon from "../../assets/images/quiz-images/dropup-icon.png";
import DropDownIcon from "../../assets/images/quiz-images/dropdown-icon.png";

// Data
import QuizData from "../../static-data/QuizData";

const CategoriesList = [
  "All Categories",
  "Foundational",
  "Secondary",
  "Tertiary",
];

const Quiz = () => {
  useEffect(() => {
    document.title = "Dashboard | Quiz";
  }, []);

  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState(CategoriesList[0]);

  const Data =
    categories === "All Categories"
      ? QuizData
      : QuizData.filter((data) => data.category === categories);

  return (
    /* CHANGE 1: Responsive Padding and Height
           Using min-h-screen instead of h-screen to prevent content cutoff on small devices. */
    <div className="bg-[#FAFAFA] w-full min-h-screen px-4 md:px-[30px] py-6 md:py-[40px]">
      <div className="bg-primary-green flex flex-col gap-6 md:gap-[30px] w-full rounded-[10px] px-4 md:px-[30px] py-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Tab Indicator */}
          <div className="flex flex-col items-start sm:items-center">
            <p className="text-warm-white font-medium mb-1">All Quizzes</p>
            <div className="bg-[#fff] h-[2px] w-20 md:w-[100px]" />
          </div>

          {/* Filter Dropdown */}
          <div className="relative w-full sm:w-auto">
            <div
              onClick={() => setShowCategories((prev) => !prev)}
              className="bg-[#fff] flex items-center justify-between sm:justify-start gap-4 px-4 py-2.5 rounded-[10px] cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <img src={FilterIcon} alt="filter" className="w-4 h-4" />
                <p className="text-primary-green font-semibold text-sm md:text-base">
                  {categories}
                </p>
              </div>
              <img
                src={showCategories ? DropUpIcon : DropDownIcon}
                alt="arrow"
                width={20}
              />
            </div>

            {/* Dropdown Menu */}
            {showCategories && (
              <div className="bg-[#fff] rounded-[10px] p-2 text-primary-green absolute left-0 right-0 top-[52px] border border-gray-100 shadow-xl z-50">
                {CategoriesList.filter((cat) => cat !== categories).map(
                  (cat, i) => (
                    <p
                      key={i}
                      className="cursor-pointer p-3 text-sm hover:bg-gray-50 rounded-md transition-colors border-b last:border-none border-gray-100"
                      onClick={() => {
                        setCategories(cat);
                        setShowCategories(false);
                      }}
                    >
                      {cat}
                    </p>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Quiz List Container */}
        {/* CHANGE 2: Removed fixed h-[600px]. 
                    Used max-h for desktop but allowed natural flow for mobile. */}
        <div className="flex flex-col gap-4 overflow-y-auto md:max-h-[70vh] py-2 no-scrollbar">
          {Data.length > 0 ? (
            Data.map((data, i) => (
              <QuizCard
                key={data.id || i}
                id={data.id}
                title={data.title}
                category={data.category}
                topic={data.topic}
                questionCount={data.questionCount}
                quizDuration={data.quizDuration}
                completors={data.completors}
              />
            ))
          ) : (
            <div className="text-center py-20 text-white/70 italic">
              No quizzes found in this category.
            </div>
          )}
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Quiz;
