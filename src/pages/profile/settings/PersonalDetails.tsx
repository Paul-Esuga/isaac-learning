const PersonalDetails = () => {

    return (
        // <div className={`bg-[#f8fcfc] h-screen  z-[1000]  absolute ${hasMounted ? "absolute top-0 left-[0] right-[0] pt-[30px] " : ""}`}>
        <div className={`bg-[#f8fcfc] h-screen  z-[1000]  absolute absolute top-0 left-[0] right-[0] pt-[30px]`}>

            <div className='bg-[#fff] w-[90%] m-[auto] rounded-[16px] px-[40px] py-[24px] shadow-2xl'>

                <div className='flex justify-between items-center mb-[24px]'>
                    <h2 className='text-[32px] font-[700]'>Personal Details</h2>
                    <button className='bg-primary-green rounded-[10px] px-[24px] py-[13px] text-[#fff] text-[20px] font-[500]'>Save changes</button>
                </div>

                <form>

                    <div className='flex gap-[32px] justify-center items-center flex-wrap mb-[24px]'>

                        <div className=' flex flex-col'>
                            <label className='text-[#999999]'>Full name</label>
                            <input type='text' value='John Adekola' className='border-[1px] rounded-[10px] px-[16px] py-[13px] w-[687px] basis-full' />
                        </div>

                        <div className=' flex flex-col'>
                            <label className='text-[#999999]'>Email address</label>
                            <input type='email' value='tommyjhay0326@gmail.com' className='border-[1px] rounded-[10px] px-[16px] py-[13px] w-[687px]' />
                        </div>

                    </div>

                    <div className=' flex flex-col'>
                        <label className='text-[#999999]'>Bio</label>
                        <textarea 
                         value="Aspiring HR professional, passionate about people, learning, and workplace impact. Exploring the future of HR one course at a time"
                         className='border-[1px] rounded-[10px] px-[16px] py-[13px] w-[100%] resize-none text-[24px]'/>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default PersonalDetails;