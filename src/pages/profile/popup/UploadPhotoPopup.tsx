// React Hooks
import { useState } from 'react';

// Assets
import CloseIcon from '../../../assets/images/Close.png';
import UploadCloud from '../../../assets/images/upload-cloud.png';
import EmptyImage from '../../../assets/images/empty-image.png';

type UploadPhotoPrps = {
    setShowUploadPhoto: () => void
}


const UploadPhotoPopup = ({ setShowUploadPhoto }: UploadPhotoPrps) => {

    const [inputFile, setInputFile] = useState<string>("");

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setInputFile(reader.result as string); // base64 string
            };
            reader.readAsDataURL(file);
        } else {
            setInputFile(""); // reset if not an image
        }
    };


    const withImage = <div className="bg-[#fff] h-[1000px] w-screen absolute top-[-100px]  left-0 flex flex-col gap-[55px] items-center justify-center">
        <div className='flex-col gap-[55px] items-cente justify-center px-[350px] py-[100px] border-[#000] border rounded-[10px] border-dashed'>
            <img src={inputFile || EmptyImage} className='rounded-[50%] w-[300px] h-[300px] mb-[55px]' />
            <button className='bg-primary-green text-[#fff] px-[40px] py-[10px] rounded-[10px] cursor-pointer w-[300px]' onClick={setShowUploadPhoto}>Upload</button>
        </div>
    </div>





    return (

        <div className="shadow-2xl backdrop-blur-xs h-screen w-screen absolute top-[-100px]  left-0 flex items-center justify-center">
            <div className='bg-[#fff] p-[24px] w-[500px] rounded-[20px]'>

                <div className='flex justify-end mb-[24px]'>
                    <img src={CloseIcon} alt='close icon' onClick={setShowUploadPhoto} className='cursor-pointer' />
                </div>
                <div className='bg-[#f2f5fb] py-[23px] flex flex-col items-center justify-center gap-[24px] rounded-[12px]'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={UploadCloud} />
                        <h3 className='text-[#000] font-[600]'>Upload cover photo</h3>
                        <p className='text-[#999999]'>Select from files or document to upload picture</p>
                    </div>
                    
                    <label htmlFor='photo_input' className='bg-primary-green text-[#fff] px-[40px] py-[4px] rounded-[10px] cursor-pointer'>Browse file</label>
                    <input id='photo_input' type='file' className='none' onChange={e => onFileChange(e)} />
                </div>
                <div>{inputFile as string}</div>
            </div>

            {inputFile ? withImage : ""}

        </div>



    )
}

export default UploadPhotoPopup;