// React Router Hooks
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

// Assets
import MockExamTimeIcon from "../../assets/images/mock-exam-images/mock-exam-time-icon.png";
import MockExamQuestionIcon from "../../assets/images/mock-exam-images/mock-exam-question-icon.png";
import MockExamLikeICon from "../../assets/images/mock-exam-images/mock-exam-like-icon.png";
import MockExamTipIcon from "../../assets/images/mock-exam-images/mock-exam-tip-icon.png";

// Components
import MockExamDetailsCard from "../../components/mock-exam-components/mock-exam-details-card/MockExamDetailsCard";

// Utils
import { ProceedButton } from "../../components/utils/ProceedButton";

const MockExams = () => {
  useEffect(() => {
    document.title = "Dashboard | Mock Exam";
  }, []);

  return (
    /* CHANGE 1: Responsive Padding. 
           Removed fixed px-[124px]. Used smaller padding for mobile. */
    <div className="bg-[#f8fcfc] w-full min-h-screen px-4 md:px-10 lg:px-20 py-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <div>
          <h1 className="text-[#414d58] font-bold text-2xl md:text-3xl lg:text-[40px]">
            Ready to excel?
          </h1>
          <p className="text-[#7f8c8d] mt-2">
            Embrace CIPM exam without fear and prepare ahead, John.
          </p>
        </div>

        <div className="bg-white p-6 md:p-10 flex flex-col gap-8 rounded-2xl shadow-sm">
          <div className="flex flex-col gap-3">
            <h3 className="text-[#414d58] font-bold text-xl md:text-2xl">
              CIPM level 1 mock exam
            </h3>
            <p className="font-normal text-sm md:text-lg text-[#414d58] leading-relaxed max-w-3xl">
              Think of this as your personal practice space—no pressure, just an
              opportunity to grow and learn as you prepare for your CIPM exam.
              Every question brings you one step closer to mastery.
            </p>
          </div>

          {/* CHANGE 2: Responsive Grid for Info Cards. 
                       Removed fixed gap-[200px]. They now sit side-by-side or stack. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4 border-y border-gray-50">
            <MockExamDetailsCard
              img={MockExamTimeIcon}
              text="Duration"
              duration="60 minutes"
            />
            <MockExamDetailsCard
              img={MockExamQuestionIcon}
              text="Questions"
              duration="50 questions"
            />
          </div>

          {/* CHANGE 3: Tip Section. 
                       Removed w-[90%] to let it use full space on mobile. */}
          <div className="flex flex-col gap-5 rounded-xl bg-[#5DADE21A] p-5 md:p-8">
            <div className="flex gap-3 items-center">
              <img src={MockExamLikeICon} alt="tip" className="w-6 h-6" />
              <p className="text-[#414d58] text-lg md:text-xl font-semibold">
                Quick tip for success
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:pl-9">
              <Tip text="Take your time, the timer helps you pace yourself" />
              <Tip text="Feel free to review and adjust your answers" />
              <Tip text="Instant results to track your progress and achievements" />
            </div>
          </div>

          {/* CHANGE 4: Responsive Proceed Button. 
                       Removed px-[300px]. Button is now full-width on mobile and auto on desktop. */}
          <div className="flex justify-center">
            <ProceedButton
              style="bg-primary-green w-full md:max-w-md py-4 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95 text-center"
              destination="cipm-mock-exam"
              value="Start Mock Exam"
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MockExams;

type TipProps = {
  text: string;
};

const Tip = ({ text }: TipProps) => {
  return (
    <div className="flex gap-3 items-start">
      <img src={MockExamTipIcon} alt="bullet" className="mt-1 w-4 h-4" />
      <p className="text-[#414d58] text-sm md:text-base leading-snug">{text}</p>
    </div>
  );
};
