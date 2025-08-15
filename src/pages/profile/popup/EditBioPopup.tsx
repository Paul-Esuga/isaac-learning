import CloseIcon from '../../../assets/images/Close.png';

type EditBioProps = {
    setShowEditBio: () => void
}

const EditBioPopup = ({ setShowEditBio }: EditBioProps ) => {
    return (
        <div className="shadow-2xl backdrop-blur-xs h-screen w-screen absolute top-[-100px]  left-0 flex items-center justify-center">

            <div className='bg-[#fff] p-[24px] w-[500px] rounded-[20px]'>

                <div className='flex items-center justify-between mb-[24px]'>
                    <h1 className='text-[#414d58] text-[20px] font-[700]'>Edit bio</h1>
                    <img src={CloseIcon} alt='close icon' onClick={setShowEditBio} className='cursor-pointer'/>
                </div>

                <div className=''>
                    <textarea
                        value="Aspiring HR professional, passionate about people, learning, and workplace impact. Exploring the future of HR one course at a time"
                        className='border-[1px] rounded-[10px] px-[16px] py-[13px] w-[100%] h-[120px] resize-none text-[15px] text-[#1a1a1a] font-[400]' />
                </div>

            </div>

        </div>
    )
}

export default EditBioPopup;