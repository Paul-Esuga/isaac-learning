// Components
import { ProceedButton } from "../../components/utils/ProceedButton";
import BackButton from "../../components/back-button/BackButton";

const MockExamResult = () => {
  return (
    <div className="fixed inset-0 lg:left-[280px] bg-[#FCFCFC] z-[1000] overflow-y-auto">
      <div className="max-w-6xl mx-auto p-4 md:p-8 lg:p-10 flex flex-col gap-6">
        {/* BACK BUTTON ADDED HERE */}
        <div className="w-32">
          <BackButton />
        </div>

        <div className="bg-white flex flex-col gap-8 p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="font-bold text-[#414d58] text-2xl md:text-3xl text-center md:text-left">
            Mock Exam Summary
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#f5f5f5] p-4 rounded-xl">
              <p className="text-gray-500 text-sm">Mock Exam title</p>
              <h3 className="font-bold text-[#414d58] text-lg leading-tight">
                HR compliance basics (CIPM)
              </h3>
            </div>

            <div className="bg-[#f5f5f5] p-4 rounded-xl">
              <p className="text-gray-500 text-sm">Duration</p>
              <h3 className="font-bold text-[#414d58] text-lg">60 minutes</h3>
            </div>

            <div className="bg-[#f5f5f5] p-4 rounded-xl">
              <p className="text-gray-500 text-sm">Score</p>
              <h3 className="font-bold text-[#414d58] text-lg">86%</h3>
            </div>

            <div className="bg-[#f5f5f5] p-4 rounded-xl">
              <p className="text-gray-500 text-sm">Status</p>
              <h3 className="font-bold text-lg text-[#2ECC71]">Passed</h3>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#f5f5f5]">
                  <th className="p-4 rounded-l-xl text-[#414d58] font-bold">
                    Section name
                  </th>
                  <th className="p-4 text-[#414d58] font-bold text-center">
                    Score
                  </th>
                  <th className="p-4 text-[#414d58] font-bold text-center">
                    Max score
                  </th>
                  <th className="p-4 text-[#414d58] font-bold text-center">
                    Accuracy
                  </th>
                  <th className="p-4 rounded-r-xl text-[#414d58] font-bold text-center">
                    Time spent
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700 font-medium">
                    Employment Law Basics
                  </td>
                  <td className="p-4 text-center">14/20</td>
                  <td className="p-4 text-center">20</td>
                  <td className="p-4 text-center">75%</td>
                  <td className="p-4 text-center">8:45</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700 font-medium">
                    Workplace Ethics
                  </td>
                  <td className="p-4 text-center">18/20</td>
                  <td className="p-4 text-center">20</td>
                  <td className="p-4 text-center">90%</td>
                  <td className="p-4 text-center">7:00</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700 font-medium">
                    Data Protection (GDPR)
                  </td>
                  <td className="p-4 text-center">10/10</td>
                  <td className="p-4 text-center">10</td>
                  <td className="p-4 text-center">100%</td>
                  <td className="p-4 text-center">5:50</td>
                </tr>
                <tr className="bg-gray-50 font-bold">
                  <td className="p-4 text-[#414d58]">Total</td>
                  <td className="p-4 text-center">42/50</td>
                  <td className="p-4 text-center">50</td>
                  <td className="p-4 text-center">88%</td>
                  <td className="p-4 text-center">21:43</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center md:justify-start mt-4">
            <ProceedButton
              destination="/dashboard/mock-exam/mock-exam-review"
              style="bg-primary-green rounded-xl w-full md:w-auto md:px-12 py-3.5 text-white font-bold text-center transition-transform active:scale-95 shadow-md"
              value="Review answers"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockExamResult;
