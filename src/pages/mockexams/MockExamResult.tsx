
// Componenets
import { ProceedButton } from "../../components/utils/ProceedButton";

const MockExamResult = () => {
    return (
        <div className="bg-[#FCFCFC] h-screen flex flex-col gap-[60px]  z-[1000] absolute top-[15px] left-[0] right-[0] p-[24px]">

            <div className="bg-[#fff] flex flex-col gap-[24px] p-[20px]">

                <h2 className="font-[700] text-[414d58] text-[24px]">Mock Exam summary</h2>

                <div className="flex flex-wrap gap-[30px]">

                    <div className="bg-[#f5f5f5] p-[10px] rounded-[10px] w-[510px] grow">
                        <p>Mock Exam title</p>
                        <h3 className="font-[700] text-[414d58] text-[20px]">HR compliance basics (CIPM)</h3>
                    </div>

                    <div className="bg-[#f5f5f5] p-[10px] rounded-[10px] w-[510px] grow">
                        <p>Duration</p>
                        <h3 className="font-[700] text-[414d58] text-[20px]">60 minutes</h3>
                    </div>

                    <div className="bg-[#f5f5f5] p-[10px] rounded-[10px] w-[510px] grow">
                        <p>Score</p>
                        <h3 className="font-[700] text-[414d58] text-[20px]">86%</h3>
                    </div>

                    <div className="bg-[#f5f5f5] p-[10px] rounded-[10px] w-[510px] grow">
                        <p>Status</p>
                        <h3 className="font-[700] text-[414d58] text-[20px] text-[#2ECC71]">Passed</h3>
                    </div>

                </div>

                <table className="h-[300px]">

                    <tr>
                        <th className="rounded-l-[10px] bg-[#f5f5f5]">Section name</th>
                        <th className="bg-[#f5f5f5]">Score</th>
                        <th className="bg-[#f5f5f5]">Max score</th>
                        <th className="bg-[#f5f5f5]">Accuracy</th>
                        <th className="rounded-r-[10px] bg-[#f5f5f5]">Time sent</th>
                    </tr>

                    <tr  className="border-b-[1px] border-[#d4d4d4] text-center">
                        <td>Employment Law Basics</td>
                        <td>14/20</td>
                        <td>20</td>
                        <td>75%</td>
                        <td>8:45</td>
                    </tr>

                    <tr className="border-b-[1px] border-[#d4d4d4] text-center">
                        <td>Workplace Ethics</td>
                        <td>18/20</td>
                        <td>20</td>
                        <td>90%</td>
                        <td>7:00</td>
                    </tr>

                    <tr className="border-b-[1px] border-[#d4d4d4] text-center" >
                        <td>Data Protection (GDPR)</td>
                        <td>10/10</td>
                        <td>10</td>
                        <td>100%</td>
                        <td>5:50</td>
                    </tr>

                    <tr className="border-b-[1px] border-[#d4d4d4] font-[600] text-center">
                        <td>Total</td>
                        <td>42/50</td>
                        <td>50</td>
                        <td>88%</td>
                        <td>21:43</td>
                    </tr>

                </table>

                <ProceedButton destination="/dashboard/mock-exam/mock-exam-review" style="bg-primary-green rounded-[10px] px-[170px] py-[12px] text-[#fff] font-[700]" value="Review answers"/>

            </div> 
        </div>
    )
}

export default MockExamResult;