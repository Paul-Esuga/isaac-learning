// // // React Hooks
// // import { useState } from 'react';

// // // Assets
// // import CloseIcon from '../../../assets/images/Close.png';
// // import UploadCloud from '../../../assets/images/upload-cloud.png';
// // import EmptyImage from '../../../assets/images/empty-image.png';

// // type UploadPhotoPrps = {
// //     setShowUploadPhoto: () => void
// // }


// // const UploadPhotoPopup = ({ setShowUploadPhoto }: UploadPhotoPrps) => {

// //     const [inputFile, setInputFile] = useState<string>("");

// //     const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //         const file = e.target.files?.[0];
// //         if (file && file.type.startsWith('image/')) {
// //             const reader = new FileReader();
// //             reader.onloadend = () => {
// //                 setInputFile(reader.result as string); // base64 string
// //             };
// //             reader.readAsDataURL(file);
// //         } else {
// //             setInputFile(""); // reset if not an image
// //         }
// //     };


// //     const withImage = <div className="bg-[#fff] h-[1000px] w-screen absolute top-[-100px]  left-0 flex flex-col gap-[55px] items-center justify-center">
// //         <div className='flex-col gap-[55px] items-cente justify-center px-[350px] py-[100px] border-[#000] border rounded-[10px] border-dashed'>
// //             <img src={inputFile || EmptyImage} className='rounded-[50%] w-[300px] h-[300px] mb-[55px]' />
// //             <button className='bg-primary-green text-[#fff] px-[40px] py-[10px] rounded-[10px] cursor-pointer w-[300px]' onClick={setShowUploadPhoto}>Upload</button>
// //         </div>
// //     </div>





// //     return (

// //         <div className="shadow-2xl backdrop-blur-xs h-screen w-screen absolute top-[-100px]  left-0 flex items-center justify-center">
// //             <div className='bg-[#fff] p-[24px] w-[500px] rounded-[20px]'>

// //                 <div className='flex justify-end mb-[24px]'>
// //                     <img src={CloseIcon} alt='close icon' onClick={setShowUploadPhoto} className='cursor-pointer' />
// //                 </div>
// //                 <div className='bg-[#f2f5fb] py-[23px] flex flex-col items-center justify-center gap-[24px] rounded-[12px]'>
// //                     <div className='flex flex-col items-center justify-center'>
// //                         <img src={UploadCloud} />
// //                         <h3 className='text-[#000] font-[600]'>Upload cover photo</h3>
// //                         <p className='text-[#999999]'>Select from files or document to upload picture</p>
// //                     </div>
                    
// //                     <label htmlFor='photo_input' className='bg-primary-green text-[#fff] px-[40px] py-[4px] rounded-[10px] cursor-pointer'>Browse file</label>
// //                     <input id='photo_input' type='file' className='none' onChange={e => onFileChange(e)} />
// //                 </div>
// //                 <div>{inputFile as string}</div>
// //             </div>

// //             {inputFile ? withImage : ""}

// //         </div>



// //     )
// // }

// // export default UploadPhotoPopup;
// // React Hooks
// import { useState } from 'react';
// import { useUser } from '@clerk/clerk-react'; // 1. Import useUser

// // Assets
// import CloseIcon from '../../../assets/images/Close.png';
// import UploadCloud from '../../../assets/images/upload-cloud.png';
// import EmptyImage from '../../../assets/images/empty-image.png';

// type UploadPhotoPrps = {
//     setShowUploadPhoto: () => void
// }

// const UploadPhotoPopup = ({ setShowUploadPhoto }: UploadPhotoPrps) => {
//     // 2. Access the user object and a loading state
//     const { user } = useUser();
//     const [isUploading, setIsUploading] = useState(false);
    
//     // We keep these for the UI preview
//     const [previewUrl, setPreviewUrl] = useState<string>("");
//     const [selectedFile, setSelectedFile] = useState<File | null>(null);

//     const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file && file.type.startsWith('image/')) {
//             setSelectedFile(file); // Store the actual file for Clerk
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setPreviewUrl(reader.result as string); // Store preview string
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     // 3. The function that actually talks to Clerk
//     const handleUploadToClerk = async () => {
//         if (!selectedFile || !user) return;

//         try {
//             setIsUploading(true);
//             await user.setProfileImage({
//                 file: selectedFile,
//             });
//             setShowUploadPhoto(); // Close popup on success
//         } catch (err) {
//             console.error("Error uploading to Clerk:", err);
//             alert("Failed to upload image. Please try again.");
//         } finally {
//             setIsUploading(false);
//         }
//     };

//     const withImage = (
//         <div className="bg-[#fff] h-screen w-screen absolute top-0 left-0 flex flex-col items-center justify-center z-50">
//             <div className='flex flex-col items-center justify-center px-10 py-10 border-[#000] border rounded-[10px] border-dashed'>
//                 <img 
//                     src={previewUrl || EmptyImage} 
//                     className='rounded-full w-[300px] h-[300px] mb-10 object-cover' 
//                     alt="Preview"
//                 />
//                 <div className='flex gap-4'>
//                     <button 
//                         className='bg-gray-200 text-black px-10 py-2 rounded-lg cursor-pointer'
//                         onClick={() => setPreviewUrl("")}
//                         disabled={isUploading}
//                     >
//                         Cancel
//                     </button>
//                     <button 
//                         className='bg-primary-green text-white px-10 py-2 rounded-lg cursor-pointer min-w-[150px]'
//                         onClick={handleUploadToClerk} // Trigger Clerk Upload
//                         disabled={isUploading}
//                     >
//                         {isUploading ? "Uploading..." : "Save Photo"}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );

