

const MockExamResult = () => {
    return (
        <div className="bg-[#FCFCFC] h-screen flex flex-col gap-[60px]  z-[1000] absolute top-[15px] left-[0] right-[0] p-[24px]">

            <div className="bg-[#fff] flex flex-col gap-[24px] p-[20px]">

                <h2 className="font-[700] text-[414d58] text-[24px]">Mock Exam summary</h2>

                <div className="flex flex-wrap gap-[30px]">

                    <div className="bg-[#f5f5f5] p-[10px] rounded-[10px] w-[510px]">
                        <p>Mock Exam title</p>
                        <h3 className="font-[700] text-[414d58] text-[20px]">HR compliance basics (CIPM)</h3>
                    </div>

                    <div className="bg-[#f5f5f5] p-[10px] rounded-[10px] w-[510px]">
                        <p>Duration</p>
                        <h3 className="font-[700] text-[414d58] text-[20px]">60 minutes</h3>
                    </div>

                    <div className="bg-[#f5f5f5] p-[10px] rounded-[10px] w-[510px]">
                        <p>Score</p>
                        <h3 className="font-[700] text-[414d58] text-[20px]">86%</h3>
                    </div>

                    <div className="bg-[#f5f5f5] p-[10px] rounded-[10px] w-[510px]">
                        <p>Status</p>
                        <h3 className="font-[700] text-[414d58] text-[20px] text-[#2ECC71]">Passed</h3>
                    </div>

                </div>

                <table>

                </table>

            </div>
        </div>
    )
}

export default MockExamResult;