// Assets
import HelpGuy from '../../../assets/images/help-guy.png';
import SearchIcon from '../../../assets/images/icons/Search.png';

// Componenets
import FaqsCard from '../../../components/faqs-card/FaqsCard';

// Data
import FAQsData from '../../../static-data/FAQSData';

const Help = () => {

    return (
        <div className={`bg-[#fefefe] h-screen z-[1000] px-[80px] absolute top-0 left-[0] right-[0] pt-[30px]`}>
            <div className='flex flex-col gap-[24px] bg-[#fff]'>

                <div className='flex gap-[10px]'>
                    <img src={HelpGuy} />
                    <div>
                        <h3 className='font-[500] text-[20px]'>Hello, John</h3>
                        <p>I'm here to help you</p>
                    </div>
                </div>

                <div className="flex gap-[8px] border-[1px] border-[#999999] px-[16px] py-[12px] rounded-[100px] w-[100%]">
                    <img src={SearchIcon} alt="search icon" />
                    <input type='search' placeholder="search here" className="text-[#99999] border-none outline-none" />
                </div>

                <div className='flex flex-col gap-[24px] w-[1500px] mb-[24px]'>
                    <h3>Most asked questions</h3>
                    <div className='w-[1500px] overflow-x-scroll  flex flex-nowrap gap-[24px]'>

                        <div className='bg-primary-green w-[260px]  px-[10px] py-[10px] rounded-[10px]'>
                            <h3 className='text-[#fff]'>Can I access my courses offline?</h3>
                        </div>

                        <div className='bg-primary-green w-[260px]  px-[10px] py-[10px] rounded-[10px]'>
                            <h3 className='text-[#fff]'>Can I access my courses offline?</h3>
                        </div>

                        <div className='bg-primary-green w-[260px]  px-[10px] py-[10px] rounded-[10px]'>
                            <h3 className='text-[#fff]'>Can I access my courses offline?</h3>
                        </div>

                        <div className='bg-primary-green w-[260px]  px-[10px] py-[10px] rounded-[10px]'>
                            <h3 className='text-[#fff]'>Can I access my courses offline?</h3>
                        </div>

                        <div className='bg-primary-green w-[260px]  px-[10px] py-[10px] rounded-[10px]'>
                            <h3 className='text-[#fff]'>Can I access my courses offline?</h3>
                        </div>

                        <div className='bg-primary-green w-[260px]  px-[10px] py-[10px] rounded-[10px]'>
                            <h3 className='text-[#fff]'>Can I access my courses offline?</h3>
                        </div>
                        

                     </div>
                </div>

                <div className='flex flex-col gap-[24px] w-[1500px]'>
                    <h3>FAQs</h3>

                    <div className='flex gap-[10px] flex-wrap'>
                        {
                            FAQsData.map(data => <FaqsCard key={data.id} heading={data.heading} body={data.body}/>)
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Help;