//     return (
//         <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm flex items-center justify-center">
//             <div className='bg-[#fff] p-6 w-[500px] rounded-[20px] relative'>
//                 <div className='flex justify-end mb-6'>
//                     <img 
//                         src={CloseIcon} 
//                         alt='close icon' 
//                         onClick={setShowUploadPhoto} 
//                         className='cursor-pointer' 
//                     />
//                 </div>
                
//                 <div className='bg-[#f2f5fb] py-8 flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-dashed border-gray-200'>
//                     <div className='flex flex-col items-center justify-center text-center px-4'>
//                         <img src={UploadCloud} alt="Upload" className="mb-2"/>
//                         <h3 className='text-[#000] font-semibold'>Upload profile photo</h3>
//                         <p className='text-[#999999] text-sm'>Select a file from your computer</p>
//                     </div>
                    
//                     <label htmlFor='photo_input' className='bg-primary-green text-white px-10 py-2 rounded-lg cursor-pointer hover:bg-opacity-90 transition-all'>
//                         Browse file
//                     </label>
//                     <input id='photo_input' type='file' className='hidden' accept="image/*" onChange={onFileChange} />
//                 </div>
//             </div>

//             {previewUrl ? withImage : null}
//         </div>
//     );
// };

// export default UploadPhotoPopup;

import { useState, useCallback } from 'react';
import { useUser } from '@clerk/clerk-react';
import Cropper, { type Area, type Point } from 'react-easy-crop'; // Imported Point and Area types

// Assets
import CloseIcon from '../../../assets/images/Close.png';
import UploadCloud from '../../../assets/images/upload-cloud.png';

type UploadPhotoPrps = {
    setShowUploadPhoto: () => void
}

const UploadPhotoPopup = ({ setShowUploadPhoto }: UploadPhotoPrps) => {
    const { user } = useUser();
    const [isUploading, setIsUploading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string>("");
    
    // 1. Properly typed Cropper State
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // 2. Fixed "any" errors by using the Area type
    const onCropComplete = useCallback((_area: Area, pixels: Area) => {
        setCroppedAreaPixels(pixels);
    }, []);

    // 3. Added return type Promise<File> for better TS support
    const getCroppedFile = async (): Promise<File> => {
        if (!previewUrl || !croppedAreaPixels) {
            throw new Error("Missing required data for cropping");
        }

        const image = new Image();
        image.src = previewUrl;
        await new Promise((res) => (image.onload = res));

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;

        ctx?.drawImage(
            image,
            croppedAreaPixels.x, 
            croppedAreaPixels.y,
            croppedAreaPixels.width, 
            croppedAreaPixels.height,
            0, 0,
            croppedAreaPixels.width, 
            croppedAreaPixels.height
        );

        return new Promise<File>((resolve, reject) => {
            canvas.toBlob((blob) => {
                if (blob) {
                    resolve(new File([blob], "profile.jpg", { type: "image/jpeg" }));
                } else {
                    reject(new Error("Canvas to Blob conversion failed"));
                }
            }, "image/jpeg");
        });
    };

    const handleUploadToClerk = async () => {
        if (!previewUrl || !user || !croppedAreaPixels) return;

        try {
            setIsUploading(true);
            const croppedFile = await getCroppedFile();
            await user.setProfileImage({ file: croppedFile });
            setShowUploadPhoto();
        } catch (err) {
            console.error("Upload Error:", err);
            alert("Upload failed. Please try again.");
        } finally {
            setIsUploading(false);
        }
    };

    const withImage = (
        <div className="bg-[#fff] h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-center z-50 p-4">
            <div className='bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center w-full max-w-[500px]'>
                <h3 className="font-bold mb-4 text-lg text-black">Crop your photo</h3>
                
                <div className='relative w-full aspect-square mb-6 bg-gray-100 rounded-lg overflow-hidden'>
                    <Cropper
                        image={previewUrl}
                        crop={crop}
                        zoom={zoom}
                        aspect={1} 
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    />
                </div>

                <div className="w-full mb-6">
                    <p className="text-xs text-gray-500 mb-1">Zoom</p>
                    <input
                        type="range"
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        onChange={(e) => setZoom(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-green"
                    />
                </div>

                <div className='flex gap-4 w-full'>
                    <button 
                        className='flex-1 bg-gray-100 text-black py-3 rounded-xl font-semibold'
                        onClick={() => setPreviewUrl("")}
                        disabled={isUploading}
                    >
                        Change
                    </button>
                    <button 
                        className='flex-1 bg-primary-green text-white py-3 rounded-xl font-semibold disabled:opacity-50'
                        onClick={handleUploadToClerk}
                        disabled={isUploading}
                    >
                        {isUploading ? "Processing..." : "Save Photo"}
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <div className='bg-[#fff] p-6 w-[90%] max-w-[500px] rounded-[20px] relative'>
                <div className='flex justify-end mb-6'>
                    <img 
                        src={CloseIcon} 
                        alt='close icon' 
                        onClick={setShowUploadPhoto} 
                        className='cursor-pointer w-6 h-6' 
                    />
                </div>
                
                <div className='bg-[#f2f5fb] py-12 flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-dashed border-gray-200'>
                    <img src={UploadCloud} alt="Upload" />
                    <div className='text-center px-4'>
                        <h3 className='text-[#000] font-semibold'>Upload profile photo</h3>
                        <p className='text-[#999999] text-sm'>Click browse to select a picture</p>
                    </div>
                    
                    <label htmlFor='photo_input' className='bg-primary-green text-white px-10 py-2 rounded-lg cursor-pointer font-medium transition-transform active:scale-95'>
                        Browse file
                    </label>
                    <input id='photo_input' type='file' className='hidden' accept="image/*" onChange={onFileChange} />
                </div>
            </div>

            {previewUrl ? withImage : null}
        </div>
    );
};

export default UploadPhotoPopup;