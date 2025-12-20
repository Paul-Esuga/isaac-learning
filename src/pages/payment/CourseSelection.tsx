import courses from "../../static-data/CoursesData";
import { usePayment } from "../../context/PaymentContext";
import { useNavigate } from "react-router-dom";

function CourseSelection() {
  const { setSelectedCourse } = usePayment();
  const navigate = useNavigate();

  return (
    // CHANGE 1: Added px-6 for mobile so cards don't touch the screen edges
    <div className="py-12 md:py-24 px-6 sm:px-12 lg:px-32 text-center min-h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12">
          {/* CHANGE 2: Responsive text sizes for the titles */}
          <h1 className="text-[#414D58] text-2xl md:text-4xl mb-2 font-bold">
            Welcome to Isaac Learning System!
          </h1>
          <p className="text-[#414D58] text-lg md:text-2xl">
            Choose a course to begin your learning journey
          </p>
        </div>

        {/* CHANGE 3: Switched to CSS Grid for much easier spacing control */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white flex flex-col p-6 md:p-8 rounded-[20px] border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow"
            >
              {/* CHANGE 4: Centered image container with fixed height for alignment */}
              <div className="h-48 flex items-center justify-center mb-6">
                <img
                  src={course.image}
                  alt={course.title}
                  className="max-h-full object-contain"
                />
              </div>

              {/* CHANGE 5: flex-grow ensures the button stays at the bottom regardless of text length */}
              <div className="flex flex-col flex-grow text-center">
                <h1 className="text-xl md:text-2xl font-extrabold text-black mb-3">
                  {course.title}
                </h1>
                <p className="text-[#7F8C8D] text-sm md:text-base mb-6 flex-grow">
                  {course.description}
                </p>

                <button
                  className="bg-[#00A36C] hover:bg-[#008156] p-4 rounded-xl w-full text-white font-semibold text-base transition-colors cursor-pointer mt-auto"
                  onClick={() => {
                    setSelectedCourse({
                      image: course.image,
                      title: course.title,
                      description: course.description,
                    });
                    navigate("/price");
                  }}
                >
                  Select Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseSelection;
